module.exports = {
  title: "wxy0715.github.io",
  description: 'Accumulate small streams and form rivers and seas',
  dest: 'example/public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/',
  // theme: 'reco',
  theme: require.resolve('../../packages/vuepress-theme-reco'),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '记录', link: '/views/sidebar/2022' }
    ],
    sidebar: {
      '/views/sidebar/': [
        '2022',
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        // text: 'Categories' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        // text: 'Tags' // 默认 “标签”
      }
    },
    logo: '/logo.png',
    authorAvatar: '/avatar.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    // lastUpdated: 'Last Updated',
    // 作者
    author: 'wxy',
    // 项目开始时间
    startYear: '2020',
    friendLink: [
      {
        title: 'csdn',
        desc: '分享坎坎坷坷',
        email: '2357191256@qq.com',
        link: 'https://blog.csdn.net/weixin_45706762?spm=1000.2115.3001.5343'
      },
      {
        title: '语雀',
        desc: '记录学习日志',
        link: 'https://www.yuque.com/fuwoquxuexi/upwovu/ig2cnv'
      },
    ],
  },
  plugins: [
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    ['dynamic-title', {
      showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      showText: '客官欢迎回来~',
      hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      hideText: '客官不要走嘛~',
      recoverTime: 2000,
    }],
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      body: [
        {
          type: 'title',
          content: '欢迎加入QQ交流群 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: '/rvcode_qq.png'
        }
      ]
    }]
  ]
}
