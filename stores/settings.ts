import { defineStore } from 'pinia';
import { useChangeColor } from '~/hooks/useColor';

export const useSettingsStore = defineStore('settingStore', {
	state() {
		return {
			showDrawer: false,
			setting: {
				basic: {
					theme: '#409eff',
					asideMenuWidth: 60, // 侧边栏菜单宽度
					maskOpacity: 0.5, // 遮罩层透明度
					maskBlur: 6, // 遮罩层模糊度
				},
			},
		};
	},
	actions: {
		setMenuWidth(width: number) {
			this.menuWidth++;
		},
		openSettingDrawer() {
			this.showDrawer = true;
		},
		onColorPickerChange() {
			const { getDarkColor, getLightColor } = useChangeColor();
			if (!this.setting.basic.theme) return ElMessage.warning('全局主题 primary 颜色值不能为空');
			// 主题色
			document.documentElement.style.setProperty('--el-color-primary', this.setting.basic.theme);
			// 颜色加深
			document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(this.setting.basic.theme, 0.1)}`);
			// 颜色变浅
			for (let i = 1; i <= 9; i++) {
				document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(this.setting.basic.theme, i / 10)}`);
			}
		},
	},
});
