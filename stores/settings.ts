import { defineStore } from 'pinia';
import { useChangeColor } from '~/hooks/useColor';
import { Local } from '~/assets/utils/storage';
import { getRandomNumber } from '~/assets/utils/tools';
import { GLOBAL_SETTING, predefineColors } from '~/assets/utils/publicData';
import { useDateFormat } from '~/hooks/useDateFormat';
const { setTime } = useDateFormat();

const imgList = Object.values(import.meta.glob('/assets/wallpaper/*.*', { eager: true })).map((v) => v.default);

let timer: any = null;
export const useSettingsStore = defineStore('settingStore', {
	state(): ISettingState {
		return {
			showDrawer: false,
			setting: {
				theme: '#2b793b',
				search: {
					show: true,
					height: 60,
					radius: 50,
					opacity: 0.2,
					history: true,
					translate: false,
					engines: 'Baidu',
					historyList: [],
				},
				bg: {
					picture: imgList[0],
					opacity: 0.5,
					blur: 6,
					auto: false,
					autoTime: 60000,
				},
				menuBar: {
					width: 60,
					blur: 6,
					bgColor: 'rgba(255, 255, 255, 0.1)',
					color: 'rgba(233, 233, 233, 0.6)',
					autoHide: false,
				},
				offWork: {
					payday: 10,
					workday: ['一', '二', '三', '四', '五'],
					isWorkDay: true,
					showItem: ['payDay', 'fromFriday', 'nextFestival', 'income'],
					workHours: [setTime(new Date(), [9, 0, 0]).toDate(), setTime(new Date(), [18, 30, 0]).toDate()],
					income: 800,
					color: '#fff',
					bgColor: predefineColors[0],
				},
			},
			engineList: [
				{
					name: 'Google',
					link: 'https://www.google.com/search?q=',
					icon: 'https://www.google.com/favicon.ico',
				},
				{
					name: 'Bing',
					link: 'https://www.bing.com/search?q=',
					icon: 'https://www.bing.com/favicon.ico',
				},
				{
					name: 'Baidu',
					link: 'https://www.baidu.com/s?wd=',
					icon: 'https://www.baidu.com/favicon.ico',
				},
				{
					name: 'GitHub',
					link: 'https://www.github.com',
					icon: 'https://www.github.com/favicon.ico',
				},
				{
					name: '搜狗',
					link: 'https://www.sogou.com/sogou?query=',
					icon: 'https://www.sogou.com/favicon.ico',
				},
			],
		};
	},
	actions: {
		initGloabalSetting() {
			if (Local.get(GLOBAL_SETTING)) {
				this.setting = Local.get(GLOBAL_SETTING);
			} else {
				Local.set(GLOBAL_SETTING, this.setting);
			}
			document.body.style.setProperty('background-image', `url(${this.setting.bg.picture})`);
			// 主题色
			this.onColorPickerChange();
			// 自动切换壁纸
			this.autochangeWallpaper();
		},
		setGlobalSetting() {
			Local.set(GLOBAL_SETTING, this.setting);
			this.initGloabalSetting();
		},
		changeWallpaper() {
			const maxNum = imgList.length - 1;
			const randomNum = getRandomNumber(maxNum);
			this.setting.bg.picture = imgList[randomNum];
			document.body.style.setProperty('background-image', `url(${this.setting.bg.picture})`);
			Local.set(GLOBAL_SETTING, this.setting);
		},
		openSettingDrawer() {
			this.showDrawer = true;
		},
		onColorPickerChange() {
			const { getDarkColor, getLightColor } = useChangeColor();
			if (!this.setting.theme) return ElMessage.warning('全局主题 primary 颜色值不能为空');
			// 主题色
			document.documentElement.style.setProperty('--el-color-primary', this.setting.theme);
			// 颜色加深
			document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(this.setting.theme, 0.1)}`);
			// 颜色变浅
			for (let i = 1; i <= 9; i++) {
				document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(this.setting.theme, i / 10)}`);
			}
		},
		autochangeWallpaper() {
			const { auto, autoTime } = this.setting.bg;
			if (auto) {
				timer = setInterval(() => {
					this.changeWallpaper();
				}, autoTime);
			} else {
				clearInterval(timer);
				timer = null;
			}
		},
		clearGlobalSetting() {
			Local.clear();
			this.initGloabalSetting();
			window.location.reload();
		},
		querySearch(queryString: string, cb: any) {
			const { historyList } = this.setting.search;
			const results = queryString ? historyList.filter(createFilter(queryString)) : historyList;
			cb(results);
		},
	},
});
