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
		path: '/product',
		type: 'product',
		meta: {
			rank: 0,
			icon: 'menu-product',
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
		path: '/amusement',
		type: 'amusement',
		meta: {
			rank: 0,
			icon: 'menu-amusement',
		},
	},
];
