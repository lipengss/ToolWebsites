<template>
	<div class="container-vertical">
		<filter-tag v-model:active="active" />
		<GirdLayout>
			<template v-for="(app, index) in getApps(active)">
				<GridItem size="1x1" :name="app.name" :index="index">
					<Application :app="app" />
				</GridItem>
			</template>
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
