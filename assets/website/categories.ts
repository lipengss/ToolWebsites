export const categories = [
	{
		name: '主页',
		path: '/',
		type: '/',
		meta: {
			rank: 0,
			icon: 'menu-home',
			// tgas: [
			// 	{ label: 'AI', value: 'ai', checked: false }
			// ],
		},
	},
	{
		name: 'AI',
		path: '/ai',
		meta: {
			rank: 0,
			icon: 'menu-editor',
			tgas: [
				{
					label: 'AI',
					value: 'ai',
					checked: false,
				},
			],
		},
	},
	{
		name: '编程',
		path: '/developer',
		meta: {
			rank: 0,
			icon: 'menu-editor',
			tgas: [
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
