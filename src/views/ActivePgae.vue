<script setup>
import ActiveTitle from '@/components/ActiveTitle.vue'
import { useRoute } from 'vue-router'
import TickCard from '@/components/TickCard.vue'
import { useTicketStore } from '@/stores/ticket'
const route = useRoute()
const tickStore = useTicketStore()
</script>
<template>
  <ActiveTitle />
  <ul class="container grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
    <TickCard v-for="item in tickStore.getTicketData" :key="item.id" :cardItem="item" />
  </ul>
</template>
<style scoped></style>
