import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settingStore', {
	state() {
		return {
			menuWidth: 50,
			menuBgOpacity: 0,
			menuBgBlur: 6,
		};
	},
	actions: {
		setMenuWidth(width: number) {
			this.menuWidth++;
		},
	},
});
