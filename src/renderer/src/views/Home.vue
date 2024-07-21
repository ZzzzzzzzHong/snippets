<template>
  <div
    class="px-3 py-2 text-gray-800 text-sm rounded-md bg-gray-50 overflow-hidden"
  >
    <a-input v-model:value="searchKey" size="large" class="bg-gray-200" />
    <p class="text-gray-500 text-center text-sm my-1">Hong</p>
    <div class="nodrag max-h-80 overflow-y-auto">
      <SnippetList :search-data></SnippetList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import SnippetList from '@renderer/components/home/SnippetList.vue'
import resultData from '@renderer/mock/homgpageList'

const searchKey = ref('')

const searchData = computed(() => {
  return resultData.filter(
    (item) =>
      searchKey.value &&
      item.content.toLowerCase().includes(searchKey.value.toLowerCase())
  )
})
</script>
