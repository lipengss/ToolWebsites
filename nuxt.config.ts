import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['element-plus/dist/index.css', '~/assets/css/common.scss', 'animate.css'],
	modules: ['nuxt-lodash', '@element-plus/nuxt', '@vueuse/nuxt', '@pinia/nuxt'],
	elementPlus: {
		themes: ['dark'],
	},
	buildModules: ['@nuxtjs/router-extras'],
	devServer: {
		port: 8170,
		host: 'localhost',
	},
	vite: {
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), 'assets/svg')],
			}),
		],
	},
	app: {
		head: {
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	// lodash: {
	//   prefix: '_'
	// }
	// app: {
	//   pageTransition: { name: 'page', mode: 'out-in' }
	// },
});
