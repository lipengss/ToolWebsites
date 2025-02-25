<template>
	<el-dialog
		v-model="state.visible"
		:show-close="false"
		width="900px"
		append-to-body
		:lock-scroll="false"
		:fullscreen="state.fullscreen"
		draggable
		@close="emits('onClose')"
	>
		<template #header>
			<div class="flex-end">
				<el-button :icon="FullScreen" circle size="small" @click="state.fullscreen = !state.fullscreen" />
				<el-button :icon="CloseBold" circle size="small" @click="emits('update:visible', false)" />
			</div>
		</template>
		<slot />
		<template #footer>
			<slot name="footer" v-if="$slots.footer" />
			<div class="footer" v-else>
				<el-button :type="cancelType">{{ cancelText }}</el-button>
				<el-button :type="confirmType" class="confirm-btn"> {{ confirmText }} </el-button>
			</div>
		</template>
	</el-dialog>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { CloseBold, FullScreen } from '@element-plus/icons-vue';

const { setting } = storeToRefs(useSettingsStore());

type btnType = '' | 'default' | 'success' | 'warning' | 'info' | 'primary' | 'text' | 'danger';

interface Props {
	visible: boolean;
	confirmText?: string;
	confirmType?: btnType;
	cancelText?: string;
	cancelType?: btnType;
}
const props = withDefaults(defineProps<Props>(), {
	confirmText: '确定',
	confirmType: 'primary',
	cancelText: '取消',
	cancelType: 'default',
});

const state = reactive({
	visible: false,
	fullscreen: false,
});

const picture = computed(() => setting.value.bg.picture);

const emits = defineEmits(['update:visible', 'onClose']);

watch(
	() => props.visible,
	(visible: boolean) => {
		state.visible = visible;
	},
	{
		immediate: true,
	}
);
</script>
<style lang="scss">
.el-dialog {
	background-image: v-bind('picture.values');
	.el-dialog__body {
		height: calc(100vh - 34vh);
		overflow-y: auto;
	}
	.footer {
		padding-top: 16px;
		border-top: 1px solid var(--el-color-info-light-7);
		.confirm-btn {
			padding-left: 40px;
			padding-right: 40px;
		}
	}
}
</style>
