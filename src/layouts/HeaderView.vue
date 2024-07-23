<script setup>
import logoImage from '@/assets/images/logo.png'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>
<template>
  <Disclosure as="header" class="relative">
    <nav class="container mx-auto flex items-center py-[24px]">
      <h1>
        <router-link to="/"
          ><img class="w-[53px] min-w-[53px]" :src="logoImage" alt="官網logo"
        /></router-link>
      </h1>
      <h2 class="ms-4 hidden items-center font-yeseva text-4xl font-black md:flex">
        7TAO<span class="ms-1 font-noto text-base font-bold">活動訂票網</span>
      </h2>

      <div class="me-4 flex min-w-0 flex-grow">
        <input
          type="text"
          class="ms-6 block min-w-0 border border-gray-900 bg-custom-bg-1 py-3 ps-5 sm:ms-12"
          placeholder="探索活動"
        />
        <button class="flex items-center justify-center bg-black p-4 text-[#FBFF22]">
          <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>

      <ul class="ms-auto hidden md:flex">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <DisclosureButton as="template" class="ms-auto block md:hidden">
        <button class="flex items-center justify-center rounded-lg border-2 border-black px-3 py-2">
          <FontAwesomeIcon :icon="['fas', 'bars']" class="text-3xl" />
        </button>
      </DisclosureButton>
    </nav>

    <DisclosurePanel
      as="ul"
      class="absolute left-0 top-full z-50 w-full bg-[#F3F1E5] p-6 shadow-lg md:hidden"
    >
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </DisclosurePanel>
  </Disclosure>
</template>
