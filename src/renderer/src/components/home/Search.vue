<template>
  <div class="flex justify-center items-center">
    <a-input v-model:value="searchKey" size="large" class="bg-gray-200" />
    <Association
      theme="outline"
      size="20"
      class="nodrag cursor-pointer ml-2 text-gray-600"
      @click="openConfigWin"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { Association } from '@icon-park/vue-next'
import { useHomeStore } from '@renderer/stores/useHomeStore'

const { searchKey } = storeToRefs(useHomeStore())

const openConfigWin = () => {
  window.api.openWindow('config')
}
</script>
