<script setup>
import ActiveTitle from '@/components/ActiveTitle.vue'
import TickCard from '@/components/TickCard.vue'
import PaginatePage from '@/components/PaginatePage.vue'
import FilterButtin from '@/components/FilterButton.vue'
import { watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTicketStore } from '@/stores/ticket'
const router = useRouter()
const route = useRoute()
const tickStore = useTicketStore()

const handlePages = async (pageNum) => {
  await tickStore.fetchPageInfo(pageNum)
  router.push({ name: 'Active', params: { pagenum: pageNum } })
}
watch(
  () => route.params.pagenum,
  async (paramsNum) => {
    await tickStore.fetchPageInfo(paramsNum)
  },
  { immediate: true }
)
onMounted(async () => {
  await tickStore.fetchPageInfo(route.params.pagenum)
})
</script>
<template>
  <div class="flex h-full flex-col">
    <ActiveTitle />
    <FilterButtin />
    <ul class="container grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <TickCard v-for="item in tickStore.getTicketData" :key="item.id" :cardItem="item" />
    </ul>
    <div class="container mt-auto flex">
      <PaginatePage :pageInfo="tickStore.getTicketPage" @sendPageNum="handlePages"></PaginatePage>
    </div>
  </div>
</template>
<style scoped></style>
