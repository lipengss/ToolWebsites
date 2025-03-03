<template>
	<el-space class="filter-tag" v-if="filterTagList.length > 1">
		<el-check-tag v-for="tag in filterTagList" :key="tag.value" effect="light" round :checked="tag.value === props.active" @click="onActive(tag)">
			{{ tag.label }}
		</el-check-tag>
	</el-space>
</template>
<script setup lang="ts">
import { computed, defineEmits } from 'vue';
import { categories } from '~/assets/website/categories';
import { useRoute } from 'vue-router';

const props = defineProps<{
	active: string;
}>();

const route = useRoute();

const emit = defineEmits(['update:active']);

const filterTagList = computed(() => {
	const currentRoute = categories.find((n) => n.path === route.path);
	if (currentRoute && currentRoute.meta.tgas) {
		return currentRoute.meta.tgas;
	} else {
		return [];
	}
});

function onActive(tag: { value: string; label: string; checked: boolean }) {
	emit('update:active', tag.value);
}
</script>
<style lang="scss" scoped>
.filter-tag {
	margin: 0 auto;
	.el-tag {
		cursor: pointer;
	}
}
</style>
