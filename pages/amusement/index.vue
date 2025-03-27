<template>
	<div class="container-vertical">
		<filter-tag v-model:active="active" :tags="['videos', 'photo']" />
		<GirdLayout>
			<Card v-for="(app, index) in getApps(active)" :app="app" :index="index" />
		</GirdLayout>
	</div>
</template>
<script setup lang="ts">
import { useApp } from '~/hooks/useApp';
const { getApps } = useApp();

const active = ref('all');

</script>
<style lang="scss" scoped>
.developer {
	position: relative;
	z-index: 100;
	font-size: 24px;
	color: #fff;
}
</style>
