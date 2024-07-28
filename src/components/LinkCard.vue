<script setup>
import { ref } from 'vue'
import TheSvg from '@/components/TheSvg.vue'
const svgData = ref([
  { name: 'show', title: '演出', path: '/type-products/演出' },
  { name: 'fellowship', title: '聯誼', path: '/type-products/聯誼' },
  { name: 'exhibition', title: '展覽', path: '/type-products/展覽' },
  { name: 'gourmetfood', title: '美食', path: '/type-products/美食' },
  { name: 'outdoor', title: '戶外', path: '/type-products/戶外' }
])
</script>
<template>
  <ul
    class="grid grid-flow-dense grid-cols-3 grid-rows-2 gap-2 md:grid-cols-6 md:grid-rows-1 md:gap-6"
  >
    <li v-for="svgItem in svgData" :key="svgItem.name" class="border-2 border-black">
      <router-link :to="svgItem.path" class="block py-9 hover:text-yellow-400">
        <div class="flex-col items-center justify-center">
          <TheSvg :svgIcon="svgItem.name" />
          <h3 class="mt-3 text-center font-bold">{{ svgItem.title }}</h3>
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/products" class="h-full">
        <div
          class="flex h-full w-full items-center justify-center bg-black text-2xl font-black text-yellow-400 hover:text-yellow-200 md:text-4xl"
        >
          探索<br />更多
        </div>
      </router-link>
    </li>
  </ul>
</template>
<style scoped></style>
