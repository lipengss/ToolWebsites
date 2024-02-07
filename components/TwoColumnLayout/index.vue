<template>
  <el-row :gutter="10">
    <el-col :lg="18">
      <slot />
    </el-col>
    <el-col :lg="6">
      <HotMenu :anchor-points="props.anchorPoints" />
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { withDefaults, defineProps} from 'vue'

interface Props {
  anchorPoints: Array<AnchorPoint>
}
const props = withDefaults(defineProps<Props>(), {

})



</script>