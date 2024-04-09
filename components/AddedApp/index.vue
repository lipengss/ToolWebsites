<template>
	<GridItem size="1x1" disabled-contextmenu>
		<el-icon :size="38" color="#409eff" @click="onAdded"> <CirclePlusFilled /></el-icon>
	</GridItem>
	<Dialog v-model:visible="state.visible" title="添加应用"> </Dialog>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { CirclePlusFilled } from '@element-plus/icons-vue';

const { setting } = storeToRefs(useSettingsStore());

const state = reactive({
	visible: false,
});

function onAdded() {
	state.visible = true;
}
</script>
<style lang="scss" scoped>
.el-icon {
	width: 100%;
	height: 100%;
	background-color: var(--el-bg-color);
	cursor: pointer;
}
</style>
