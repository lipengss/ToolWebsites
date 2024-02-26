<template>
	<el-header class="el-header">
		<Menu class="menu-horizontal" />
		<el-button class="expand" :icon="Expand" @click="state.isDrawer = !state.isDrawer" />
		<div class="user-panel">
			<el-tooltip effect="dark" :content="`${isDark ? '夜间模式' : '日间模式'}`" placement="bottom">
				<el-button :icon="isDark ? Moon : Sunny" round circle @click="toggleDark()" />
			</el-tooltip>
		</div>
		<el-drawer v-model="state.isDrawer" direction="ltr" size="80%" :show-close="false">
			<Menu mode="vertical" />
		</el-drawer>
	</el-header>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { Moon, Sunny, Expand } from '@element-plus/icons-vue';
import { useDark, useToggle } from '@vueuse/core';
import Menu from './Menu.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const state = reactive({
	isDrawer: false,
});

onMounted(() => {
	toggleDark();
});
</script>
<style lang="scss" scoped>
.el-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--el-border-color);
}
.expand {
	display: none;
}

// 显示小屏幕的菜单
@media (max-width: 1024px) {
	.menu-horizontal {
		display: none;
	}
	.expand {
		display: block;
	}
	:deep .el-drawer__body {
		padding: 0;
		.el-menu {
			border-right: none;
		}
	}
} /*>=1024的设备*/
</style>
