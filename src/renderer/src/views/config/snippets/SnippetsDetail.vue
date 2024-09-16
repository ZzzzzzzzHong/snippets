<template>
  <div class="text-sm p-2 h-full flex flex-col">
    <!-- 菜单 -->
    <div>
      <div class="flex justify-between">
        <div>
          <span class="text-xl font-bold pr-1">标题</span>
          <Edit theme="outline" fill="#333" />
        </div>
        <div>
          <MemoryCardOne theme="outline" fill="#333" />
          <DeleteThemes theme="outline" fill="#333" />
        </div>
      </div>
      <div class="mt-2 flex justify-between">
        <p>更新时间2010,10.10</p>
        <p>归属：分组</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="flex-1 mt-2 bg-gray-100">return { data }</div>
  </div>
</template>

<script lang="ts" setup>
import { MemoryCardOne, DeleteThemes, Edit } from '@icon-park/vue-next'
</script>
