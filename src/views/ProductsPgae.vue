<script setup>
import ActiveTitle from '@/components/ActiveTitle.vue'
import ProductCard from '@/components/ProductCard.vue'
import PaginatePage from '@/components/PaginatePage.vue'
import FilterButtin from '@/components/FilterButton.vue'
import { watch, onMounted, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()
const productStore = useProductStore()
const getFilterBtnData = computed(() => {
  if (!productStore.getProductAllData || productStore.getProductAllData.length === 0) {
    return []
  }
  return [...new Set(productStore.getProductAllData.map((item) => item.category))]
})
const handlePages = async (pageNum) => {
  isLoading.value = true
  await productStore.fetchPageInfo(pageNum)
  isLoading.value = false
  router.push({ name: 'Products', params: { pagenum: pageNum } })
}
watch(
  () => route.params.pagenum,
  async (paramsNum) => {
    isLoading.value = true
    await productStore.fetchPageInfo(paramsNum)
    isLoading.value = false
  },
  { immediate: true }
)
onMounted(async () => {
  isLoading.value = true
  await productStore.fetchPageInfo(route.params.pagenum)
  isLoading.value = false
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <!-- <main class="container flex h-full flex-col md:min-h-screen"> -->
  <ActiveTitle :rightTitle="'所有商品'" />
  <FilterButtin :getFilterData="getFilterBtnData" />
  <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
    <ProductCard v-for="item in productStore.getProductData" :key="item.id" :cardItem="item" />
  </ul>
  <div class="mt-auto flex py-6">
    <PaginatePage :pageInfo="productStore.getProductPage" @sendPageNum="handlePages"></PaginatePage>
  </div>
  <!-- </main> -->
</template>
<style scoped></style>
