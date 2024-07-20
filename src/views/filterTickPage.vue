<script setup>
// import { ref, computed } from 'vue'
import TickCard from '@/components/TickCard.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params)
const routeType = route.params.pagenum
</script>
<template>
  <p>當前路由: {{ routeType }}</p>
  <!-- <ul class="container grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
    <TickCard v-for="tickItem in filteredProducts" :key="tickItem" />
  </ul> -->
  <!-- 頁碼部分 -->
</template>
<style scoped></style>
