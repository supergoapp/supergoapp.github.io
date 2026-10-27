<script setup lang="ts">
// 首页功能卡片下面的几块：输入示例、三个场景、结尾的下载
import { withBase } from 'vitepress'

const examples = [
  { input: 'vsc', result: '打开 Visual Studio Code（应用名支持拼音：jsb → 记事本）' },
  { input: '周报', result: '用 Everything 搜文件和文件夹，名字开头匹配的、常用的排前面' },
  { input: 'pic: 截图', result: '只搜图片；doc:、video:、audio:、folder: 同理' },
  { input: 'size:>1gb dm:thisyear', result: '今年改过的大文件' },
  { input: 'b 天气', result: '用百度搜“天气”；g、bing、wiki 等也能用' },
  { input: 'mkdir 资料', result: '在资源管理器当前文件夹新建“资料”并跳进去' },
  { input: '报告 cp', result: '对搜到的报告执行动作：复制它的路径' },
  { input: '?', result: '忘了写法？列出搜索语法速查' },
]

const scenes = [
  {
    title: '不打字也能打开',
    text: '输入框空着时显示首页：最近用过的应用、固定的项、最近的文件夹，还有对文件夹的常用操作，方向键一选就开。在资源管理器里呼出时，“操作”就对当前文件夹执行：开命令行、PowerShell、VS Code，新建文件夹。',
    link: '/guide/home',
    kind: 'home',
  },
  {
    title: '“打开 / 另存为”不用一层层点',
    text: '对话框下方多一条工具栏，列出资源管理器里正开着的文件夹，点一下就跳；按 Ctrl+G 直接跳到最近看的那个。还能搜文件夹、看历史和收藏。',
    link: '/guide/dialog',
    kind: 'dialog',
  },
  {
    title: '资源管理器里直接打字',
    text: '点一下文件列表空白处，直接输入，就在当前文件夹和子文件夹里搜，回车打开或跳进去。桌面上也一样。',
    link: '/guide/explorer',
    kind: 'explorer',
  },
]
</script>

<template>
  <div class="home-sections">
    <section>
      <h2>打一行字，一步直达</h2>
      <p class="lead">启动器里输入的几种写法。完整写法见 <a :href="withBase('/guide/syntax')">搜索语法</a>。</p>
      <dl class="examples">
        <div v-for="e in examples" :key="e.input" class="example">
          <dt><kbd>{{ e.input }}</kbd></dt>
          <dd>{{ e.result }}</dd>
        </div>
      </dl>
    </section>

    <section>
      <h2>用在每天的小事上</h2>
      <div v-for="(s, i) in scenes" :key="s.kind" class="scene" :class="{ reverse: i % 2 === 1 }">
        <div class="scene-text">
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <a :href="withBase(s.link)">了解更多 →</a>
        </div>

        <div class="scene-pic" aria-hidden="true">
          <!-- 首页：四组格子 -->
          <div v-if="s.kind === 'home'" class="mock">
            <div class="mock-input">&nbsp;</div>
            <div class="grid-label">最近使用</div>
            <div class="grid">
              <span class="cell sel">📝<i>记事本</i></span><span class="cell">🖼️<i>画图</i></span><span class="cell">🧮<i>计算器</i></span><span class="cell">💬<i>微信</i></span>
            </div>
            <div class="grid-label">最近文件夹</div>
            <div class="grid">
              <span class="cell">📁<i>下载</i></span><span class="cell">📁<i>周报</i></span><span class="cell">📁<i>官网</i></span>
            </div>
            <div class="grid-label">操作 · 当前文件夹 D:\项目</div>
            <div class="grid">
              <span class="cell">➕<i>新建</i></span><span class="cell">💻<i>命令行</i></span><span class="cell">⚡<i>PowerShell</i></span><span class="cell">🔎<i>搜索</i></span>
            </div>
          </div>

          <!-- 对话框：下方的工具栏 -->
          <div v-else-if="s.kind === 'dialog'" class="mock">
            <div class="dlg-title">另存为</div>
            <div class="dlg-addr">此电脑 › 文档</div>
            <div class="dlg-body">
              <span>📁 工作</span><span>📁 照片</span><span>📄 简历.docx</span>
            </div>
            <div class="dlg-bar">
              <span class="chip on">设计稿</span><span class="chip">下载</span><span class="chip">周报</span>
              <span class="dlg-search">🔍 搜索</span><span>☆ 🕒 🔧</span>
            </div>
          </div>

          <!-- 资源管理器：打字后弹出的搜索面板 -->
          <div v-else class="mock">
            <div class="dlg-addr">D:\项目\官网</div>
            <div class="dlg-body">
              <span>📁 docs</span><span>📁 node_modules</span><span>📄 package.json</span>
            </div>
            <div class="panel">
              <div class="panel-input">conf</div>
              <div class="panel-row sel">📄 config.mts <i>docs\.vitepress</i></div>
              <div class="panel-row">📄 tsconfig.json <i>.</i></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>免费，装上就能用</h2>
      <p>Windows 10、11（64 位）。搜文件需要免费的 Everything，没装时软件里有提示和下载入口。</p>
      <div class="cta-buttons">
        <a class="btn brand" :href="withBase('/download')">下载超级直达</a>
        <a class="btn alt" :href="withBase('/start/install')">先看看怎么用</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-sections {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 48px;
}
@media (min-width: 640px) { .home-sections { padding: 0 48px 64px; } }
@media (min-width: 960px) { .home-sections { padding: 0 64px 64px; } }

