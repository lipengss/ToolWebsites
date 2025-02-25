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
		name: 'IT领域',
		path: '/it',
		meta: {
			rank: 0,
			icon: 'menu-editor',
			tgas: [
				{ label: '人工智能', value: 'ai', checked: false },
				{ label: '大数据', value: 'bigData', checked: false },
				{ label: '前端', value: 'frontEnd', checked: false },
				{ label: '后端', value: 'backEnd', checked: false },
				{ label: '网络安全', value: 'cybersecurity', checked: false },
				{ label: '虚拟现实 VR', value: 'vr', checked: false },
				{ label: '物联网 LOT', value: 'lot', checked: false },
				{ label: '硬件开发', value: 'hardwareDevelopment', checked: false },
				{ label: '产品/设计', value: 'designer', checked: false },
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
				{ label: '电影', value: 'movies', checked: false },
				{ label: '游戏', value: 'games', checked: false },
				{ label: '短视频', value: 'shortVideos', checked: false },
				{ label: '资讯', value: 'news', checked: false },
			],
		},
	},
];
