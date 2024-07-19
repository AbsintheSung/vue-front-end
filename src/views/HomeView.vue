<script setup>
import HeaderView from '@/layouts/HeaderView.vue'
import LinkCard from '@/components/LinkCard.vue'
import ActiveTitle from '@/components/ActiveTitle.vue'
</script>
<template>
  <HeaderView />
  <main>
    <section class="container py-6 font-noto">
      <LinkCard />
    </section>
    <ActiveTitle :leftTitle="'RECENT'" :rightTitle="'近期活動'" />
    <ActiveTitle :leftTitle="'ONLINE'" :rightTitle="'線上活動'" />
  </main>
</template>
