export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    'element-plus/dist/index.css',
    '~/assets/css/common.scss'
  ],
  modules: ['nuxt-lodash', '@element-plus/nuxt', '@vueuse/nuxt', '@pinia/nuxt'],
  elementPlus: {},
  // lodash: {
  //   prefix: '_'
  // }
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
})
