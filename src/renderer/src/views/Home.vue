<template>
  <div
    class="px-3 py-2 text-gray-800 text-sm rounded-md bg-gray-50 overflow-hidden"
  >
    <Search></Search>
    <div class="nodrag max-h-80 overflow-y-auto">
      <SnippetList></SnippetList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from '@renderer/components/home/Search.vue'
import SnippetList from '@renderer/components/home/SnippetList.vue'
</script>
