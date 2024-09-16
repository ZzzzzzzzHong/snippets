<template>
  <div class="text-sm p-2 h-full flex flex-col">
    <!-- 菜单 -->
    <div>
      <div class="flex justify-between">
        <p class="text-xl font-bold">标题</p>
        <a-button>删除</a-button>
      </div>
      <div class="mt-2 flex justify-between">
        <p>更新时间</p>
        <p>归属：分组</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="flex-1 mt-2 bg-gray-100">文本内容</div>
  </div>
</template>

<script lang="ts" setup></script>
