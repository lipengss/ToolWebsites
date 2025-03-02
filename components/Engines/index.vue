<template>
	<ClientOnly>
		<div class="engines">
			<div class="content fixed-top">
				<!-- <el-affix> -->
				<div class="date-wrapper" v-if="setting.date.show">
					<div class="time">{{ state.time }}</div>
					<div class="date">{{ state.date }} {{ currentWeek }}</div>
				</div>
				<template v-if="setting.search.show">
					<el-input
						v-if="setting.search.history"
						v-model="state.query"
						class="my-search"
						placeholder="请输入搜索内容"
						size="large"
						:suffix-icon="Search"
						@keyup.enter="onActionSearch"
						@select="handleSelect"
						ref="recordRef"
						@focus="isShowRecord = true"
					>
						<template #prepend>
							<div class="icon-wrap" ref="buttonRef">
								<el-icon :size="30">
									<svg-icon :name="currentEngine.icon" class="animate__animated animate__rotateInDownLeft" />
								</el-icon>
								<el-icon :size="14"> <CaretBottom /> </el-icon>
							</div>
							<el-popover
								ref="popoverRef"
								:virtual-ref="buttonRef"
								show-arrow
								:offset="20"
								width="auto"
								effect="light"
								popper-class="engines-popper"
								trigger="click"
								virtual-triggering
							>
								<div class="serach-engines">
									<el-tooltip v-for="item in engineList" :key="item.name" effect="light" :content="item.description" placement="left">
										<el-link
											:underline="false"
											class="engines-item"
											:type="setting.search.engines === item.name ? 'primary' : 'info'"
											:class="{ 'engines-selected': setting.search.engines === item.name }"
											@click="onChangeEngines(item.name)"
										>
											<el-icon size="30px">
												<svg-icon :name="item.icon" />
											</el-icon>
											{{ item.name }}
										</el-link>
									</el-tooltip>
								</div>
							</el-popover>
						</template>
					</el-input>
					<el-popover
						v-model:visible="isShowRecord"
						trigger="focus"
						popper-class="engines-record"
						width="376px"
						placement="bottom-end"
						:virtual-ref="recordRef"
						virtual-triggering
					>
						<el-scrollbar height="300px">
							<template v-if="setting.search.historyList.length > 0 && setting.search.engines !== '本地'">
								<h4 class="engines-record-title flex-between">
									<span>搜索历史</span>
									<el-link type="danger" :underline="false" style="font-size: 12px" @click="clearHistory">清空</el-link>
								</h4>
								<div style="padding: 0 14px">
									<el-space wrap>
										<el-tag
											type="info"
											effect="dark"
											style="cursor: pointer"
											v-for="item in setting.search.historyList"
											closable
											@close="removeHistoryRow(item)"
											:key="item"
											@click="toJumpQuery(item)"
										>
											{{ item }}
										</el-tag>
									</el-space>
								</div>
							</template>
							<template v-if="state.query && setting.search.engines === '本地'">
								<h3 class="engines-record-title">相关应用</h3>
								<div v-for="(app, index) in filterAppList" class="hot-app-item" @click="toJumpApp(app.path || '')">
									<span class="hot-app-index">
										<el-icon :size="16" color="#999"><Clock /></el-icon>
									</span>
									<div class="hot-app-icon"><Application :app="app" :link="false" /></div>
									<div class="info">
										<p class="title">{{ app.name }}</p>
										<p class="desc">{{ app.meta.description }}</p>
									</div>
								</div>
							</template>
							<h3 class="engines-record-title">热门应用</h3>
							<div
								v-for="(app, index) in getApps('all')
									.filter((item) => !item.meta.tag.includes('card'))
									.slice(0, 10)"
								class="hot-app-item"
								@click="toJumpApp(app.path || '')"
							>
								<span class="hot-app-index" :class="{ 'hot-app-index-active': index < 3 }">{{ index + 1 }}</span>
								<div class="hot-app-icon"><Application :app="app" :link="false" /></div>
								<div class="info">
									<p class="title">{{ app.name }}</p>
									<p class="desc">{{ app.meta.description }}</p>
								</div>
								<img v-if="index < 3" src="/assets/img/fire.gif" alt="hot" width="18" height="18" class="hot-app-icon-hot" />
							</div>
						</el-scrollbar>
					</el-popover>
				</template>
				<!-- </el-affix> -->
			</div>
		</div>
	</ClientOnly>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { CaretBottom, Clock, Search } from '@element-plus/icons-vue';
import { useDateFormat } from '~/hooks/useDateFormat';
import { useSettingsStore } from '~/stores/settings';
import { useApp } from '~/hooks/useApp';

const { setting, engineList, currentEngine } = storeToRefs(useSettingsStore());
const { setGlobalSetting, removeHistoryRow, clearHistory } = useSettingsStore();
const { format, formatWeek } = useDateFormat();
const { getApps } = useApp();

const inputHeight = computed(() => `${setting.value.search.height}px`);
const inputRadius = computed(() => `${setting.value.search.radius}px`);
const inputOpacity = computed(() => `rgba(0, 0, 0, ${setting.value.search.opacity})`);
const dateColor = computed(() => setting.value.date.color);
const dateFont = computed(() => setting.value.date.font);
const dateSize = computed(() => `${setting.value.date.size}px`);
const dateBold = computed(() => (setting.value.date.date.includes('bold') ? 'bold' : 'normal'));
const menuWdith = computed(() => `${setting.value.menuBar.width}px`);

