import { defineConfig } from 'vitepress'

// 网站配置：https://vitepress.dev/reference/site-config
// 网站发布在 https://supergoapp.github.io（组织主页仓库，在根路径，不用设 base）
export default defineConfig({
  lang: 'zh-CN',
  title: '超级直达',
  description: '常用操作，一键直达。双击 Ctrl，应用、文件、文件夹一步直达的 Windows 快速启动器',
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '使用教程', link: '/start/install', activeMatch: '^/(start|guide)/' },
      { text: '下载', link: '/download' },
      { text: '问题反馈', link: 'https://github.com/supergoapp/supergo-release/issues' },
    ],

    // 文档页左侧目录：文件夹就是地址，docs/guide/launcher.md → /guide/launcher
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '安装与开始使用', link: '/start/install' },
          { text: '下载', link: '/download' },
        ],
      },
      {
        text: '启动器',
        items: [
          { text: '启动器', link: '/guide/launcher' },
          { text: '启动器首页', link: '/guide/home' },
          { text: '网页搜索、网址和路径', link: '/guide/web' },
          { text: '命令', link: '/guide/commands' },
          { text: '动作', link: '/guide/actions' },
          { text: '热键和作用范围', link: '/guide/hotkeys' },
        ],
      },
      {
        text: '找文件',
        items: [
          { text: '文件搜索窗口', link: '/guide/file-search' },
          { text: '文件预览', link: '/guide/preview' },
          { text: '搜索语法', link: '/guide/syntax' },
        ],
      },
      {
        text: '在别的窗口里',
        items: [
          { text: '对话框快速切换', link: '/guide/dialog' },
          { text: '资源管理器里打字即搜', link: '/guide/explorer' },
          { text: '弹出菜单', link: '/guide/popup-menu' },
        ],
      },
      {
        text: '设置和扩展',
        items: [
          { text: '选项一览', link: '/guide/options' },
          { text: '插件', link: '/guide/plugins' },
          { text: '托盘和命令行', link: '/guide/tray' },
        ],
      },
      {
        text: '其他',
        items: [{ text: '常见问题', link: '/guide/faq' }],
      },
    ],

    // 站内搜索（不依赖外部服务）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '本页目录' },
    returnToTopLabel: '回到顶部',
    notFound: {
      title: '页面不存在',
      quote: '这个地址可能写错了，或者页面已经搬走。可以回到首页，或者从使用教程里找找。',
      linkLabel: '回到首页',
      linkText: '回到首页',
    },
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',

    // 页脚只在没有左侧目录的页面显示（首页、下载页）
    footer: {
      message: '本网站的页面和文字由 AI 通过 Vibe Coding 生成，内容仅供参考，如有不准确之处，以软件实际为准。'
        + '<br>超级直达参考了市面上的同类软件，但功能可能不如它们完善和稳定。仅供学习和研究使用，请勿用于任何非法用途。'
        + '<br>文件搜索使用 <a href="https://www.voidtools.com/" target="_blank" rel="noopener">Everything</a>（voidtools）及其官方 SDK。',
      copyright: 'Copyright © 2026 超级直达',
    },
  },
})
