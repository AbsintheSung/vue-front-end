<script setup>
const props = defineProps({
  cardItem: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
</script>
<template>
  <li v-if="Object.keys(props.cardItem).length > 0">
    <div class="flex h-full flex-col">
      <h2 class="border-b-2 border-black pb-3 font-yeseva text-[32px] font-normal md:text-4xl">
        19 MAY 2023
      </h2>
      <router-link
        :to="`/ticket-detail/${cardItem.id}`"
        class="block transition duration-500 ease-in-out hover:text-yellow-700"
      >
        <img class="mt-3 h-[240px] w-full object-cover" :src="cardItem.imageUrl" alt="活動圖片" />
        <h3 class="my-3 text-lg font-bold md:text-2xl">{{ cardItem.title }}</h3>
        <p class="mb-4">
          {{ cardItem.description }}
        </p>
      </router-link>
      <div
        class="mt-auto flex items-center justify-between border-y-2 border-black py-2 font-bold md:py-3"
      >
        <router-link :to="`/type-active/${cardItem.category}`" class="flex hover:underline"
          ><img src="../assets/images/sparkler.png" class="me-2 w-6" />{{
            cardItem.category
          }}</router-link
        >

        <router-link :to="`/ticket-detail/${cardItem.id}`" class="card-hover-pseudo block"
          >開賣中<FontAwesomeIcon :icon="['fas', 'angles-right']"
        /></router-link>
      </div>
    </div>
  </li>
</template>
<style scoped></style>
