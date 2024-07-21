<script setup>
import LinkCard from '@/components/LinkCard.vue'
import ActiveTitle from '@/components/ActiveTitle.vue'
import TickCard from '@/components/TickCard.vue'
import { useTicketStore } from '@/stores/ticket'
// import { onMounted } from 'vue'
const tickStore = useTicketStore()
// onMounted(() => {
//   tickStore.fetchAllTicketData()
// })
</script>
<template>
  <main class="container">
    <section class="py-6 font-noto">
      <LinkCard />
    </section>
    <ActiveTitle :leftTitle="'RECENT'" :rightTitle="'近期活動'" />
    <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <TickCard v-for="item in tickStore.getTicketAllData" :key="item.id" :cardItem="item" />
    </ul>
  </main>
</template>
