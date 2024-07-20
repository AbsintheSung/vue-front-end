<script setup>
import { ref, computed } from 'vue'
import TickCard from '@/components/TickCard.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routeType = computed(() => route.params.type || 'all')
// 所有商品數據
const allProducts = ref([1, 2, 3, 4, 5])

// 根據 routeType 篩選商品
const filteredProducts = computed(() => {
  if (routeType.value === 'all') {
    return allProducts.value
  } else {
    // return allProducts.value.filter((product) => product.type === routeType.value)
    return [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
})
</script>
<template>
  <p>當前路由: {{ routeType }}</p>
  <ul class="container grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
    <TickCard v-for="tickItem in filteredProducts" :key="tickItem" />
  </ul>
  <!-- 頁碼部分 -->
</template>
<style scoped></style>
