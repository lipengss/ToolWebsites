<template>
	<ClientOnly>
		<Dialog v-model:visible="state.visible" title="添加应用" width="1200px">
			<div class="split-pane">
				<Card :app="state.customIconForm" class="p-card" />
				<el-scrollbar>
					<el-form ref="formRef" :model="state.customIconForm">
						<el-form-item prop="name" :rules="{ required: true, message: '请输入应用名称' }">
							<el-input v-model="state.customIconForm.name" placeholder="应用名称" :prefix-icon="Edit" />
						</el-form-item>
						<el-form-item prop="companyName" :rules="{ required: true, message: '请输入所属机构' }">
							<el-input v-model="state.customIconForm.companyName" placeholder="所属机构">
								<template #prefix>
									<svg-icon name="company" />
								</template>
							</el-input>
						</el-form-item>
						<el-form-item prop="path" :rules="{ required: true, message: '请输入访问地址' }">
							<el-input v-model="state.customIconForm.path" placeholder="https://" :prefix-icon="Link">
								<template #append>
									<el-button @click="getWebsiteIcon">获取图标</el-button>
								</template>
							</el-input>
						</el-form-item>
						<el-form-item prop="meta.tag" :rules="{ required: true, message: '必选选择一个标签' }">
							<el-select v-model="state.customIconForm.meta.tag" multiple placeholder="选择一个标签" style="width: 100%">
								<el-option v-for="tag in tagList" :key="tag.value" :label="tag.label" :value="tag.value">
									<div class="option-item">
										<div class="block" :style="`--bgColor:${tag.color}`">
											{{ tag.label }}
										</div>
									</div>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="meta.rank">
							<el-space>
								<el-input-number v-model="state.customIconForm.meta.rank" />
								<img src="/assets/img/fire.gif" width="22" height="22" alt="" />
							</el-space>
						</el-form-item>
						<el-form-item>
							<el-space>
								<el-radio-group v-model="state.customIconForm.meta.type" @change="onChangeIconType">
									<el-radio-button label="图标" value="icon" />
									<el-radio-button label="文字" value="text" />
									<el-radio-button label="图片" value="img" />
								</el-radio-group>
								<el-form-item prop="meta.value">
									<el-input v-model="state.customIconForm.meta.value" placeholder="图标值" :prefix-icon="Edit" />
								</el-form-item>
								<el-form-item>
									<ColorPicker v-model:color="state.customIconForm.meta.color" />
								</el-form-item>
							</el-space>
						</el-form-item>
						<el-form-item prop="meta.bgColor">
							<ColorPicker :colorList="predefineColors" v-model:color="state.customIconForm.meta.bgColor" />
						</el-form-item>
						<el-form-item prop="meta.size">
							<el-slider v-model="state.customIconForm.meta.size" :min="40" :max="100" />
						</el-form-item>
						<el-form-item prop="meta.description" :rules="{ required: true, message: '请输入描述信息' }">
							<el-input v-model="state.customIconForm.meta.description" type="textarea" placeholder="应用介绍..." />
						</el-form-item>
					</el-form>
				</el-scrollbar>
			</div>
			<template #footer>
				<el-button type="info" @click="onSave">复制JSON</el-button>
				<el-button type="primary">保存并继续</el-button>
				<el-button type="default" @click="prevEditApp">上一个</el-button>
				<el-button type="default" @click="nextEditApp">下一个</el-button>
			</template>
		</Dialog>
	</ClientOnly>
</template>
<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { Link, Edit } from '@element-plus/icons-vue';
import { websites } from '~/assets/website/index';
import { predefineColors } from '~/assets/utils/publicData';
import tagList from '~/assets/website/tagList.json';
import { useCopy } from '~/hooks/useCopy';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const state: {
	visible: boolean;
	activeTab: string;
	customIconForm: RouteItem;
} = reactive({
	visible: false,
	activeTab: 'customIcons',
	customIconForm: {
		name: '',
		path: '',
		companyName: '',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-',
			tag: [],
			size: 60,
			color: '#fff',
			bgColor: '#fff',
			layout: '1x1',
			description: '',
		},
	},
});

const { setting } = storeToRefs(useSettingsStore());

const width = computed(() => setting.value.app.width + 'px');

const formRef = ref();

async function getWebsiteIcon() {
	state.customIconForm.meta.type = 'img';
	const { path } = state.customIconForm;
	state.customIconForm.meta.value = `${path}favicon.ico`;
}

function onChangeIconType(type: string | number | boolean | undefined) {
	switch (type) {
		case 'icon':
			state.customIconForm.meta.value = 'app-';
			break;
		case 'text':
			state.customIconForm.meta.value = 'A';
			break;
		default:
			state.customIconForm.meta.value = 'https://';
			break;
	}
}

function onValidate(callback?: () => void) {
	formRef.value.validate((valid: boolean) => {
		if (valid) {
			callback && callback();
		} else {
			ElMessage.error('请检查表单信息是否填写完整');
		}
	});
}

function onSave() {
	const { onCopy } = useCopy(toRef(JSON.stringify(state.customIconForm, undefined, 2)));
	onValidate(() => {
		onCopy();
	});
}

function prevEditApp() {
	const index = websites.findIndex((n) => n.name === state.customIconForm.name);
	const prevIndex = index - 1;
	if (prevIndex !== -1) {
		state.customIconForm = useCloneDeep(websites[prevIndex]) as RouteItem;
	} else {
		state.customIconForm = useCloneDeep(websites[websites.length - 1]) as RouteItem;
	}
}
function nextEditApp() {
	const index = websites.findIndex((n) => n.name === state.customIconForm.name);
	const prevIndex = index + 1;
	if (prevIndex !== websites.length) {
		state.customIconForm = useCloneDeep(websites[prevIndex]) as RouteItem;
	} else {
		state.customIconForm = useCloneDeep(websites[websites.length - 1]) as RouteItem;
	}
}

function open() {
	state.visible = true;
	formRef.value.resetFields();
}

function edit(app: RouteItem) {
	open();
	const cloneApp = useCloneDeep(app);
	nextTick(() => {
		state.customIconForm = cloneApp;
	});
}

defineExpose({ open, edit });
</script>
<style lang="scss" scoped>
.el-tabs {
	height: 100%;
}
.el-icon {
	width: 100%;
	height: 100%;
	background-color: var(--el-bg-color);
	cursor: pointer;
}
.el-tag {
	margin-right: 10px;
	margin-bottom: 10px;
}
.custom-item {
	border-radius: 8px;
	cursor: pointer;
}
.active {
	border: 1px solid var(--el-color-primary);
}

.split-pane {
	display: grid;
	grid-gap: 20px;
	align-items: center;
	padding-left: 30px;
	grid-template-columns: 260px 1fr;
	.p-card {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
}

.el-select-dropdown__item {
	display: flex;
	align-items: center;
	.option-item {
		display: flex;
		align-items: center;
		.block {
			height: 24px;
			display: flex;
			align-items: center;
			padding: 0 14px;
			border-radius: 20px;
			margin-right: 8px;
			background-color: var(--bgColor);
			color: var(--el-text-color-regular);
			font-size: 12px;
			font-weight: normal;
		}
	}
}
</style>
