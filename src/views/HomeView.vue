<script setup>
import HeaderView from '@/layouts/HeaderView.vue'
import TheSvg from '@/components/TheSvg.vue'
const svgData = ['Capa_1', 'Layer_1', 'Capa_2', 'Icon', 'Capa_3']
</script>
<template>
  <HeaderView />
  <main>
    <section class="container py-6">
      <div
        class="grid grid-flow-dense grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 md:gap-6"
      >
        <div v-for="svgItem in svgData" :key="svgItem">
          <TheSvg :svgIcon="svgItem" />
        </div>
        <div></div>
      </div>
    </section>
  </main>
</template>
