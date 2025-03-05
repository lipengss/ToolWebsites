<template>
	<div class="container-vertical">
		<filter-tag v-model:active="active" />
		<GirdLayout>
			<GridItem v-for="(app, index) in getApps(active)" :app="app" :index="index" />
		</GirdLayout>
	</div>
</template>
<script setup lang="ts">
import { useApp } from '~/hooks/useApp';

const { getApps } = useApp();

const active = ref('news');
</script>
<style lang="scss" scoped>
.developer {
	position: relative;
	z-index: 100;
	font-size: 24px;
	color: #fff;
}
</style>
