<template>
  <div class="flex text-xs h-full">
    <div class="p-2">
      <div class="w-40 flex">
        <a-input>
          <template #prefix>
            <search theme="outline" size="16" fill="#333" />
          </template>
        </a-input>
        <a-button
          type="primary"
          class="ml-1 w-4 flex justify-center items-center"
        >
          <Plus theme="outline" size="16" />
        </a-button>
      </div>
      <ul class="mt-2 bg-gray-50">
        <li class="active mb-2 cursor-pointer">分组1</li>
        <li class="mb-2 cursor-pointer">分组1</li>
        <li class="mb-2 cursor-pointer">分组1</li>
        <li class="mb-2 cursor-pointer">分组1</li>
      </ul>
    </div>
    <div class="w-48 p-2 bg-gray-100">
      <ul>
        <li class="active mb-2 cursor-pointer">标题1</li>
        <li class="mb-2 cursor-pointer">标题1</li>
        <li class="mb-2 cursor-pointer">标题1</li>
        <li class="mb-2 cursor-pointer">标题1</li>
      </ul>
    </div>
    <div class="flex-1 bg-gray-200">
      <SnippetsDetail></SnippetsDetail>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus, Search } from '@icon-park/vue-next'
import SnippetsDetail from './SnippetsDetail.vue'
</script>
