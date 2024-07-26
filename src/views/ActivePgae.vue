<script setup>
import ActiveTitle from '@/components/ActiveTitle.vue'
import TickCard from '@/components/TickCard.vue'
import PaginatePage from '@/components/PaginatePage.vue'
import FilterButtin from '@/components/FilterButton.vue'
import { watch, onMounted, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTicketStore } from '@/stores/ticket'
// import { showLoading, hideLoading } from '@/plugins/loading-overlay'
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()
const tickStore = useTicketStore()
const getFilterBtnData = computed(() => {
  if (!tickStore.getTicketAllData || tickStore.getTicketAllData.length === 0) {
    return []
  }
  return [...new Set(tickStore.getTicketAllData.map((item) => item.category))]
})
const handlePages = async (pageNum) => {
  isLoading.value = true
  await tickStore.fetchPageInfo(pageNum)
  isLoading.value = false
  router.push({ name: 'Active', params: { pagenum: pageNum } })
}
watch(
  () => route.params.pagenum,
  async (paramsNum) => {
    isLoading.value = true
    await tickStore.fetchPageInfo(paramsNum)
    isLoading.value = false
  },
  { immediate: true }
)
onMounted(async () => {
  isLoading.value = true
  await tickStore.fetchPageInfo(route.params.pagenum)
  isLoading.value = false
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <!-- <main class="container flex h-full flex-col md:min-h-screen"> -->
  <ActiveTitle :rightTitle="'所有活動'" />
  <FilterButtin :getFilterData="getFilterBtnData" />
  <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
    <TickCard v-for="item in tickStore.getTicketData" :key="item.id" :cardItem="item" />
  </ul>
  <div class="mt-auto flex py-6">
    <PaginatePage :pageInfo="tickStore.getTicketPage" @sendPageNum="handlePages"></PaginatePage>
  </div>
  <!-- </main> -->
</template>
<style scoped></style>
