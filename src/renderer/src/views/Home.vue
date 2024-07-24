<template>
  <div
    ref="home"
    class="h-screen"
    @mouseover="mouseover"
    @mouseout="isIgnore(false)"
  >
    <div
      class="drag px-3 py-2.5 text-gray-800 text-sm rounded-md bg-gray-50 overflow-hidden"
    >
      <Search></Search>
      <div class="nodrag max-h-80 overflow-y-auto">
        <SnippetList></SnippetList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from '@renderer/components/home/Search.vue'
import SnippetList from '@renderer/components/home/SnippetList.vue'
import { ref } from 'vue'

const home = ref<HTMLElement | null>(null)
const isIgnore = (isIgnore: boolean) => {
  window.api.setIgnoreMouseEvents(isIgnore)
}
const mouseover = (event: MouseEvent) => {
  // 当鼠标处于窗口透明区时，触发electron的鼠标穿透
  if (event.target === home.value) {
    isIgnore(true)
  }
}
</script>
