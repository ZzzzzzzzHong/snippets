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
        <li
          v-for="group in groups"
          :key="group.id"
          class="p-1 cursor-pointer"
          :class="{ active: group.id === activeGroupId }"
          @click="handleChange('group', group.id)"
        >
          {{ group.title }}
        </li>
      </ul>
    </div>
    <div class="w-48 p-2 bg-gray-100">
      <Plus theme="outline" size="16" class="float-right" />
      <ul v-if="listData.length" class="clear-right">
        <li
          v-for="data in listData"
          :key="data.id"
          class="p-1 cursor-pointer"
          :class="{ active: data.id === activeDataId }"
          @click="handleChange('data', data.id)"
        >
          {{ data.title }}
        </li>
      </ul>
      <div v-else class="clear-right py-8 text-center text-gray-400">
        <FolderCodeOne class="text-5xl mb-1" :stroke-width="1" />
        <p>该分组暂无片段</p>
        <p>快去添加属于你自己的片段吧</p>
      </div>
    </div>
    <div class="flex-1 bg-gray-200">
      <SnippetDetail :snippet-detail="detail"></SnippetDetail>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FolderCodeOne, Plus, Search } from '@icon-park/vue-next'
import { computed, onMounted, ref } from 'vue'
import SnippetDetail from './SnippetDetail.vue'
import SqlSnippets from '@renderer/sql/snippets/sqlSnippets'

const groups = ref<CategoryType[]>([])
const activeGroupId = ref(0)
const getCategoryGroups = async () => {
  return window.api.sql('returnFindAll', SqlSnippets.selectGroups())
}

const listData = ref<ContentType[]>([])
const activeDataId = ref(0)
const getDataByGroupId = async (groupId?: number) => {
  return window.api.sql(
    'returnFindAll',
    SqlSnippets.selectContentsByGroupId(groupId)
  )
}
const detail = computed<ContentType | null>(() => {
  return listData.value.find((item) => item.id === activeDataId.value) || null
})

const handleChange = async (type: 'group' | 'data', id: number) => {
  switch (type) {
    case 'group':
      activeGroupId.value = id
      listData.value = await getDataByGroupId(id)
      console.log('listData.value', listData.value)

      activeDataId.value = listData.value[0]?.id
      break
    case 'data':
      activeDataId.value = id
      break
    default:
      break
  }
}

onMounted(async () => {
  groups.value = await getCategoryGroups()
  listData.value = await getDataByGroupId(groups.value[0].id)
  activeDataId.value = groups.value[0].id
})
</script>

<style lang="less" scoped>
.active {
  @apply bg-gray-200 text-blue-500;
}
</style>
