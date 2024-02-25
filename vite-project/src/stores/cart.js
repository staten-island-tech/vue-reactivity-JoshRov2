import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  function addCart(item) {
    cart.value.push(item)
  }

  return { cart, addCart }
})
