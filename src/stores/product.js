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

  //action
  const fetchAllProductData = async () => {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products/all`);
      productAllData.value = response.data;
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
      });
      console.log(response)
      if (response.status === 200) {
        productData.value = response.data;
      }
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }


  return { productData, getProductData, getProductPage, getProductAllData, fetchPageInfo, fetchAllProductData }
})
