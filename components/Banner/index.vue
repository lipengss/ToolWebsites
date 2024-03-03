<template>
	<div class="banner-bg">
		<el-row class="banner">
			<el-col :xs="22" :sm="12" :md="10" :lg="8" :xl="7" class="content">
				<div class="date-wrapper">
					<div class="time">{{ state.time }}</div>
					<div class="date">{{ state.date }} {{ currentWeek }}</div>
				</div>
				<div class="flex-around serach-engines">
					<el-tooltip v-for="(item, index) in filterHotWebsiteList" :key="item.key" :content="item.description" placement="top">
						<el-link
							:type="state.current === item.key ? 'primary' : 'info'"
							class="engines-item"
							@click="onChangeEngines(item.key)"
							@mouseenter="hoverAnimate('in', index)"
							@mouseleave="hoverAnimate('out', index)"
						>
							{{ item.name }}
						</el-link>
					</el-tooltip>
				</div>
				<el-input v-model="state.query" clearable size="large" placeholder="请输入搜索内容" @keyup.enter="onActionSearch">
					<template #append>
						<el-button type="primary" @click="onActionSearch">搜索</el-button>
					</template>
					<template #prefix>
						<img width="20" height="20" :src="currentIcon" id="serach-icon" class="animate__animated animate__rotateInDownLeft" />
					</template>
				</el-input>
			</el-col>
		</el-row>
	</div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue';
import { hotWebsiteList } from '~/assets/utils/hotWebsite';
import { weekFormat } from '~/assets/utils/publicData';
import { useAnimate } from '~/hooks/useAnimate';
import { dayjs } from 'element-plus';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);

const { hoverAnimate } = useAnimate('.engines-item', 'animate__bounceIn');

const HOTS = ['baidu', 'bing', 'google', 'github', 'sougou'];

const state = reactive({
	current: 'baidu',
	query: '',
	date: dayjs().format('YYYY年MM月DD日'),
	time: '',
});

let timer: any = null;

onMounted(() => {
	state.time = dayjs().format('HH:mm:ss');
	timer = setInterval(() => {
		state.time = dayjs().format('HH:mm:ss');
	}, 1000);
});
onUnmounted(() => {
	clearInterval(timer);
	timer = null;
});

const currentIcon = computed(() => {
	const item = hotWebsiteList.find((item) => item.key === state.current);
	return item?.icon || '';
});

const currentWeek = computed(() => weekFormat[dayjs().weekday()]);

const filterHotWebsiteList = hotWebsiteList.filter((item) => HOTS.includes(item.key));

function onChangeEngines(key: string) {
	state.current = key;
	const searchIconDom = document.getElementById('serach-icon');
	if (searchIconDom) {
		searchIconDom.classList.add('animate__animated', 'animate__rotateInDownLeft');
		setTimeout(() => {
			searchIconDom.classList.remove('animate__animated', 'animate__rotateInDownLeft');
		}, 1000);
	}
}

function onActionSearch() {
	const curEngines = hotWebsiteList.find((item) => item.key === state.current);
	if (!curEngines) return;
	const searchUrl = `${curEngines.url}${state.query}`;
	window.open(searchUrl, '_blank');
}
</script>
<style lang="scss" scoped>
.banner-bg {
	background-image: url('~/assets/img/banner.jpg');
	background-size: cover;
	background-position: top;
}
.banner {
	height: 200px;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(4px);
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		.date-wrapper {
			color: var(--el-color-white);
			text-shadow: 1px 1px 1px #000;
			.time {
				font-size: 30px;
				font-weight: bold;
			}
			.date {
				font-size: 12px;
			}
		}
		.serach-engines {
			width: 100%;
			margin-bottom: 4px;
			.engines-item {
				font-size: 14px;
				font-weight: bold;
				text-shadow: 1px 1px 1px #000;
				padding: 6px 4px;
			}
		}
	}
}
</style>
