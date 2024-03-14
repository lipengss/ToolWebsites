// export const routeList: Array<RouteItem> = [
// 	{
// 		name: '主页',
// 		path: '/',
// 		type: 'onSite',
// 		meta: {
// 			rank: 0,
// 			icon: 'menu-home',
// 		},
// 	},
// 	{
// 		name: '图片处理',
// 		path: '/picture',
// 		type: 'onSite',
// 		meta: {
// 			rank: 0,
// 			icon: 'menu-picture',
// 		},
// 		children: [
// 			{
// 				name: '图片裁切',
// 				path: '/picture/crop',
// 				type: 'onSite',
// 				meta: {
// 					rank: 100,
// 				},
// 			},
// 			{
// 				name: '图片压缩',
// 				path: '/picture/compress',
// 				type: 'onSite',
// 				meta: {
// 					rank: 160,
// 				},
// 			},
// 			{
// 				name: '图片转base64',
// 				path: '/picture/pictureToBase64',
// 				type: 'onSite',
// 				meta: {
// 					rank: 280,
// 				},
// 			},
// 			{
// 				name: 'base64转图片',
// 				path: '/picture/base64ToPicture',
// 				type: 'onSite',
// 				meta: {
// 					rank: 280,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		name: '颜色处理',
// 		path: '/color',
// 		type: 'onSite',
// 		meta: {
// 			rank: 300,
// 			icon: 'menu-color',
// 		},
// 	},
// 	{
// 		name: '编辑器',
// 		path: '/editor',
// 		type: 'editor',
// 		meta: {
// 			rank: 200,
// 			icon: 'editor',
// 		},
// 	},
// 	{
// 		name: '网格布局',
// 		path: '/grid',
// 		type: 'grid-layout',
// 		meta: {
// 			rank: 100,
// 			icon: 'grid',
// 		},
// 	},
// ];

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
		type: 'coder',
		meta: {
			rank: 0,
			icon: '',
		},
	},
];
