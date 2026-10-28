---
# 首页：VitePress 默认的首页布局（标题区 + 功能卡片），标题区右边的启动器示意图和卡片下面的几块在 .vitepress/theme/components 里
layout: home
title: 超级直达 - Windows 快速启动器
titleTemplate: false
markdownStyles: false

hero:
  name: 超级直达
  text: 常用操作，一键直达
  tagline: <span class="hero-key">双击 Ctrl</span>，应用、文件、文件夹一步直达。免费的 Windows 快速启动器。
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 使用教程
      link: /start/install

features:
  - icon: ⌨️
    title: 双击 Ctrl，随叫随到
    details: 在任何窗口里连按两下 Ctrl，屏幕上部弹出搜索框，Esc 就收起。全屏玩游戏、看视频时不打扰；也能换成自己习惯的组合键。
    link: /guide/launcher
    linkText: 启动器
  - icon: 🔤
    title: 应用搜索支持拼音
    details: 开始菜单里的应用和商店应用，按名字、拼音全拼、首字母都能找到：jsb、jishiben 都是记事本，多音字按词组读。
    link: /guide/launcher
    linkText: 能搜什么
  - icon: ⚡
    title: 文件和文件夹秒搜
    details: 文件交给 Everything 搜，几百万个文件也是打字即出结果；名字开头匹配的、常用的排前面，右边直接预览文本、图片、PDF、Office 文档。
    link: /guide/file-search
    linkText: 文件搜索窗口
  - icon: 🏠
    title: 首页，不打字也能开
    details: 输入框空着时显示首页：最近使用的应用、固定的项、最近的文件夹，还有对文件夹的常用操作，方向键一选就打开。
    link: /guide/home
    linkText: 启动器首页
  - icon: 📂
    title: 对话框快速切换
    details: “打开 / 另存为”对话框下方多一条工具栏，资源管理器里开着的文件夹一键跳过去，Ctrl+G 直达；新版 QQ 等程序的对话框也能用。
    link: /guide/dialog
    linkText: 对话框快速切换
  - icon: 🔍
    title: 资源管理器里打字即搜
    details: 在资源管理器或桌面上直接打字，就在当前文件夹和子文件夹里搜，不用先点搜索框。
    link: /guide/explorer
    linkText: 打字即搜
  - icon: 💻
    title: 命令、网页搜索、网址
    details: cmd、psh 在当前文件夹开命令行，mkdir 新建文件夹；b 天气 用百度搜；输入网址或路径直接打开。
    link: /guide/commands
    linkText: 命令
  - icon: 🧩
    title: 动作和插件
    details: 选中结果按 Tab：复制、复制路径、用 VS Code 编辑、删除……还能自己加动作和命令，设热键、关键字，放进插件文件夹就能用。
    link: /guide/actions
    linkText: 动作
  - icon: 🧮
    title: 搜索语法，输 ? 就能查
    details: ext:jpg;png、size:>100mb、dm:thisweek、报告 !草稿……组合条件精确找文件。忘了怎么写？在启动器里输入 ? 就有速查。
    link: /guide/syntax
    linkText: 搜索语法
---

<HomeSections />
