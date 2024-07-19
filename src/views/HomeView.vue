<script setup>
import HeaderView from '@/layouts/HeaderView.vue'
import sprite from '@/assets/svg/icon.svg'
</script>
<template>
  <HeaderView />
  <main>
    <section class="container py-6">
      <div
        class="grid grid-flow-dense grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 md:gap-6"
      >
        <div>
          <svg class="h-full w-full">
            <use :href="`${sprite}#Capa_1`"></use>
          </svg>
        </div>
        <div>
          <svg class="h-full w-full">
            <use :href="`${sprite}#Layer_1`"></use>
          </svg>
        </div>
        <div>
          <svg class="h-full w-full">
            <use :href="`${sprite}#Capa_2`"></use>
          </svg>
        </div>
        <div>
          <svg class="h-full w-full">
            <use :href="`${sprite}#Icon`"></use>
          </svg>
        </div>
        <div>
          <svg class="h-full w-full">
            <use :href="`${sprite}#Capa_3`"></use>
          </svg>
        </div>
        <div>6</div>
      </div>
    </section>
  </main>
</template>
