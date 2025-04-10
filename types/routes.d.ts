interface RouteItem {
	name: string;
	path?: string;
	component?: any;
	children?: Array<RouteItem>;
	classify: string | string[];
	companyName?: string;
	meta: {
		[key: string]: any;
		value?: string; // 图标
		type: 'img' | 'icon' | 'text' | undefined;
		rank: number; // 排序
		size?: number; // 图标大小
		description?: string; // 描述
		hidden?: boolean; // 是否隐藏
		keepAlive?: boolean; // 是否缓存
		alwaysShow?: boolean; // 是否一直显示
	};
}
