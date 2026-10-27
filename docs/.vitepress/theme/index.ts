// 主题：沿用 VitePress 默认主题，加图片点击放大（medium-zoom）：文档里的截图
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './style.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const zoom = () => mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })
    onMounted(zoom)
    watch(() => route.path, () => nextTick(zoom))   // 换页后新页面里的图片也要能放大
  },
} satisfies Theme
