<template>
	<div class="container-full">
		<div class="grid-item" v-for="item in layout">
			<component v-if="item.component" :is="item.component" class="component-item" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useAnimate } from '~/hooks/useAnimate';

const layout = shallowRef([
	{ component: resolveComponent('Weather') },
	{ component: resolveComponent('Calendar') },
	{ component: resolveComponent('OffWork') },
]);

const reader = ref(false);

definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
});

onMounted(() => {
	reader.value = true;
});
</script>
<style lang="scss" scoped>
.container-full {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
	gap: 20px;
	padding: 20px;
	box-sizing: border-box;
	.grid-item {
		border-radius: 10px;
		overflow: hidden;
	}
}
</style>
