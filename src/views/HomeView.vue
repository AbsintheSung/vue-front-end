<script setup>
import LinkCard from '@/components/LinkCard.vue'
import ActiveTitle from '@/components/ActiveTitle.vue'
import TickCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'
const productStore = useProductStore()
const filterProduct1 = computed(() => productStore.fetchFilterProduct())
const filterProduct2 = computed(() => productStore.fetchFilterProduct())
</script>
<template>
  <section class="py-6 font-noto">
    <LinkCard />
  </section>
  <section class="my-6">
    <ActiveTitle :leftTitle="'DISCOUNT'" :rightTitle="'近期優惠'" />
    <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <TickCard v-for="item in filterProduct1" :key="item.id" :cardItem="item" />
    </ul>
  </section>
  <section class="my-6">
    <ActiveTitle :leftTitle="'SPECIAL-OFFER'" :rightTitle="'廠商特價'" />
    <ul class="grid grid-cols-1 gap-6 py-2 font-noto sm:grid-cols-2 md:grid-cols-3">
      <TickCard v-for="item in filterProduct2" :key="item.id" :cardItem="item" />
    </ul>
  </section>
</template>
