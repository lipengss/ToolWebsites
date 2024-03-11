<template>
	<ClientOnly>
		<Card :settings="state.settings" @show-dialog="state.visible = true" />
		<el-dialog v-model="state.visible" :show-close="false" :fullscreen="state.fullscreen" draggable>
			<template #header>
				<div class="flex-end">
					<el-button :icon="FullScreen" circle size="small" @click="state.fullscreen = !state.fullscreen" />
					<el-button :icon="CloseBold" circle size="small" @click="state.visible = false" />
				</div>
			</template>
			<el-row :gutter="20" align="middle">
				<el-col :xs="24" :lg="9">
					<Card :settings="state.dialogSettings" class="dialog-card" />
				</el-col>
				<el-col :xs="24" :lg="15">
					<el-form label-width="80px" class="el-form">
						<el-form-item label="组件名称">
							<el-input />
						</el-form-item>
						<el-form-item label="工作日">
							<el-space>
								<el-checkbox-group v-model="state.workday" size="small">
									<el-checkbox-button v-for="week in weekFormat" :label="week" :key="week">周{{ week }}</el-checkbox-button>
								</el-checkbox-group>
								<el-checkbox>工作日</el-checkbox>
							</el-space>
						</el-form-item>
						<el-form-item label="字体颜色">
							<ColorPicker :color-list="predefineColors" v-model:color="state.dialogSettings.color" />
						</el-form-item>
						<el-form-item label="背景颜色">
							<ColorPicker :color-list="predefineColors" v-model:color="state.dialogSettings.bgColor" />
						</el-form-item>
						<el-form-item label="显示更多">
							<el-checkbox-group v-model="state.dialogSettings.showItem" size="small">
								<el-checkbox-button label="payDay">发薪日</el-checkbox-button>
								<el-checkbox-button label="fromFriday">距离周五</el-checkbox-button>
								<el-checkbox-button label="nextFestival">下个节日</el-checkbox-button>
								<el-checkbox-button label="income">今天收入</el-checkbox-button>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="发薪日">
							<el-space>
								每月
								<el-select v-model="state.dialogSettings.payday" style="width: 100px">
									<el-option v-for="day in days" :value="day" :label="day" :key="day" />
								</el-select>
								日
							</el-space>
						</el-form-item>
						<el-form-item label="每天收入">
							<el-input-number v-model="state.dialogSettings.income" :min="1" />
						</el-form-item>
					</el-form>
					<el-button class="w100" type="success">完成</el-button>
				</el-col>
			</el-row>
		</el-dialog>
	</ClientOnly>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { predefineColors } from '~/assets/utils/publicData';
import Card from './Card.vue';
import { Local } from '~/assets/utils/storage';
import { CloseBold, FullScreen } from '@element-plus/icons-vue';
import { useDateFormat } from '~/hooks/useDateFormat';
const { dayjs, weekFormat } = useDateFormat();
import { cloneDeep } from 'lodash';

const defaultSettings = {
	payday: 10,
	showItem: ['payDay', 'fromFriday', 'nextFestival', 'income'],
	countdown: '18:00:00',
	income: 800,
	color: '#fff',
	bgColor: predefineColors[0],
};

const state = reactive({
	visible: true,
	fullscreen: false,
	workday: [],
	settings: cloneDeep(defaultSettings),
	dialogSettings: cloneDeep(defaultSettings),
});

// 获取当月的天数
const days = computed(() => {
	return Array.from({ length: dayjs().daysInMonth() }).map((item, index) => index + 1);
});

onMounted(() => {
	if (Local.get('offWork')) {
		state.settings = cloneDeep(Local.get('offWork'));
	} else {
		state.settings = cloneDeep(defaultSettings);
	}
});
</script>

<style lang="scss" scoped>
.dialog-card {
	border-radius: 10px;
}
</style>
