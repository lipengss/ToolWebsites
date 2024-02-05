// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    'element-plus/dist/index.css',
    '~/assets/css/common.scss'
  ],
  modules: ['nuxt-lodash'],
  // lodash: {
  //   prefix: '_'
  // }
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
})
