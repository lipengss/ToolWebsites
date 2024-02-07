export const routeList = [
  {
    name: '首页',
    path: '/',
    rank: 0,
  },
  {
    name: '图片处理',
    path: '/picture',
    rank: 0,
    children: [
      {
        name: '图片裁切',
        path: '/picture/crop',
        rank: 100,
      },
      {
        name: '图片压缩',
        path: '/picture/compress',
        rank: 160,
      },
      {
        name: '图片转base64',
        path: '/picture/format',
        rank: 280,
      }
    ]
  },
  {
    name: '颜色处理',
    path: '/color',
    rank: 300,
  }
]