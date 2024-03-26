module.exports = {
	apps: [
		{
			name: 'lifetoolbox', // 设置启动项目名称
			exec_mode: 'cluster',
			instances: 'max',
			script: './server/index.mjs',
			env: {
				NODE_ENV: 'production',
				PORT: '80',
			},
		},
	],
};
