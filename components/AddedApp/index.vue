<template>
	<ClientOnly>
		<Dialog v-model:visible="state.visible" title="添加应用" width="80%">
			<div class="split-pane">
				<el-scrollbar>
					<el-form :model="state.customIconForm" label-width="100px">
						<el-form-item label="应用图标">
							<div class="app-icon">
								<Application :app="state.customIconForm" />
							</div>
						</el-form-item>
						<el-form-item label="应用名称" prop="name" :rules="{ required: true, message: '请输入应用名称' }">
							<el-input v-model="state.customIconForm.name" placeholder="应用名称" :prefix-icon="Edit" />
						</el-form-item>
						<el-form-item label="访问地址" prop="path" :rules="{ required: true, message: '请输入访问地址' }">
							<el-input v-model="state.customIconForm.path" placeholder="https://" :prefix-icon="Link">
								<template #append>
									<el-button @click="getWebsiteIcon">获取图标</el-button>
								</template>
							</el-input>
						</el-form-item>
						<el-form-item label="标签" prop="meta.tag" :rules="{ required: true, message: '必选选择一个标签' }">
							<el-checkbox-group v-model="state.customIconForm.meta.tag">
								<el-checkbox v-for="tag in tagList" :key="tag.value" :label="tag.label" :value="tag.value" />
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="排行" prop="meta.rank">
							<el-space>
								<el-input-number v-model="state.customIconForm.meta.rank" />
								<img src="/assets/img/fire.gif" width="22" height="22" alt="" />
							</el-space>
						</el-form-item>
						<el-form-item label="图标类型">
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
						<el-form-item label="图标背景色">
							<ColorPicker :colorList="predefineColors" v-model:color="state.customIconForm.meta.bgColor" />
						</el-form-item>
						<el-form-item label="图标大小" prop="size">
							<el-slider v-model="state.customIconForm.meta.size" :min="40" :max="100" />
						</el-form-item>
						<el-form-item label="图标布局" prop="layout">
							<el-radio-group v-model="state.customIconForm.meta.layout">
								<el-radio-button label="1x1" value="1x1" />
								<el-radio-button label="2x2" value="2x2" />
								<el-radio-button label="5x2" value="5x2" />
							</el-radio-group>
						</el-form-item>
						<el-form-item label="描述" prop="meta.description" :rules="{ required: true, message: '请输入描述信息' }">
							<el-input v-model="state.customIconForm.meta.description" type="textarea" placeholder="应用介绍..." />
						</el-form-item>
					</el-form>
				</el-scrollbar>
				<el-form>
					<el-form-item>
						<el-input v-model="strJSON" :autosize="{ minRows: 27, maxRows: 27 }" resize="none" type="textarea" />
					</el-form-item>
				</el-form>
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
import { nextTick } from 'vue';
import { Link, Edit } from '@element-plus/icons-vue';
import { websites } from '~/assets/website/index';
import { predefineColors } from '~/assets/utils/publicData';
import { categories } from '~/assets/website/categories';
import { useRoute } from 'vue-router';
import { useCopy } from '~/hooks/useCopy';
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
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-',
			tag: [],
			size: 60,
			color: '#fff',
			bgColor: '#FF4500',
			layout: '1x1',
			description: '',
		},
	},
});
const route = useRoute();

const strJSON = computed(() => JSON.stringify(state.customIconForm, undefined, 4));

const tagList = computed(() => categories.filter((n) => n.path === route.path)[0].meta.tgas);

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

function onSave() {
	const str = JSON.stringify(state.customIconForm, null, '\t');
	const { onCopy } = useCopy(toRef(JSON.stringify(state.customIconForm)));
	onCopy();
}

function prevEditApp() {
	const index = websites.findIndex((n) => n.name === state.customIconForm.name);
	const prevIndex = index - 1;
	if (prevIndex !== -1) {
		state.customIconForm = useCloneDeep(websites[prevIndex]);
	} else {
		state.customIconForm = useCloneDeep(websites[websites.length - 1]);
	}
	console.log(index);
	console.log(state.customIconForm);
}
function nextEditApp() {
	console.log(state.customIconForm);
	const index = websites.findIndex((n) => n.name === state.customIconForm.name);
	const prevIndex = index + 1;
	if (prevIndex !== websites.length) {
		state.customIconForm = useCloneDeep(websites[prevIndex]);
	} else {
		state.customIconForm = useCloneDeep(websites[websites.length - 1]);
	}
}

function open() {
	state.visible = true;
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
	grid-template-columns: 1fr 450px;
}

.app-icon {
	width: 60px;
	height: 60px;
	border-radius: 10px;
	overflow: hidden;
}
</style>
