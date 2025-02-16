---
title: Changesets
article: false
order: 1
---

## 在 pnpm 中使用 Changesets

注意

在编写本文档时，最新的 pnpm 版本为 v6.14。 最新的 [changesets](https://github.com/changesets/changesets) 版本是 v2.16.0。

## 配置

要在 pnpm 工作空间上配置 changesets，请将 changesets 作为开发依赖项安装在工作空间的根目录中：

```sh
pnpm add -Dw @changesets/cli
```



然后 changesets 的初始化命令：

```sh
pnpm changeset init
```



## 添加新的 changesets

要生成新的 changesets，请在仓库的根目录中执行 `pnpm changeset`。 `.changeset` 目录中生成的 markdown 文件应被提交到存储库。

## 发布变更

1. 运行 `pnpm changeset version`。 这将提升先前使用 `pnpm changeset` 指定的软件包（以及任何依赖这些软件包的软件包）的版本，并更新变更日志文件。
2. 运行 `pnpm install`。 这将更新锁文件并重新构建包。
3. 提交更改。
4. 运行 `pnpm published -r`。 此命令将发布所有包含被更新版本且尚未出现在包注册源中的包。

## 使用 GitHub Actions

要自动执行此过程，你可以将 `changeset version` 与 GitHub actions 一起使用。

### 变更版本号

当检测到 changeset 文件被合并到 main 分支时，该 action 将创建一个新的 PR，列出所有应该变更版本号的包。 合并后，包将被更新，你可以通过添加 `publish` 属性来决定是否发布。

### 发布

添加一个新的脚本 `ci:publish`，执行 `pnpm publish -r`。 一旦 PR 被 `changeset version` 打开，包就会发布到注册表中。

**package.json**

```json
{
   "scripts": {
      "ci:publish": "pnpm publish -r"
   },
   ...
}
```



```yaml
name: Changesets
on:
  push:
    branches:
      - main
env:
  CI: true
  PNPM_CACHE_FOLDER: .pnpm-store
jobs:
  version:
    timeout-minutes: 15
    runs-on: ubuntu-latest
    steps:
      - name: checkout code repository
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: setup node.js
        uses: actions/setup-node@v3
        with:
          node-version: 14
      - name: install pnpm
        run: npm i pnpm@latest -g
      - name: Setup npmrc
        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc
      - name: setup pnpm config
        run: pnpm config set store-dir $PNPM_CACHE_FOLDER
      - name: install dependencies
        run: pnpm install
      - name: create and publish versions
        uses: changesets/action@v1
        with:
          version: pnpm ci:version
          commit: "chore: update versions"
          title: "chore: update versions"
          publish: pnpm ci:publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```



关于此操作的更多信息和文档可以在 [这里](https://github.com/changesets/action) 找到。