import{_ as a,b as e,e as l,x as t,aw as h,o as n}from"./chunks/framework.BunOihQj.js";const u=JSON.parse('{"title":"简介","description":"","frontmatter":{"title":"简介"},"headers":[],"relativePath":"introduction/index.md","filePath":"introduction/index.md"}'),p={name:"introduction/index.md"};function k(s,i,r,o,d,c){return n(),e("div",null,[l("h1",null,t(s.$frontmatter.title),1),i[0]||(i[0]=h(`<nav class="table-of-contents"><ul><li><a href="#overview">概括</a></li><li><a href="#installation">安装</a></li><li><a href="#quick-start">快速开始</a></li><li><a href="#the-why">背景</a></li><li><a href="#tree-shaking">除屑优化（Tree-Shaking）</a></li><li><a href="#compatibility">兼容性</a><ul><li><a href="#importing-commonjs">导入 CommonJS</a></li><li><a href="#publishing-es-modules">发布 ES 模块</a></li></ul></li></ul></nav><h2 id="overview" tabindex="-1">概括 <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;概括 {#overview}&quot;">​</a></h2><p>Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，而不是以前的 CommonJS 和 AMD 等特殊解决方案。ES 模块允许你自由无缝地组合你最喜欢的库中最有用的个别函数。这在未来将在所有场景原生支持，但 Rollup 让你今天就可以开始这样做。</p><h2 id="installation" tabindex="-1">安装 <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;安装 {#installation}&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollup</span></span></code></pre></div><p>这将使 Rollup 可以作为全局命令行工具使用。你也可以在本地安装它，请参阅 <a href="./../tutorial/#installing-rollup-locally">在本地安装 Rollup</a>。</p><h2 id="quick-start" tabindex="-1">快速开始 <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;快速开始 {#quick-start}&quot;">​</a></h2><p>可以通过带有可选配置文件的 <a href="./../command-line-interface/">命令行界面</a> 或 <a href="./../javascript-api/">JavaScript API</a> 来使用 Rollup。运行<code>rollup --help</code>以查看可用选项和参数。</p><blockquote><p>参见 <a href="https://github.com/rollup/rollup-starter-lib" target="_blank" rel="noreferrer">rollup-starter-lib</a> 和 <a href="https://github.com/rollup/rollup-starter-app" target="_blank" rel="noreferrer">rollup-starter-app</a>，以查看使用 Rollup 的示例库和应用程序项目。</p></blockquote><p>这些命令假定你的应用程序入口点命名为 <code>main.js</code>，并且希望将所有导入编译到一个名为 <code>bundle.js</code> 的单个文件中。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UDZmO" id="tab-sRJUyly" checked><label data-title="浏览器" for="tab-sRJUyly">浏览器</label><input type="radio" name="group-UDZmO" id="tab-z3EXVgz"><label data-title="Node.js" for="tab-z3EXVgz">Node.js</label><input type="radio" name="group-UDZmO" id="tab-dyYjZz_"><label data-title="浏览器和 Node.js" for="tab-dyYjZz_">浏览器和 Node.js</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译为包含自执行函数（&#39;iife&#39;）的 &lt;script&gt;。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bundle.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iife</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译为一个 CommonJS 模块 (&#39;cjs&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bundle.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cjs</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># UMD 格式需要一个包名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bundle.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> umd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;myBundle&quot;</span></span></code></pre></div></div></div><h2 id="the-why" tabindex="-1">背景 <a class="header-anchor" href="#the-why" aria-label="Permalink to &quot;背景 {#the-why}&quot;">​</a></h2><p>将项目分解为较小的独立部分通常可以使软件开发更加容易，因为这通常可以消除意外的交互，并大大减少你需要解决的问题的复杂性，而仅仅是首先编写较小的项目 <a href="https://medium.com/@Rich_Harris/small-modules-it-s-not-quite-that-simple-3ca532d65de4" target="_blank" rel="noreferrer">并不一定是最好的方式</a>。不幸的是，JavaScript 在历史上并没有将这种能力作为语言的核心特性之一。这在 ES6 版本的 JavaScript 中得到了改变，该版本包括一种语法，用于导入和导出函数和数据，以便它们可以在单独的脚本之间共享。</p><p>该规范现在已经稳定，但仅在现代浏览器中实现，并未在 Node.js 中完全落地。Rollup 允许你使用新的模块系统编写代码，然后将其编译回现有的支持格式，例如 CommonJS 模块、AMD 模块和 IIFE 样式脚本。这意味着你可以编写 <em>对未来兼容</em> 的代码，并且还可以获得以下几点收益……</p><h2 id="tree-shaking" tabindex="-1">除屑优化（Tree-Shaking） <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;除屑优化（Tree-Shaking） {#tree-shaking}&quot;">​</a></h2><p>除了可以使用 ES 模块之外，Rollup 还可以静态分析你导入的代码，并将排除任何实际上没有使用的内容。这使你可以在现有的工具和模块的基础上构建，而不需要添加额外的依赖项或使项目的大小变得臃肿。</p><p>例如，使用 CommonJS <em>必须导入整个工具或库</em>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 CommonJS 导入整个 utils 对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> utils</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./utils&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Rollup&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 utils 对象的 ajax 方法。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ajax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`https://api.example.com?search=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handleResponse);</span></span></code></pre></div><p>使用 ES 模块，我们不需要导入整个 <code>utils</code> 对象，而只需导入我们需要的一个 <code>ajax</code> 函数：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 ES6 的 import 语句导入 ajax 函数。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ajax } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./utils&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Rollup&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用 ajax 函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ajax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`https://api.example.com?search=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handleResponse);</span></span></code></pre></div><p>因为 Rollup 只包含最少的内容，因此它生成的库和应用程序更轻、更快、更简单。由于这种方法可以利用显式的 <code>import</code> 和 <code>export</code> 语句，因此它比仅运行最小化混淆工具更能有效检测出已编译输出代码中的未使用变量。</p><h2 id="compatibility" tabindex="-1">兼容性 <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;兼容性 {#compatibility}&quot;">​</a></h2><h3 id="importing-commonjs" tabindex="-1">导入 CommonJS <a class="header-anchor" href="#importing-commonjs" aria-label="Permalink to &quot;导入 CommonJS {#importing-commonjs}&quot;">​</a></h3><p>Rollup 可以通过插件 <a href="https://github.com/rollup/plugins/tree/master/packages/commonjs" target="_blank" rel="noreferrer">导入现有的 CommonJS 模块</a>。</p><h3 id="publishing-es-modules" tabindex="-1">发布 ES 模块 <a class="header-anchor" href="#publishing-es-modules" aria-label="Permalink to &quot;发布 ES 模块 {#publishing-es-modules}&quot;">​</a></h3><p>为了确保你的 ES 模块可以立即被处理 CommonJS 的工具使用，例如 Node.js 和 webpack，你可以使用 Rollup 编译成 UMD 或 CommonJS 格式，然后在 <code>package.json</code> 文件中使用 <code>main</code> 属性指向编译后的版本。如果你的 <code>package.json</code> 文件还有一个 <code>module</code> 字段，那么像 Rollup 和 <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">webpack 2+</a> 这样的可感知 ES 模块的工具将直接 <a href="https://github.com/rollup/rollup/wiki/pkg.module" target="_blank" rel="noreferrer">导入 ES 模块版本</a>。</p>`,26))])}const m=a(p,[["render",k]]);export{u as __pageData,m as default};
