<script setup></script>
<template>
  <li>
    <div class="flex h-full flex-col">
      <h2 class="border-b-2 border-black pb-3 font-yeseva text-[32px] font-normal md:text-4xl">
        19 MAY 2023
      </h2>
      <router-link to="/" class="block transition duration-500 ease-in-out hover:text-yellow-700">
        <img class="mt-3" src="../assets/images/01.jpg" alt="活動圖片" />
        <h3 class="my-3 text-lg font-bold md:text-2xl">邪典電影派對一房間</h3>
        <p class="mb-4">
          你有聽說過「大災難家」裡面的主角 Tommy Wiseau
          製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
        </p>
      </router-link>
      <div
        class="mt-auto flex items-center justify-between border-y-2 border-black py-2 font-bold md:py-3"
      >
        <router-link to="/" class="flex hover:underline"
          ><img src="../assets/images/sparkler.png" class="me-2 w-6" />社群活動</router-link
        >

        <router-link to="/" class="card-hover-pseudo block"
          >開賣中<FontAwesomeIcon :icon="['fas', 'angles-right']"
        /></router-link>
      </div>
    </div>
  </li>
</template>
<style scoped></style>
