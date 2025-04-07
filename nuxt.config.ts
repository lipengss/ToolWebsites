import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// 'element-plus/dist/index.css',
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/common.scss', 'animate.css'],
	modules: ['nuxt-lodash', '@element-plus/nuxt', '@vueuse/nuxt', '@pinia/nuxt', 'nuxt-swiper'],

	elementPlus: {
		themes: ['dark'],
		importStyle: 'scss',
	},

	pinia: {
		storesDirs: ['./stores/**'],
	},

	// buildModules: ['@nuxtjs/router-extras'],
	devServer: {
		port: 8669,
	},

	server: {
		host: '0.0.0.0',
		port: 8669,
	},

	vite: {
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), 'assets/svg')],
			}),
			{
				src: '~/plugins/VueGridLayout.client.js',
				ssr: false,
			},
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/css/element-variables.scss" as element;`,
				},
			},
		},
	},
	build: {
		chunkSizeWarningLimit: 1000,
// 将 chunkSizeWarningLimit 移至 vite 配置中，因为在 build 配置中不支持该属性
		rollupOptions: {
			output: {
				manualChunks: {
					'lodash-es': ['lodash-es'],
				},
			},
		}
	},
	app: {
		head: {
			viewport: 'width=device-width, initial-scale=1',
		},
		baseURL: '/ToolWebsites/',
		buildAssetsDir: '/static/',
	},

	ssr: false,
	router: {
		options: {
			hashMode: true,
		},
	},
	target: 'static',
	compatibilityDate: '2025-03-03',
});