const state = reactive({
	query: '',
	date: format(new Date(), 'YYYY年MM月DD日'),
	time: '',
});
const recordRef = ref();
const isShowRecord = ref(false);
let timer: any = null;
const buttonRef = ref();
onMounted(() => {
	state.time = format(new Date(), 'HH:mm:ss');
	timer = setInterval(() => {
		state.time = format(new Date(), 'HH:mm:ss');
	}, 1000);
});

function handleSelect(item: Record<string, any> | string): void {
	if (typeof item === 'string') toJumpQuery(item);
}

const currentWeek = computed(() => formatWeek());

const filterAppList = computed(() => {
	if (setting.value.search.engines === '本地') {
		return getApps('all').filter((item) => {
			if (item.name.includes(state.query) || item.meta.description?.includes(state.query)) {
				return item;
			}
		});
	}
	return [];
});

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

function toJumpApp(path: string) {
	state.query = '';
	if (path) window.open(path, '_blank');
}

function onActionSearch() {
	if (setting.value.search.engines === '本地') {
		return;
	}
	if (setting.value.search.historyList.some((queryString) => queryString === state.query)) return;
	setting.value.search.historyList.push(state.query);
	toJumpQuery(state.query);
	state.query = '';
	setGlobalSetting();
}

function toJumpQuery(queryString: string) {
	if (!queryString) return;
	const searchUrl = `${currentEngine.value.link}${queryString}`;
	window.open(searchUrl, '_blank');
}
</script>
<style lang="scss" scoped>
.engines {
	display: flex;
	box-sizing: border-box;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: 240px;
	padding-bottom: 20px;
	box-sizing: border-box;
	// padding-top: 10vh;
	// margin-bottom: 20px;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 100;
		.date-wrapper {
			min-width: 140px;
			margin-bottom: 20px;
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
		:deep .my-search {
			width: 460px;
			.el-input__wrapper {
				height: v-bind(inputHeight);
				border-top-right-radius: v-bind(inputRadius);
				border-bottom-right-radius: v-bind(inputRadius);
				background-color: v-bind(inputOpacity);
				backdrop-filter: blur(10px);
				font-size: 18px;
				.el-input__inner {
					letter-spacing: 1px;
					color: #fff;
				}
			}
			.el-input-group__prepend {
				border-top-left-radius: v-bind(inputRadius);
				border-bottom-left-radius: v-bind(inputRadius);
				background-color: v-bind(inputOpacity);
				backdrop-filter: blur(10px);
			}
		}
	}
	.icon-wrap {
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	// .fixed-top {
	// 	position: fixed;
	// 	top: 0;
	// 	left: v-bind(menuWdith);
	// 	right: 0;
	// 	display: flex;
	// 	padding: 10px 20px;
	// 	box-sizing: border-box;
	// 	flex-direction: row;
	// 	align-items: center;
	// 	justify-content: space-between;
	// 	background-color: rgba(255, 255, 255, 0.1);
	// 	backdrop-filter: blur(10px);
	// 	.date-wrapper {
	// 		margin-bottom: 0;
	// 	}
	// 	.my-search {
	// 		width: 400px;
	// 	}
	// }
}
</style>
<style lang="scss">
.engines-record {
	max-height: 300px;
	overflow: hidden;
	padding: 10px !important;
	background-color: v-bind(inputOpacity) !important;
	border: 1px solid var(--el-border) !important;
	.engines-record-title {
		font-size: 14px;
		font-weight: bold;
		padding: 10px 14px;
		margin: 0;
		letter-spacing: 1px;
		color: #fff;
	}
	.hot-app-item {
		display: flex;
		align-items: center;
		padding-left: 10px;
		padding-right: 10px;
		cursor: pointer;
		&:hover {
			background-color: rgba(0, 0, 0, 0.2);
		}
		.hot-app-index {
			width: 22px;
			flex-shrink: 0;
			text-align: left;
			font-size: 16px;
			font-weight: bold;
			font-style: italic;
			padding-left: 2px;
			color: #999;
		}
		.hot-app-index-active {
			color: #fff;
		}
		.hot-app-icon {
			width: 60px;
			height: 60px;
			margin-left: -6px;
			transform: scale(0.7);
			flex-shrink: 0;
			margin-right: 6px;
			border-radius: 6px;
			overflow: hidden;
		}
		.info {
			flex: 1;
			.title {
				font-weight: bold;
				margin: 0;
				margin-bottom: 4px;
				color: #fff;
			}
			.desc {
				margin: 0;
				font-size: 12px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
		.hot-app-icon-hot {
			align-items: flex-end;
		}
	}
}
.engines-popper {
	min-width: auto !important;
	min-height: auto !important;
	background-color: v-bind(inputOpacity) !important;
	border: 1px solid var(--el-border) !important;
	.serach-engines {
		width: 100%;
		margin-bottom: 4px;
		display: flex;
		flex-direction: column;
		.engines-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			font-size: 14px;
			text-shadow: 1px 1px 1px #000;
			padding: 6px 14px 6px 10px;
			.el-icon {
				margin-right: 4px;
			}
			&:hover {
				background-color: rgba(0, 0, 0, 0.2);
			}
		}
		.engines-selected {
			background-color: rgba(0, 0, 0, 0.2);
		}
		.el-link--info {
			color: var(--el-color-white);
		}
	}
}
</style>
