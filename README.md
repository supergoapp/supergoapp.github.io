# 超级直达网站

超级直达（SuperGo）的官网和使用教程：<https://supergoapp.github.io>

## 用了什么

| 项目 | 说明 |
|---|---|
| [VitePress](https://vitepress.dev) 1.6 | 文档网站生成器：页面都用 Markdown 写，首页用默认主题的首页布局（标题区 + 功能卡片） |
| medium-zoom | 文档里的截图点击放大 |
| GitHub Actions + GitHub Pages | 推送到 `main` 后自动打包、发布（Linux 运行器，约 1 分钟） |
| Node.js | 18 或更新的版本 |

## 目录

```
docs/
├─ .vitepress/
│  ├─ config.mts       网站配置：标题、顶部导航、左侧目录、搜索、页脚
│  └─ theme/           默认主题 + 图片点击放大 + 主色
│     └─ components/   首页用的组件：HeroLauncher（标题区的启动器示意图）、HomeSections（输入示例、场景、下载）
├─ public/logo.svg     标志（临时的，正式图标做好后替换）
├─ index.md            首页：标语、功能卡片
├─ download.md         下载页
├─ start/              安装与开始使用
└─ guide/              各功能的使用教程、搜索语法、插件、常见问题
.github/workflows/deploy.yml   自动发布到 GitHub Pages
```

## 本机预览

```bat
npm ci
npm run dev
```

## 规矩

- 内容以软件实际为准，功能改了要同步改这里（软件源码里的 `docs/功能说明.md` 是底稿）。
- 除了页脚的致谢，不写参考软件的名字。
