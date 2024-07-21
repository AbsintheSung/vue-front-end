<script setup>
import logoImage from '@/assets/images/logo.png'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>
<template>
  <Disclosure as="header" class="relative">
    <nav class="container mx-auto flex items-center py-[24px]">
      <h1>
        <router-link to="/"><img class="w-[53px]" :src="logoImage" alt="官網logo" /></router-link>
      </h1>
      <h2 class="ms-4 hidden items-center font-yeseva text-4xl font-black md:flex">
        7TAO<span class="ms-1 font-noto text-base font-bold">活動訂票網</span>
      </h2>

      <input
        type="text"
        class="ms-6 block border border-gray-900 py-4 ps-5 sm:ms-12"
        placeholder="請輸入搜尋"
      />

      <ul class="ms-auto hidden md:flex">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <DisclosureButton as="template" class="ms-auto block md:hidden">
        <button>點我點我</button>
      </DisclosureButton>
    </nav>
    <DisclosurePanel as="ul" class="block px-6 md:hidden">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </DisclosurePanel>
  </Disclosure>
</template>
