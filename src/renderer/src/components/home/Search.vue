<template>
  <a-input v-model:value="searchKey" size="large" class="bg-gray-200" />
  <p class="text-gray-500 text-center text-sm my-1">Hong</p>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@renderer/stores/useHomeStore'

const { searchKey } = storeToRefs(useHomeStore())
</script>
