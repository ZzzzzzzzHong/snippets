<template>
  <a-form ref="formRef" :model="cForm" class="gen-form" v-bind="$attrs">
    <a-form-item
      v-for="item in formItem"
      :key="item.key"
      :name="item.key"
      :label="item.label"
      :rules="item.rules"
    >
      <template v-if="item.type === 'input'">
        <a-input
          v-model:value="cForm[item.key]"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
        />
      </template>
      <template v-else>暂未处理其他类型</template>
    </a-form-item>
    <!-- 按钮组 -->
    <a-form-item v-if="cFormButtom" class="text-right">
      <a-button
        v-for="btn in cFormButtom"
        :key="btn.key"
        :type="btn.type || 'default'"
        :loading
        class="ml-2"
        @click="handleBtn(btn)"
        >{{ btn.label }}</a-button
      >
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const props = defineProps<{
  form: object
  formItem: FormItemType[]
  formButtom: FormButtom[]
  loading?: boolean
}>()
const cForm = reactive({ ...props.form })
const cFormButtom = reactive([...props.formButtom])
const formRef = ref()

const handleBtn = (btn: FormButtom) => {
  if (btn.key === 'submit') {
    formRef.value
      .validate()
      .then(() => {
        btn.callback(cForm, btn.key)
      })
      .catch((err) => {
        console.log('err', err)
      })
  } else {
    btn.callback(cForm, btn.key)
  }
}
</script>
