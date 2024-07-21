<script setup>
import { computed } from 'vue'
import { useTicketStore } from '@/stores/ticket'
import { useRoute } from 'vue-router'
import ActiveTitle from '@/components/ActiveTitle.vue'
import FilterButtin from '@/components/FilterButton.vue'
const route = useRoute()
const tickStore = useTicketStore()
const routeType = computed(() => route.params.type)

const getFilterBtnData = computed(() => {
  if (!tickStore.getTicketAllData || tickStore.getTicketAllData.length === 0) {
    return []
  }
  return [...new Set(tickStore.getTicketAllData.map((item) => item.category))]
})
</script>
<template>
  <!-- <main class="container"> -->
  <ActiveTitle :rightTitle="routeType" />
  <FilterButtin :getFilterData="getFilterBtnData" />
  <router-view></router-view>
  <!-- </main> -->
</template>
<style scoped></style>
