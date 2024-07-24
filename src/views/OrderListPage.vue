<script setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import OrderListTable from '@/components/orderList/OrderListTable.vue'
import PaginatePage from '@/components/PaginatePage.vue'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const route = useRoute()
const router = useRouter()
const page = route.params.pageNum
const pageInfo = ref({})
const orderList = ref([])
const formatOrderList = computed(() => {
  if (orderList.value.length === 0) {
    return []
  } else {
    return orderList.value.map((item) => ({
      ...item,
      create_at: formatTimestamp(item.create_at)
    }))
  }
})
const getOrderList = async (page) => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/orders`, {
      params: { page: page }
    })
    orderList.value = response.data.orders
    pageInfo.value = response.data.pagination
  } catch (error) {
    console.log(error)
  }
}

//時間轉換
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}/${month}/${day}`
}
onMounted(() => {
  getOrderList(page)
})
const fetchOrderDetail = (orderId) => {
  router.push(`/orderpay/${orderId}`)
}
</script>
<template>
  <OrderListTable :orderItem="formatOrderList" @sendOrderId="fetchOrderDetail" />

  <div class="mt-auto flex py-6">
    <PaginatePage></PaginatePage>
  </div>
</template>
