<template>
	<el-affix :offset="80">
		<el-card shadow="never" class="mb20">
			<template #header>
				<div class="flex-center header">
					<img src="~/assets/img/fire.gif" width="18" height="18" class="mr6" />
					<span>热门推荐</span>
				</div>
			</template>
			<div v-for="route in rankRouteList" :key="route.path" class="link-item">
				<el-link :type="activeRoute === route.path ? 'primary' : 'default'" :href="route.path">{{ route.name }}</el-link>
			</div>
		</el-card>
		<el-card shadow="never" v-if="props.anchorPoints && props.anchorPoints.length">
			<template #header>
				<div class="flex-center header"><svg-icon name="tool" class="mr6" /> <span>在线工具</span></div>
			</template>
			<div v-for="link in props.anchorPoints" :key="link.id" class="link-item">
				<el-link :type="activeSection === link.id ? 'success' : 'info'" @click="scrollTo(link.id)">{{ link.name }}</el-link>
			</div>
		</el-card>
	</el-affix>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted, onUnmounted, computed } from 'vue';
import { routeList } from '~/assets/utils/routeList';
import { flattenArray } from '~/assets/utils/tools';
import { useRoute } from 'vue-router';

const route = useRoute();

interface Props {
	anchorPoints?: Array<AnchorPoint>;
}
const props = withDefaults(defineProps<Props>(), {});

const activeRoute = ref('');
const activeSection = ref('');

const rankRouteList = computed(() => {
	const sortedArray = flattenArray(routeList)
		.filter((item: RouteItem) => item.meta.rank)
		.sort((a: RouteItem, b: RouteItem) => b.meta.rank - a.meta.rank);
	return sortedArray.slice(0, 10);
});

function scrollTo(selector: string) {
	const element = document.getElementById(selector);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

const updateActiveSection = () => {
	if (!props.anchorPoints) return;
	for (const section of props.anchorPoints) {
		const el = document.getElementById(section.id);
		if (el) {
			const rect = el.getBoundingClientRect();
			if (rect.top <= 0 && rect.bottom > 0) {
				activeSection.value = section.id;
				break;
			}
		}
	}
};
onMounted(() => {
	const scrollBox = document.getElementById('el-main-scroll-box');
	if (scrollBox) {
		scrollBox.addEventListener('scroll', updateActiveSection);
	}
});

onUnmounted(() => {
	const scrollBox = document.getElementById('el-main-scroll-box');
	if (scrollBox) {
		scrollBox.removeEventListener('scroll', updateActiveSection);
	}
});

watch(
	() => route.path,
	(path) => {
		activeRoute.value = path;
	},
	{
		immediate: true,
	}
);
</script>
<style lang="scss" scoped>
.link-item {
	padding: 8px;
	border-bottom: 1px solid var(--el-border-color-light);
}
.header {
	line-height: 24px;
}
</style>
