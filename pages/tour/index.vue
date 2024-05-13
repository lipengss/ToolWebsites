<template>
	<ClientOnly>
		<el-tour v-model="tour">
			<el-tour-step target="#global-switch" title="壁纸切换" description="" />
			<el-tour-step target="#global-setting" title="偏好设置" description="主题/背景设置，菜单设置，图标布局设置，时间设置..." />
			<el-tour-step target="#card-off-work" title="下班倒计时" description="点击可以设置工作时间，日薪等功能！" />
		</el-tour>
	</ClientOnly>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const { tour } = storeToRefs(useSettingsStore());
</script>
