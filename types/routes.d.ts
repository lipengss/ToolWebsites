interface RouteItem {
	name: string;
	path?: string;
	type: string | string[];
	component?: any;
	children?: Array<RouteItem>;
	meta: {
		[key: string]: any;
		icon?: string; // 图表
		rank: number; // 排序
		size?: number; // 图标大小
		layout: string; // 1x1 2x2 5x2
		description?: string; // 描述
		hidden?: boolean; // 是否隐藏
		keepAlive?: boolean; // 是否缓存
		alwaysShow?: boolean; // 是否一直显示
	};
}
