<script setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import OrderListTable from '@/components/orderList/OrderListTable.vue'
import PaginatePage from '@/components/PaginatePage.vue'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const route = useRoute()
const router = useRouter()
const page = route.params.pageNum
const pageInfo = ref({})
const isLoading = ref(false)
const isPageInfoEmpty = computed(() => Object.keys(pageInfo.value).length === 0) //判斷是否為空物件
const orderList = ref([])
const formatOrderList = computed(() => {
  if (orderList.value.length === 0) {
    return []
  } else {
    return orderList.value.map((item) => ({
      ...item,
      create_at: formatTimestamp(item.create_at),
      paid_date: item.paid_date ? formatTimestamp(item.paid_date) : item.paid_date
    }))
  }
})
const getOrderList = async (page) => {
  try {
    isLoading.value = true
    const response = await axios(`${baseURL}/v2/api/${apiName}/orders`, {
      params: { page: page }
    })
    orderList.value = response.data.orders
    pageInfo.value = response.data.pagination
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
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

const handlePages = async (pageNum) => {
  await getOrderList(pageNum)
  router.push({ name: 'OrderList', params: { pageNum: pageNum } })
}
watch(
  () => route.params.pageNum,
  async (paramsNum) => {
    await getOrderList(paramsNum)
  },
  { immediate: true }
)
onMounted(() => {
  getOrderList(page)
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <h2 class="pb-3 pt-1 text-center font-noto text-4xl">訂單明細清單</h2>
  <OrderListTable :orderItem="formatOrderList" />

  <div class="mt-auto flex py-6" v-if="!isPageInfoEmpty">
    <PaginatePage :pageInfo="pageInfo" @sendPageNum="handlePages"></PaginatePage>
  </div>
</template>
