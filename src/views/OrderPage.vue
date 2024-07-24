<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const router = useRoute()
const orderId = router.params.orderId
const getOneOrder = async () => {
  const response = await axios(`${baseURL}/v2/api/${apiName}/order/${orderId}`)
  console.log(response)
}

onMounted(() => {
  getOneOrder()
})
console.log(router.params.orderId)
</script>
<template>
  <div></div>
</template>
<style scoped></style>
