export const categories = [
	{
		name: '主页',
		path: '/',
		type: '/',
		meta: {
			rank: 0,
			icon: 'menu-home',
		},
	},
	{
		name: '科技',
		path: '/developer',
		meta: {
			rank: 0,
			icon: 'menu-editor',
			tgas: [
				{ label: '人工智能', value: 'ai', checked: false },
				{ label: '大数据', value: 'bigData', checked: false },
				{ label: '软件开发', value: 'developer', checked: false },
				{ label: '网络安全', value: 'cybersecurity', checked: false },
				{ label: '虚拟现实 VR', value: 'vr', checked: false },
				{ label: '物联网 LOT', value: 'lot', checked: false },
				{ label: '硬件开发', value: 'hardwareDevelopment', checked: false },
				{ label: '产品/设计', value: 'designer', checked: false },
			],
		},
	},
	{
		name: '金融',
		path: '/finance',
		meta: {
			rank: 0,
			icon: 'menu-editor',
			tgas: [
				{ label: '投资', value: 'Investment', checked: false },
				{ label: '股市', value: 'StockMarket', checked: false },
				{ label: '银行', value: 'Banking', checked: false },
				{ label: '理财', value: 'WealthManagement', checked: false },
			],
		},
	},
	{
		name: '娱乐',
		path: '/amusement',
		type: 'amusement',
		meta: {
			rank: 0,
			icon: 'menu-amusement',
			tgas: [
				{ label: '艺术', value: 'art', checked: false },
				{ label: '游戏', value: 'games', checked: false },
				{ label: '视频', value: 'videos', checked: false },
				{ label: '资讯', value: 'news', checked: false },
				{ label: '学习/效率', value: 'efficiency', checked: false },
			],
		},
	},
];
