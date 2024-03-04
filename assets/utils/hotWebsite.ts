const hotTypeList: Array<WebTypeItem> = [
	{
		name: '搜索引擎',
		type: 'search',
		icon: '/search.svg',
		routes: [],
		children: [],
	},
	{
		name: '热门工具',
		type: 'hotTool',
		icon: '',
		routes: [],
		children: [],
	},
	{
		name: '图库/色彩',
		type: 'art',
		icon: '',
		routes: [],
		children: [
			{
				name: '免费图库',
				type: 'gallery',
				icon: '',
				routes: [],
				children: [],
			},
			{
				name: '色彩',
				type: 'color',
				icon: '',
				routes: [],
				children: [],
			},
		],
	},
];
// 热门网站
const hotWebsiteList: Array<RouteItem> = [
	{
		name: 'Google',
		type: 'search',
		path: 'https://www.google.com/search?q=',
		meta: {
			rank: 0,
			icon: 'https://www.google.com/favicon.ico',
			description: '最好用，但是访问需要点技术。',
		},
	},
	{
		name: 'Bing',
		path: 'https://www.bing.com/search?q=',
		type: 'search',
		meta: {
			rank: 0,
			icon: 'https://www.bing.com/favicon.ico',
			description: '微软公司的搜索引擎，还可以。',
		},
	},
	{
		name: 'Baidu',
		path: 'https://www.baidu.com/s?wd=',
		type: 'search',
		meta: {
			rank: 0,
			icon: 'https://www.baidu.com/favicon.ico',
			description: '搜索结果不一定是你想要的，广告还多。',
		},
	},
	{
		name: 'GitHub',
		path: 'https://www.github.com',
		type: 'search',
		meta: {
			rank: 0,
			icon: 'https://www.github.com/favicon.ico',
			description: '最大的开源项目资源网站。',
		},
	},
	{
		name: '搜狗',
		path: 'https://www.sogou.com/sogou?query=',
		type: 'search',
		meta: {
			rank: 0,
			icon: 'https://www.sogou.com/favicon.ico',
			description: '搜狗提供的订阅号及文章内容搜索。',
		},
	},
	{
		name: '知乎',
		path: 'https://www.zhihu.com',
		type: 'blog',
		meta: {
			rank: 0,
			icon: 'https://www.zhihu.com/favicon.ico',
			description: '搜索知乎的内容',
		},
	},
	{
		name: 'pexels',
		path: 'https://www.pexels.com/zh-cn/',
		type: 'gallery',
		meta: {
			rank: 0,
			icon: 'https://pexels.com/favicon.ico',
			description: '免费图库，图片质量不错。',
		},
	},
	{
		name: '在线渐变生成',
		path: 'https://lingdaima.com/jianbianse/',
		type: 'color',
		meta: {
			rank: 0,
			icon: 'https://lingdaima.com/favicon.ico',
			description: '在线生成CSS渐变色工具',
		},
	},
];

export { hotTypeList, hotWebsiteList };
