interface ISettingState {
	showDrawer: boolean;
	setting: {
		theme: string;
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
	};
}
