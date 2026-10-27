<script setup lang="ts">
// 首页标题区右边的启动器示意图（还没有截图，先用 HTML 画）：轮流演示几种输入和结果
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface Row { icon: string; title: string; sub?: string; hint?: string }
interface Demo { input: string; rows: Row[] }

const demos: Demo[] = [
  {
    input: 'jsb',
    rows: [
      { icon: '📝', title: '记事本', sub: '应用', hint: 'Enter：打开' },
      { icon: '📄', title: 'jsb-报价单.xlsx', sub: 'D:\\工作\\2026' },
      { icon: '🌐', title: '在百度中搜索 jsb' },
    ],
  },
  {
    input: '周报 doc:',
    rows: [
      { icon: '📄', title: '周报-第43周.docx', sub: 'D:\\工作\\周报', hint: 'Enter：打开' },
      { icon: '📄', title: '周报模板.docx', sub: 'D:\\工作\\模板' },
      { icon: '📄', title: '周报汇总.xlsx', sub: 'D:\\工作\\周报' },
    ],
  },
  {
    input: 'b 天气',
    rows: [
      { icon: '🌐', title: '在 百度 中搜索 天气', hint: 'Enter：打开' },
      { icon: '📁', title: '天气数据', sub: 'D:\\资料' },
    ],
  },
  {
    input: 'psh',
    rows: [
      { icon: '💻', title: 'PowerShell', sub: '在当前文件夹打开', hint: 'Enter：执行' },
      { icon: '💻', title: 'PowerShell (管理)', sub: '以管理员身份' },
    ],
  },
]

const index = ref(0)
const typed = ref(demos[0].input)   // 服务端渲染时直接显示完整的第一组
const demo = computed(() => demos[index.value])
const showRows = computed(() => typed.value === demo.value.input)

let timer: ReturnType<typeof setTimeout> | undefined

// 一个字一个字打出来，停一会儿再换下一组
function play(i: number) {
  index.value = i
  typed.value = ''
  const chars = Array.from(demos[i].input)
  let n = 0
  const step = () => {
    n++
    typed.value = chars.slice(0, n).join('')
    timer = setTimeout(n < chars.length ? step : () => play((i + 1) % demos.length), n < chars.length ? 140 : 2600)
  }
  timer = setTimeout(step, 400)
}

onMounted(() => {
  // 系统设置了“减少动态效果”时不播放
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setTimeout(() => play(1), 2600)
})
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div class="launcher" aria-label="超级直达启动器示意图">
    <div class="input">
      <span class="glass" aria-hidden="true">🔍</span>
      <span class="text">{{ typed }}<span class="caret" /></span>
      <span class="buttons" aria-hidden="true">⧉ ⚙</span>
    </div>
    <ul class="rows">
      <template v-if="showRows">
        <li v-for="(row, i) in demo.rows" :key="demo.input + i" :class="{ selected: i === 0 }">
          <span class="icon" aria-hidden="true">{{ row.icon }}</span>
          <span class="main">
            <span class="title">{{ row.title }}</span>
            <span v-if="row.sub" class="sub">{{ row.sub }}</span>
          </span>
          <span v-if="row.hint && i === 0" class="hint">{{ row.hint }}</span>
        </li>
      </template>
    </ul>
    <p class="tip">双击 <kbd>Ctrl</kbd> 呼出</p>
  </div>
</template>

<style scoped>
.launcher {
  position: relative;   /* 盖在默认主题的蓝色光晕（.image-bg）上面 */
  z-index: 1;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  font-size: 14px;
  text-align: left;
}
.input {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  background: var(--vp-c-bg-soft);
  border-bottom: 2px solid var(--vp-c-brand-1);
  font-size: 17px;
}
.glass { font-size: 15px; opacity: 0.7; }
.text { flex: 1; min-height: 1.4em; white-space: nowrap; overflow: hidden; }
.caret {
  display: inline-block;
  width: 1px;
  height: 1.1em;
  margin-left: 1px;
  vertical-align: -2px;
  background: var(--vp-c-text-1);
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }
.buttons { color: var(--vp-c-text-3); letter-spacing: 6px; font-size: 15px; }
.rows { list-style: none; margin: 0; padding: 4px 0; min-height: 150px; }
.rows li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  margin: 0;
}
.rows li.selected { background: var(--vp-c-brand-soft); }
.icon { width: 22px; text-align: center; font-size: 17px; }
.main { flex: 1; min-width: 0; display: flex; flex-direction: column; line-height: 1.35; }
.title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.sub { font-size: 12px; color: var(--vp-c-text-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.hint { font-size: 12px; color: var(--vp-c-brand-1); white-space: nowrap; }
.tip {
  margin: 0;
  padding: 6px 14px 8px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12px;
  color: var(--vp-c-text-2);
}
@media (prefers-reduced-motion: reduce) {
  .caret { animation: none; }
}
</style>
