<template>
	<div class="container">
		<div class="tags">
			<el-tag
				v-for="tag in tagList"
				:key="tag.value"
				:type="activeTag === tag.value ? 'success' : 'info'"
				effect="light"
				round
				@click="activeTag = tag.value"
			>
				{{ tag.label }}
			</el-tag>
		</div>
		<GirdLayout>
			<template v-for="(app, index) in appList">
				<GridItem v-if="app.type === 'card'" size="5x2" :name="app.name" :index="index">
					<component :is="card[app.component]" />
				</GridItem>
				<GridItem v-else size="1x1" :name="app.name" :index="index">
					<Application :app="app" />
				</GridItem>
			</template>
		</GirdLayout>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { filterHoutWebSiteList } from '~/assets/website/index';
import { tagList } from '~/assets/utils/publicData';
const settingStore = useSettingsStore();
const { setting } = storeToRefs(useSettingsStore());
const { initGlobalSetting } = settingStore;

const activeTag = ref('all');

const appList = computed(() => {
	const list = filterHoutWebSiteList('/');
	if (activeTag.value === 'all') {
		return list;
	} else {
		return list.filter((n) => n.meta.tag && n.meta.tag.includes(activeTag.value));
	}
});

const screenWidth = computed(() => setting.value.app.screenWidth + setting.value.app.unit);

const card: { [key: string]: any } = {
	Weather: resolveComponent('Weather'),
	Calendar: resolveComponent('Calendar'),
	OffWork: resolveComponent('OffWork'),
};

onMounted(() => {
	initGlobalSetting();
});
</script>
<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	.tags {
		width: v-bind(screenWidth);
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.el-tag {
			cursor: pointer;
			margin-bottom: 10px;
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
	}
}
</style>
