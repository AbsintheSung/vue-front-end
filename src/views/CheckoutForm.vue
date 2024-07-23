<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import CheckTable from '@/components/checkout/CheckTable.vue'
import CheckForm from '@/components/checkout/CheckForm.vue'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const cartData = ref([])
const priceData = ref({})
const getCartsData = async () => {
  const response = await axios(`${baseURL}/v2/api/${apiName}/cart`)
  const { final_total: finalTotal, total } = response.data.data
  priceData.value = { final_total: finalTotal, total }
  cartData.value = response.data.data.carts
}
onMounted(() => {
  getCartsData()
})
</script>
<template>
  <CheckTable :cartData="cartData" :priceData="priceData" />
  <CheckForm />
</template>
<style scoped></style>
