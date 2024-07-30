<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'
import ActiveTitle from '@/components/ActiveTitle.vue'
import FilterButton from '@/components/FilterButton.vue'
const route = useRoute()
const productStore = useProductStore()
const routeType = computed(() => route.params.type)

const getFilterBtnData = computed(() => {
  if (!productStore.getProductAllData || productStore.getProductAllData.length === 0) {
    return []
  }
  return [...new Set(productStore.getProductAllData.map((item) => item.category))]
})
</script>
<template>
  <!-- <main class="container"> -->
  <ActiveTitle :rightTitle="routeType" />
  <FilterButton :getFilterData="getFilterBtnData" />
  <router-view></router-view>
  <!-- </main> -->
</template>
<style scoped></style>
