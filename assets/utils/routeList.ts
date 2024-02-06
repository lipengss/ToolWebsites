
// import { Picture, Crop, Box, Switch, House } from '@element-plus/icons-vue'

export const routeList = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '图片处理',
    path: '/picture',
    children: [
      {
        name: '图片裁切',
        path: '/picture/crop'
      },
      {
        name: '图片压缩',
        path: '/picture/compress'
      },
      {
        name: '图片转base64',
        path: '/picture/format'
      }
    ]
  },
  {
    name: '颜色处理',
    path: '/color'
  }
]