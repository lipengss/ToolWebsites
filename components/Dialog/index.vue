<template>
	<el-dialog
		class="custom-dialog"
		v-model="state.visible"
		:show-close="false"
		width="900px"
		append-to-body
		:lock-scroll="false"
		:fullscreen="state.fullscreen"
		draggable
		@close="onClose"
	>
		<template #header>
			<div class="flex-end">
				<el-button :icon="FullScreen" circle size="small" @click="state.fullscreen = !state.fullscreen" />
				<el-button :icon="CloseBold" circle size="small" @click="emits('update:visible', false)" />
			</div>
		</template>
		<el-scrollbar wrap-class="el-dialog__body" :view-style="{ maxHeight: 'calc(100vh - 40vh)' }">
			<slot />
		</el-scrollbar>
		<template #footer>
			<slot name="footer" v-if="$slots.footer" />
			<div class="footer" v-else>
				<el-button :type="cancelType" @click="emits('update:visible', false)">{{ cancelText }}</el-button>
				<el-button v-if="showConfirm" :type="confirmType" class="confirm-btn"> {{ confirmText }} </el-button>
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
	showConfirm?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
	showConfirm: false,
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

const emits = defineEmits(['update:visible']);

const onClose = () => {
	emits('update:visible', false);
};

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
