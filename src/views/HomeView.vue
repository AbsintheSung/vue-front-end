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
    <section class="container py-6 font-noto">
      <div
        class="grid grid-flow-dense grid-cols-3 grid-rows-2 gap-2 md:grid-cols-6 md:grid-rows-1 md:gap-6"
      >
        <router-link
          to="/"
          v-for="svgItem in svgData"
          :key="svgItem.name"
          class="border-2 border-black py-9 hover:text-yellow-400"
        >
          <div class="flex-col items-center justify-center">
            <TheSvg :svgIcon="svgItem.name" />
            <h3 class="mt-3 text-center font-bold">{{ svgItem.title }}</h3>
          </div>
        </router-link>
        <router-link to="/" class="h-full">
          <div
            class="flex h-full w-full items-center justify-center bg-black text-2xl font-black text-yellow-400 hover:text-yellow-200 md:text-4xl"
          >
            探索<br />更多
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>
