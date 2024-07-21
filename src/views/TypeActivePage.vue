<script setup>
import { computed } from 'vue'
import { useTicketStore } from '@/stores/ticket'
import FilterButtin from '@/components/FilterButton.vue'
const tickStore = useTicketStore()
const getFilterBtnData = computed(() => {
  if (!tickStore.getTicketAllData || tickStore.getTicketAllData.length === 0) {
    return []
  }
  return [...new Set(tickStore.getTicketAllData.map((item) => item.category))]
})
</script>
<template>
  <!-- <main class="container"> -->
  <FilterButtin :getFilterData="getFilterBtnData" />
  <router-view></router-view>
  <!-- </main> -->
</template>
<style scoped></style>
