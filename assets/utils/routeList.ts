export const routeList: Array<RouteItem> = [
	{
		name: '首页',
		path: '/',
		meta: {
			rank: 0,
			icon: 'menu-home',
		},
	},
	{
		name: '图片处理',
		path: '/picture',
		meta: {
			rank: 0,
			icon: 'menu-picture',
		},
		children: [
			{
				name: '图片裁切',
				path: '/picture/crop',
				meta: {
					rank: 100,
				},
			},
			{
				name: '图片压缩',
				path: '/picture/compress',
				meta: {
					rank: 160,
				},
			},
			{
				name: '图片转base64',
				path: '/picture/pictureToBase64',
				meta: {
					rank: 280,
				},
			},
			{
				name: 'base64转图片',
				path: '/picture/base64ToPicture',
				meta: {
					rank: 280,
				},
			},
		],
	},
	{
		name: '颜色处理',
		path: '/color',
		meta: {
			rank: 300,
			icon: 'menu-color',
		},
	},
];
