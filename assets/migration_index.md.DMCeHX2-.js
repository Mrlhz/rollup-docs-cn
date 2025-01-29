import{_ as a,b as i,e as n,x as t,aw as l,o as s}from"./chunks/framework.nT7dnMoH.js";const f=JSON.parse('{"title":"迁移到 Rollup 4","description":"","frontmatter":{"title":"迁移到 Rollup 4"},"headers":[],"relativePath":"migration/index.md","filePath":"migration/index.md"}'),r={name:"migration/index.md"};function p(o,e,d,c,h,u){return s(),i("div",null,[n("h1",null,t(o.$frontmatter.title),1),e[0]||(e[0]=l(`<nav class="table-of-contents"><ul><li><a href="#prerequisites">前提条件</a></li><li><a href="#general-changes">总体变更</a></li><li><a href="#configuration-changes">配置变化</a></li><li><a href="#changes-to-the-plugin-api">插件 API 的变更</a></li><li><a href="#migrating-to-rollup-3">迁移到 Rollup 3</a></li><li><a href="#prerequisites-v3">前置要求</a></li><li><a href="#using-configuration-files">配置文件使用</a></li><li><a href="#changed-defaults">默认值更改</a></li><li><a href="#more-changed-options">其他选项更改</a></li><li><a href="#dynamic-import-in-commonjs-output">从 CommonJS 输出中的动态导入</a></li><li><a href="#changes-to-the-plugin-api-v3">插件 API 更改</a></li></ul></nav><p>这里列举了一些在迁移 Rollup 3 时可能遇到的重要问题。有关所有破坏性更新的完整列表，我们建议你查阅：</p><ul><li><a href="https://github.com/rollup/rollup/blob/master/CHANGELOG.md#400" target="_blank" rel="noreferrer">Rollup 4 changelog</a></li></ul><p>从 Rollup 3 或更早版本迁移时，请参阅 <a href="#migrating-to-rollup-3">下面的部分</a>.</p><h2 id="prerequisites" tabindex="-1">前提条件 <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;前提条件 {#prerequisites}&quot;">​</a></h2><p>确保你的 Node 版本至少为 18.0.0，并更新所有 Rollup 插件到最新版本。</p><p>对于更大的配置，首先更新到 <code>rollup@3.29.4</code>，将 <a href="./../configuration-options/#strictdeprecations"><code>strictDeprecations</code></a> 选项添加到你的配置中，并解决弹出的所有错误。这样，你可以确保你不依赖可能在 Rollup 4 中被删除的功能。如果你的插件有错误，请联系插件作者。</p><h2 id="general-changes" tabindex="-1">总体变更 <a class="header-anchor" href="#general-changes" aria-label="Permalink to &quot;总体变更 {#general-changes}&quot;">​</a></h2><p>Rollup 现在包含了自动安装（和删除）的原生代码，如果你的平台和架构受到支持，它将作为 <a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json#optionaldependencies" target="_blank" rel="noreferrer">可选的 npm 依赖</a> 自动安装。更准确地说，Rollup 有一个 <code>optionalDependencies</code> 列表，每个列表只安装在特定的 <a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json#os" target="_blank" rel="noreferrer"><code>os</code></a> 和 <a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json#cpu" target="_blank" rel="noreferrer"><code>cpu</code></a> 上。如果你的系统不受支持，当你启动 Rollup 时，你将收到一个错误消息，该消息将告诉你你的平台和架构，并给出一个支持的列表。在这种情况下，你可以使用 <code>@rollup/wasm-node</code> 作为独立的跨平台替代品。</p><p>面向浏览器的构建（NPM 上的 <code>@rollup/browser</code>）现在依赖于一个需要提供的 WASM 文件。如果你正在使用 Vite 的浏览器构建，你需要将 <code>&quot;@rollup/browser&quot;</code> 添加到 <code>optimizeDeps.exclude</code> 中，否则 <code>npm run dev</code> 将因为 <code>.wasm</code> 文件的无效路径而失败（请参阅 <a href="https://github.com/vitejs/vite/issues/14609" target="_blank" rel="noreferrer">vitejs #14609</a>）。否则，它应该可以正常工作，无需任何特定的干预。</p><p>另外，一个明显的变化是，Rollup 现在在文件名中使用 URL 安全的 base64 哈希值，而不是旧的 base16 哈希值。这种方式提供了更高的哈希安全性，但由于技术原因，哈希长度现在最多限制为 21 个字符。</p><p>当打包 CLI 应用程序时，如果输出 <a href="./../configuration-options/#output-format"><code>format</code></a> 为 <code>es</code> 或 <code>cjs</code>，Rollup 现在将自动保留入口文件中的 shebang 注释。以前，你需要通过插件添加注释。</p><p>最后，你可能会看到一些新的关于无效注释位置的警告。如果 Rollup 发现一个 <a href="./../configuration-options/#pure"><code>@__PURE__</code></a> 或 <a href="./../configuration-options/#no-side-effects"><code>@__NO_SIDE_EFFECTS__</code></a> 注释，它无法解释，因为它位于无效的位置，现在将发出警告。这些警告是为了帮助调试。为了消除它们，<a href="./../command-line-interface/#filterlogs-filter"><code>--filter-logs</code></a> CLI 选项可以帮助你。</p><h2 id="configuration-changes" tabindex="-1">配置变化 <a class="header-anchor" href="#configuration-changes" aria-label="Permalink to &quot;配置变化 {#configuration-changes}&quot;">​</a></h2><p>由于一些选项在 Rollup 3 中已经被弃用，因此这里唯一的主要变化是我们不再有 <code>acorn</code> 和 <code>acornInjectPlugin</code> 选项。这意味着，不幸的是，你不能再为不支持的语法添加插件。根据需求，我们考虑再次支持 JSX 语法，因为 SWC 解析器将支持该语法。</p><h2 id="changes-to-the-plugin-api" tabindex="-1">插件 API 的变更 <a class="header-anchor" href="#changes-to-the-plugin-api" aria-label="Permalink to &quot;插件 API 的变更 {#changes-to-the-plugin-api}&quot;">​</a></h2><p>一个重要变更是，<a href="./../plugin-development/#this-resolve"><code>this.resolve()</code></a> 现在默认会添加 <code>skipSelf: true</code>。这意味着当从 <a href="./../plugin-development/#resolveid"><code>resolveId</code></a> 钩子调用 <code>this.resolve()</code> 时，除非它们使用不同的 <code>source</code> 或 <code>importer</code>，否则此钩子将不会被此或其他插件的进一步嵌套 <code>this.resolve()</code> 调用再次调用。我们发现这对于大多数插件来说是一个合理的默认值，可以防止意外的无限循环。要获得旧的行为，你可以手动添加 <code>skipSelf: false</code>。</p><p>另一个重要变更是，Rollup 的 watch 模式将不再监视通过插件 <a href="./../plugin-development/#load"><code>load</code></a> 钩子加载的文件的 id。因此，这主要影响“虚拟”文件，其中监视硬盘位置的更改确实没有意义。相反，现在由使用 <code>load</code> 钩子的插件手动调用 <a href="./../plugin-development/#this-addwatchfile"><code>this.addWatchFile()</code></a> 来处理 <code>load</code> 钩子所依赖的所有文件。</p><p>如果你的插件会处理导入断言，请注意在 <a href="./../plugin-development/#resolveid"><code>resolveId</code></a> 钩子和其他地方，<code>assertions</code> 已被替换为 <code>attributes</code>，因为 JavaScript 功能也被重命名。此外，导入属性的抽象语法树表示现在再次遵循 <a href="https://github.com/estree/estree/blob/7a0c8fb02a33a69fa16dbe3ca35beeaa8f58f1e3/experimental/import-attributes" target="_blank" rel="noreferrer">ESTree 规范</a>。</p><p>如果你想要从你的插件中发出警告，你不能再在 <a href="./../plugin-development/#buildstart"><code>buildStart</code></a> 钩子中调用 <code>options.onwarn()</code>。相反，使用 <a href="./../plugin-development/#load"><code>this.warn()</code></a> 或 <a href="./../configuration-options/#onlog"><code>options.onLog()</code></a>。</p><h2 id="migrating-to-rollup-3" tabindex="-1">迁移到 Rollup 3 <a class="header-anchor" href="#migrating-to-rollup-3" aria-label="Permalink to &quot;迁移到 Rollup 3 {#migrating-to-rollup-3}&quot;">​</a></h2><p>这里是你在从 Rollup 2 迁移到 Rollup 3 时可能遇到的最重要的主题列表。有关所有破坏性更新的完整列表，我们建议你查阅：</p><ul><li><a href="https://github.com/rollup/rollup/blob/master/CHANGELOG.md#300" target="_blank" rel="noreferrer">Rollup 3 更新日志</a></li></ul><p>从 Rollup 1 或更早版本迁移时，请参阅</p><ul><li><a href="https://github.com/rollup/rollup/blob/master/CHANGELOG.md#200" target="_blank" rel="noreferrer">Rollup 2 更新日志</a></li><li><a href="https://github.com/rollup/rollup/blob/master/CHANGELOG.md#100" target="_blank" rel="noreferrer">Rollup 1 更新日志</a></li></ul><h2 id="prerequisites-v3" tabindex="-1">前置要求 <a class="header-anchor" href="#prerequisites-v3" aria-label="Permalink to &quot;前置要求 {#prerequisites-v3}&quot;">​</a></h2><p>请确保你的 Node 版本至少为 14.18.0，并更新所有 Rollup 插件到最新版本。</p><p>对于较大的配置，请首先更新到 <code>rollup@2.79.1</code> ，将 <a href="./../configuration-options/#strictdeprecations"><code>strictDeprecations</code></a> 选项添加到你的配置中，并解决弹出的所有错误。这样，你可以确保你不依赖可能在 Rollup 3 中被删除的功能。如果你的插件有错误，请联系插件作者。</p><h2 id="using-configuration-files" tabindex="-1">配置文件使用 <a class="header-anchor" href="#using-configuration-files" aria-label="Permalink to &quot;配置文件使用 {#using-configuration-files}&quot;">​</a></h2><p>如果你是使用 ES 模块作为配置文件，即使用 <code>import</code> 和 <code>export</code> 语法，那么你需要确保 Node 能够以 ES 模块形式加载你的配置。</p><p>最简单的方法是将文件扩展名更改为 <code>.mjs</code>，详情请参阅 <a href="./../command-line-interface/#configuration-files">配置文件</a>。</p><p>当你使用 Node ES 模块时，有一些额外的注意事项，最重要的是</p><ul><li>你不能直接地导入你的 <code>package.json</code> 文件</li><li>你不能使用 <code>__dirname</code> 来获取当前目录</li></ul><p>参阅 <a href="./../command-line-interface/#caveats-when-using-native-node-es-modules">使用原生 Node ES 模块时的注意事项</a> 将为你提供一些处理这些问题的替代方法。</p><p>或者你可以传递 <a href="./../command-line-interface/#bundleconfigascjs"><code>--bundleConfigAsCjs</code></a> 选项来强制使用旧的加载行为。</p><p>如果你使用了 <a href="./../command-line-interface/#configplugin-plugin"><code>--configPlugin</code></a> 选项，Rollup 将在运行配置文件之前将其作为 ES 模块进行打包，而不是 CommonJS。这允许你可以轻松地从你的配置文件中导入 ES 模块，但是有一些与使用原生 ES 模块相同的问题，例如 <code>__dirname</code> 将不再起作用。同样，你可以传递 <a href="./../command-line-interface/#bundleconfigascjs"><code>--bundleConfigAsCjs</code></a> 选项来强制使用旧的加载行为。</p><h2 id="changed-defaults" tabindex="-1">默认值更改 <a class="header-anchor" href="#changed-defaults" aria-label="Permalink to &quot;默认值更改 {#changed-defaults}&quot;">​</a></h2><p>目前一些选项设置具有不同的默认值，如果你遇到了任何问题，请尝试将以下内容添加到你的配置文件中：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	makeAbsoluteExternalsRelative: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	preserveEntrySignatures: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;strict&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		esModule: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		generatedCode: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			reservedNamesAsProps: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		interop: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;compat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		systemNullSetters: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>总的来说，我们你推荐使用新的默认值，有关每个设置选项的更多详细信息，请参阅相应的文档。</p><h2 id="more-changed-options" tabindex="-1">其他选项更改 <a class="header-anchor" href="#more-changed-options" aria-label="Permalink to &quot;其他选项更改 {#more-changed-options}&quot;">​</a></h2><ul><li><a href="./../configuration-options/#output-banner-output-footer"><code>output.banner/footer</code></a><a href="./../configuration-options/#output-intro-output-outro"><code>/intro/outro</code></a> 现在按块调用，因此不应该执行任何严重影响性能的操作。</li><li><a href="./../configuration-options/#output-entryfilenames"><code>entryFileNames</code></a> 和 <a href="./../configuration-options/#output-chunkfilenames"><code>chunkFileNames</code></a> 函数不再通过 <code>modules</code> 访问呈现的模块信息，而只能访问包含的 <code>moduleIds </code>列表。</li><li>当使用 <a href="./../configuration-options/#output-preservemodules"><code>output.preserveModules</code></a> 和 <code>entryFileNames</code>, 你不能再使用 <code>[ext]</code>, <code>[extName]</code> 和 <code>[assetExtName]</code> 文件名占位符. 此外，模块的路径不再自动添加到文件名前缀，而是包含在 <code>[name]</code> 占位符中。</li></ul><h2 id="dynamic-import-in-commonjs-output" tabindex="-1">从 CommonJS 输出中的动态导入 <a class="header-anchor" href="#dynamic-import-in-commonjs-output" aria-label="Permalink to &quot;从 CommonJS 输出中的动态导入 {#dynamic-import-in-commonjs-output}&quot;">​</a></h2><p>默认情况下，当使用 <code>cjs</code> 作为输出时，Rollup 现在会将任何外部的（即非打包的）动态导入作为输出中的 <code>import(…)</code> 表达式。在 Node 14 及以上的所有版本中都支持从生成的 CommonJS 输出中加载 CommonJS 和 ES 模块。如果你需要支持旧的 Node 版本，你可以传递参数 <a href="./../configuration-options/#output-dynamicimportincjs"><code>output.dynamicImportInCjs: false</code></a>。</p><h2 id="changes-to-the-plugin-api-v3" tabindex="-1">插件 API 更改 <a class="header-anchor" href="#changes-to-the-plugin-api-v3" aria-label="Permalink to &quot;插件 API 更改 {#changes-to-the-plugin-api-v3}&quot;">​</a></h2><p>重新设计了通用的输出生成流程，参阅 <a href="./../plugin-development/#output-generation-hooks">输出生成钩子</a> 图表以获取新的插件钩子顺序。最明显的变化可能是 <a href="./../plugin-development/#banner"><code>banner</code></a>/<a href="./../plugin-development/#footer"><code>footer</code></a>/<a href="./../plugin-development/#intro"><code>intro</code></a>/<a href="./../plugin-development/#outro"><code>outro</code></a> 不再在开头调用一次，而是按块调用。另一方面，当创建哈希时，<a href="./../plugin-development/#augmentchunkhash"><code>augmentChunkHash</code></a> 现在在 <a href="./../plugin-development/#renderchunk"><code>renderChunk</code></a> 之后执行。</p><p>由于文件哈希现在基于 <code>renderChunk</code> 之后文件的实际内容，因此在生成哈希之前我们不再知道确切的文件名。相反，运行逻辑现在依赖于形式为 <code>BPO_b_ck</code> 的哈希占位符。这意味着在 <code>renderChunk</code> 钩子可用的所有文件名都可能包含占位符，并且可能不对应于最终的文件名。但如果你计划在块内使用这些文件名，Rollup 将在 <a href="./../plugin-development/#generatebundle"><code>generateBundle</code></a> 运行之前替换所有占位符。</p><p>这不一定是一个破坏性的更新，但在 <a href="./../plugin-development/#renderchunk"><code>renderChunk</code></a> 中添加或删除导入的插件应该确保它们也更新传递给此钩子的相应 <code>chunk</code> 信息。这将使其他插件能够依赖于准确的块信息，而无需自己解析。有关 <code>renderChunk</code> 钩子的更多信息，请参阅 <a href="./../plugin-development/#renderchunk">相关内容的文档</a>。</p>`,48))])}const m=a(r,[["render",p]]);export{f as __pageData,m as default};
