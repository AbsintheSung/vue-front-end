<script setup>
// import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
// import { useRoute, useRouter } from 'vue-router'
// import { watch } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
// const route = useRoute()
// const tickId = route.params.ticketId
defineProps({
  allProductData: {
    type: Array,
    default: () => {
      return []
    }
  }
})
/* eslint-enable */

const swiperOptions = {
  modules: [Mousewheel, Pagination],
  slidesPerView: 1, // 滾動時候 只切換一張
  mousewheel: true, // 設置滾輪滾動
  loop: true,
  spaceBetween: 15, // 滑動速度
  breakpoints: {
    // 當視窗寬度大於等於 1024px
    1024: {
      slidesPerView: 3
    },
    // 當視窗寬度介於 768px 到 1023px 之間
    768: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
}
// watch(
//   () => route.params.ticketId,
//   (newId) => {
//     router.push(`/ticket-detail/${newId}`)
//   }
// )
</script>
<template>
  <template v-if="allProductData.length != 0">
    <swiper :loop="true" v-bind="swiperOptions">
      <swiper-slide v-for="cardItem in allProductData" :key="cardItem.id">
        <!-- <h2 class="border-b-2 border-black pb-3 font-yeseva text-[32px] font-normal md:text-4xl">
          19 MAY 2023
        </h2> -->
        <router-link
          :to="`/product-detail/${cardItem.id}`"
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
          <router-link :to="`/type-products/${cardItem.category}`" class="flex hover:underline"
            ><img src="../assets/images/sparkler.png" class="me-2 w-6" />{{
              cardItem.category
            }}</router-link
          >

          <router-link :to="`/product-detail/${cardItem.id}`" class="card-hover-pseudo block"
            >開賣中<FontAwesomeIcon :icon="['fas', 'angles-right']"
          /></router-link>
        </div>
      </swiper-slide>
    </swiper>
  </template>
</template>
<style scoped>
.swiper-slide {
  display: flex;
  flex-direction: column;
  height: auto;
}
</style>
