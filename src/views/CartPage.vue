<script setup>
import axios from 'axios'
import CartDetailTable from '@/components/cart/CartDetailTable.vue'
import CartOrderTable from '@/components/cart/CartOrderTable.vue'
import { ref, onMounted } from 'vue'
import DelDialogModal from '@/components/DelDialogModal.vue'
import { useCartStore } from '@/stores/cart'
import 'element-plus/es/components/message/style/css' //需手動導入message樣式，否則message會沒有效果
import { ElMessage } from 'element-plus'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
// const cartData = ref([])
// const priceData = ref({})
const isLoading = ref(false)
const delProductId = ref('') //存放要刪除單品的id
const delProductTitle = ref('') //存放要刪除單品的title
const modalShow = ref(false) //用來開啟 dialog的設定
const cartStore = useCartStore()
// const cartDataComputed = computed(() => cartData.value)
const getCartsData = async () => {
  isLoading.value = true
  await cartStore.fetchCartData()
  isLoading.value = false
  // try {
  //   isLoading.value = true
  //   const response = await axios(`${baseURL}/v2/api/${apiName}/cart`)
  //   const { final_total: finalTotal, total } = response.data.data
  //   priceData.value = { final_total: finalTotal, total }
  //   cartData.value = response.data.data.carts
  // } catch (error) {
  //   console.log(error)
  // } finally {
  //   isLoading.value = false
  // }
}
const handleModifyQty = async (product) => {
  try {
    isLoading.value = true
    const response = await axios.put(
      `${baseURL}/v2/api/${apiName}/cart/${product.data.product_id}`,
      product
    )
    if (response.status === 200) {
      await getCartsData()
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const handleDeletStatus = async (productId, productTitle) => {
  delProductId.value = productId
  delProductTitle.value = productTitle
  modalShow.value = true
}
const fetchDeletProduct = async () => {
  delProductId.value === 'all' ? await delAllProduct() : await delOneProduct()
  await cartStore.fetchCartData()
}

const delOneProduct = async () => {
  try {
    isLoading.value = true
    const response = await axios.delete(`${baseURL}/v2/api/${apiName}/cart/${delProductId.value}`)
    if (response.status === 200) {
      await getCartsData()
      successMes(response.data.message)
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
    modalShow.value = false
    delProductId.value = ''
    delProductTitle.value = ''
  }
}
const delAllProduct = async () => {
  try {
    isLoading.value = true
    const response = await axios.delete(`${baseURL}/v2/api/${apiName}/carts`)
    if (response.status === 200) {
      await getCartsData()
      successMes(response.data.message)
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
    modalShow.value = false
    delProductId.value = ''
    delProductTitle.value = ''
  }
}
const closrModal = () => {
  modalShow.value = false
  delProductId.value = ''
  delProductTitle.value = ''
}
const successMes = (mes = '刪除成功') => {
  ElMessage({
    message: mes,
    type: 'success'
  })
}
onMounted(async () => {
  isLoading.value = true
  await getCartsData()
  isLoading.value = false
})
</script>
<template>
  <DelDialogModal
    :show="modalShow"
    :titleText="delProductTitle"
    :delfunction="fetchDeletProduct"
    @closeModal="closrModal"
  />
  <LoadingComponent :active="isLoading" />
  <div class="flex flex-wrap gap-3 lg:flex-nowrap">
    <div class="relative basis-full shadow-md sm:rounded-lg lg:basis-2/3">
      <CartDetailTable
        :cartData="cartStore.getCartData"
        @sendQuent="handleModifyQty"
        @sendDeleId="handleDeletStatus"
      />
    </div>

    <div class="relative basis-full overflow-x-auto shadow-md sm:rounded-lg lg:basis-1/3">
      <CartOrderTable />
    </div>
  </div>
</template>
<style scoped></style>
