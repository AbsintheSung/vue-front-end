<script setup>
import logoImage from '@/assets/images/logo.png'
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/product'
import { useRouter } from 'vue-router'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()
const userSearch = ref('')
const getSearch = () => {
  const allData = productStore.getProductAllData
  const foundProduct = allData.find((product) =>
    product.title.toLowerCase().includes(userSearch.value.toLowerCase())
  )

  if (foundProduct) {
    router.push({ path: `/product-detail/${foundProduct.id}` })
    userSearch.value = ''
  } else {
    // 沒有找到
    responseMes('無相關商品', 'error')
  }
}
const responseMes = (mes = '成功', type = 'success') => {
  ElMessage({
    message: mes,
    type: type
  })
}
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
        <router-link to="/">
          Figure<span class="ms-1 font-noto text-base font-bold">玩具館</span></router-link
        >
      </h2>

      <div class="me-4 flex min-w-0 flex-grow">
        <input
          type="text"
          class="ms-4 block min-w-0 border border-r-0 border-gray-900 bg-custom-bg-1 py-3 ps-5 focus:outline-none sm:ms-6"
          placeholder="搜尋商品"
          v-model="userSearch"
        />
        <button
          class="flex items-center justify-center bg-black p-4 text-[#FBFF22]"
          @click="getSearch"
        >
          <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>

      <ul class="ms-auto hidden gap-4 font-noto lg:flex">
        <li>
          <router-link to="/products"
            ><FontAwesomeIcon :icon="['fas', 'robot']" class="px-2" />所有商品</router-link
          >
        </li>
        <li>
          <router-link to="/order-list/"
            ><FontAwesomeIcon :icon="['fas', 'clipboard']" class="px-2" />訂單明細</router-link
          >
        </li>
        <li class="relative">
          <router-link to="/cart">
            <span
              class="absolute -top-2 left-5 -z-10 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white"
              >{{ cartStore.getCartLength }}</span
            >
            <FontAwesomeIcon :icon="['fas', 'shopping-cart']" class="px-2" />
          </router-link>
        </li>
      </ul>

      <DisclosureButton as="template" class="ms-auto block lg:hidden">
        <button class="flex items-center justify-center rounded-lg border-2 border-black px-3 py-2">
          <FontAwesomeIcon :icon="['fas', 'bars']" class="text-3xl" />
        </button>
      </DisclosureButton>
    </nav>

    <DisclosurePanel
      as="ul"
      class="absolute left-0 top-full z-50 flex w-full flex-col gap-4 bg-[#F3F1E5] p-6 shadow-lg lg:hidden"
    >
      <li class="text-center">
        <router-link to="/products">所有商品</router-link>
      </li>
      <li class="text-center">
        <router-link to="/order-list/">訂單明細</router-link>
      </li>
      <li class="text-center">
        <router-link to="/cart">購物車({{ cartStore.getCartLength }})</router-link>
      </li>
    </DisclosurePanel>
  </Disclosure>
</template>
