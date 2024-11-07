<template>
  <div
    class="config h-screen text-gray-800 bg-gray-50 flex flex-col justify-between"
  >
    <div class="drag h-8 flex items-center px-2">
      <CloseSmall theme="outline" class="cursor-pointer" />
    </div>
    <div class="flex-1 flex">
      <ul class="w-20 mt-1 text-center text-lg">
        <li>
          <BookOne theme="outline" />
          <p>片段</p>
        </li>
        <li>
          <SettingConfig theme="outline" />
          <p>设置</p>
        </li>
      </ul>
      <div
        class="flex-1 mr-2 border-solid border border-slate-200 rounded-md bg-slate-50"
      >
        <router-view></router-view>
      </div>
    </div>
    <div class="text-xs text-right py-1 mx-2">hong</div>
  </div>
</template>
<script lang="ts" setup>
import { BookOne, CloseSmall, SettingConfig } from '@icon-park/vue-next'
import router from '@renderer/router'
router.push('/config/snippets')
</script>

<style lang="less" scoped>
.config {
  ul {
    li {
      @apply w-11/12 mx-auto mb-4 rounded-md cursor-pointer py-2 hover:bg-gray-200;
      p {
        @apply text-xs;
      }
    }
  }
}
</style>
