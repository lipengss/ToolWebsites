<template>
	<div class="contextmenu" v-if="context.show" :style="{ left: context.clientX + 'px', top: context.clientY + 'px' }">
		<template v-if="context.type === 'app'">
			<div class="item" @click="appDialogRef.edit(curApp)">
				<el-icon><Edit /></el-icon>
				<span>编辑</span>
			</div>
			<div class="item">
				<el-icon><svg-icon name="batchEdit" /></el-icon>
				<span>批量编辑</span>
			</div>
			<div class="item" @click="onDeleteApp">
				<el-icon><Delete /></el-icon>
				<span>删除</span>
			</div>
			<div class="item" @click="onLikeApp">
				<el-icon><svg-icon :name="appIsLike ? 'onLike' : 'like'" /></el-icon>
				<span>{{ appIsLike ? '取消收藏' : '收藏' }}</span>
			</div>
		</template>
		<template v-else>
			<div class="item" @click="changeWallpaper">
				<el-icon><svg-icon name="menu-picture" /></el-icon>
				<span>换壁纸</span>
			</div>
			<div class="item" @click="showDrawer = true">
				<el-icon><svg-icon name="setting" /></el-icon>
				<span>设置</span>
			</div>
			<div class="item" @click="appDialogRef.open()">
				<el-icon><CirclePlus /></el-icon>
				<span>添加应用</span>
			</div>
		</template>
	</div>
	<AddedApp ref="appDialogRef" />
</template>
<script setup lang="ts">
import { reactive, defineAsyncComponent } from 'vue';
import { Delete, Edit, CirclePlus } from '@element-plus/icons-vue';
import { websites } from '~/assets/website/index';
import { useSettingsStore } from '~/stores/settings';
import mitt from '~/assets/utils/mitt';

const settingStore = useSettingsStore();

const { setting, showDrawer } = storeToRefs(useSettingsStore());

const { setGlobalSetting, changeWallpaper } = settingStore;

const AddedApp = defineAsyncComponent(() => import('~/components/AddedApp/index.vue'));

const appDialogRef = ref();

const curApp = ref<RouteItem>({
	name: '',
	path: '',
	type: '',
	meta: {
		rank: 0,
		icon: '',
		layout: '',
	},
});

const context = reactive({
	show: false,
	clientX: 0,
	clientY: 0,
	type: '',
});

function contextmenu(event: any) {
	const { clientX, clientY } = event;
	context.clientX = clientX;
	context.clientY = clientY;
	context.show = true;
}

function onDeleteApp() {
	const { name } = curApp.value;
	const names = setting.value.excludeWeb.map((item) => item.name);
	if (!names.includes(name)) {
		const index = websites.findIndex((item) => item.name === name);
		if (index !== -1) {
			websites.splice(index, 1);
		}
		setting.value.excludeWeb.push(curApp.value);
	}
	setGlobalSetting();
}

const appIsLike = computed(() => {
	const strArr = setting.value.collectionWeb.map((item) => item.name);
	return strArr.includes(curApp.value.name);
});

function onLikeApp() {
	const { name } = curApp.value;
	const names = setting.value.collectionWeb.map((item) => item.name);
	if (!names.includes(name)) {
		setting.value.collectionWeb.push(curApp.value);
		ElMessage.success('收藏成功！');
	} else {
		const index = setting.value.collectionWeb.findIndex((n) => n.name === name);
		setting.value.collectionWeb.splice(index, 1);
		ElMessage.warning('已取消收藏！');
		return;
	}
	setGlobalSetting();
}

mitt.on('contextmenuApp', ({ app, type, clientX, clientY }: { app: RouteItem; type: string; clientX: number; clientY: number }) => {
	if (type === 'app') {
		curApp.value = app;
		context.type = type;
		context.clientX = clientX;
		context.clientY = clientY;
		context.show = true;
	}
});

onMounted(() => {
	window.addEventListener('click', () => {
		context.show = false;
	});
	window.addEventListener('contextmenu', (event) => {
		context.type = 'global';
		event.preventDefault();
		contextmenu(event);
	});
});
</script>
<style lang="scss" scoped>
.contextmenu {
	position: fixed;
	z-index: 900;
	border-radius: 6px;
	cursor: pointer;
	padding: 5px 4px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
	background-color: #0b0b0bcc;
	backdrop-filter: blur(10px);
	:deep .item {
		min-width: 100px;
		line-height: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 4px 6px;
		margin: 4px 0;
		border-radius: 4px;
		color: #fff;
		.el-icon {
			margin-right: 6px;
		}
		span {
			font-size: 12px;
			flex-shrink: 0;
			margin-left: 10px;
		}
		&:hover {
			background-color: #ffffff1a;
			transition: background-color 0.3s ease-in-out;
		}
	}
}
</style>
