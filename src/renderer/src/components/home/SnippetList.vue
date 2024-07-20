<template>
  <div class="list">
    <div
      v-for="(data, index) in searchData"
      :key="data.id"
      class="p-2 truncate rounded-md cursor-pointer hover:bg-gray-200"
      :class="{ 'bg-gray-200': activeIndex === index }"
      @click="copyContent(index)"
    >
      {{ data.content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'

// 列表数据
const props = defineProps({
  searchData: {
    type: Array<{ id: number; content: string }>,
    default: () => []
  }
})
const dataL = computed(() => props.searchData.length)

// 选择列表内容进行拷贝
const activeIndex = ref<number>(0)
watch(props, () => {
  activeIndex.value = 0
})
// 将内容复制到剪切板
const copyContent = (index: number) => {
  if (dataL.value)
    navigator.clipboard.writeText(props.searchData[index].content)
}
const changeData = (event: KeyboardEvent) => {
  if (event.code === 'ArrowUp') {
    activeIndex.value - 1 < 0
      ? (activeIndex.value = dataL.value - 1)
      : activeIndex.value--
  }
  if (event.code === 'ArrowDown') {
    activeIndex.value + 1 > dataL.value - 1
      ? (activeIndex.value = 0)
      : activeIndex.value++
  }
  if (event.code === 'Enter') {
    copyContent(activeIndex.value)
  }
}

onMounted(() => {
  document.addEventListener('keydown', changeData)
})

onUnmounted(() => {
  document.removeEventListener('keydown', changeData)
})
</script>
