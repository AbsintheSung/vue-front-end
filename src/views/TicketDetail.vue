<script setup>
// import ActiveTitle from '@/components/ActiveTitle.vue'
</script>
<template>
  <main class="container">
    <section class="grid grid-cols-1 gap-2 md:grid-cols-6 md:gap-6">
      <div class="col-span-1 border-2 border-black p-3 md:col-span-5 md:p-6">
        <img
          class="h-full w-full object-cover"
          src="https://github.com/AbsintheSung/7TAO_webpage/blob/main/assets/images/event/10.jpg?raw=true"
        />
      </div>
      <div class="flex gap-2 font-yeseva md:flex-col md:gap-6">
        <div class="border-2 border-black px-4 py-6 text-2xl md:px-0 md:py-8">
          <p class="text-center">2023</p>
        </div>
        <div class="flex flex-grow border-2 border-black md:flex-col">
          <div class="flex flex-grow flex-col justify-center text-center text-2xl md:text-4xl">
            <p>MAY</p>
            <p>19</p>
          </div>
          <div class="flex flex-grow flex-col justify-center text-center text-base md:text-2xl">
            <p>12:00</p>
            <p>|</p>
            <p>21:00</p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-6 font-noto">
      <div class="flex flex-wrap gap-6 md:flex-nowrap">
        <div class="w-full md:w-1/2">
          <p>我是輪播圖片</p>
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-bold md:text-4xl">返老還童-制服聯誼</h2>
          <p class="my-2 font-bold">穿上制服，無年齡限制，一起走上街頭、尋找青春才有的純愛心動！</p>
          <p class="text-end"><del>NT$2000</del></p>
          <p class="text-end text-2xl">NT$3500</p>
          <div class="my-2 flex items-center gap-2">
            <div class="flex flex-1 items-center">
              <button class="p-2">
                <FontAwesomeIcon :icon="['fas', 'minus']" />
              </button>
              <input type="text" class="w-full bg-custom-bg-1 py-2 text-center" value="1" />
              <button class="p-2">
                <FontAwesomeIcon :icon="['fas', 'plus']" />
              </button>
            </div>
            <div class="flex-1 flex-grow">
              <button class="w-full bg-black py-2 text-[#FBFF22]">購買</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="font-noto">
      <p class="border-2 border-black p-4 leading-8 md:p-8">
        想回到過去？試著讓故事繼續？由戀愛家教「艾德溫」主辦策劃，讓各位在安排好的青春行程中擁有自然的純愛互動體驗，互相餵食餅乾、觀察對方手相，有趣的互動環節讓你/妳怦然心動！制服由主辦方提供，妝髮造型可額外加價購！活動中全程會有隨行攝影師，捕捉你們的純愛互動，拍攝成實境電視劇，讓你們能留下永恆的美好回憶&lt;3
      </p>
    </section>
    <!-- <ActiveTitle :leftTitle="'TICKET'" :rightTitle="'購票資訊'" /> -->
    <section></section>
  </main>
</template>
<style scoped></style>
