<template>
	<el-dialog v-model="props.visible" :show-close="false" width="900px" :fullscreen="state.fullscreen" draggable>
		<template #header>
			<div class="flex-end">
				<el-button :icon="FullScreen" circle size="small" @click="state.fullscreen = !state.fullscreen" />
				<el-button :icon="CloseBold" circle size="small" @click="emits('update:visible', false)" />
			</div>
		</template>
		<slot />
	</el-dialog>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { CloseBold, FullScreen } from '@element-plus/icons-vue';

interface Props {
	visible: boolean;
}
const props = withDefaults(defineProps<Props>(), {});

const state = reactive({
	fullscreen: false,
});

const emits = defineEmits(['update:visible']);
</script>
