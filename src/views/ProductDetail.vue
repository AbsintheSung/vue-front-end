<script setup>
import axios from 'axios'
import ActiveTitle from '@/components/ActiveTitle.vue'
import CardSwiper from '@/components/CardSwiper.vue'
import { useProductStore } from '@/stores/product'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import 'element-plus/es/components/message/style/css' //需手動導入message樣式，否則message會沒有效果
import { ElMessage } from 'element-plus'

const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()
const productId = route.params.productId // 獲取路由的id ( 發送獲取資料api需要此id資訊 )
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const isLoading = ref(false)
const productData = ref({}) // 產品資料，一開始為空，從遠端獲取資料後會存到此處
const quenity = ref(1) // 數量資料
const getOriginPrice = computed(() => productData.value.origin_price * quenity.value)
const getPrice = computed(() => productData.value.price * quenity.value)
const imgUrlData = computed(() => {
  if (Array.isArray(productData.value.imagesUrl)) {
    return [productData.value.imageUrl, ...productData.value.imagesUrl]
  } else {
    return [productData.value.imageUrl]
  }
})
const productStore = useProductStore()
//遠端獲取單一產品資料
const getProductInfo = async (productId) => {
  try {
    isLoading.value = true
    const response = await axios(`${baseURL}/v2/api/${apiName}/product/${productId}`)
    if (response.status === 200) {
      productData.value = response.data.product
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

//增加單一數量
const addQuantity = () => {
  quenity.value++
}

//減少單一數量
const reduceQuantity = () => {
  quenity.value === 1 ? (quenity.value = 1) : quenity.value--
}

// 使用 @blur 失去焦點才執行 ( 防止使用者亂輸入 )
// 空格 0 或 - 開頭，非數字 都會強制轉成1
const userInput = (event) => {
  const inputValue = event.target.value
  quenity.value = inputValue.replace(/\D/g, '')
  if (quenity.value === '' || /^0+\d*$/.test(quenity.value) || /^-/.test(inputValue)) {
    quenity.value = 1
  }
}
//點擊購買發送 購買api資訊
const handleProductInfo = async () => {
  const dataInfo = {
    data: {
      product_id: productId,
      qty: quenity.value
    }
  }
  isLoading.value = true
  const message = await cartStore.fetchAddCart(dataInfo)
  isLoading.value = false
  successMes(message)
  router.push('/products')
}
onMounted(async () => {
  isLoading.value = true
  await getProductInfo(productId)
  isLoading.value = false
})
watch(
  () => route.params.productId,
  async (newId) => {
    isLoading.value = true
    await getProductInfo(newId)
    isLoading.value = false
  }
)
const successMes = (mes = '添加成功') => {
  ElMessage({
    message: mes,
    type: 'success'
  })
}
</script>
<template>
  <!-- <main class="container"> -->
  <LoadingComponent :active="isLoading" />
  <!-- <section class="grid grid-cols-1 gap-2 md:grid-cols-6 md:gap-6">
    <div class="col-span-1 border-2 border-black p-3 md:col-span-5 md:p-6">
      <img class="h-full max-h-[500px] w-full object-cover" :src="productData.imageUrl" />
    </div>
    <div class="flex gap-2 font-yeseva md:flex-col md:gap-6">
      <div class="border-2 border-black px-4 py-6 text-2xl md:px-0 md:py-8">
        <p class="text-center">2023</p>
      </div>
      <div class="flex flex-grow border-2 border-black md:flex-col">
        <div class="flex flex-grow flex-col justify-center text-center text-2xl md:text-4xl">
          <p>MAY</p>
          <p>19</p>
        </div>
        <div class="flex flex-grow flex-col justify-center text-center text-base md:text-2xl">
          <p>12:00</p>
          <p>|</p>
          <p>21:00</p>
        </div>
      </div>
    </div>
  </section> -->
  <ActiveTitle :leftTitle="'Product'" :rightTitle="'購買資訊'" />
  <section class="my-6 font-noto">
    <div class="flex flex-wrap gap-6 md:flex-nowrap">
      <div class="w-full md:w-1/2">
        <el-carousel indicator-position="none">
          <el-carousel-item v-for="item in imgUrlData" :key="item">
            <img :src="item" class="h-full w-full object-contain" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold md:text-4xl">{{ productData.title }}</h2>
        <p class="my-2 font-bold">{{ productData.description }}</p>
        <p class="text-end">
          <!-- <del>NT$ {{ productData.origin_price }}</del> -->
          <del>NT$ {{ getOriginPrice }}</del>
        </p>
        <!-- <p class="text-end text-2xl">NT$ {{ productData.price }}</p> -->
        <p class="text-end text-2xl">NT$ {{ getPrice }}</p>
        <div class="my-4 flex items-center gap-2">
          <div class="flex flex-1 items-center">
            <button class="p-2" @click="reduceQuantity">
              <FontAwesomeIcon :icon="['fas', 'minus']" />
            </button>
            <input
              type="text"
              class="w-full bg-custom-bg-1 py-2 text-center"
              v-model="quenity"
              @blur="userInput"
            />
            <button class="p-2" @click="addQuantity">
              <FontAwesomeIcon :icon="['fas', 'plus']" />
            </button>
          </div>
          <div class="flex-1 flex-grow">
            <button class="w-full bg-black py-2 text-[#FBFF22]" @click="handleProductInfo">
              購買
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="font-noto">
    <p class="border-2 border-black p-4 leading-8 md:p-8">
      {{ productData.content }}
    </p>
  </section>
  <section>
    <h2 class="my-6 font-noto text-3xl font-bold">其餘商品</h2>
    <CardSwiper :allProductData="productStore.getProductAllData" />
  </section>

  <!-- </main> -->
</template>
<style scoped></style>
