---
title: .npmrc
article: false
---

## 设置 (.npmrc)

pnpm 从命令行、环境变量和 `.npmrc` 文件中获取其配置。

`pnpm config` 命令可用于更新和编辑用户和全局 `.npmrc` 文件的内容。

四个相关文件分别为：

- 每个项目的配置文件 (`/path/to/my/project/.npmrc`)
- 每个工作区配置文件 (包含 `pnpm-workspace.yaml` 文件的目录)
- 每位用户的配置文件 (`~/.npmrc`)
- 全局配置文件 (`/etc/npmrc`)

所有 `.npmrc` 文件都是 `key = value` 参数的 [INI 格式](https://en.wikipedia.org/wiki/INI_file) 列表。

`.npmrc` 文件中的值可能包含使用 `${NAME}` 语法的环境变量。 也可以使用默认值指定环境变量。 使用 `${NAME-fallback}` 将在未设置 `NAME` 时返回 `fallback`。 `${NAME:-fallback}` ，会在 `NAME` 不存在或为空字符串时返回 `fallback` 。

## 依赖提升设置

### hoist

- 默认值：**true**
- 类型：**Boolean**

当为 `true` 时，所有依赖项都会被提升到 `node_modules/.pnpm/node_modules`。 这使得 `node_modules` 中的所有包都可以访问未列出的依赖项。

### hoist-workspace-packages

- 默认值：**true**
- 类型：**Boolean**

当 `true` 时，工作区中的包将符号链接到 `<workspace_root>/node_modules/.pnpm/node_modules` 或 `<workspace_root>/node_modules`，具体取决于其他提升设置（`hoist-pattern` 和 `public-hoist-pattern`） 。

### hoist-pattern

- 默认值：**['\*']**
- 类型：**string[]**

告诉 pnpm 哪些包应该被提升到 `node_modules/.pnpm/node_modules`。 默认情况下，所有包都被提升 — 但是，如果你知道只有某些有缺陷的包具有幻影依赖，你可以使用此选项专门提升幻影依赖（推荐做法）。

例如：

```ini
hoist-pattern[]=*eslint*
hoist-pattern[]=*babel*
```



你还可以在模式前面添加 `!` 来避免提升。

例如：

```ini
hoist-pattern[]=*types*
hoist-pattern[]=!@types/react
```



### public-hoist-pattern

- 默认值：**[]**
- 类型：**string[]**

不同于 `hoist-pattern` 会把依赖提升到一个虚拟存储中的隐藏的模块目录中，`public-hoist-pattern` 将匹配的依赖提升至根模块目录中。 提升至根模块目录中意味着应用代码可以访问到幻影依赖，即使它们对解析策略做了不当的修改。

当处理一些不能正确解析依赖关系的有缺陷可插拔工具时，此设置很有用。

例如：

```text
public-hoist-pattern[]=*plugin*
```



注意：设置 `shamefully-hoist` 为 `true` 与设置 `public-hoist-pattern` 为 `*` 是一样的。

你还可以在模式前面添加 `!` 来避免提升。

例如：

```ini
public-hoist-pattern[]=*types*
public-hoist-pattern[]=!@types/react
```



### shamefully-hoist

- 默认值： **false**
- 类型：**Boolean**

默认情况下，pnpm 创建一个半严格的 `node_modules`，这意味着依赖项可以访问未声明的依赖项，但 `node_modules` 之外的模块不行。 通过这种布局，生态系统中的大多数的包都可以正常工作。 但是，如果某些工具仅在提升的依赖项位于根目录的 `node_modules` 时才有效，你可以将其设置为 `true` 来提升它们。

## Node 模块设置

### modules-dir

- 默认值：**node_modules**
- 类型：**路径**

将安装依赖项的目录（而不是 `node_modules`）。

### node-linker

- 默认值：**isolated**
- 类型：**isolated**、**hoisted**、**pnp**

定义应该使用什么链接器来安装 Node 包。

- **isolated** - 依赖项从虚拟存储 `node_modules/.pnpm` 中建立符号链接

- hoisted

   

  \- 创建一个没有符号链接的扁平的

   

  ```
  node_modules
  ```

  。 与 npm 或 Yarn Classic 创建的

   

  ```
  node_modules
  ```

   

  一致。 当使用此设置时，Yarn 的一个库用于提升。 使用此设置的正当理由：

  1. 你的工具无法很好地与符号链接配合使用。 React Native 项目很可能只有在你使用提升的 `node_modules` 才能工作。
  2. 你的项目会被部署到 serverless 服务提供商。 一些 serverless 提供商（例如 AWS Lambda）不支持符号链接。 此问题的另一种解决方案是在部署之前打包你的应用程序。
  3. 如果你想使用 [`"bundledDependencies"`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#bundleddependencies) 发你的包。
  4. 如果你使用--preserve-symlinks标志运行 Node.js。

- **pnp** — 没有 `node_modules`。 Plug'n'Play 是一种Yarn Berry使用的创新的 Node 依赖策略。 当使用 `pnp` 作为你的链接器时，建议同时将 `symlink` 设置为 `false`。

### symlink

- 默认值：**true**
- 类型：**Boolean**

当 `symlink` 设置为 `false` 时，pnpm 创建一个没有任何符号链接的虚拟存储目录。 这与 ·node-linker=pnp· 一起是一个有用的设置。

### enable-modules-dir

- 默认值：**true**
- 类型：**Boolean**

当为 `false` 时，pnpm 不会将任何文件写入模块目录 (`node_modules`)。 这对于在用户空间的文件系统 (FUSE) 中挂载模块目录时很有用。 有一个实验性 CLI 允许你在 FUSE 中挂载模块目录：`@pnpm/mount-modules`。

### virtual-store-dir

- 默认值：**node_modules/.pnpm**
- 类型：**路径**

带有指向存储的链接的目录。 所有直接和间接依赖项都链接到此目录中。

这是一个有用的设置，可以解决 Windows 上长路径的问题。 如果你有一些路径很长的依赖项，你可以选择将虚拟存储放在驱动器的根目录中（例如 `C:\my-project-store`）。

或者你可以将虚拟存储设置为 `.pnpm` 并将其添加到 `.gitignore`。 这将使堆栈跟踪更清晰，因为依赖项的路径将会提高一个目录层级。

**注意：**虚拟存储不能在多个项目之间共享。 每个项目都应该有自己的虚拟存储（除了在工作空间中被共享的根目录）。

### virtual-store-dir-max-length

- 默认值：
  - 在 Linux/macOS 上：**120**
  - 在 Windows 上：**60**
- 类型：**number**

设置虚拟存储目录 (`node_modules/.pnpm`) 中目录名称的最大允许长度。 如果你在 Windows 上遇到长路径问题，你可以将其设置为较低的数字。

### package-import-method

- 默认值： **auto**
- 类型：**auto**、**hardlink**、**copy**、**clone**、**clone-copy**

控制从存储中导入包的方式（如果要禁用 `node_modules` 中的符号链接，则需要更改 `node-linker` 设置，而不是此设置）。

- **auto** - 尝试从存储克隆包。 如果不支持克隆则从存储硬链接包。 如果克隆和链接都不支持，则回退到复制
- **hardlink** - 从存储硬链接包
- **clone-or-copy** - 尝试从存储中克隆包。 如果不支持克隆则回退到复制。
- **copy** - 从存储中复制包
- **clone** - 从存储中克隆（也称为 copy-on-write 或参考链接）包

克隆是将包写入 node_modules 的最佳方式。 这是最快的方式，也是最安全的方式。 当使用克隆时，你可以在 node_modules 中编辑文件，并且它们不会在中央内容可寻址存储中被修改。

不幸的是，并非所有文件系统都支持克隆。 我们建议使用写时复制 (CoW) 文件系统（例如，在 Linux 上使用 Btrfs 而不是 Ext4）以获得最佳的 pnpm 体验。

### modules-cache-max-age

- 默认值：**10080** （以分钟为单位的 7 天）
- 类型：**number**

孤立包应该从模块目录中被删除的时间（以分钟为单位）。 pnpm 在模块目录中保存了一个包的缓存。 切换分支或降级依赖项时，这会提高安装速度。

### dlx-cache-max-age

- 默认值：**1440** （以分钟为单位的 1 天）
- 类型：**number**

Dlx 缓存过期的时间（以分钟为单位）。 执行 dlx 命令后，pnpm 会保留一个缓存，该缓存会省略后续调用同一 dlx 命令的安装步骤。

## 存储设置

### store-dir

- 默认值：
  - 如果设置了 **$PNPM_HOME** 环境变量，则为 **$PNPM_HOME/pnpm/rc**
  - 如果设置了 **$XDG_DATA_HOME** 环境变量，则为 **$XDG_DATA_HOME/pnpm/store**
  - 在 Windows 上： **~/AppData/Local/pnpm/store**
  - 在 macOS 上：**~/Library/pnpm/global**
  - 在 Linux 上：**~/.local/share/pnpm/store**
- 类型：**路径**

所有包被保存在磁盘上的位置。

该存储应始终位于进行安装的同一磁盘上，因此每个磁盘将有一个存储。 如果在使用磁盘中具有主目录，存储目录就会创建在这里。 如果磁盘上没有主目录，那么将在文件系统的根目录中创建该存储。 例如，如果安装发生在挂载在 `/mnt` 的文件系统上，那么存储将在 `/mnt/.pnpm-store` 处创建。 Windows 系统上也是如此。

可以从不同的磁盘设置同一个存储，但在这种情况下，pnpm 将复制包而不是硬链接它们，因为硬链接只能发生在同一文件系统上。

### verify-store-integrity

- 默认值：**true**
- 类型：**Boolean**

默认情况下，如果存储中的文件已被修改，则在将其链接到项目的 `node_modules` 之前会检查该文件的内容。 如果 `verify-store-integrity` 设置为 `false`，则在安装过程中不会检查内容可寻址存储中的文件。

### use-running-store-server

警告

已弃用的功能

- 默认值： **false**
- 类型：**Boolean**

只允许使用存储服务器进行安装。 如果没有在运行的存储服务器，安装将失败。

### strict-store-pkg-content-check

- 默认值：**true**
- 类型：**Boolean**

一些注册源允许以不同的包名或版本，发布完全相同的内容。 这破坏了存储中包的有效性检查。 为了避免在存储中验证此类软件包的名称和版本时出现错误，你可以将 `strict-store-pkg-content-check` 设置设为 `false`。

## 锁文件设置

### lockfile

- 默认值：**true**
- 类型：**Boolean**

当设置为 `false` 时，pnpm 不会读取或生成 `pnpm-lock.yaml` 文件。

### prefer-frozen-lockfile

- 默认值：**true**
- 类型：**Boolean**

当设置为 `true` 并且存在 `pnpm-lock.yaml` 满足 package.json 中的依赖关系时，执行无头安装。 无头安装会跳过所有依赖项解析，因为它不需要修改锁文件。

### lockfile-include-tarball-url

- 默认值： **false**
- 类型：**Boolean**

将包的 tarball 的完整 URL 添加到 `pnpm-lock.yaml` 中的每个条目。

### git-branch-lockfile

- 默认值： **false**
- 类型：**Boolean**

如果设置为 `true`，那么在安装后生成的锁文件名称将基于当前分支名称命名，以完全避免合并冲突。 例如，如果当前分支名称为 `feature-foo`，则 对应的锁文件名称将为 `pnpm-lock.feature-foo.yaml` 而不是 `pnpm-lock.yaml`。 它通常与命令行参数 `--merge-git-branch-lockfiles` 一起使用，或者通过在 `.npmrc` 文件中设置 `merge-git-branch-lockfiles-branch-pattern` 来使用。

### merge-git-branch-lockfiles-branch-pattern

- 默认值： **null**
- 类型：**Array 或 null**

此配置匹配当前分支名称以确定是否合并所有 git 分支锁文件文件。 默认情况下，你需要手动传递 `--merge-git-branch-lockfiles` 命令行参数。 这项配置允许自动完成这个过程。

例如：

```ini
merge-git-branch-lockfiles-branch-pattern[]=main
merge-git-branch-lockfiles-branch-pattern[]=release*
```



你还可以使用 `!` 来排除模式。

### peers-suffix-max-length

- 默认值：**1000**
- 类型：**number**

添加到锁文件中的依赖项键的 peer ID 后缀的最大长度。 如果后缀较长，则用井号替换。

## 注册源 & 身份验证设置

### registry

- 默认值： **.https://registry.npmjs.org/**
- 类型：**url**

npm 包注册源地址 (包括末尾斜杠) 。

#### \<scope\>:registry

应用于指定范围的包的 npm 注册源。 例如，设置 `@babel:registry=https://example.com/packages/npm/` 将在你使用 `pnpm add @babel/core` 或任何 `@babel` 范围的包时，该包将强制从 `https://example.com/packages/npm` 而不是默认注册源中获取。

### \<URL\>:_authToken

访问指定注册源时要使用的身份验证承载令牌。 示例：

```sh
//registry.npmjs.org/:_authToken=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 
```



你还可以使用环境变量。 示例：

```text
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```



或者，你可以在完全不更改 `.npmrc` 下直接使用环境变量：

```text
npm_config_//registry.npmjs.org/:_authToken=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 
```



### \<URL\>:tokenHelper

令牌助手是输出身份验证令牌的可执行文件。 这可以在 authToken 不是常量值而是定期刷新的情况中使用，其中脚本或其他工具可以使用现有的刷新令牌来获取新的访问令牌。

助手路径的配置必须是绝对路径，并且没有参数。 为了安全起见，只允许在用户 `.npmrc` 中设置该值。 否则，项目可以在项目的本地 `.npmrc` 中放置一个值并运行任意可执行文件。

为默认注册表设置令牌助手：

```text
tokenHelper=/home/ivan/token-generator
```



为指定的注册表设置令牌助手：

```text
//registry.corp.com:tokenHelper=/home/ivan/token-generator
```



## 请求设置

### ca

- 默认值：**npm CA 证书**
- 类型：**String，Array 或 null**

可信的用于注册源 SSL 链接的 CA 签名证书。 值应采用 PEM 格式（也称 “Base-64 encoded X.509 (.CER)”）。 示例：

```sh
ca="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```



设置为 null 时仅允许已知注册商，若指定 CA 证书将只信任指定的证书颁发机构。

通过指定一个证书数组，可以信任多个 CA：

```sh
ca[]="..."
ca[]="..."
```



更多信息可见 `strict-ssl` 设置

### cafile

- 默认值： **null**
- 类型：**路径**

包含一个或多个 CA 证书的文件路径。 类似于 `ca` 设置，但允许多个CA， 此外， CA 信息将存储在一个文件中，而不是通过 CLI 指定。

### \<URL\>:cafile

定义访问指定注册源时使用的证书颁发机构文件的路径。 示例：

```sh
//registry.npmjs.org/:cafile=ca-cert.pem
```



### cert

- 默认值： **null**
- 类型：**字符串**

访问注册源时传递的客户端证书。 值应为 PEM 格式（也称 "Base-64 encoded X.509 (.CER)"）。 示例：

```test
cert="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```



这不是证书文件的路径。

### \<URL\>:certfile

定义访问指定注册源时使用的证书文件的路径。 示例：

```sh
//registry.npmjs.org/:certfile=server-cert.pem
```



### key

- 默认值： **null**
- 类型：**字符串**

访问注册源时要传递的客户端密钥。 值应为 PEM 格式（也称 "Base-64 encoded X.509 (.CER)"）。 示例：

```sh
key="-----BEGIN PRIVATE KEY-----\nXXXX\nXXXX\n-----END PRIVATE KEY-----"
```



它不是密钥文件的路径(也没有 `keyfile` 选项)。

此设置包含敏感信息。 不要将其写入本地会提交到仓库的 `.npmrc` 文件。

### \<URL\>:keyFile

定义访问指定注册源时使用的客户端密钥文件的路径。 示例：

```sh
//registry.npmjs.org/:keyfile=server-key.pem
```



### git-shallow-hosts

- 默认值：**['github.com', 'gist.github.com', 'gitlab.com', 'bitbucket.com', 'bitbucket.org']**
- 类型：**string[]**

当获取 Git 仓库中的依赖项时，如果域名在此设置中列出，pnpm 将使用浅克隆仅获取所需的提交，而不是所有历史记录。

### https-proxy

- 默认值： **null**
- 类型：**url**

用于传输 HTTPS 请求的代理。 如果设置了 `HTTPS_PROXY`、 `https_proxy`、`HTTP_PROXY` 或 `http_proxy` 环境变量，将使用环境变量的值。

如果你的代理 URL 包含用户名和密码，请确保对它们进行 URL 编码。 例如：

```text
https-proxy=https://use%21r:pas%2As@my.proxy:1234/foo
```



不要对用户名和密码之间的冒号 (`:`) 进行编码。

### http-proxy

### proxy

- 默认值： **null**
- 类型：**url**

用于传出 http 请求的代理。 如果设置了 HTTP_PROXY 或 http_proxy 环境变量，则底层请求库将遵循代理设置。

### local-address

- 默认值：**undefined**
- 类型：**IP 地址**

连接到 npm 源时要使用的本地接口 IP 地址。

### maxsockets

- 默认值：**网络并发 x 3**
- 类型：**Number**

每个注册源（由协议/主机/端口号组合而成）允许的最大连接数。

### noproxy

- 默认值： **null**
- 类型：**string**

一个由逗号分割的域名字符串，表示不应该被使用的代理

### strict-ssl

- 默认值：**true**
- 类型：**Boolean**

通过 HTTPS 向源发出请求时是否进行 SSL 密钥验证。

另请参阅 `ca` 配置项。

### network-concurrency

- 默认值：**16**
- 类型：**Number**

控制同时处理的最大 HTTP(S) 的网络请求数。

### fetch-retries

- 默认值：**2**
- 类型：**Number**

pnpm 无法从注册源中获取时的重试次数。

### fetch-retry-factor

- 默认值：**10**
- 类型：**Number**

重试回退的指数因子。

### fetch-retry-mintimeout

- 默认值：**10000（10 秒）**
- 类型：**Number**

重试请求的最小（基本）超时。

### fetch-retry-maxtimeout

- 默认值：**60000（1 分钟）**
- 类型：**Number**

最大回退超时时间，以确保重试因子不会使请求时间过长。

### fetch-timeout

- 默认值：**60000（1 分钟）**
- 类型：**Number**

等待 HTTP 请求完成的最长时间。

## Peer Dependency 设置

### auto-install-peers

- 默认值：**true**
- 类型：**Boolean**

当值为 `true` 时，将自动安装任何缺少的非可选对等依赖。

#### 版本冲突

如果来自不同软件包的对等依赖项的需求版本存在冲突，那么 pnpm 将不会自动安装任何版本的冲突的对等依赖项。 相反，会输出一条警告信息。 比如，如果一个依赖项需要 `react@^16.0.0`，而另一个需要 `react@^17.0.0`，则会产生冲突，自动安装将不会进行。

#### 解决冲突

如果出现版本冲突，你需要评估自己安装哪个版本的对等依赖项，或更新依赖项以符合其对等依赖项要求。

### dedupe-peer-dependents

- 默认值：**true**
- 类型：**Boolean**

当此设置为 `true` 时，对等依赖在对等解析后会被做去重处理。

例如，假设我们有一个包含两个项目的工作区，并且它们的依赖项中都有 `webpack`。 `esbuild` 在 `webpack` 的可选对等依赖内，而其中一个项目的依赖包含 `esbuild`。 这种情况下，pnpm 会将两个 `webpack` 实例链接到 `node_modules/.pnpm` 目录：一个包含 `esbuild` ，另一个不包含。

```text
node_modules
  .pnpm
    webpack@1.0.0_esbuild@1.0.0
    webpack@1.0.0
project1
  node_modules
    webpack -> ../../node_modules/.pnpm/webpack@1.0.0/node_modules/webpack
project2
  node_modules
    webpack -> ../../node_modules/.pnpm/webpack@1.0.0_esbuild@1.0.0/node_modules/webpack
    esbuild
```



这是有道理的，因为 `webpack` 在两个项目中使用，而其中一个项目没有 `esbuild`，因此这两个项目无法共享同一个 `webpack` 实例。 然而，这并不是大多数开发者所期望的，特别是在提升的 `node_modules` 中，将会只有一个 `webpack` 实例。 因此，在没有对等依赖冲突的时候可以设置 `dedupe-peer-dependents` 来对 `webpack` 去重（解释在最后）。 这种情况下，如果将 `dedupe-peer-dependents` 设置为 `true`，两个项目将共同使用可解析到 `esbuild` 的 `webpack` 实例：

```text
node_modules
  .pnpm
    webpack@1.0.0_esbuild@1.0.0
project1
  node_modules
    webpack -> ../../node_modules/.pnpm/webpack@1.0.0_esbuild@1.0.0/node_modules/webpack
project2
  node_modules
    webpack -> ../../node_modules/.pnpm/webpack@1.0.0_esbuild@1.0.0/node_modules/webpack
    esbuild
```



**什么是对等依赖冲突**？ 我们指的对等依赖冲突是如下场景：

```text
node_modules
  .pnpm
    webpack@1.0.0_react@16.0.0_esbuild@1.0.0
    webpack@1.0.0_react@17.0.0
project1
  node_modules
    webpack -> ../../node_modules/.pnpm/webpack@1.0.0/node_modules/webpack
    react (v17)
project2
  node_modules
    webpack -> ../../node_modules/.pnpm/webpack@1.0.0_esbuild@1.0.0/node_modules/webpack
    esbuild
    react (v16)
```



在这种情况下，我们无法对 `webpack` 去重，因为 `react` 在 `webpack` 的对等依赖内，而在两个项目上下文环境中，`react` 版本不同。

### strict-peer-dependencies

- 默认值： **false**
- 类型：**Boolean**

如果启用了此选项，那么在依赖树中存在缺失或无效的对等依赖关系时，命令将执行失败。

### resolve-peers-from-workspace-root

- 默认值：**true**
- 类型：**Boolean**

启用后，将会使用根工作区项目的依赖解析工作区中任何项目的对等依赖。 这是一个有用的功能，因为你可以只在工作区的根目录中安装对等依赖，并且确保工作区中的所有项目都使用相同版本的对等依赖。

## 命令行设置

### \[no-\]color

- 默认值： **auto**
- 类型：**auto**、**tcp**、**ipc**

设置输出的颜色.

- **auto** - 当标准输出是终端或 TTY 时，输出会带有颜色。
- **always** - 忽略终端和 pipe 之间的区别。 你很少需要这个选项；在大多数情况下，如果您想在重定向的输出中使用颜色代码，你可以将 `--color` 标志传递给 pnpm 命令以强制它输出颜色。 大多数情况下只需要默认设置。
- **never** - 关闭颜色. 这是 `--no-color` 使用的设置。

### loglevel

- 默认值： **auto**
- 类型：**debug**、**info**、**warn**、**error**

将显示等于或高于给定级别的任何日志。 你可以改为传递 `--silent` 来关闭所有输出日志。

### use-beta-cli

- 默认值： **false**
- 类型：**Boolean**

启用 CLI 测试版功能的实验性选项。 这意味着你使用的 CLI 功能可能会有一些不兼容的更改或潜在错误的更改。

### recursive-install

- 默认值：**true**
- 类型：**Boolean**

如果启用此选项，则 `pnpm install` 的行为将变为 `pnpm install -r`，这意味着在所有工作区或子目录包上执行安装操作。

否则，`pnpm install` 将只在当前目录中构建包。

### engine-strict

- 默认值： **false**
- 类型：**Boolean**

如果启用该选项，pnpm 将不安装任何声明与当前 Node 版本不兼容的包。

但无论该属性设置成什么值，如果项目（不是依赖项）在其 `engines` 字段中指定了不兼容的版本，则安装将始终失败。

### npm-path

- 类型：**路径**

pnpm 用于某些操作（例如发布）的 npm 的二进制文件的位置。

### package-manager-strict

- 默认值：**true**
- 类型：**Boolean**

当此设置被禁用时，如果 pnpm 的版本与 `package.json` 的 `packageManager` 字段中指定的版本不匹配，则 pnpm 不会失败。 启用后，仅检查包名称（自 pnpm v9.2.0 起），因此无论 `packageManager` 字段中指定的版本如何，你仍然可以运行任何版本的 pnpm。

或者，你可以将环境变量`COREPACK_ENABLE_STRICT` 设置为 `0` 来禁用这个设置。

### package-manager-strict-version

- 默认值： **false**
- 类型：**Boolean**

启用后，如果 pnpm 的版本与 `package.json`的 `packageManager `字段中指定的版本不完全匹配，则 pnpm 将失败。

### manage-package-manager-versions

- 默认值：**true**
- 类型：**Boolean**

启用后，pnpm 将自动下载并运行 `package.json` 的 `packageManager` 字段中指定的 pnpm 版本。 这与 Corepack 使用的字段相同。 示例：

```json
{
  "packageManager": "pnpm@9.3.0"
}
```



## 构建设置

### ignore-scripts

- 默认值： **false**
- 类型：**Boolean**

不执行项目 `package.json` 及其依赖中定义的任何脚本。

注意

该标记不会阻止 [.pnpmfile.cjs](https://pnpm.io/zh/pnpmfile) 的执行

### ignore-dep-scripts

- 默认值： **false**
- 类型：**Boolean**

不执行已安装的包的任何脚本。 当前项目的脚本会执行

### child-concurrency

- 默认值：**5**
- 类型：**Number**

为并行构建 node_modules 分配的最大子进程数。

### side-effects-cache

- 默认值：**true**
- 类型：**Boolean**

使用并缓存 (pre/post)install 钩子的结果。

### side-effects-cache-readonly

- 默认值： **false**
- 类型：**Boolean**

仅在副作用缓存存在时使用，不要为新包创建它。

### unsafe-perm

- 默认值：如果以 root 身份运行，则为 **false**，否则为 **true**
- 类型：**Boolean**

设置为 true 以便在运行包脚本时启用 UID/GID 切换。 如果显式设置为 false，则以非 root 用户身份安装将失败。

### node-options

- 默认值： **NULL**
- 类型：**string**

通过 `NODE_OPTIONS` 环境变量传递给 Node.js 的选项。 这不会影响 pnpm 本身的执行方式，但会影响生命周期脚本的调用方式。

### verify-deps-before-run

- 默认值： `false`
- 类型：**install**、**warn**、**error**、**prompt**、**false**

此设置允许在运行脚本之前检查依赖项的状态。 检查运行于 `pnpm run` 和 `pnpm exec` 命令。 支持以下属性值:

- `install` — 如果 `node_modules` 不是最新的，则自动运行安装。
- `warn` - 如果 `node_modules` 不是最新的，则打印警告。
- `prompt` - 如果 `node_modules` 不是最新的，则提示用户提供权限。
- `error` - 如果 `node_modules` 不是最新的，则会引发错误。
- `false`——禁用依赖性检查。

## Node.js 设置

### use-node-version

- 默认值：**undefined**
- 类型：**semver**

指定应用于项目运行时的确切 Node.js 版本。 pnpm 将自动安装指定版本的 Node.js 并将其用于执行 `pnpm run` 命令或 `pnpm node` 命令。

这可以用来代替 `.nvmrc` 和 `nvm`。 而不是以下 `.nvmrc` 文件：

```text
16.16.0
```



使用这个 `.npmrc` 文件：

```text
use-node-version=16.16.0
```



此设置仅适用于工作区根目录中的 `.npmrc` 文件。 如果需要为工作空间中的项目指定自定义的 Node.js ，请改为使用 `package.json` 中的 `pnpm.executionEnv.nodeVersion` 字段 。

### node-version

- 默认值：**node -v** 的返回值，不带 v 前缀
- 类型：**semver**

检查程序包的 `engines` 设置时使用的 Node.js 版本

如果你想阻止项目的贡献者添加新的不兼容的依赖项，请在项目根目录的 `.npmrc` 文件中使用 `node-version` 和 `engine-strict`：

```ini
node-version=12.22.0
engine-strict=true
```



这样，即使有人使用 Node.js v16，他们也无法安装不支持 Node.js v12.22.0 的新依赖项。

### node-mirror:\<releaseDir\>

- 默认值： **`https://nodejs.org/download/<releaseDir>/`**
- 类型：**URL**

设置用于下载 Node.js 的基本 URL。 此设置的 `<releaseDir>` 部分可以是来自 https://nodejs.org/download 的任何目录：`release`、`rc`、`nightly`、`v8-canary` 等。

以下是如何配置 pnpm 从中国的 Node.js 镜像下载 Node.js：

```text
node-mirror:release=https://npmmirror.com/mirrors/node/
node-mirror:rc=https://npmmirror.com/mirrors/node-rc/
node-mirror:nightly=https://npmmirror.com/mirrors/node-nightly/
```



## 工作空间设置

### link-workspace-packages

- 默认值： **false**
- 类型：**true**、**false**、**deep**

启用该选项后，本地可用的软件包将被链接到 `node_modules` 中而不是从注册源下载。 这在 monorepo 中非常方便。 如果你需要本地包也链接到子依赖项，可以使用 `deep` 设置。

否则，软件包将全部从注册源下载并安装。 然而，工作空间包仍然可以通过使用 `workspace:` 范围协议进行链接。

### inject-workspace-packages

- 默认值： **false**
- 类型：**Boolean**

启用所有本地工作区依赖项的硬链接，而不是符号链接它们。 或者，可以使用 [`dependencyMeta[\].injected`](https://pnpm.io/zh/package_json#dependenciesmetainjected) 来实现，这允许有选择地为特定依赖项启用硬链接。

### prefer-workspace-packages

- 默认值： **false**
- 类型：**Boolean**

如果启用了此选项，工作空间中的本地软件包将优先于注册源，即使注册源中有了该软件包的新版本。

该设置只在工作空间未开启 `save-workspace-protocol` 时有效。

### shared-workspace-lockfile

- 默认值：**true**
- 类型：**Boolean**

如果启用此选项，pnpm 会在工作空间的根目录中创建一个唯一的 `pnpm-lock.yaml` 文件。 这也意味着工作空间包的所有依赖项都将位于单个 `node_modules` 中（同时软链接到它们包的 `node_modules` 文件夹中用于 Node 的模块解析）。

此选项的好处：

- 每个依赖都是一个单例
- 在 monorepo 中的安装更快
- 代码更改都在一个文件中、代码审查减少

注意

尽管所有依赖项都将硬链接到根 `node_modules` 中，但软件包只能访问 `package.json` 中声明的 ，因此 pnpm 的严格性得以保留。 这是前面提到的符号链接的结果。

### save-workspace-protocol

- 默认值：**rolling**
- 类型：**true**、**false**、**rolling**

这个设置控制从工作空间中链接的 dependencies 如何添加至 `package.json`。

如果 `foo@1.0.0` 在工作空间中，在工作空间的另一个项目中运行 `pnpm add foo`，则 `foo` 会被按如下方式添加到依赖项字段。 `save-prefix` 设置也会影响规范的创建方式。

| save-workspace-protocol | save-prefix | spec               |
| ----------------------- | ----------- | ------------------ |
| false                   | `''`        | `1.0.0`            |
| false                   | `'~'`       | `~1.0.0`           |
| false                   | `'^'`       | `^1.0.0`           |
| true                    | `''`        | `workspace:1.0.0`  |
| true                    | `'~'`       | `workspace:~1.0.0` |
| true                    | `'^'`       | `workspace:^1.0.0` |
| rolling                 | `''`        | `workspace:*`      |
| rolling                 | `'~'`       | `workspace:~`      |
| rolling                 | `'^'`       | `workspace:^`      |

### include-workspace-root

- 默认值： **false**
- 类型：**Boolean**

在工作区中递归执行命令时，也在根工作区项目上执行它们。

### ignore-workspace-cycles

- 默认值： **false**
- 类型：**Boolean**

当设置为 `true` 时，不会打印工作区循环警告。

### disallow-workspace-cycles

- 默认值： **false**
- 类型：**Boolean**

当设置为 `true` 时，如果工作区存在循环，安装将失败。

## 其它设置

### save-prefix

- 默认值：**'^'**
- 类型：**'^'**、**'~'**、**''**

配置软件包在 `package.json` 文件中的版本前缀。

例如，如果一个包的版本为 `1.2.3`，默认情况下它的版本设置为 `^1.2.3` 允许对该包进行小版本升级，但在 `pnpm config set save-prefix='~'` 之后，它将设置为 `~1.2.3` 仅允许补丁版本升级。

当添加的包具有指定的范围时，将忽略此设置。 例如，`pnpm add foo@2` 将会把 `package.json` 中的 `foo` 设置为 `2`，而忽略 `save-prefix` 的值。

### tag

- 默认值：**latest**
- 类型：**字符串**

如果你执行 `pnpm add` 添加了一个包并且没有提供特定版本，那么它安装设置中这个标记下的版本。

如果 `pnpm tag` 命令没有给出明确的标签，这也会设置的标签添加到指定的 `package@version`。

### global-dir

- 默认值：
  - 如果设置了 **$XDG_DATA_HOME** 环境变量，则为 **$XDG_DATA_HOME/pnpm/store**
  - 在 Windows 上：**~/AppData/Local/pnpm/store**
  - 在 macOS 上：**~/Library/pnpm/global**
  - 在 Linux 上：**~/.local/share/pnpm/global**
- 类型：**路径**

指定储存全局依赖的目录。

### global-bin-dir

- 默认值：
  - 如果设置了 **$XDG_DATA_HOME** 环境变量，则为 **$XDG_DATA_HOME/pnpm**
  - 在 Windows 上：**~/AppData/Local/pnpm**
  - 在 macOS 上：**~/Library/pnpm**
  - 在 Linux 上：**~/.local/share/pnpm**
- 类型：**路径**

允许设置全局安装包的 bin 文件的目标目录。

### state-dir

- 默认值：
  - 如果设置了 **$XDG_STATE_HOME** 环境变量，则为 **$XDG_STATE_HOME/pnpm**
  - 在 Windows 上：**~/AppData/Local/pnpm-state**
  - 在 macOS 上：**~/.pnpm-state**
  - 在 Linux 上：**~/.local/share/pnpm**
- 类型：**路径**

pnpm 创建的当前仅由更新检查器使用的 `pnpm-state.json` 文件的目录。

### cache-dir

- 默认值：
  - 如果设置了 **$XDG_CACHE_HOME** 环境变量，则为 **$XDG_CACHE_HOME/pnpm**
  - 在 Windows 上：**~/AppData/Local/pnpm-cache**
  - 在 macOS 上：**~/Library/Caches/pnpm**
  - 在 Linux 上：**~/.cache/pnpm**
- 类型：**路径**

缓存的位置（软件包元数据和 dlx）。

### use-stderr

- 默认值： **false**
- 类型：**Boolean**

当为 true 时，所有输出都写入 stderr。

### update-notifier

- 默认值：**true**
- 类型：**Boolean**

设置为 `false` 以便在使用较旧版本的 pnpm 时关闭更新通知。

### prefer-symlinked-executables

- 默认值：当 **node-linker** 设置为 **hoisted** 且系统为 POSIX 时为 **true**
- 类型：**Boolean**

创建指向 `node_modules/.bin` 中可执行文件的符号链接，而不是命令 shims。 在 Windows 上，此设置将被忽略，因为只有命令 shims 起作用。

### ignore-compatibility-db

- 默认值： **false**
- 类型：**Boolean**

在安装过程中，某些包的依赖关系会被自动打补丁。 如果你想禁用此功能，请将此配置设置为 `false`。

这些补丁是从 Yarn 的 `@yarnpkg/extensions` 包应用的。

### resolution-mode

- 默认值: **highest** (从 v8.0.0 到 v8.6.12 是 **lowest-direct**)
- 类型：**highest**、**time-based**、**lowest-direct**

当 `resolution-mode` 设置为 `time-based`，依赖关系将按以下方式解析：

1. 直接依赖项将解析为最低版本。 因此，如果依赖项中有 `foo@^1.1.0` ，则将安装 `1.1.0`。
2. 子依赖项将被解析的版本，是解析到最后一个直接依赖项发布的版本。

使用此解析模式的安装，具有热高速缓存的速度更快。 它还减少了子依赖项劫持的机会，因为只有更新直接依赖项，子依赖项才会更新。

此解析模式仅适用于npm的完整元数据。 因此，在某些场景中，速度较慢。 但是，如果你使用 `Verdaccio` v5.15.1 或更高版本，则可以将 `registry-supports-time-field` 设置为 `true`，速度会非常快。

当 `resolution-mode` 设置为 `lowest-direct` 时，直接依赖项将解析为其最低版本。

### registry-supports-time-field

- 默认值： **false**
- 类型：**Boolean**

如果你使用的注册表在缩略元数据中返回了 "time" 字段，请将此设置为 `true`。 目前，只有 v5.15.1 版本以上的 `Verdaccio`支持这一功能。

### extend-node-path

- 默认值：**true**
- 类型：**Boolean**

当 `false` 时，命令 shims 中不会设置 `NODE_PATH` 环境变量。

### deploy-all-files

- 默认值： **false**
- 类型：**Boolean**

在部署包或安装本地包时，包的所有文件都会被复制。 默认情况下，如果软件包在 `package.json` 中有一个 `"files"` 字段，那么只会复制列出的文件和目录。

### dedupe-direct-deps

- 默认值： **false**
- 类型：**Boolean**

当设置为 `true` 时，已符号链接到工作区根 `node_modules` 目录的依赖项将不会符号链接到子项目 `node_modules` 目录。

### dedupe-injected-deps

- 默认值：**true**
- 类型：**Boolean**

启用此设置后，注入的依赖项 将尽可能从工作区进行符号链接。 如果依赖项和注入的依赖项引用相同的对等依赖项，则无需将注入的依赖项物理复制到依赖项的 `node_modules` 中，符号链接就足够了。