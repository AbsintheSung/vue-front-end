<script setup>
import HeaderView from '@/layouts/HeaderView.vue'
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
  <HeaderView />
  <main>
    <section class="container py-6 font-noto">
      <LinkCard />
    </section>
    <ActiveTitle :leftTitle="'RECENT'" :rightTitle="'近期活動'" />
    <ActiveTitle :leftTitle="'ONLINE'" :rightTitle="'線上活動'" />
    <ul class="container grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <TickCard v-for="item in tickStore.getTicketAllData" :key="item.id" :cardItem="item" />
    </ul>
  </main>
</template>
