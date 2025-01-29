# rollup-docs-cn


- [Rollup.js 中文文档](https://github.com/rollup/rollup-docs-cn)
- [VitePress 构建的博客如何部署到 github 平台？](https://juejin.cn/post/7362818245500518437)
- [站点配置 | VitePress](https://vitejs.cn/vitepress/reference/site-config#base)

### rollup.js 中文文档 vitepress 打包文件部署到GitHub Pages

1. 创建 GitHub 仓库
2. 准备静态文件

```bash
git clone git@github.com:rollup/rollup-docs-cn.git
```

```bash
cd rollup-docs-cn
```

```bash
yarn
```

```js
// docs\.vitepress\config.ts文件增加配置
base: '/rollup-docs-cn/',
```

```bash
# 生成rollup-docs-cn\docs\.vitepress\dist
yarn build:docs
```

3. 配置 Git

```bash
cd my-project
git init
```

```bash
git add .
git commit -m "Initial commit"

```

4. 将项目推送到 GitHub

将你的项目推送到之前创建的 GitHub 仓库：

```bash
git remote add origin https://github.com/your-username/my-project-docs.
git branch -M main  # 如果你的仓库是基于 main 分支，而非 master 分支（GitHub 现在默认是 main）
git push -u origin main
```


5. 设置 GitHub Pages（可选），直接通过 GitHub Pages 来托管你的文档

在 GitHub 仓库页面，进入 Settings。

在 Settings 页面中，找到 GitHub Pages 部分。

在 Source 下拉菜单中选择你的文档目录（例如，选择 docs/.vitepress/dist 或 dist），然后点击 Save。

GitHub Pages 会自动为你部署站点，你可以在提供的 URL 上查看你的文档。
