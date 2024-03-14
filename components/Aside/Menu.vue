<template>
	<!-- <el-menu :default-active="state.activeIndex" :mode="props.mode" router>
		<template v-for="route in routeList" :key="route.path">
			<el-menu-item v-if="!route.children" :index="route.path">
				<template #title>
					<svg-icon v-if="route.meta.icon" :name="route.meta.icon" class="mr4" />
					{{ route.name }}
				</template>
			</el-menu-item>
			<el-sub-menu v-else :index="route.path">
				<template #title>
					<svg-icon v-if="route.meta.icon" :name="route.meta.icon" class="mr4" />
					{{ route.name }}
				</template>
				<el-menu-item v-for="child in route.children" :index="child.path">
					<template #title>
						<svg-icon v-if="child.meta.icon" :name="child.meta.icon" class="mr4" />
						{{ child.name }}
					</template>
				</el-menu-item>
			</el-sub-menu>
		</template>
	</el-menu> -->
	<div class="menu">
		<div class="item" v-for="route in routeList" :key="route.path">
			<div class="icon">
				<el-icon>
					<svg-icon v-if="route.meta.icon" :name="route.meta.icon" />
				</el-icon>
			</div>
			<div class="title">{{ route.name }}</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useRoute } from 'vue-router';
import { routeList } from '~/assets/utils/routeList';
import { useTitle } from '@vueuse/core';
import { useSettingsStore } from '~/stores/settings';

const { menuWidth } = useSettingsStore();

interface Props {
	mode?: 'horizontal' | 'vertical';
}
const props = withDefaults(defineProps<Props>(), {
	mode: 'horizontal',
});

const _menuWidth = computed(() => menuWidth + 'px');

const route = useRoute();

const state = reactive({
	activeIndex: '/',
});

watch(
	() => route.path,
	(path) => {
		state.activeIndex = path;
		const title = useTitle();
		title.value = `-${route.meta.title}`;
	},
	{
		immediate: true,
	}
);
</script>
<style lang="scss" scoped>
.menu {
	.item {
		.title {
			font-size: 12px;
		}
	}
}
</style>
