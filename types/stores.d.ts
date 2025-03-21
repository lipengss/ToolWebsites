interface IEngineItem {
	name: string;
	link: string;
	icon: string;
	description: string;
}

interface ISetting {
	theme: string;
	isMobile: boolean;
	date: {
		show: boolean;
		size: number;
		color: string;
		font: string;
		date: string[];
	};
	search: {
		show: boolean;
		height: number;
		radius: number;
		opacity: number;
		history: boolean;
		translate: boolean;
		engines: string;
		historyList: any[];
	};
	bg: {
		picture: string[];
		opacity: number; // 遮罩层透明度
		blur: number; // 遮罩层模糊度
		auto: boolean;
		autoTime: number;
	};
	menuBar: {
		position: string;
		width: number; // 侧边栏菜单宽度
		blur: number; // 遮罩层模糊度
		bgColor: string; // 背景颜色
		color: string; // 字体颜色
		autoHide: boolean;
		routePath: string;
	};
	offWork: {
		name: '下班倒计时';
		payday: number;
		workday: string[];
		isWorkDay: boolean;
		showItem: string[];
		workHours: [string, string];
		income: number;
		color: string;
		bgColor: string;
	};
	app: {
		screenWidth: number;
		unit: '%' | 'px';
		width: number;
		radius: number;
		async: boolean;
		gap: number;
		columnGap: number;
		rowGap: number;
		opacity: number;
		showTitle: boolean;
	};
	collectionWeb: RouteItem[];
	hotWebRanks: { [key: string]: number };
	excludeWeb: RouteItem[];
	addedWeb: RouteItem[];
}

interface ISettingState {
	showDrawer: boolean;
	tour: boolean;
	setting: ISetting;
	engineList: Array<IEngineItem>;
}
