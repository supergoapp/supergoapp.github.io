// 主题：沿用 VitePress 默认主题，加图片点击放大（medium-zoom）：文档里的截图
// 首页：标题区右边换成启动器示意图（HeroLauncher），功能卡片下面的几块是 HomeSections
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import HeroLauncher from './components/HeroLauncher.vue'
import HomeSections from './components/HomeSections.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'home-hero-image': () => h(HeroLauncher),
  }),
  enhanceApp({ app }) {
    app.component('HomeSections', HomeSections)
  },
  setup() {
    const route = useRoute()
    const zoom = () => mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })
    onMounted(zoom)
    watch(() => route.path, () => nextTick(zoom))   // 换页后新页面里的图片也要能放大
  },
} satisfies Theme
