<script setup>
const props = defineProps({
  cardItem: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
/*
category: "演出"
content: "你也是那種動不動就容易放空、神遊的人嗎？這輩子靠這技能出頭的機會來了，在恆春山林一起神遊、盡情地發呆吧！冠軍可以得到價值十萬的綿豆腐床墊一張！"
description: "你也是那種動不動就容易放空、神遊的人嗎？這輩子靠這技能出頭的機會來了，在恆春山林一起神遊、盡情地發呆吧！冠軍可以得到價值十萬的綿豆腐床墊一張！"
id: "-O2EESjh6bswmocISvay"
imageUrl: "https://github.com/AbsintheSung/7TAO_webpage/blob/main/assets/images/event/12.jpg?raw=true"
is_enabled: 1
num: 1
origin_price: 6300
price: 3200
title: "野營發呆大賽"
unit: "張"
*/
</script>
<template>
  <li v-if="Object.keys(props.cardItem).length > 0">
    <div class="flex h-full flex-col">
      <h2 class="border-b-2 border-black pb-3 font-yeseva text-[32px] font-normal md:text-4xl">
        19 MAY 2023
      </h2>
      <router-link to="/" class="block transition duration-500 ease-in-out hover:text-yellow-700">
        <img class="mt-3 h-[240px] w-full object-cover" :src="cardItem.imageUrl" alt="活動圖片" />
        <h3 class="my-3 text-lg font-bold md:text-2xl">{{ cardItem.title }}</h3>
        <p class="mb-4">
          {{ cardItem.description }}
        </p>
      </router-link>
      <div
        class="mt-auto flex items-center justify-between border-y-2 border-black py-2 font-bold md:py-3"
      >
        <router-link :to="`/active/${cardItem.category}`" class="flex hover:underline"
          ><img src="../assets/images/sparkler.png" class="me-2 w-6" />{{
            cardItem.category
          }}</router-link
        >

        <router-link to="/" class="card-hover-pseudo block"
          >開賣中<FontAwesomeIcon :icon="['fas', 'angles-right']"
        /></router-link>
      </div>
    </div>
  </li>
</template>
<style scoped></style>
