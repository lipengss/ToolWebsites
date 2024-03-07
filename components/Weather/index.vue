<template>
	<div class="wrapper" :class="toDay.weather" v-if="toDay">
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
				<div>空气湿度 {{ toDay.humidity }}</div>
			</div>
		</div>
		<div class="forecasts">
			<div class="info" v-for="item in forecasts[0].casts">
				<span>{{ formatWeek(item.week, item.date) }}</span>
				<span class="date">{{ format(item.date, 'M月D日') }}</span>
				<el-icon :size="18" v-if="item.dayweather === '晴' && night"><svg-icon name="月亮" /></el-icon>
				<el-icon :size="20" v-if="item.dayweather === '晴' && !night"><svg-icon name="晴" /></el-icon>
				<el-icon :size="20" v-else-if="item.dayweather === '阴'"><svg-icon name="阴" /></el-icon>
				<el-icon :size="20" v-if="item.dayweather === '雨夹雪'"><svg-icon name="雨夹雪" /></el-icon>
				<el-icon :size="20" v-if="item.dayweather === '多云'"><svg-icon name="多云" /></el-icon>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import qs from 'qs';
import { Location, Refresh } from '@element-plus/icons-vue';
import { weekFormat } from '~/assets/utils/publicData';
import { useDateFormat } from '~/hooks/useDateFormat';

const { isToday, isTomorrow, format, dayjs } = useDateFormat();

const now = dayjs();

const night = computed(() => now.hour() >= 18 && now.hour() > 6);

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
function formatWeek(weekNumber: string, date: string) {
	if (isToday(date)) {
		return '今天';
	} else if (isTomorrow(date)) {
		return '明天';
	} else {
		return weekFormat[parseInt(weekNumber)];
	}
}

const { forecasts }: QueryWeather = await $fetch(
	`https://restapi.amap.com/v3/weather/weatherInfo?${qs.stringify({ ...queryWeather, extensions: 'all' })}`
);

getWeather();
const toDay = computed(() => (weatherLives.value && weatherLives.value.length ? weatherLives.value[0] : undefined));
</script>
<style lang="scss" scoped>
.wrapper {
	width: 100%;
	height: 100%;
	padding: 10px;
	box-sizing: border-box;
	color: #fff;
	.location {
		.city-name {
			font-size: 14px;
			margin-left: 4px;
		}
	}
	.weather {
		margin-bottom: 6px;
		.temper {
			font-size: 40px;
			font-weight: bold;
		}
		.weather-info {
			text-align: right;
			line-height: 20px;
			font-size: 13px;
		}
	}
	.forecasts {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			line-height: 18px;
			.date {
				font-size: 10px;
			}
		}
	}
}
.晴 {
	background: linear-gradient(45deg, #237fca 58%, rgba(233, 241, 246, 0.91) 100%);
}
.阴,
.多云 {
	background: linear-gradient(61deg, rgba(67, 112, 159, 1) 29%, rgba(205, 205, 205, 1) 100%);
}
</style>
