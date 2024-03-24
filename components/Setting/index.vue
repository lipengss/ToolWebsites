<template>
	<el-drawer v-model="showDrawer" title="风 格 配 置" size="450px">
		<el-form :model="setting" ref="formRef" label-width="100px">
			<el-divider>时间</el-divider>
			<el-form-item label="字体大小">
				<div class="slider-wrap">
					<el-slider v-model="setting.date.size" :min="20" :max="100" @change="setGlobalSetting" />
					<el-tag type="primary">{{ setting.date.size }} PX</el-tag>
				</div>
			</el-form-item>
			<el-form-item label="字体颜色">
				<div class="slider-wrap">
					<color-picker v-model:color="setting.date.color" show-alpha @change="setGlobalSetting" />
				</div>
			</el-form-item>
			<el-form-item label="字体">
				<el-select v-model="setting.date.font">
					<el-option value="YuurinBee">
						<div class="flex-between">
							<span>19:00</span>
							<span>YuurinBee</span>
						</div>
					</el-option>
					<el-option value="Gomarice">
						<div class="flex-between">
							<span>19:00</span>
							<span>Gomarice</span>
						</div>
					</el-option>
				</el-select>
			</el-form-item>
			<div class="slider-wrap">
				<el-checkbox-group v-model="setting.date.date">
					<el-checkbox label="monthDay">日月</el-checkbox>
					<el-checkbox label="week">周</el-checkbox>
					<el-checkbox label="sec">秒</el-checkbox>
					<el-checkbox label="lunar">农历</el-checkbox>
					<el-checkbox label="bold">粗体</el-checkbox>
				</el-checkbox-group>
			</div>
			<el-divider>搜索</el-divider>
			<el-form-item label="显示搜索框">
				<el-switch v-model="setting.search.show" @change="setGlobalSetting" />
			</el-form-item>
			<el-form-item label="搜索框高度">
				<div class="slider-wrap">
					<el-slider v-model="setting.search.height" :min="40" :max="60" @change="setGlobalSetting" />
					<el-tag type="primary">{{ setting.search.height }} PX</el-tag>
				</div>
			</el-form-item>
			<el-form-item label="搜索框圆角">
				<div class="slider-wrap">
					<el-slider v-model="setting.search.radius" :min="0" :max="60" @change="setGlobalSetting" />
					<el-tag type="primary">{{ setting.search.radius }} PX</el-tag>
				</div>
			</el-form-item>
			<el-form-item label="搜索框透明">
				<div class="slider-wrap">
					<el-slider v-model="setting.search.opacity" :min="0" :max="1" :step="0.1" @change="setGlobalSetting" />
					<el-tag type="primary">{{ setting.search.opacity }} PX</el-tag>
				</div>
			</el-form-item>
			<el-form-item label="搜索历史">
				<el-switch v-model="setting.search.history" @change="setGlobalSetting" />
			</el-form-item>
			<el-form-item label="关闭翻译">
				<el-switch v-model="setting.search.translate" @change="setGlobalSetting" />
			</el-form-item>
			<el-form-item label="搜索引擎">
				<el-select v-model="setting.search.engines">
					<el-option v-for="item in engineList" :key="item.name" :label="item.name" :value="item.name">
						<div class="flex flex-center">
							<el-icon :size="24" class="mr10">
								<svg-icon :name="item.icon" />
							</el-icon>
							{{ item.name }}
						</div>
					</el-option>
				</el-select>
			</el-form-item>
			<el-divider>主题/壁纸</el-divider>
			<el-form-item label="深色模式">
				<el-switch :model-value="isDark" @change="toggleDark()" />
			</el-form-item>
			<el-form-item label="主题色" prop="theme">
				<color-picker v-model:color="setting.theme" colorFormat="hex" :color-list="predefineColors" @change="changeThemeColor" />
			</el-form-item>
			<el-form-item label="遮罩透明度">
				<div class="slider-wrap">
					<el-slider v-model="setting.bg.opacity" :min="0" :max="1" :step="0.1" @change="setGlobalSetting" />
					<el-tag type="primary">{{ setting.bg.opacity }}</el-tag>
				</div>
			</el-form-item>
			<el-form-item label="背景模糊">
				<div class="slider-wrap">
					<el-slider v-model="setting.bg.blur" :min="0" :max="60" :step="1" @change="setGlobalSetting" />
					<el-tag type="primary">{{ setting.bg.blur }} PX</el-tag>
				</div>
			</el-form-item>
			<el-form-item label="自动切换背景">
				<el-space>
					<el-switch v-model="setting.bg.auto" @change="setGlobalSetting" />
					<el-select style="width: 100px" placeholder="时间间隔" v-if="setting.bg.auto" v-model="setting.bg.autoTime" @change="setGlobalSetting">
						<el-option v-for="item in timeStepList" :key="item.value" :label="item.label" :value="item.value" />
					</el-select>
				</el-space>
			</el-form-item>
			<el-divider>菜单栏</el-divider>
			<el-form-item label="自动隐藏">
				<el-switch v-model="setting.menuBar.autoHide" @change="setGlobalSetting" />
			</el-form-item>
			<el-form-item label="菜单栏宽度">
				<div class="slider-wrap">
					<el-slider v-model="setting.menuBar.width" :min="60" :max="400" />
					<el-tag type="primary">{{ setting.menuBar.width }} PX</el-tag>
				</div>
			</el-form-item>
			<el-form-item label="背景颜色">
				<color-picker v-model:color="setting.menuBar.bgColor" show-alpha @change="changeThemeColor" />
			</el-form-item>
			<el-form-item label="字体颜色">
				<color-picker v-model:color="setting.menuBar.color" show-alpha @change="changeThemeColor" />
			</el-form-item>
		</el-form>
		<el-space direction="vertical" fill class="w100">
			<el-button type="primary" size="large" class="w100" :icon="CopyDocument">一键复制配置</el-button>
			<el-button type="info" size="large" class="w100" :icon="RefreshRight" @click="clearGlobalSetting()">一键恢复默认</el-button>
		</el-space>
	</el-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { predefineColors, timeStepList } from '~/assets/utils/publicData';
import { CopyDocument, RefreshRight } from '@element-plus/icons-vue';
import { useDark, useToggle } from '@vueuse/core';

const { setting, showDrawer, engineList, currentEngine } = storeToRefs(useSettingsStore());
const { setGlobalSetting, clearGlobalSetting, onColorPickerChange } = useSettingsStore();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const formRef = ref();

function changeThemeColor() {
	onColorPickerChange();
	setGlobalSetting();
}
</script>
<style lang="scss" scoped>
.slider-wrap {
	width: 100%;
	display: flex;
	align-items: center;
	.el-slider {
		flex: 1;
		margin-left: 10px;
		margin-right: 20px;
	}
}
</style>
