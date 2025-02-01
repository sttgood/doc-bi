---
title: Git Branch Lockfiles
article: false
---

## Git Branch Lockfiles

Git 分支锁文件允许你完全避免锁文件合并冲突并稍后解决。

## 使用 Git 分支锁文件

你可以通过配置 `.npmrc` 文件来打开此功能。

```ini
git-branch-lockfile=true
```



通过这样做，锁文件的名称将根据当前 Git 分支名称生成。

例如，当前分支名称是 `feature-1`。 那么，生成的锁文件名称就会是 `pnpm-lock.feature-1.yaml`。 你可以将其提交到 Git，并稍后合并所有 Git 分支锁文件。

```text
- <project_folder>
|- pnpm-lock.yaml
|- pnpm-lock.feature-1.yaml
|- pnpm-lock.<branch_name>.yaml
```



注意

`feature/1` 的特殊之处在于 `/` 会自动转换为 `!`，因此相应的锁文件名将是 `pnpm-lock.feature!1.yaml`。

## 合并 Git 分支锁文件

### `pnpm install --merge-git-branch-lockfiles`

要合并所有 Git 分支锁文件，只需指定 `--merge-git-branch-lockfiles` 到 `pnpm install` 命令。

此后，所有 Git 分支锁文件将合并到一个 `pnpm-lock.yaml`

### 分支匹配

pnpm 允许你通过匹配当前分支名称指定 `--merge-git-branch-lockfiles` 。

例如，通过 `.npmrc` 文件中的以下设置，当在 `main` 分支中或者分支名称以 `release` 开头时，`pnpm install` 将合并所有 Git 分指锁文件。

```ini
merge-git-branch-lockfiles-branch-pattern[]=main
merge-git-branch-lockfiles-branch-pattern[]=release*
```