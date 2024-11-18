<template>
  <a-modal
    v-model:open="show"
    class="gen-dialog"
    cancel-text="取消"
    ok-text="确定"
    destroy-on-close
    v-bind="$attrs"
    @ok="handleOk"
  >
    <slot name="default"></slot>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
const init = () => {
  show.value = true
}
const close = () => {
  show.value = false
}

const handleOk = () => {
  // 向外抛出事件
  close()
}

defineExpose({
  init,
  close,
  handleOk
})
</script>
