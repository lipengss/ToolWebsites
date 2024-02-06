<template>
  <div class="flex-between pt10 pb10">
    <el-input v-model="state.textarea" :rows="10" :autosize="{ minRows: 10, maxRows: 10}" resize="none" placeholder="转换后的base64字符串" type="textarea" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const state:PictureState = reactive({
  file: {
    name: '',
    size: 0,
    list: []
  },
  textarea: '',
  radio: 'base64'
})

</script>