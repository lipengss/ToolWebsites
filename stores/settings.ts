import { defineStore } from 'pinia';
import { useChangeColor } from '~/hooks/useColor';
import { Local } from '~/assets/utils/storage';
import { getRandomNumber } from '~/assets/utils/tools';
import { GLOBAL_SETTING, predefineColors } from '~/assets/utils/publicData';
import { developers } from '~/assets/website';
import { useDateFormat } from '~/hooks/useDateFormat';

const { setTime, dayjs } = useDateFormat();
const imgList = Object.values(import.meta.glob('/assets/wallpaper/*.*', { eager: true })).map((v) => v.default);

const defaultSetting: ISetting = {
	theme: '#2b793b',
	date: {
		show: true,
		size: 35,
		color: '#fff',
		font: 'rocks-serif',
		date: ['monthDay', 'week', 'lunar', 'sec', 'bold'],
	}, 
	search: {
		show: true,
		height: 60,
		radius: 50,
		opacity: 0.2,
		history: true,
		translate: false,
		engines: 'Bing',
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
		workHours: ['09:00:00', '18:30:00'],
		income: 800,
		color: '#fff',
		bgColor: predefineColors[0],
	},
	app: {
		sceenWidth: 80,
		unit: '%',
		size: 60,
		radius: 10,
		async: true,
		gap: 30,
		columnGap: 30,
		rowGap: 30,
		opacity: 1,
	},
	hotWebRanks: {},
};

let timer: any = null;
export const useSettingsStore = defineStore('settingStore', {
	state(): ISettingState {
		return {
			showDrawer: false,
			setting: useCloneDeep(defaultSetting),
			engineList: [
				{
					name: 'Google',
					link: 'https://www.google.com/search?q=',
					icon: 'icon-chrome',
					description: '最好用，但是访问需要点技术。',
				},
				{
					name: 'Bing',
					link: 'https://www.bing.com/search?q=',
					icon: 'icon-bing',
					description: '微软公司的搜索引擎，还可以。',
				},
				{
					name: 'Baidu',
					link: 'https://www.baidu.com/s?wd=',
					icon: 'icon-baidu',
					description: '搜索结果不一定是你想要的，广告还多。',
				},
				{
					name: 'GitHub',
					link: 'https://www.github.com',
					icon: 'icon-github',
					description: '最大的开源项目资源网站。',
				},
				{
					name: '搜狗',
					link: 'https://www.sogou.com/sogou?query=',
					icon: 'icon-sougou',
					description: '搜狗提供的订阅号及文章内容搜索。',
				},
			],
		};
	},
	getters: {
		currentEngine(state) {
			const item = state.engineList.find((item) => item.name === this.setting.search.engines);
			return item || {};
		},
	},
	actions: {
		initGloabalSetting() {
			// 保存默认配置
			if (Local.get(GLOBAL_SETTING)) {
				this.setting = Local.get(GLOBAL_SETTING);
			} else {
				this.setDefaultHotWebSiteList();
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
			// for (let i = 1; i <= 9; i++) {
			// 	document.documentElement.style.setProperty(`--el-color-primary-dark-${i}`, `${getDarkColor(this.setting.theme, i / 10)}`);
			// }
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
			this.setting = useCloneDeep(defaultSetting);
			this.initGloabalSetting();
		},
		querySearch(queryString: string, cb: any) {
			const { historyList } = this.setting.search;
			console.log(queryString);
			const results = queryString ? historyList.filter(this.createFilter(queryString)) : historyList;
			cb(results);
		},
		createFilter(queryString: string) {
			console.log(queryString);
			return (restaurant: string) => {
				console.log(restaurant);
				return restaurant.indexOf(queryString) === 0;
			};
		},
		removeHistoryRow(queryString: string) {
			const index = this.setting.search.historyList.findIndex((item) => item === queryString);
			this.setting.search.historyList.splice(index, 1);
			this.setGlobalSetting();
		},
		setDefaultHotWebSiteList() {
			const hot = developers.filter((item) => item.meta.rank !== 0);
			hot.forEach((item) => {
				const { icon, rank } = item.meta;
				this.setting.hotWebRanks[icon] = rank;
			});
		},
	},
});
