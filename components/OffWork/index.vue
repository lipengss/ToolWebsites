<template>
	<div class="off-work" @click="state.visible = !state.visible">
		<div class="title">下班还有</div>
		<div class="time">02:04:24</div>
		<div class="card">
			<div class="card-item">
				<div class="card-item-title">发薪</div>
				<div class="card-item-content">{{ payDay }}</div>
				<div class="day">天</div>
			</div>
			<div class="card-item">
				<div class="card-item-title">周五</div>
				<div class="card-item-content">0</div>
				<div class="day">天</div>
			</div>
			<div class="card-item">
				<div class="card-item-title">妇女节</div>
				<div class="card-item-content">0</div>
				<div class="day">天</div>
			</div>
			<div class="card-item">
				<div class="card-item-title">今天赚了</div>
				<div class="card-item-content">799.217</div>
				<div class="day">￥</div>
			</div>
		</div>
	</div>
	<ClientOnly>
		<el-dialog v-model="state.visible"> </el-dialog>
	</ClientOnly>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useDateFormat } from '~/hooks/useDateFormat';

const { dayjs } = useDateFormat();

const state = reactive({
	payday: 10,
	visible: false,
});

const payDay = computed(() => {
	const curDate = dayjs().format('YYYY-MM-DD');
	const day = parseInt(dayjs().format('D'));
	if (day > state.payday) {
		const nextMonth = dayjs().add(1, 'month');
		const payDay = dayjs(nextMonth).set('date', state.payday).format('YYYY-MM-DD');
		return dayjs(payDay).diff(curDate, 'day');
	} else {
		const payDay = dayjs().set('date', state.payday).format('YYYY-MM-DD');
		return dayjs(payDay).diff(curDate, 'day');
	}
});

console.log(payDay.value);
</script>

<style lang="scss" scoped>
.off-work {
	width: 100%;
	height: 100%;
	padding: 10px;
	box-sizing: border-box;
	background-color: #fc585b;
	background-image: url('~/assets/img/boy.svg');
	background-repeat: no-repeat;
	background-size: 130px;
	background-position: 95% center;
	color: #fff;
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
