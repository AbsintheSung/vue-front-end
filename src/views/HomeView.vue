<script setup>
import { ref } from 'vue'
import HeaderView from '@/layouts/HeaderView.vue'
import TheSvg from '@/components/TheSvg.vue'
const svgData = ref([
  { name: 'show', path: 'show' },
  { name: 'fellowship', path: 'fellowship' },
  { name: 'exhibition', path: 'exhibition' },
  { name: 'gourmetfood', path: 'gourmetfood' },
  { name: 'outdoor', path: 'outdoor' }
])
</script>
<template>
  <HeaderView />
  <main>
    <section class="container py-6">
      <div
        class="grid grid-flow-dense grid-cols-3 grid-rows-2 gap-2 md:grid-cols-6 md:grid-rows-1 md:gap-6"
      >
        <div v-for="svgItem in svgData" :key="svgItem.name">
          <router-link class="blcok">
            <TheSvg :svgIcon="svgItem.name" />
          </router-link>
        </div>
        <div class="h-full">
          <router-link
            class="flex h-full w-full items-center justify-center bg-black text-5xl font-black text-yellow-400"
            >探索<br />更多</router-link
          >
        </div>
      </div>
    </section>
  </main>
</template>
