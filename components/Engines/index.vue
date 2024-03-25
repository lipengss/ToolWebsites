<template>
	<ClientOnly>
		<el-row class="engines">
			<el-col :xs="22" :sm="12" :md="10" :lg="8" :xl="7" class="content">
				<div class="date-wrapper">
					<div class="time">{{ state.time }}</div>
					<div class="date">{{ state.date }} {{ currentWeek }}</div>
				</div>
				<template v-if="setting.search.show">
					<div class="flex-around serach-engines">
						<el-tooltip v-for="item in engineList" :key="item.name" effect="light" :content="item.description" placement="top">
							<el-link :type="setting.search.engines === item.name ? 'primary' : 'info'" class="engines-item" @click="onChangeEngines(item.name)">
								{{ item.name }}
							</el-link>
						</el-tooltip>
					</div>
					<el-autocomplete
						v-if="setting.search.history"
						v-model="state.query"
						:fetch-suggestions="querySearch"
						placeholder="请输入搜索内容"
						size="large"
						@keyup.enter="onActionSearch"
						@select="handleSelect"
					>
						<template #suffix>
							<el-icon :size="20">
								<Search />
							</el-icon>
						</template>
						<template #prefix>
							<el-icon :size="20">
								<svg-icon :name="currentEngine.icon" class="animate__animated animate__rotateInDownLeft" />
							</el-icon>
						</template>
						<template #default="{ item }">
							<div class="flex-between">
								<div class="value">{{ item }}</div>
								<el-button :icon="Close" circle type="danger" size="small" plain @click.stop="removeHistoryRow(item)" />
							</div>
						</template>
					</el-autocomplete>
					<el-input v-else class="my-search" v-model="state.query" size="large" placeholder="请输入搜索内容" @keyup.enter="onActionSearch">
						<template #suffix>
							<el-icon :size="20">
								<Search />
							</el-icon>
						</template>
						<template #prefix>
							<el-icon :size="20">
								<svg-icon :name="currentEngine.icon" class="animate__animated animate__rotateInDownLeft" />
							</el-icon>
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
import { Search, Close } from '@element-plus/icons-vue';
import { useDateFormat } from '~/hooks/useDateFormat';
import { useSettingsStore } from '~/stores/settings';

const { setting, engineList, currentEngine } = storeToRefs(useSettingsStore());
const { querySearch, setGlobalSetting, removeHistoryRow } = useSettingsStore();
const { format, formatWeek } = useDateFormat();

const inputHeight = computed(() => `${setting.value.search.height}px`);
const inputRadius = computed(() => `${setting.value.search.radius}px`);
const inputOpacity = computed(() => `rgba(255, 255, 255, ${setting.value.search.opacity})`);

const dateColor = computed(() => setting.value.date.color);
const dateFont = computed(() => setting.value.date.font);
const dateSize = computed(() => `${setting.value.date.size}px`);
const dateBold = computed(() => (setting.value.date.date.includes('bold') ? 'bold' : 'normal'));

const state = reactive({
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

function handleSelect(item: Record<string, any> | string): void {
	if (typeof item === 'string') jumpQuery(item);
}

const currentWeek = computed(() => formatWeek());

function onChangeEngines(key: string) {
	setting.value.search.engines = key;
	setGlobalSetting();
	const searchIconDom = document.getElementById('serach-icon');
	if (searchIconDom) {
		searchIconDom.classList.add('animate__animated', 'animate__rotateInDownLeft');
		setTimeout(() => {
			searchIconDom.classList.remove('animate__animated', 'animate__rotateInDownLeft');
		}, 1000);
	}
}

function onActionSearch() {
	if (setting.value.search.historyList.some((queryString) => queryString === state.query)) return;
	setting.value.search.historyList.push(state.query);
	jumpQuery(state.query);
	state.query = '';
	setGlobalSetting();
}

function jumpQuery(queryString: string) {
	const searchUrl = `${currentEngine.value.link}${queryString}`;
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
			color: v-bind(dateColor);
			text-shadow: 1px 1px 1px #000;
			.time {
				font-family: v-bind(dateFont);
				font-size: v-bind(dateSize);
			}
			.date {
				font-size: 12px;
				font-weight: v-bind(dateBold);
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
				// font-family: gomarice_rocks_serif;
			}
			.el-link--info {
				color: var(--el-color-white);
			}
		}
	}
}
:deep .my-search,
:deep .el-autocomplete {
	width: 100%;
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
