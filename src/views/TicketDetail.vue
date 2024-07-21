<script setup>
import axios from 'axios'
import ActiveTitle from '@/components/ActiveTitle.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const tichetId = route.params.ticketId // 獲取路由的id ( 發送獲取資料api需要此id資訊 )
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const ticketData = ref({}) // 門票資料，一開始為空，從遠端獲取資料後會存到此處
const quenity = ref(1) // 數量資料

//遠端獲取單一門票資料
const getTicketInfo = async (tichetId) => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/product/${tichetId}`)
    if (response.status === 200) {
      ticketData.value = response.data.product
      console.log(ticketData.value)
    }
  } catch (error) {
    console.log(error)
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
const handleTickInfo = async () => {
  const dataInfo = {
    data: {
      product_id: tichetId,
      qty: quenity.value
    }
  }
  try {
    const response = await axios.post(`${baseURL}/v2/api/${apiName}/cart`, dataInfo)
    // console.log(response.status, response.data);
    if (response.status === 200) {
      quenity.value = 1
      console.log(response, '顯示彈窗，確認是否繼續購物跳轉product頁面或是購物車明細頁面')
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
  await getTicketInfo(tichetId)
})
</script>
<template>
  <!-- <main class="container"> -->
  <section class="grid grid-cols-1 gap-2 md:grid-cols-6 md:gap-6">
    <div class="col-span-1 border-2 border-black p-3 md:col-span-5 md:p-6">
      <img class="h-full w-full object-cover" :src="ticketData.imageUrl" />
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
  </section>
  <ActiveTitle :leftTitle="'TICKET'" :rightTitle="'購票資訊'" />
  <section class="my-6 font-noto">
    <div class="flex flex-wrap gap-6 md:flex-nowrap">
      <div class="w-full md:w-1/2">
        <p>我是輪播圖片</p>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold md:text-4xl">返老還童-制服聯誼</h2>
        <p class="my-2 font-bold">{{ ticketData.description }}</p>
        <p class="text-end">
          <del>NT$ {{ ticketData.origin_price }}</del>
        </p>
        <p class="text-end text-2xl">NT$ {{ ticketData.price }}</p>
        <div class="my-2 flex items-center gap-2">
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
            <button class="w-full bg-black py-2 text-[#FBFF22]" @click="handleTickInfo">
              購買
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="font-noto">
    <p class="border-2 border-black p-4 leading-8 md:p-8">
      {{ ticketData.content }}
    </p>
  </section>

  <!-- </main> -->
</template>
<style scoped></style>
