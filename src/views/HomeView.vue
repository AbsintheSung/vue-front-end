<script setup>
import LinkCard from '@/components/LinkCard.vue'
import ActiveTitle from '@/components/ActiveTitle.vue'
import TickCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'
// import { onMounted } from 'vue'
const productStore = useProductStore()
// onMounted(() => {
//   tickStore.fetchAllTicketData()
// })
</script>
<template>
  <!-- <main class="container"> -->
  <section class="py-6 font-noto">
    <LinkCard />
  </section>
  <section class="my-6">
    <ActiveTitle :leftTitle="'DISCOUNT'" :rightTitle="'近期優惠'" />
    <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <TickCard v-for="item in productStore.getFilterProduct" :key="item.id" :cardItem="item" />
    </ul>
  </section>
  <section class="my-6">
    <ActiveTitle :leftTitle="'SPECIAL-OFFER'" :rightTitle="'廠商特價'" />
    <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <TickCard v-for="item in productStore.getFilterProduct" :key="item.id" :cardItem="item" />
    </ul>
  </section>

  <!-- </main> -->
</template>
