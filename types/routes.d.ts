interface RouteItem {
	name: string;
	path: string;
	type: string | string[];
	description?: string;
	meta: {
		icon?: string; // 图表
		rank: number; // 排序
		description?: string; // 描述
		hidden?: boolean; // 是否隐藏
		keepAlive?: boolean; // 是否缓存
		alwaysShow?: boolean; // 是否一直显示
	};
	children?: Array<RouteItem>;
}
