<script setup>
import { computed } from 'vue'
import TickCard from '@/components/TickCard.vue'
import PaginatePage from '@/components/PaginatePage.vue'
import { watch, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTicketStore } from '@/stores/ticket'
const route = useRoute()
const router = useRouter()
const tickStore = useTicketStore()
const isLoading = ref(false)
const pageAndType = computed(() => ({
  page: route.params.page,
  type: route.params.type
}))

//  route.params 多層物件，改監聽 處理好的 computed
watch(
  pageAndType,
  async ({ page, type }) => {
    isLoading.value = true
    await tickStore.fetchPageInfo(page, type)
    isLoading.value = false
  },
  { immediate: true }
)
onMounted(async () => {
  isLoading.value = true
  await tickStore.fetchPageInfo(route.params.page, route.params.type)
  isLoading.value = false
})
const handlePages = async (pageNum) => {
  isLoading.value = true
  await tickStore.fetchPageInfo(pageNum)
  isLoading.value = false
  router.push({ name: 'Active', params: { pagenum: pageNum } })
}
</script>
<template>
  <!-- <main class="container flex h-full flex-col"> -->
  <LoadingComponent :active="isLoading" />
  <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
    <TickCard v-for="item in tickStore.getTicketData" :key="item.id" :cardItem="item" />
  </ul>
  <div class="mt-auto flex py-6">
    <PaginatePage :pageInfo="tickStore.getTicketPage" @sendPageNum="handlePages"></PaginatePage>
  </div>
  <!-- </main> -->
</template>
<style scoped></style>
