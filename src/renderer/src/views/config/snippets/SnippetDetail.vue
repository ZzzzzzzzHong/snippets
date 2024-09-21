<template>
  <div v-if="snippetDetail" class="text-sm p-2 h-full flex flex-col">
    <!-- 菜单 -->
    <div>
      <div class="flex justify-between">
        <div>
          <span class="text-xl font-bold pr-1">{{ snippetDetail.title }}</span>
          <Edit theme="outline" fill="#333" />
        </div>
        <div>
          <MemoryCardOne theme="outline" fill="#333" />
          <DeleteThemes theme="outline" fill="#333" />
        </div>
      </div>
      <div class="mt-2 flex justify-between">
        <p>{{ snippetDetail.updated_at }}</p>
        <p>归属：{{ snippetDetail.group_name }}</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="flex-1 mt-2 bg-gray-100">{{ snippetDetail.content }}</div>
  </div>
  <div
    v-else
    class="h-full flex justify-center items-center flex-col text-gray-400"
  >
    <FileCode class="text-5xl mb-1" :stroke-width="1" />
    <p>暂无可展示的片段</p>
  </div>
</template>

<script lang="ts" setup>
import {
  FileCode,
  MemoryCardOne,
  DeleteThemes,
  Edit
} from '@icon-park/vue-next'

defineProps<{
  snippetDetail: ContentType | null
}>()
</script>
