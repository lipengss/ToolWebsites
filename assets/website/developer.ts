export const developers: RouteItem[] = [
	// {
	// 	name: '天气',
	// 	type: 'card',
	// 	meta: {
	// 		rank: 0,
	// 		color: '#fff',
	// 		bgColor: '#cb3837',
	// 		layout: '5x2',
	// 		description: '',
	// 	},
	// 	component: 'Weather',
	// },
	{
		name: '日历',
		type: 'card',
		meta: {
			rank: 0,
			color: '#fff',
			bgColor: '#cb3837',
			layout: '5x2',
			description: '',
		},
		component: 'Calendar',
	},
	{
		name: '下班倒计时',
		type: 'card',
		meta: {
			rank: 0,
			color: '#fff',
			bgColor: '#cb3837',
			layout: '5x2',
			description: '',
		},
		component: 'OffWork',
	},
	{
		name: 'NPM',
		path: 'https://www.npmjs.com/',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-npm',
			color: '#fff',
			bgColor: '#cb3837',
			layout: '1x1',
			description: '是Node的开放式模块登记和管理系统',
		},
	},
	{
		name: 'Github',
		path: 'https://github.com',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-github',
			color: '#333',
			bgColor: '#fff',
			layout: '1x1',
			description: '面向开源及私有软件项目的托管平台。',
		},
	},
	{
		name: 'Gitee',
		path: 'https://gitee.com/',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-gitee',
			color: '#333',
			bgColor: '#c71d23',
			layout: '1x1',
			description: '面向开源及私有软件项目的托管平台。',
		},
	},
	{
		name: 'iconfont',
		path: 'https://www.iconfont.cn/',
		type: ['developer', 'designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-iconfont',
			color: '#fff',
			bgColor: '#1E1E1E',
			layout: '1x1',
			description: '丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。',
		},
	},
	{
		name: 'Animate.css',
		path: 'https://animate.style/',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-animate',
			bgColor: '#1E1E1E',
			color: '#fff',
			size: 70,
			layout: '1x1',
			description: 'Animate.css是一个现成的跨浏览器动画库。',
		},
	},
	{
		name: 'Echarts',
		path: 'https://echarts.apache.org/zh/index.html',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-echarts',
			bgColor: '#fff',
			layout: '1x1',
			description: '一款基于JavaScript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。',
		},
	},
	{
		name: '知乎',
		path: 'https://www.zhihu.com',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-zhihu',
			color: '#fff',
			bgColor: '#0066ff',
			layout: '1x1',
			description: '搜索知乎的内容',
		},
	},
	{
		name: '稀土掘金',
		path: 'https://juejin.cn',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-juejin',
			color: '#fff',
			bgColor: '#1E80FF',
			layout: '1x1',
			description: '掘金是面向全球中文开发者的技术内容分享与交流平台',
		},
	},
	{
		name: 'Element-plus',
		path: 'https://element-plus.org/zh-CN/',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-element-plus',
			color: '#fff',
			bgColor: '#fff',
			layout: '1x1',
			description: '一个 Vue 3 UI 框架 | Element Plus',
		},
	},
	{
		name: 'MDN',
		path: 'https://developer.mozilla.org/zh-CN/',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-mdn',
			color: '#303133',
			bgColor: '#303133',
			size: 50,
			layout: '1x1',
			description: '自2005年以来记录web技术，包括CSS、HTML和JavaScript。',
		},
	},
	{
		name: '图片压缩',
		path: 'https://squoosh.app/',
		type: 'onlineTool',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-picture-zip',
			bgColor: '#fff',
			layout: '1x1',
			description: '在浏览器中压缩和比较不同编解码器的图像',
		},
	},
	{
		name: '测网速',
		path: 'https://www.speedtest.cn/',
		type: ['onlineTool'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-network-speed',
			bgColor: '#fff',
			layout: '1x1',
			description: '提供网速测试，网络质量测试，宽带测速，Wi-Fi测速，5G测速等...',
		},
	},
	{
		name: '菜鸟教程',
		path: 'https://www.runoob.com/',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-cainiao',
			bgColor: '#90c751',
			size: 64,
			layout: '1x1',
			description: '各种编程语言的基础知识。',
		},
	},
	{
		name: '在线渐变',
		path: 'https://www.fly63.com/tool/gradient/',
		type: ['developer', 'onlineTool'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-jianbian',
			bgColor: '#00a0e9',
			size: 50,
			layout: '1x1',
			description: '在线渐变生成器。',
		},
	},
	{
		name: '字体库',
		path: 'https://www.1001fonts.com/',
		type: ['designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-font',
			bgColor: '#8e151e',
			color: '#fff',
			size: 36,
			layout: '1x1',
			description: '58238种免费字体，可直接下载。',
		},
	},
	{
		name: '即时设计',
		path: 'https://js.design/workspace',
		type: ['designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-jishisheji',
			bgColor: '#202020',
			color: '#fff',
			size: 60,
			layout: '1x1',
			description: '在线可协作的UI设计工具。',
		},
	},
	{
		name: '美叶',
		path: 'https://www.meiye.art/',
		type: ['designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-meiye',
			bgColor: '#202020',
			color: '#fff',
			layout: '1x1',
			description: '优质设计内容推荐平台。',
		},
	},
	{
		name: 'Figma',
		path: 'https://www.figma.com/',
		type: ['designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-figma',
			tag: ['appliance', 'efficiency'],
			bgColor: '#202020',
			layout: '1x1',
			description: 'Figma支持多人同时在线编辑、查看和提供反馈，使得设计师、产品经理和开发人员等团队成员可以实时协作，提高设计效率。',
		},
	},
	{
		name: 'bilibili',
		path: 'https://www.bilibili.com/',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-bilibili',
			tag: ['video', 'science', 'finance', 'learning'],
			color: '#fff',
			bgColor: '#ff679a',
			size: 60,
			layout: '1x1',
			description: '视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。',
		},
	},
	{
		name: '虎 嗅 网',
		path: 'https://www.bilibili.com/',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-huxiu',
			tag: ['news', 'science', 'finance'],
			color: '#ffff',
			bgColor: '#fff',
			size: 50,
			layout: '1x1',
			description: '科技资讯,商业评论,明星公司,动态,宏观,趋势,创业,精选,有料,干货,有用,细节,内幕。',
		},
	},
	{
		name: '豆 瓣 网',
		path: 'https://www.douban.com/',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-douban',
			tag: ['read', 'socialize'],
			color: '#fff',
			bgColor: '#2f973e',
			size: 36,
			layout: '1x1',
			description: '提供图书、电影、音乐唱片的推荐、评论和价格比较，以及城市独特的文化生活。',
		},
	},
	{
		name: 'QQ音乐',
		path: 'https://y.qq.com/',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-qq-music',
			tag: ['video', 'appliance'],
			bgColor: '#fff',
			layout: '1x1',
			description: 'QQ音乐是腾讯公司推出的一款网络音乐服务产品',
		},
	},
	{
		name: '动态SVG图库',
		path: 'https://livicons.com/',
		type: ['designer', 'developer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-animation-svg',
			tag: ['efficiency'],
			size: 50,
			bgColor: '#20252a',
			layout: '1x1',
			description: '动画SVG图库',
		},
	},
	{
		name: 'Flaticon',
		path: 'https://www.flaticon.com/',
		type: 'designer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-flaticon',
			tag: ['efficiency'],
			bgColor: '#fff',
			size: 60,
			layout: '1x1',
			description: '下载免费的图标和贴纸为您的项目',
		},
	},
	{
		name: 'Pexels',
		path: 'https://www.pexels.com/zh-cn/',
		type: 'designer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-pexels',
			tag: ['efficiency'],
			bgColor: '#07a081',
			size: 60,
			layout: '1x1',
			description: '免费图库，图片质量不错。',
		},
	},
	{
		name: 'IconPark',
		path: ' https://iconpark.oceanengine.com/',
		type: ['designer', 'developer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-iconPark',
			tag: ['efficiency'],
			bgColor: '#fff',
			layout: '1x1',
			description: '高质量的iconPark,字节跳动制造。',
		},
	},

	{
		name: '西瓜视频',
		path: 'https://www.ixigua.com/?wid_try=1',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-xigua',
			tag: ['science', 'news', 'finance', 'video', 'appliance'],
			bgColor: '#fff',
			layout: '1x1',
			description: '让人们看到更丰富和有深度的世界，收获轻松的获得感，点亮对生活的好奇',
		},
	},
	{
		name: '抖音',
		path: 'https://www.douyin.com/?recommend=1',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-douyin',
			bgColor: '#111',
			tag: ['science', 'news', 'finance', 'video', 'appliance'],
			size: 50,
			layout: '1x1',
			description: '抖音让每一个人看见并连接更大的世界。',
		},
	},
	{
		name: '新浪微博',
		path: 'https://weibo.com/',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-weibo',
			tag: ['science', 'news', 'finance'],
			bgColor: '#fff',
			size: 60,
			layout: '1x1',
			description: '抖音让每一个人看见并连接更大的世界。',
		},
	},
	{
		name: '今日头条',
		path: 'https://www.toutiao.com/',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-toutiao',
			tag: ['science', 'news', 'finance'],
			bgColor: '#fff',
			size: 60,
			layout: '1x1',
			description: '今日头条，头条，头条网，头条新闻，今日头条官网。',
		},
	},
	{
		name: '36氪',
		path: 'https://36kr.com/',
		type: 'amusement',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-36ke',
			tag: ['science', 'news', 'finance'],
			bgColor: '#4182F1',
			size: 60,
			layout: '1x1',
			description: '独家的视角为用户深度剖析最前沿的资讯',
		},
	},
	{
		name: 'ChatGPT',
		path: 'https://chat.openai.com/',
		type: ['developer', 'c'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-openAi',
			tag: ['ai', 'science', 'appliance', 'efficiency'],
			bgColor: '#75A99C',
			color: '#fff',
			layout: '1x1',
			description: '独家的视角为用户深度剖析最前沿的资讯',
		},
	},
	{
		name: '百度翻译',
		path: 'https://fanyi.baidu.com/mtpe-individual/multimodal?aldtype=16047#/auto/zh',
		type: 'developer',
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-baidufanyi',
			tag: ['efficiency', 'appliance'],
			bgColor: '#0299FF',
			color: '#fff',
			layout: '1x1',
			description: '百度翻译',
		},
	},
	{
		name: '语雀',
		path: 'https://www.yuque.com/',
		type: ['developer', 'onlineTool'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-yuque',
			tag: ['learning', 'appliance', 'efficiency'],
			bgColor: '#fff',
			layout: '1x1',
			description: '博客技术栈在线工具资源网站UI库后端技术稀土掘金微信百...',
		},
	},
	{
		name: 'Discord',
		path: 'https://discord.com/',
		type: ['designer', 'amusement'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-discord',
			bgColor: '#5865f2',
			tag: ['socialize', 'appliance'],
			color: '#fff',
			layout: '1x1',
			description: '用户可以创建和加入各种类型的服务器',
		},
	},
	{
		name: '高德地图',
		path: 'https://ditu.amap.com/',
		type: ['onlineTool'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-gaode',
			tag: ['travel'],
			bgColor: '#fff',
			size: 66,
			layout: '1x1',
			description: '高德地图',
		},
	},
	{
		name: 'loading',
		path: 'https://css-loaders.com/shapes/',
		type: ['developer', 'designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-loading',
			tag: ['other'],
			bgColor: '#fff',
			color: '',
			layout: '1x1',
			description: '加载状态',
		},
	},
	{
		name: '人人都是产品经理',
		path: 'http://www.woshipm.com/',
		type: ['product'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-product',
			tag: ['efficiency', 'learning', 'read'],
			bgColor: '#fff',
			layout: '1x1',
			description: '人人都是产品经理致力为产品新人',
		},
	},
	{
		name: '墨刀',
		path: 'https://modao.cc/brand/',
		type: ['product'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-modao',
			tag: ['efficiency', 'appliance'],
			bgColor: '#fff',
			layout: '1x1',
			description: 'AI时代的专业级原型设计工具',
		},
	},
	{
		name: '腾讯视频',
		path: 'https://v.qq.com/',
		type: ['amusement'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-tenxun',
			tag: ['video'],
			bgColor: '#fff',
			layout: '1x1',
			description: '腾讯视频',
		},
	},
	{
		name: '菜鸟工具',
		path: 'https://www.jyshare.com/',
		type: ['developer'],
		meta: {
			rank: 0,
			type: 'text',
			value: '菜鸟',
			tag: ['efficiency', 'learning'],
			color: '#d9534f',
			bgColor: '#fff',
			layout: '1x1',
			description: '为开发设计人员提供在线工具',
		},
	},
	{
		name: '蓝湖',
		path: 'https://lanhuapp.com/',
		type: ['developer', 'product', 'designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-lanhu',
			tag: ['efficiency', 'appliance'],
			bgColor: '#fff',
			layout: '1x1',
			description: '助互联网团队更好地管理文档和设计图',
		},
	},
	{
		name: 'YouTube',
		path: 'https://www.youtube.com/',
		type: ['amusement'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-youguan',
			tag: ['video'],
			bgColor: '#fff',
			layout: '1x1',
			description: '好看的外国自媒体网站，访问需要点手段。',
		},
	},
	{
		name: 'Chrome',
		path: 'https://www.google.com/',
		type: ['amusement', 'developer', 'product', 'designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-chrome',
			tag: ['browser'],
			size: 50,
			bgColor: '#fff',
			layout: '1x1',
			description: '最棒的浏览器，访问需要点手段。',
		},
	},
	{
		name: 'Bing',
		path: 'https://www.bing.com/',
		type: ['amusement', 'developer', 'product', 'designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-bing',
			tag: ['browser'],
			size: 50,
			bgColor: '#fff',
			layout: '1x1',
			description: '微软的也不错，适合程序员。',
		},
	},
	{
		name: '百度',
		path: 'https://www.baidu.com/',
		type: ['amusement', 'developer', 'product', 'designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-baidu',
			tag: ['browser'],
			size: 50,
			bgColor: '#fff',
			layout: '1x1',
			description: '适合搜娱乐八卦之类的。',
		},
	},
	{
		name: 'jsRun',
		path: 'http://cs.jsrun.net/',
		type: ['developer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-jsRun',
			tag: ['browser'],
			size: 61,
			bgColor: '#fff',
			layout: '1x1',
			description: 'js在线运行，C#在线编译。',
		},
	},
	{
		name: 'codesandbox',
		path: 'https://codesandbox.io/',
		type: ['developer', 'onlineTool'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-codesandbox',
			tag: ['efficiency', 'learning', 'appliance'],
			size: 50,
			color: '#000000',
			bgColor: '#FFFFFF',
			layout: '1x1',
			description: '很强的在线编辑器。',
		},
	},
	{
		name: 'unDraw',
		path: 'https://undraw.co/',
		type: ['designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-unDraw',
			tag: ['picture'],
			size: 61,
			color: '#fff',
			bgColor: '#5952D1',
			layout: '1x1',
			description: 'svg插图',
		},
	},
	{
		name: '搜狐新闻',
		path: 'https://news.sohu.com/',
		type: ['amusement'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-souhunews',
			tag: ['finance', 'news', 'science'],
			size: 60,
			bgColor: '#F2C81C',
			layout: '1x1',
			description: '搜狐新闻，偶尔会给你个大爆料。',
		},
	},
	{
		name: 'Uplabs',
		path: 'https://www.uplabs.com/',
		type: ['designer'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-Uplabs',
			tag: ['appliance', 'picture'],
			color: '#fff',
			bgColor: '#703BEA',
			layout: '1x1',
			description: 'UpLabs是为设计师、创意机构和开发者寻找高质量设计资源的地方',
		},
	},
	{
		name: '500PX',
		path: 'https://500px.com.cn/community/index.html',
		type: ['designer', 'amusement'],
		meta: {
			rank: 0,
			type: 'icon',
			value: 'app-500px',
			tag: ['appliance', 'video'],
			size: 40,
			color: '#333',
			bgColor: '#fff',
			layout: '1x1',
			description: '视觉500px摄影师社区',
		},
	},
	{
		name: '35PHOTO',
		path: 'https://35photo.pro/',
		type: ['designer', 'amusement'],
		meta: {
			rank: 0,
			type: 'text',
			value: '35PHOTO',
			tag: ['appliance', 'video'],
			size: 40,
			color: '#fff',
			bgColor: '#FF4500',
			layout: '1x1',
			description: '专业作者照片目录',
		},
	},
];
