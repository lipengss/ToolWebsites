<template>
	<div class="off-work" @click="emits('showDialog')">
		<div class="title">下班还有</div>
		<ClientOnly>
			<div class="time">{{ state.displayText }}</div>
		</ClientOnly>
		<div class="card" v-if="props.settings.showItem">
			<div class="card-item" v-if="props.settings.showItem.includes('payDay')">
				<div class="card-item-title">发薪</div>
				<div class="card-item-content">{{ payDay }}</div>
				<div class="day">天</div>
			</div>
			<div class="card-item" v-if="props.settings.showItem.includes('fromFriday')">
				<div class="card-item-title">周五</div>
				<div class="card-item-content">{{ fromFriday }}</div>
				<div class="day">天</div>
			</div>
			<div class="card-item" v-if="props.settings.showItem.includes('nextFestival')">
				<div class="card-item-title">妇女节</div>
				<div class="card-item-content">0</div>
				<div class="day">天</div>
			</div>
			<div class="card-item" v-if="props.settings.showItem.includes('income')">
				<div class="card-item-title">今天赚了</div>
				<div class="card-item-content">799.217</div>
				<div class="day">￥</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { useDateFormat } from '~/hooks/useDateFormat';
const { dayjs, weekFormat } = useDateFormat();

interface Props {
	settings: {
		showItem: Array<string>;
		payday: number;
		workHours: [Date, Date];
		income: number;
		color: string;
		bgColor: string;
		workday: string[];
	};
}

const props = withDefaults(defineProps<Props>(), {});

const state = reactive({
	displayText: '00:00:00',
});

const emits = defineEmits(['showDialog']);

const fromFriday = computed(() => {
	const week = dayjs().weekday();
	if (5 >= week) {
		return 5 - week;
	} else {
		return 0;
	}
});

// 发薪日
const payDay = computed(() => {
	const now = dayjs().format('YYYY-MM-DD');
	const day = parseInt(dayjs().format('D'));
	if (day > props.settings.payday) {
		const nextMonth = dayjs().add(1, 'month');
		const payDay = dayjs(nextMonth).set('date', props.settings.payday).format('YYYY-MM-DD');
		return dayjs(payDay).diff(now, 'day');
	} else {
		const payDay = dayjs().set('date', props.settings.payday).format('YYYY-MM-DD');
		return dayjs(payDay).diff(now, 'day');
	}
});
// 下班倒计时
const updateDisplayText = () => {
	const now = dayjs();
	const targetTime = props.settings.workHours[1];
	console.log(dayjs(targetTime).format('YYYY-MM-DD HH:mm:ss'));
	if (now.isAfter(targetTime)) {
		state.displayText = '休 息 时 间 啦';
	} else {
		const diff = dayjs(targetTime).diff(now);
		const duration = dayjs.duration(diff).format('HH:mm:ss');
		state.displayText = duration;
	}
};

function isWork() {
	const week = weekFormat[dayjs().weekday()];
	const { workday } = props.settings;
	if (workday && workday.includes(week)) {
		// 更新倒计时
		updateDisplayText();
		setInterval(updateDisplayText, 1000);
	} else {
		state.displayText = '休 息 时 间 啦';
	}
}

onMounted(() => {
	isWork();
});

watch(
	() => props.settings.workday,
	() => {
		isWork();
	},
	{
		deep: true,
	}
);
</script>
<style lang="scss" scoped>
.off-work {
	width: 100%;
	height: 100%;
	padding: 10px;
	box-sizing: border-box;
	background-color: v-bind('props.settings.bgColor');
	background-image: url('~/assets/img/boy.svg');
	background-repeat: no-repeat;
	background-size: 130px;
	background-position: 95% center;
	color: v-bind('props.settings.color');
	.time {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 4px;
	}
	.card {
		display: flex;
		.card-item {
			padding: 4px 10px;
			background-color: rgba(255, 255, 255, 0.1);
			text-align: center;
			border-radius: 8px;
			&:not(:last-child) {
				margin-right: 6px;
			}
			line-height: 20px;
			.card-item-title {
				font-size: 12px;
			}
			.card-item-content {
				font-size: 14px;
				font-weight: bold;
			}
			.day {
				font-size: 12px;
			}
		}
	}
}
</style>
