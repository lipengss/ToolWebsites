<template>
	<GirdLayout>
		<template v-for="(app, index) in getApps()">
			<GridItem size="1x1" :name="app.name" :index="index">
				<Application :app="app" />
			</GridItem>
		</template>
	</GirdLayout>
</template>
<script setup lang="ts">
import { useApp } from '~/hooks/useApp';
const { getApps } = useApp();
</script>
<style lang="scss" scoped>
.developer {
	position: relative;
	z-index: 100;
	font-size: 24px;
	color: #fff;
}
</style>
