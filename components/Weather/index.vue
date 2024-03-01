<template>
	<div class="wrapper" v-if="toDay">
		<div class="flex-between location">
			<div class="flex-center">
				<el-icon><Location /></el-icon> <span class="city-name">{{ toDay.city }}</span>
			</div>
			<el-tooltip content="更新天气" placement="top" effect="light">
				<el-icon @click="getWeather"><Refresh /></el-icon>
			</el-tooltip>
		</div>
		<div class="weather flex-between">
			<div class="temper">{{ toDay.temperature }}°</div>
			<div class="weather-info">
				<div>{{ toDay.weather }}</div>
				<div>{{ toDay.winddirection }}风 {{ toDay.windpower }}级</div>
				<div>空气湿度{{ toDay.humidity }}</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import qs from 'qs';
import { Location, Refresh } from '@element-plus/icons-vue';

const key = 'ff03de30ff1c0ad671a12699414250e7';

// 查询位置
const { adcode }: QueryLocation = await $fetch(`https://restapi.amap.com/v3/ip?${qs.stringify({ key })}`);

// 查询天气
const queryWeather = {
	key,
	city: adcode,
};

const weatherLives = ref<LivesItem[]>([]);

const getWeather = useDebounce(
	async () => {
		const { lives }: QueryWeather = await $fetch(`https://restapi.amap.com/v3/weather/weatherInfo?${qs.stringify(queryWeather)}`);
		weatherLives.value = lives;
	},
	1000,
	{
		leading: true,
	}
);

getWeather();
const toDay = computed(() => (weatherLives.value.length ? weatherLives.value[0] : undefined));
</script>
<style lang="scss" scoped>
.wrapper {
	width: 100%;
	height: 100%;
	padding: 10px;
	box-sizing: border-box;
	background: linear-gradient(45deg, #237fca 58%, rgba(233, 241, 246, 0.91) 100%);
	color: #fff;
	.location {
		.city-name {
			font-size: 14px;
			margin-left: 4px;
		}
	}
	.weather {
		.temper {
			font-size: 60px;
			font-weight: bold;
		}
		.weather-info {
			text-align: right;
			line-height: 24px;
		}
	}
}
</style>
