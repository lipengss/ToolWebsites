<template>
	<ClientOnly>
		<el-row class="engines">
			<el-col :xs="22" :sm="12" :md="10" :lg="8" :xl="7" class="content">
				<div class="date-wrapper">
					<div class="time">{{ state.time }}</div>
					<div class="date">{{ state.date }} {{ currentWeek }}</div>
				</div>
				<div class="flex-around serach-engines">
					<el-tooltip v-for="(item, index) in filterHotWebsiteList" :key="item.name" effect="light" :content="item.meta.description" placement="top">
						<el-link :type="state.current === item.name ? 'primary' : 'info'" class="engines-item" @click="onChangeEngines(item.name)">
							{{ item.name }}
						</el-link>
					</el-tooltip>
				</div>
				<template v-if="setting.search.show">
					<el-autocomplete
						v-if="setting.search.history"
						v-model="state.query"
						:fetch-suggestions="querySearch"
						clearable
						placeholder="请输入搜索内容"
						@select="handleSelect"
					/>
					<el-input v-else v-model="state.query" clearable size="large" placeholder="请输入搜索内容" @keyup.enter="onActionSearch">
						<template #suffix>
							<el-icon :size="20">
								<Search />
							</el-icon>
						</template>
						<template #prefix>
							<img width="20" height="20" :src="currentIcon" id="serach-icon" class="animate__animated animate__rotateInDownLeft" />
						</template>
					</el-input>
				</template>
			</el-col>
		</el-row>
	</ClientOnly>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { Search } from '@element-plus/icons-vue';
import { useDateFormat } from '~/hooks/useDateFormat';
import { useSettingsStore } from '~/stores/settings';

const { setting, engineList } = storeToRefs(useSettingsStore());
const { querySearch } = useSettingsStore();
const { format, formatWeek } = useDateFormat();

const inputHeight = computed(() => `${setting.value.search.height}px`);
const inputRadius = computed(() => `${setting.value.search.radius}px`);
const inputOpacity = computed(() => `rgba(255, 255, 255, ${setting.value.search.opacity})`);

const HOTS = ['Baidu', 'Bing', 'Google', 'GitHub', '搜狗'];

const state = reactive({
	current: 'Baidu',
	query: '',
	date: format(new Date(), 'YYYY年MM月DD日'),
	time: '',
});

let timer: any = null;

onMounted(() => {
	state.time = format(new Date(), 'HH:mm:ss');
	timer = setInterval(() => {
		state.time = format(new Date(), 'HH:mm:ss');
	}, 1000);
});
onUnmounted(() => {
	clearInterval(timer);
	timer = null;
});

function handleSelect(item: IHistoryItem) {
	console.log(item);
}

const currentIcon = computed(() => {
	const item = engineList.find((item) => item.name === state.current);
	return item?.meta.icon || '';
});

const currentWeek = computed(() => formatWeek());

const filterHotWebsiteList = engineList.filter((item) => HOTS.includes(item.name));

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
	const curEngines = engineList.find((item) => item.key === state.current);
	if (!curEngines) return;
	const searchUrl = `${curEngines.url}${state.query}`;
	window.open(searchUrl, '_blank');
}
</script>
<style lang="scss" scoped>
.engines {
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		.date-wrapper {
			min-width: 140px;
			margin-top: 10vh;
			text-align: center;
			color: var(--el-color-white);
			text-shadow: 1px 1px 1px #000;
			.time {
				font-family: gomarice_rocks_serif;
				font-size: 36px;
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
:deep .el-input {
	margin-bottom: 20px;
	.el-input__wrapper {
		height: v-bind(inputHeight);
		border-radius: v-bind(inputRadius);
		background-color: v-bind(inputOpacity);
		backdrop-filter: blur(10px);
		font-size: 18px;
		.el-input__inner {
			letter-spacing: 1px;
			color: #fff;
		}
	}
}
</style>
