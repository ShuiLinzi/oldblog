const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {
  // dest: 'gb-pages',//打包目录
  base: '/blog/',
  title: "凛",
  description: '决定未来的不是过去，而是现在。',
  head: [

    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
    }]
  ],

  //主题配置
  theme: 'reco',
  themeConfig: {
    nav,
    // sidebar: 'auto',// 自动形成侧边导航
    sidebar,
    // logo: '/vuepress/head-fish.jpg', //导航栏头像
    authorAvatar: '/vuepress/head-fish.jpg', //首页右侧头像
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    sidebarDepth: 2,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      }
    },
    // 最后更新时间
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
    // 作者
    author: '凛',
    // 备案号
    // record: '',
    // 项目开始时间
    startYear: '2021',
    //git地址
    // repo: '',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    //docsBranch: 'vuepress',
    // editLinks: true,
    // editLinkText: '在 GitHub 上编辑此页！',
    //评论
    //TODO 想启动评论功能的时候在弄一下
    // valineConfig: {
    //   appId: 'xbT4pPXCWQju5T7GXC5fUFlF-gzGzoHsz',
    //   appKey: 'bofA5chNQ60p37Ih9sMffSI0',
    //   placeholder: '填写邮箱可以收到回复哦!',
    //   notify: true, // 邮件提醒
    //   verify: true, // 验证码
    //   recordIP: true
    // },
  },
  plugins,
  markdown: {
    lineNumbers: true
  },

}
