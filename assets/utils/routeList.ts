export const routeList: Array<RouteItem> = [
	{
		name: '主页',
		path: '/',
		type: 'onSite',
		meta: {
			rank: 0,
			icon: 'menu-home',
		},
	},
	{
		name: '程序员',
		path: '/developer',
		type: 'developer',
		meta: {
			rank: 0,
			icon: 'menu-editor',
		},
	},
	{
		name: '设计师',
		path: '/designer',
		type: 'designer',
		meta: {
			rank: 0,
			icon: 'menu-designer',
		},
	},
	{
		name: '产品',
		path: '/productManager',
		type: 'productManager',
		meta: {
			rank: 0,
			icon: 'menu-productManager',
		},
	},
	{
		name: '在线工具',
		path: '/tools',
		type: 'tools',
		meta: {
			rank: 0,
			icon: 'menu-tools',
		},
	},
	{
		name: '娱乐',
		path: '/entertainment',
		type: 'entertainment',
		meta: {
			rank: 0,
			icon: 'menu-entertainment',
		},
	},
];
