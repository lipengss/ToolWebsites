<template>
	<div class="off-work" @click="state.visible = !state.visible">
		<div class="title">下班还有</div>
		<ClientOnly>
			<div class="time">{{ state.curCountDown }}</div>
		</ClientOnly>
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
		<el-dialog v-model="state.visible">
			<el-form label-width="90px">
				<el-form-item label="组件名称">
					<el-input />
				</el-form-item>
				<el-form-item label="工作日">
					<el-space>
						<el-checkbox-group v-model="state.workday">
							<el-checkbox-button v-for="week in weekFormat" :label="week" :key="week">周{{ week }}</el-checkbox-button>
						</el-checkbox-group>
						<el-checkbox>工作日</el-checkbox>
					</el-space>
				</el-form-item>
				<el-form-item label="字体颜色">
					<ColorPicker :default-color="predefineColors" v-model:color="state.color" />
				</el-form-item>
			</el-form>
		</el-dialog>
	</ClientOnly>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { predefineColors } from '~/assets/utils/publicData';
import { useDateFormat } from '~/hooks/useDateFormat';

const { dayjs, weekFormat } = useDateFormat();

const state = reactive({
	payday: 10,
	visible: true,
	countdown: '18:00:00',
	curCountDown: dayjs().format('HH:mm:ss'),
	workday: [],
	color: '#fff',
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

const countDown = () => {
	const splitCountDown = state.countdown.split(':');
	const targetTime = dayjs()
		.set('hour', parseInt(splitCountDown[0]))
		.set('minute', parseInt(splitCountDown[1]))
		.set('second', parseInt(splitCountDown[2]))
		.valueOf();
	console.log(dayjs(targetTime).format('YYYY-MM-DD HH:mm:ss'));
	console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
	setInterval(() => {
		state.curCountDown = dayjs(targetTime - dayjs().valueOf()).format('hh:mm:ss');
	}, 1000);
};

onMounted(() => {
	countDown();
});
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
