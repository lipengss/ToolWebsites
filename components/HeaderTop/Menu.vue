<template>
	<el-menu :default-active="state.activeIndex" :mode="props.mode" router>
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
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useRoute } from 'vue-router';
import { routeList } from '~/assets/utils/routeList';

interface Props {
	mode: 'horizontal' | 'vertical';
}
const props = withDefaults(defineProps<Props>(), {
	mode: 'horizontal',
});

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
</script>
