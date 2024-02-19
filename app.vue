<template>
	<el-container>
		<el-header>
			<el-menu :default-active="state.activeIndex" mode="horizontal" router>
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
			</el-menu>
		</el-header>
		<el-main id="el-main-scroll-box">
			<div class="container">
				<NuxtPage />
			</div>
		</el-main>
		<el-footer>Footer</el-footer>
	</el-container>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { routeList } from '~/assets/utils/routeList';
import { useRoute } from 'vue-router';

const route = useRoute();

const state = reactive({
	activeIndex: '/',
});

watch(
	() => route.path,
	(path) => {
		state.activeIndex = path;
	},
	{
		immediate: true,
	}
);

useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});
</script>
<style lang="scss" scoped>
.container {
	max-width: 1100px;
	margin: 0 auto;
}
</style>
