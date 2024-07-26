<script setup>
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import imgIcon from '@/assets/images/sparkler.png'
import OrderTable from '@/components/order/OrderTable.vue'
import OrderUserInfo from '@/components/order/OrderUserInfo.vue'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const router = useRoute()
const orderId = router.params.orderId
const orderData = ref({})
const isLoading = ref(false)
const getOrderList = computed(() => {
  return orderData.value.products
})
const getUserData = computed(() => {
  return { ...orderData.value.user, is_paid: orderData.value.is_paid }
})
const getPrice = computed(() => {
  if (Object.keys(orderData.value).length === 0) {
    return {}
  } else {
    const totalQty = Object.values(orderData.value.products).reduce((sum, item) => {
      return sum + (item.qty || 0)
    }, 0)
    return { total: orderData.value.total, qty: totalQty }
  }
})
const isOrderPaid = computed(() => orderData.value.is_paid)
const getOneOrder = async () => {
  try {
    isLoading.value = true
    const response = await axios(`${baseURL}/v2/api/${apiName}/order/${orderId}`)
    console.log(response)
    orderData.value = response.data.order
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const creatPay = async () => {
  try {
    isLoading.value = true
    const response = await axios.post(`${baseURL}/v2/api/${apiName}/pay/${orderId}`)
    if (response.status === 200) {
      await getOneOrder()
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getOneOrder()
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <div class="pb-6 pt-8">
    <img class="mx-auto" :src="imgIcon" />
    <h2 class="text-center font-noto text-2xl font-bold">訂單明細</h2>
  </div>
  <OrderTable :orderList="getOrderList" :orderPrice="getPrice" />
  <div class="mx-auto my-6 w-full">
    <OrderUserInfo :userInfo="getUserData" />
    <div class="my-5 flex items-center justify-center">
      <button
        class="w-full bg-black py-2 text-white sm:w-fit sm:px-14"
        @click="creatPay"
        v-if="!isOrderPaid"
      >
        確認付款
      </button>
    </div>
  </div>
</template>
<style scoped></style>