section { margin-top: 64px; }
h2 {
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}
h3 { margin: 0 0 8px; font-size: 18px; font-weight: 600; color: var(--vp-c-text-1); }
p { margin: 0 0 8px; color: var(--vp-c-text-2); line-height: 1.75; }
a { color: var(--vp-c-brand-1); font-weight: 500; }
a:hover { text-decoration: underline; }
.lead { margin-bottom: 20px; }

/* 输入示例：宽屏两列，手机一列 */
.examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr));
  gap: 0 32px;
  margin: 0;
}
.example {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid var(--vp-c-divider);
}
.example dt { flex: 0 0 auto; }
.example dd { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.6; }
.example kbd {
  background: var(--vp-c-bg-soft);
  white-space: nowrap;
}

/* 场景：文字和示意图左右交替，手机上上下排 */
.scene {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 32px;
}
.scene.reverse { flex-direction: row-reverse; }
.scene-text, .scene-pic { flex: 1 1 0; min-width: 0; }
@media (max-width: 767px) {
  .scene, .scene.reverse { flex-direction: column; align-items: stretch; gap: 16px; }
}

.mock {
  max-width: 420px;
  margin: 0 auto;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 12px;
  font-size: 12px;
  color: var(--vp-c-text-1);
}
.mock-input {
  background: var(--vp-c-bg-soft);
  border-bottom: 2px solid var(--vp-c-brand-1);
  padding: 6px 8px;
  margin: -12px -12px 8px;
  border-radius: 10px 10px 0 0;
}
.grid-label { color: var(--vp-c-text-2); margin: 6px 0 4px; }
.grid { display: flex; gap: 6px; flex-wrap: wrap; }
.cell {
  width: 60px;
  padding: 6px 0;
  border-radius: 6px;
  text-align: center;
  font-size: 18px;
  line-height: 1.2;
}
.cell i { display: block; font-style: normal; font-size: 11px; margin-top: 2px; color: var(--vp-c-text-1); }
.cell.sel { background: var(--vp-c-brand-soft); }

.dlg-title { font-weight: 600; margin-bottom: 6px; }
.dlg-addr {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 3px 8px;
  color: var(--vp-c-text-2);
}
.dlg-body { display: flex; flex-direction: column; gap: 4px; padding: 8px 4px; min-height: 70px; }
.dlg-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  border-top: 2px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  margin: 0 -12px -12px;
  border-radius: 0 0 10px 10px;
}
.chip { border: 1px solid var(--vp-c-divider); border-radius: 4px; padding: 1px 8px; background: var(--vp-c-bg); }
.chip.on { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.dlg-search { flex: 1; min-width: 60px; color: var(--vp-c-text-3); }

.panel {
  margin: 0 0 0 auto;
  width: 78%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}
.panel-input { padding: 5px 8px; border-bottom: 2px solid var(--vp-c-brand-1); background: var(--vp-c-bg-soft); }
.panel-row { padding: 4px 8px; }
.panel-row i { font-style: normal; color: var(--vp-c-text-2); margin-left: 6px; }
.panel-row.sel { background: var(--vp-c-brand-soft); }

/* 结尾 */
.cta {
  text-align: center;
  padding: 40px 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }
.btn {
  display: inline-block;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none !important;
  border: 1px solid transparent;
}
.btn.brand { background: var(--vp-button-brand-bg); color: var(--vp-button-brand-text); }
.btn.brand:hover { background: var(--vp-button-brand-hover-bg); }
.btn.alt { background: var(--vp-button-alt-bg); color: var(--vp-button-alt-text); border-color: var(--vp-button-alt-border); }
.btn.alt:hover { background: var(--vp-button-alt-hover-bg); }
</style>
