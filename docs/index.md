---
# 首页：VitePress 默认的首页布局（标题区 + 功能卡片）
layout: home
title: 超级直达 - Windows 快速启动器
titleTemplate: false

hero:
  name: 超级直达
  text: 常用操作，一键直达
  tagline: 双击 Ctrl，应用、文件、文件夹一步直达
  image:
    src: /logo.svg
    alt: 超级直达
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 使用教程
      link: /start/install

features:
  - title: 双击 Ctrl，打开就用
    details: 在任何窗口里连按两下 Ctrl，弹出搜索框。输入几个字母就能打开应用，支持拼音首字母和全拼（jsb → 记事本）。
    link: /guide/launcher
  - title: 文件秒搜
    details: 文件和文件夹交给 Everything 搜，几百万个文件也是打字即出结果；右边直接预览文本、图片、PDF、Office 文档。
    link: /guide/file-search
  - title: 对话框一键切换
    details: “打开 / 保存”对话框下方多一条工具栏，一键切到资源管理器正在看的文件夹，或按 Ctrl+G 直接跳过去。
    link: /guide/dialog
  - title: 首页直达常用
    details: 不用打字：最近用过的应用、固定的文件夹和文件，点一下就打开。
    link: /guide/home
  - title: 文件夹操作就地完成
    details: 选中一个文件夹，直接在这里打开命令行、PowerShell、VS Code，新建文件夹，或只在这里面搜索。
    link: /guide/commands
  - title: 资源管理器里打字即搜
    details: 在资源管理器或桌面上直接打字，就在当前文件夹和子文件夹里搜，不用先点搜索框。
    link: /guide/explorer
---
