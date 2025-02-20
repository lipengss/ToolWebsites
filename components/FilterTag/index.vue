<template>
	<el-space class="filter-tag">
		<el-tag
			v-for="tag in filterTagList"
			:key="tag.value"
			:type="activeTag === tag.value ? 'success' : 'info'"
			effect="light"
			round
			@click="activeTag = tag.value"
		>
			{{ tag.label }}
		</el-tag>
	</el-space>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { tagList } from '~/assets/utils/publicData';
const activeTag = ref('all');

const props = defineProps<{
	filter: string[];
}>();

const filterTagList = computed(() => {
	return props.filter && props.filter.length ? tagList.filter((n) => props.filter.includes(n.value)) : tagList;
});
</script>
<style lang="scss" scoped>
.filter-tag {
	margin: 0 auto;
	.el-tag {
		cursor: pointer;
	}
}
</style>
