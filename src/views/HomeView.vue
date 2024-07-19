<script setup>
import { ref } from 'vue'
import HeaderView from '@/layouts/HeaderView.vue'
import TheSvg from '@/components/TheSvg.vue'
const svgData = ref([
  { name: 'show', title: '演出', path: 'show' },
  { name: 'fellowship', title: '聯誼', path: 'fellowship' },
  { name: 'exhibition', title: '展覽', path: 'exhibition' },
  { name: 'gourmetfood', title: '美食', path: 'gourmetfood' },
  { name: 'outdoor', title: '戶外', path: 'outdoor' }
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
          <router-link class="w-full flex-col items-center justify-center">
            <TheSvg :svgIcon="svgItem.name" />
            <h3 class="text-center">{{ svgItem.title }}</h3>
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
