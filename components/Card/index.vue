<template>
	<div class="card" @contextmenu.prevent="onContextmenu" @click="onclick">
		<div class="top">
			<div class="logo">
				<img v-if="app.meta.type === 'img'" :src="app.meta.value" :width="app.meta.size" :height="app.meta.size" />
				<el-icon v-else-if="app.meta.type === 'icon' && app.meta.value" :size="app.meta.size" color="red">
					<svg-icon :name="app.meta.value" :color="app.meta.color"></svg-icon>
				</el-icon>
				<div v-else class="icon-text" :style="{ width: app.meta.size + 'px', height: app.meta.size + 'px' }">{{ app.meta.value }}</div>
			</div>
			<div class="right">
				<div class="title">{{ app.name }}</div>
				<div class="company">{{ app.companyName }}</div>
				<el-space style="overflow: hidden">
					<div v-for="tag in tags.slice(0, 3)" :key="tag.value" :color="tag.color" class="tag" :style="`--bg-color:${tag.color}`">
						{{ tag.label }}
					</div>
					<span v-if="tags.length > 3">...</span>
				</el-space>
			</div>
		</div>
		<div class="bottom">
			<div class="desc">
				{{ app.meta.description }}
				<el-text class="mx-1" type="primary">详情</el-text>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import tagList from '~/assets/website/tagList.json';
import mitt from '~/assets/utils/mitt';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

interface Props {
	app: RouteItem;
}

const props = withDefaults(defineProps<Props>(), {});

const meta = computed(() => props.app.meta);

const { setting } = storeToRefs(useSettingsStore());
const { setGlobalSetting } = useSettingsStore();

function onclick() {
	if (meta.value.tag.includes('card')) return;
	const { name } = props.app;
	if (!name) return;
	if (Object.prototype.hasOwnProperty.call(setting.value.hotWebRanks, name)) {
		setting.value.hotWebRanks[name]++;
	} else {
		setting.value.hotWebRanks[name] = 1;
	}
	setGlobalSetting();
	window.open(props.app.path);
}

const bgColor = computed(() => props.app.meta.bgColor);

const tags = computed(() => tagList.filter((item) => props.app.meta.tag.includes(item.value)));

function onContextmenu(event: any) {
	const card = event.target.closest('.card');
	if (card) {
		const { clientX, clientY } = event;
		mitt.emit('contextmenuApp', {
			app: props.app,
			type: 'app',
			clientX,
			clientY,
		});
	}
}
</script>

<style lang="scss" scoped>
.card {
	padding: 12px;
	border-radius: 10px;
	background-color: #fff;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
	}
	.top {
		display: flex;
		margin-bottom: 8px;
		.logo {
			width: 60px;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 10px;
			border-radius: 14px;
			background-color: v-bind(bgColor);
			box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
			flex-shrink: 0;
			overflow: hidden;
		}
		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			overflow: hidden;
			.title {
				font-size: 14px;
				font-weight: bold;
			}
			.company {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 12px;
				color: #999;
			}
			.tag {
				text-wrap: nowrap;
				font-size: 12px;
				padding: 2px 8px;
				border-radius: 20px;
				background-color: var(--bg-color);
			}
		}
	}
	.bottom {
		.desc {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			font-size: 12px;
			color: #666;
		}
	}
}
</style>
