// 热门网站
const hotWebsiteList: Array<WebHotItem> = [
	{
		name: 'Google',
		key: 'google',
		url: 'https://www.google.com/search?q=',
		icon: 'https://www.google.com/favicon.ico',
		type: 'search',
		description: '最好用，但是访问需要点技术。',
	},
	{
		name: 'Bing',
		key: 'bing',
		url: 'https://www.bing.com/search?q=',
		icon: 'https://www.bing.com/favicon.ico',
		type: 'search',
		description: '微软公司的搜索引擎，还可以。',
	},
	{
		name: 'Baidu',
		key: 'baidu',
		url: 'https://www.baidu.com/s?wd=',
		icon: 'https://www.baidu.com/favicon.ico',
		type: 'search',
		description: '搜索结果不一定是你想要的，广告还多。',
	},
	{
		name: 'GitHub',
		key: 'github',
		url: 'https://www.github.com',
		icon: 'https://www.github.com/favicon.ico',
		type: 'search',
		description: '最大的开源项目资源网站。',
	},
	{
		name: '搜狗',
		key: 'sougou',
		url: 'https://www.sogou.com',
		icon: 'https://www.sogou.com/favicon.ico',
		type: 'search',
		description: '搜狗提供的订阅号及文章内容搜索。',
	},
	{
		name: '知乎',
		key: 'zhihu',
		url: 'https://www.zhihu.com',
		icon: 'https://www.zhihu.com/favicon.ico',
		type: 'blog',
		description: '搜索知乎的内容',
	},
];

export { hotWebsiteList };
