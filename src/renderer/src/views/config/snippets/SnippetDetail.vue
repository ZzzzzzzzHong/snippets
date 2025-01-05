<template>
  <div v-if="detail.id" class="text-sm p-2 h-full flex flex-col">
    <!-- 菜单 -->
    <div>
      <div class="flex justify-between">
        <div>
          <span class="cursor-pointer text-gray-400">
            <Lock v-if="!isEdit" title="锁定中" />
            <Unlock v-else class="cursor-pointer" title="编辑中" />
          </span>
          <span class="text-xl font-bold px-1" :contenteditable="isEdit">{{
            detail.title
          }}</span>
        </div>
        <div>
          <span v-if="isEdit">
            <Return class="cursor-pointer" @click="handleReset" />
            <MemoryCardOne class="cursor-pointer ml-1" @click="handleSave" />
          </span>
          <span v-else>
            <Edit class="cursor-pointer" @click="isEdit = true" />
            <Delete
              class="cursor-pointer ml-1 text-red-500"
              @click="deleteSnippet(detail.id)"
            />
          </span>
        </div>
      </div>
      <div class="mt-2 flex justify-between items-center">
        <p class="select-none">
          归属：
          <a-select
            v-model:value="detail.group_id"
            :disabled="!isEdit"
            class="w-44"
          >
            <a-select-option
              v-for="groupItem in snippetGroup"
              :key="groupItem.id"
              :value="groupItem.id"
              >{{ groupItem.title }}</a-select-option
            >
          </a-select>
        </p>
        <p :class="{ 'cursor-not-allowed select-none': isEdit }">
          {{ detail.updated_at }}
        </p>
      </div>
    </div>
    <!-- 内容 -->
    <div
      :key="detail.id"
      class="gen-editable flex-1 mt-2 bg-gray-100"
      contenteditable="plaintext-only"
    >
      {{ detail.content }}
    </div>
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
  Delete,
  Edit,
  FileCode,
  Lock,
  MemoryCardOne,
  Return,
  Unlock
} from '@icon-park/vue-next'
import { ref, watch } from 'vue'
import sqlSnippets from '@renderer/sql/snippets/sqlSnippets'

const props = defineProps<{
  snippetDetail: ContentType
  snippetGroup: CategoryType[]
}>()

const detail = ref<ContentType>({} as ContentType)
watch(props, () => {
  handleReset()
})
// 取消编辑
const handleReset = () => {
  detail.value = { ...props.snippetDetail }
  isEdit.value = false
}

const emit = defineEmits(['handleDelete'])
const isEdit = ref<boolean>(false)
// 删除片段
const deleteSnippet = async (id: number) => {
  const isDel = await window.api.sql(
    'returnDelete',
    sqlSnippets.deleteContent(id)
  )
  if (isDel) {
    emit('handleDelete')
  }
}
// 保存片段
const handleSave = () => {
  // 发送请求
  isEdit.value = false
}
</script>
