import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'


export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    'element-plus/dist/index.css',
    '~/assets/css/common.scss'
  ],
  modules: ['nuxt-lodash', '@element-plus/nuxt', '@vueuse/nuxt', '@pinia/nuxt'],
  elementPlus: {},
  
  devServer: {
    port: 8170,
    host: 'localhost',
  },
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
      })
    ],
  },
  
  // lodash: {
  //   prefix: '_'
  // }
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
})
