import { defineStore } from 'pinia'
import { ComputedRef, computed, ref } from 'vue'
import mockData from '@renderer/mock/homgpageList'

export const useHomeStore = defineStore('home', () => {
  // State
  const searchKey = ref('')
  // Getter
  const searchData: ComputedRef<resDataType[]> = computed(() => {
    return mockData.filter(
      (item) =>
        searchKey.value &&
        item.content.toLowerCase().includes(searchKey.value.toLowerCase())
    )
  })
  // Action
  function $reset() {
    searchKey.value = ''
  }

  return { searchKey, searchData, $reset }
})

type resDataType = {
  id: number
  content: string
}
