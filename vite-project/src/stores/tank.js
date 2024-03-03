import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTankBuild = defineStore('tank', () => {
  const tank = ref([])
  function addCart(item) {
    tank.value.push(item)
  }

  return { tank, addCart }
})