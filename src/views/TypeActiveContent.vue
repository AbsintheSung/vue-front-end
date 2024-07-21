<script setup>
import { computed } from 'vue'
import TickCard from '@/components/TickCard.vue'
import PaginatePage from '@/components/PaginatePage.vue'
import { watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTicketStore } from '@/stores/ticket'
const route = useRoute()
const router = useRouter()
const tickStore = useTicketStore()

const pageAndType = computed(() => ({
  page: route.params.page,
  type: route.params.type
}))

//  route.params 多層物件，改監聽 處理好的 computed
watch(
  pageAndType,
  async ({ page, type }) => {
    await tickStore.fetchPageInfo(page, type)
  },
  { immediate: true }
)
onMounted(async () => {
  await tickStore.fetchPageInfo(route.params.page, route.params.type)
})
const handlePages = async (pageNum) => {
  await tickStore.fetchPageInfo(pageNum)
  router.push({ name: 'Active', params: { pagenum: pageNum } })
}
</script>
<template>
  <!-- <main class="container flex h-full flex-col"> -->
  <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
    <TickCard v-for="item in tickStore.getTicketData" :key="item.id" :cardItem="item" />
  </ul>
  <div class="mt-auto flex py-6">
    <PaginatePage :pageInfo="tickStore.getTicketPage" @sendPageNum="handlePages"></PaginatePage>
  </div>
  <!-- </main> -->
</template>
<style scoped></style>
