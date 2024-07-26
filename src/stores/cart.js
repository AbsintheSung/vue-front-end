import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
export const useCartStore = defineStore('cart', () => {
    //state
    const cartData = ref([])
    const priceData = ref({})

    //getter
    const getCartData = computed(() => cartData.value)
    const getCartLength = computed(() => cartData.value.length)
    const getPriceData = computed(() => priceData.value)

    //action
    const fetchCartData = async () => {
        try {
            const response = await axios(`${baseURL}/v2/api/${apiName}/cart`)
            const { final_total: finalTotal, total } = response.data.data
            priceData.value = { final_total: finalTotal, total }
            cartData.value = response.data.data.carts
        } catch (error) {
            console.log(error)
        }
    }
    const fetchAddCart = async (dataInfo) => {
        try {
            const response = await axios.post(`${baseURL}/v2/api/${apiName}/cart`, dataInfo)
            const successMessage = ref('')
            if (response.status === 200) {
                await fetchCartData()
                successMessage.value = response.data.message
                return successMessage
            }
        } catch (error) {
            console.log(error)
        }
    }
    return {
        fetchCartData, fetchAddCart, getCartLength, getPriceData, getCartData
    }
})