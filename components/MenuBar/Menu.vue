<template>
	<div class="menu">
		<el-scrollbar>
			<div
				class="item"
				v-for="route in routeList"
				:key="route.path"
				:class="{ active: state.activeIndex === route.path }"
				@click="onRouteChange(route)"
			>
				<div class="icon">
					<el-icon>
						<svg-icon v-if="route.meta.icon" :name="route.meta.icon" />
					</el-icon>
				</div>
				<div class="title">{{ route.name }}</div>
			</div>
		</el-scrollbar>
	</div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { routeList } from '~/assets/utils/routeList';
import { useTitle } from '@vueuse/core';

const route = useRoute();
const router = useRouter();

const state = reactive({
	activeIndex: '/',
});

// 路由切换
function onRouteChange(route: RouteItem) {
	router.push(route.path);
	state.activeIndex = route.path;
}

// 路由监听
watch(
	() => route.path,
	(path) => {
		state.activeIndex = path;
		const title = useTitle();
		title.value = `我的工具-${route.meta.title}`;
	},
	{
		immediate: true,
	}
);
</script>
<style lang="scss" scoped>
.menu {
	flex: 1;
	overflow-y: auto;
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
		cursor: pointer;
		.title {
			font-size: 12px;
		}
		.el-icon {
			transition: all 0.2s ease-in-out;
		}
		&:hover {
			.el-icon {
				transform: scale(1.3);
			}
		}
	}
	.active {
		background-color: rgba(255, 255, 255, 0.1);
	}
}
</style>
