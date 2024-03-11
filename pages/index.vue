<template>
	<div class="container-full">
		<div class="grid-item">
			<Weather />
		</div>
		<div class="grid-item">
			<Calendar />
		</div>
		<div class="grid-item">
			<OffWork />
		</div>
		<div class="grid-item">xx</div>
	</div>
</template>
<script setup lang="ts">
definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
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
