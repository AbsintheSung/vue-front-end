<script setup>
// import axios from 'axios'
import { ref, onMounted } from 'vue'
import CheckTable from '@/components/checkout/CheckTable.vue'
import CheckForm from '@/components/checkout/CheckForm.vue'
// const baseURL = import.meta.env.VITE_APP_API_URL
// const apiName = import.meta.env.VITE_APP_API_NAME
// const cartData = ref([])
// const priceData = ref({})
const isLoading = ref(false)
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
// const getCartsData = async () => {
//   try {
//     isLoading.value = true
//     const response = await axios(`${baseURL}/v2/api/${apiName}/cart`)
//     const { final_total: finalTotal, total } = response.data.data
//     priceData.value = { final_total: finalTotal, total }
//     cartData.value = response.data.data.carts
//   } catch (error) {
//     console.log(error)
//   } finally {
//     isLoading.value = false
//   }
// }
onMounted(async () => {
  // getCartsData()
  isLoading.value = true
  await cartStore.fetchCartData()
  isLoading.value = false
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <CheckTable :cartData="cartStore.getCartData" :priceData="cartStore.getPriceData" />
  <CheckForm />
</template>
<style scoped></style>
