<script setup>
import { computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import PaginatePage from '@/components/PaginatePage.vue'
import { watch, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'
const route = useRoute()
const router = useRouter()
const productStore = useProductStore()
const isLoading = ref(false)
const pageAndType = computed(() => ({
  page: route.params.page,
  type: route.params.type
}))
const hasProducts = computed(() => {
  return productStore.getProductData && productStore.getProductData.length !== 0
})
//  route.params 多層物件，改監聽 處理好的 computed
watch(
  pageAndType,
  async ({ page, type }) => {
    isLoading.value = true
    await productStore.fetchPageInfo(page, type)
    isLoading.value = false
  },
  { immediate: true }
)
onMounted(async () => {
  isLoading.value = true
  await productStore.fetchPageInfo(route.params.page, route.params.type)
  isLoading.value = false
})
const handlePages = async (pageNum) => {
  isLoading.value = true
  await productStore.fetchPageInfo(pageNum)
  isLoading.value = false
  router.push({ name: 'FilterProducts', params: { pagenum: pageNum } })
}
</script>
<template>
  <!-- <main class="container flex h-full flex-col"> -->
  <LoadingComponent :active="isLoading" />
  <template v-if="hasProducts">
    <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <ProductCard v-for="item in productStore.getProductData" :key="item.id" :cardItem="item" />
    </ul>
    <div class="mt-auto flex py-6">
      <PaginatePage
        :pageInfo="productStore.getProductPage"
        @sendPageNum="handlePages"
      ></PaginatePage>
    </div>
  </template>
  <template v-else>
    <div>
      <h2>目前無相關產品</h2>
    </div>
  </template>

  <!-- </main> -->
</template>
<style scoped></style>
