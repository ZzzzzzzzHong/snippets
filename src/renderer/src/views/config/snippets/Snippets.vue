<template>
  <div class="flex text-xs h-full">
    <div class="p-2">
      <div class="w-40 flex">
        <a-input v-model:value="searchKey" @change="handleSearch(searchKey)">
          <template #prefix>
            <search class="cursor-pointer" @click="handleSearch(searchKey)" />
          </template>
        </a-input>
        <a-button
          type="primary"
          class="ml-1 w-4 flex justify-center items-center"
          @click="addSnippets?.init()"
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
          :class="{
            active: data.id === activeDataId,
            'text-cyan-400': searchKey && data.title.indexOf(searchKey) > -1
          }"
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
  <AddDialog ref="addSnippets" title="添加分组" :footer="null">
    <AddForm
      ref="addForm"
      :form="formData"
      :form-item="createRules(formItem)"
      :form-buttom="formButtom"
      :loading="formLoading"
    ></AddForm>
  </AddDialog>
</template>

<script lang="ts" setup>
import { FolderCodeOne, Plus, Search } from '@icon-park/vue-next'
import { computed, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import SnippetDetail from './SnippetDetail.vue'
import AddDialog from '@renderer/components/common/CModal.vue'
import AddForm from '@renderer/components/common/CForm.vue'
import SqlSnippets from '@renderer/sql/snippets/sqlSnippets'
import createRules from '@renderer/utils/createRules'

// 分组
const groups = shallowRef<CategoryType[]>([])
const activeGroupId = ref(0)
const getCategoryGroups = async (key?: string) => {
  return key
    ? window.api.sql('returnFindAll', SqlSnippets.selectGroupsBySearchKey(key))
    : window.api.sql('returnFindAll', SqlSnippets.selectGroups())
}
watch(groups, async (nVal) => {
  const id = nVal[0]?.id
  activeGroupId.value = id
  listData.value = id ? await getDataByGroupId(nVal[0]?.id) : []
  activeDataId.value = listData.value[0]?.id
})
// 分组搜索
const searchKey = ref('')
const handleSearch = async (key: string) => {
  groups.value = await getCategoryGroups(key)
}

// 内容
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
      activeDataId.value = listData.value[0]?.id
      break
    case 'data':
      activeDataId.value = id
      break
    default:
      break
  }
}

// 新增弹窗
const addSnippets = ref<InstanceType<typeof AddDialog>>()
const addForm = ref<InstanceType<typeof AddForm>>()
const formData = reactive({ groupName: '' })
const formItem = reactive([
  {
    key: 'groupName',
    label: '名称',
    type: 'input',
    required: true,
    placeholder: '请输入分组名称'
  }
])
const formButtom = reactive<FormButtom[]>([
  {
    label: '取消',
    key: 'cancel',
    callback: () => {
      addSnippets.value?.close()
    }
  },
  {
    label: '确定',
    key: 'submit',
    type: 'primary',
    callback: (formD) => {
      Object.assign(formData, formD)
      formLoading.value = true
      setTimeout(() => {
        formData.groupName = ''
        console.log('dadada')
        formLoading.value = false
        addSnippets.value?.close()
      }, 3000)
    }
  }
])
const formLoading = ref(false)

onMounted(async () => {
  groups.value = await getCategoryGroups()
})
</script>

<style lang="less" scoped>
.active {
  @apply bg-gray-200 text-blue-500;
}
</style>
