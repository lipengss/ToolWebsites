interface IEngineItem {
	name: string;
	link: string;
	icon: string;
	description: string;
}

interface ISettingState {
	showDrawer: boolean;
	setting: {
		theme: string;
		date: {
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
			historyList: Array<string>;
		};
		bg: {
			picture: string[];
			opacity: number; // 遮罩层透明度
			blur: number; // 遮罩层模糊度
			auto: boolean;
			autoTime: number;
		};
		menuBar: {
			width: number; // 侧边栏菜单宽度
			blur: number; // 遮罩层模糊度
			bgColor: string; // 背景颜色
			color: string; // 字体颜色
			autoHide: boolean;
		};
		offWork: {
			payday: number;
			workday: string[];
			isWorkDay: boolean;
			showItem: string[];
			workHours: [Date, Date];
			income: number;
			color: string;
			bgColor: string;
		};
		app: {
			sceenWidth: number;
			unit: '%' | 'px';
			size: number;
			radius: number;
			async: boolean;
			gap: number;
			columnGap: number;
			rowGap: number;
			opacity: number;
		};
		hotWebRanks: { [key: string]: number };
	};
	engineList: Array<IEngineItem>;
}
