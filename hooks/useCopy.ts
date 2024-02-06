
import type { Ref } from 'vue'
import { useClipboard } from '@vueuse/core'

export function useCopy(source: Ref<string>) {

  const { copy } = useClipboard({ source: source.value })
  
  function onCopy() {
    copy(source.value)
    ElMessage.success('复制成功！')
  }
  return {
    onCopy
  }
}