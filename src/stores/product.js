import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
export const useProductStore = defineStore('products', () => {
  //state
  const productData = ref({}) //初始篩選資料
  const productAllData = ref({}) //初始全部資料

  //getter
  const getProductAllData = computed(() => productAllData.value.products)
  const getProductData = computed(() => productData.value.products)
  const getProductPage = computed(() => productData.value.pagination)
  const getFilterProduct = computed(() => {
    if (Object.keys(productAllData.value).length === 0) return []
    const array = productAllData.value.products
    const result = []
    const len = array.length
    const taken = new Set()
    while (result.length < 6 && taken.size < len) {
      const randomIndex = Math.floor(Math.random() * len)
      if (!taken.has(randomIndex)) {
        result.push(array[randomIndex])
        taken.add(randomIndex)
      }
    }
    return result
  })

  //action
  const fetchAllProductData = async () => {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products/all`)
      productAllData.value = response.data
    } catch (error) {
      console.log(error)
    }
  }
  // const fetchTicketData = async () => {
  //   try {
  //     const response = await axios(`${baseURL}/v2/api/${apiName}/products`);
  //     ticketData.value = response.data;
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const fetchPageInfo = async (page = '', category = '') => {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products`, {
        params: { page: page.toString(), category: category }
      })
      console.log(response)
      if (response.status === 200) {
        productData.value = response.data
      }
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    productData,
    getProductData,
    getProductPage,
    getProductAllData,
    getFilterProduct,
    fetchPageInfo,
    fetchAllProductData
  }
})
