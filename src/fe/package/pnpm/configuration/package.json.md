---
title: package.json
article: false
---

## 功能

一个包的清单文件。 它包含包的所有元数据，包括依赖项、标题、作者等等。 这是所有主要的 Node.js 包管理工具，包括 pnpm 的保留标准。

## engines

你可以指定你的软件能够运行的 Node 版本和 pnpm 版本：

```json
{
    "engines": {
        "node": ">=10",
        "pnpm": ">=3"
    }
}
```



在本地开发时， 如果其版本与 `engines` 字段中指定的版本不匹配，pnpm 将始终失败并报错。

当你的包作为依赖被安装时，除非用户已设置 `engine-strict` 配置标志 (参阅 [.npmrc](https://pnpm.io/zh/npmrc#engine-strict))，否则此字段仅供参考，且只会产生警告。

## dependenciesMeta

用于在 `dependencies`, `optionalDependencies` 和 `devDependencies` 中声明的依赖项的补充元信息。

### dependenciesMeta.*.injected

如果将本地工作区包依赖项设置为 `true`，则将通过在虚拟存储中创建硬链接副本来安装该包（`node_modules/.pnpm`）。

如果将其设置为 `false` 或未设置，则将通过创建指向工作空间中包的源目录的 `node_modules` 符号链接来安装依赖项。 这是缺省值，因为它更快，并确保对依赖关系的任何修改都将立即对其使用者可视。

例如，假设以下 `package.json` 是一个本地工作区包：

```json
{
  "name": "card",
  "dependencies": {
    "button": "workspace:1.0.0"
  }
}
```



`button` 依赖项通常会通过在 `card` 的 `node_modules` 目录中创建符号链接来安装，该符号链接指向 `button` 的开发目录。

但是，如果 `button` 在其 `peerDependencies` 中指定 `react`，该怎么办？ 如果 monorepo 中的所有项目都使用相同版本的 `react`，那么就没有问题。 但如果 `card` 依赖的 `button` 使用 `react@16` 并且 `form` 使用 `react@17` 呢？ 通常你必须选择一个版本的 `react` 并使用 `button` 的 `devDependencies` 来指定它。 符号链接无法为 `react` 对等依赖提供一种方式，使不同的消费者（例如 `card` 和 `form`）能够以不同的方式满足它。

`injected` 字段通过在虚拟存储中安装 button 的硬链接副本解决了这个问题。 为了实现这一点， `card` 的 `package.json` 可以按如下方式配置：

```json
{
  "name": "card",
  "dependencies": {
    "button": "workspace:1.0.0",
    "react": "16"
  },
  "dependenciesMeta": {
    "button": {
      "injected": true
    }
  }
}
```



而 `form` 的 `package.json` 可以按如下方式配置：

```json
{
  "name": "form",
  "dependencies": {
    "button": "workspace:1.0.0",
    "react": "17"
  },
  "dependenciesMeta": {
    "button": {
      "injected": true
    }
  }
}
```



通过这些变化，我们说 `button` 是 `card` 和 `form` 的“注入依赖项”。 当 `button` 导入`react` 时，它将在 `card` 的上下文中解析为 `react@16`，但在 `form` 的上下文中解析为 `react@17`。

由于注入依赖关系会生成其工作空间源目录的副本，因此每当修改代码时，都必须更新这些副本; 否则，新状态将不会反映给使用者。 当使用命令（例如 `pnpm --recursive run build`）构建多个项目时，此更新必须在重建每个注入的包之后但重建其使用者之前进行。 对于简单的用例，可以通过再次调用 `pnpm install` 来完成，也许是使用 `package.json` 生命周期脚本（如 `"prepare": "pnpm run build"`）来重建该项目。 第三方工具，如 [pnpm-sync](https://www.npmjs.com/package/pnpm-sync-lib) 和 [pnpm-sync-dependencies-meta-injected](https://www.npmjs.com/package/pnpm-sync-dependencies-meta-injected) 为更新注入的依赖项以及监视模式支持提供了更为强大和高效的解决方案。

## peerDependenciesMeta

此字段列出了一些与 `peerDependencies` 字段中列出的依赖关系相关的额外信息。

### peerDependenciesMeta.*.optional

如果设置为 true，所选的 peer dependency 将被包管理工具标记为可选的。 因此，消费方省略它将不再被报告为错误。

示例：

```json
{
    "peerDependencies": {
        "foo": "1"
    },
    "peerDependenciesMeta": {
        "foo": {
            "optional": true
        },
        "bar": {
            "optional": true
        }
    }
}
```



请注意，即使在 `peerDependencies` 中没有指定 `bar`，它也会被标记为可选的。 因此，pnpm 将假定任何版本的 bar 都是被允许的。 但是，`foo` 是可选的，但只能使用指定的版本。

## publishConfig

在包被打包之前，可以覆盖清单中的某些字段。 以下字段可以被覆盖：

- [`bin`](https://github.com/stereobooster/package.json#bin)
- [`main`](https://github.com/stereobooster/package.json#main)
- [`exports`](https://nodejs.org/api/esm.html#esm_package_exports)
- [`types` 或 `typings`](https://github.com/conditionnowerter/package.json#types)
- [`module`](https://github.com/stereobooster/package.json#module)
- [`browser`](https://github.com/stereobooster/package.json#browser)
- [`esnext`](https://github.com/stereobooster/package.json#esnext)
- [`es2015`](https://github.com/stereobooster/package.json#es2015)
- [`unpkg`](https://github.com/stereobooster/package.json#unpkg-1)
- [`umd:main`](https://github.com/stereobooster/package.json#microbundle)
- [`typesVersions`](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions)
- cpu
- os

要覆盖字段，请将该字段的发布版本添加到 `publishConfig`。

例如，以下 `package.json`：

```json
{
    "name": "foo",
    "version": "1.0.0",
    "main": "src/index.ts",
    "publishConfig": {
        "main": "lib/index.js",
        "typings": "lib/index.d.ts"
    }
}
```



将被发布为：

```json
{
    "name": "foo",
    "version": "1.0.0",
    "main": "lib/index.js",
    "typings": "lib/index.d.ts"
}
```



### publishConfig.executableFiles

默认情况下，出于可移植性的原因，除了 bin 字段中列出的文件之外，不会在生成的包存档中将任何文件标记为可执行文件。 `executableFiles` 字段允许您声明必须设置可执行标志 (+x) 的额外字段，即使它们不能通过 bin 字段直接访问。

```json
{
  "publishConfig": {
    "executableFiles": [
      "./dist/shim.js"
    ]
  }
}
```



### publishConfig.directory

你还可以使用 `publishConfig.directory` 字段来自定义相对于当前 `package.json` 的发布子目录。

预计在指定目录中有当前包的修改版本（通常使用第三方构建工具）。

> 在这个例子中 `"dist"` 文件夹必须包含一个 `package.json`

```json
{
  "name": "foo",
  "version": "1.0.0",
  "publishConfig": {
    "directory": "dist"
  }
}
```



### publishConfig.linkDirectory

- 默认值：**true**
- 类型：**Boolean**

当设置为 `true` 时，项目将在本地开发期间从 `publishConfig.directory` 位置进行符号链接。

示例：

```json
{
  "name": "foo",
  "version": "1.0.0",
  "publishConfig": {
    "directory": "dist",
    "linkDirectory": true
  }
}
```



## pnpm.overrides

此字段允许您指示 pnpm 覆盖依赖关系图中的任何依赖项。 这对于强制所有软件包使用一个依赖项的单个版本、反向移植一个修复、用分叉替换依赖项或删除未使用的依赖项很有用。

请注意，overrides 字段只能在项目的根目录下设置。

`"pnpm"."overrides"` 字段的示例：

```json
{
  "pnpm": {
    "overrides": {
      "foo": "^1.0.0",
      "quux": "npm:@myorg/quux@^1.0.0",
      "bar@^2.1.0": "3.0.0",
      "qar@1>zoo": "2"
    }
  }
}
```



你可以用 ">" 来覆盖某个包下的子依赖的版本，比如 `qar@1>zoo` 只会覆盖 `qar@1` 依赖的 `zoo` 的版本，而不会影响其他依赖。

一个覆盖可以被定义为直接依赖项的规则的引用。 这通过依赖名称前缀一个 $ 实现:

```json
{
  "dependencies": {
    "foo": "^1.0.0"
  },
  "pnpm": {
    "overrides": {
      "foo": "$foo"
    }
  }
}
```



被引用的包不必匹配需要覆盖的包：

```json
{
  "dependencies": {
    "foo": "^1.0.0"
  },
  "pnpm": {
    "overrides": {
      "bar": "$foo"
    }
  }
}
```



如果你发现你使用某个包不需要它的依赖之一，你可以使用 `-` 来删除它。 例如，如果软件包 `foo@1.0.0` 需要一个名为 `bar` 的大型软件包来实现你不使用的功能，则删除它可以减少安装时间：

```json
{
  "pnpm": {
    "overrides": {
      "foo@1.0.0>bar": "-"
    }
  }
}
```



此功能对于 `optionalDependencies` 特别有用，其中大多数可选包可以被安全地跳过。

## pnpm.packageExtensions

`packageExtension` 字段提供了一种用额外信息扩展现有软件包定义的方法。 例如，如果 `react-redux` 本应该在它的 `peerDependencies` 中包含 `react-dom` 但它没有，则可以用 `packageExtensions` 来填补上 `react-redux`。

```json
{
  "pnpm": {
    "packageExtensions": {
      "react-redux": {
        "peerDependencies": {
          "react-dom": "*"
        }
      }
    }
  }
}
```



`packageExtensions` 中的键是包名或包名和 semver 范围，因此可以只修补包的某些版本：

```json
{
  "pnpm": {
    "packageExtensions": {
      "react-redux@1": {
        "peerDependencies": {
          "react-dom": "*"
        }
      }
    }
  }
}
```



以下字段可以使用 `packageExtensions` 进行扩展： `dependencies`、`optionalDependencies`、`peerDependencies` 和 `peerDependenciesMeta`。

一个更大的例子：

```json
{
  "pnpm": {
    "packageExtensions": {
      "express@1": {
        "optionalDependencies": {
          "typescript": "2"
        }
      },
      "fork-ts-checker-webpack-plugin": {
        "dependencies": {
          "@babel/core": "1"
        },
        "peerDependencies": {
          "eslint": ">= 6"
        },
        "peerDependenciesMeta": {
          "eslint": {
            "optional": true
          }
        }
      }
    }
  }
}
```



提示

我们与 Yarn 一起维护一个 `packageExtensions` 的数据库，以便修补在生态系统中损坏的包。 如果你使用 `packageExtensions`, 考虑发送一个 PR 上游并将你的扩展贡献给 [`@yarnpkg/extension`] 数据库。

## pnpm.peerDependencyRules

### pnpm.peerDependencyRules.ignoreMissing

pnpm 不会打印有关依赖列表中缺少对 peerDependency 的警告。

例如，使用以下配置，如果依赖项需要 `react` 但 `react` 未被安装，pnpm 不会打印相应警告。

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": ["react"]
    }
  }
}
```



包名也可以使用模式匹配

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": ["@babel/*", "@eslint/*"]
    }
  }
}
```



### pnpm.peerDependencyRules.allowedVersions

对于指定版本范围的 peerDependency，将不会打印未满足版本范围的警告。

例如，如果你有一些依赖项需要 `react@16` 但你知道它们可以与 `react@17` 一起正常工作，那么你可以使用以下配置：

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "allowedVersions": {
        "react": "17"
      }
    }
  }
}
```



这将告诉 pnpm 任何在其对等依赖中含有 `react` 的依赖都应该允许安装 `react` v17。

这还可以用来抑制指定包的对等依赖项引发的警告。 例如，以下配置下 `react` v17 仅在其位于 `button` v2 包的对等依赖项中或任何 `card` 包的依赖项中时才被允许：

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "allowedVersions": {
        "button@2>react": "17",
        "card>react": "17"
      }
    }
  }
}
```



### pnpm.peerDependencyRules.allowAny

`allowAny` 是一个匹配包名的数组，任何匹配该模式的对等依赖将可被解析为任意版本，无论 `peerDependencies` 指定的范围如何。 例如：

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "allowAny": ["@babel/*", "eslint"]
    }
  }
}
```



上述设置将禁用任何与 `@babel/` 或 `eslint` 有关的对等依赖版本不匹配的警告。

## pnpm.neverBuiltDependencies

此字段允许忽略特定依赖项的构建。 安装期间不会执行所列包的 “preinstall”、“install” 和 “postinstall” 脚本。

关于 `"pnpm"."neverBuiltDependencies"` 字段的一个例子:

```json
{
  "pnpm": {
    "neverBuiltDependencies": ["fsevents", "level"]
  }
}
```



## pnpm.onlyBuiltDependencies

允许在安装期间执行安装的包名列表。 如果此字段存在，那么只有列出的软件包可以运行安装脚本。

示例：

```json
{
  "pnpm": {
    "onlyBuiltDependencies": ["fsevents"]
  }
}
```



## pnpm.onlyBuiltDependenciesFile

此配置选项允许用户指定一个 JSON 文件，该文件列出了在 pnpm 安装过程中允许运行安装脚本的唯一包。 通过使用它，你可以增强安全性或确保在安装过程中只有特定的依赖项执行脚本。

示例：

```json
{
  "dependencies": {
    "@my-org/policy": "1.0.0"
  },
  "pnpm": {
    "onlyBuiltDependenciesFile": "node_modules/@my-org/policy/onlyBuiltDependencies.json"
  }
}
```



JSON 文件本身应包含一组包名称：

node_modules/@my-org/policy/onlyBuiltDependencies.json

```json
[
  "fsevents"
]
```



## pnpm.allowedDeprecatedVersions

这个设置允许忽略特定包的弃用警告。

示例：

```json
{
  "pnpm": {
    "allowedDeprecatedVersions": {
      "express": "1",
      "request": "*"
    }
  }
}
```



使用上述配置，pnpm 将不会打印 `request` 任何版本和 `express` v1 版本的弃用警告。

## pnpm.patchedDependencies

此字段会在你运行 [pnpm patch-commit](https://pnpm.io/zh/cli/patch-commit) 时自动添加/更新。 它是一个字典，其中键值是软件包名称与精确版本号。 值应该是一个指向修补文件的相对路径。

示例：

```json
{
  "pnpm": {
    "patchedDependencies": {
      "express@4.18.1": "patches/express@4.18.1.patch"
    }
  }
}
```



## pnpm.allowNonAppliedPatches

当设置为 `true` 时，如果 `patchedDependencies` 字段中的某些补丁未被应用，安装不会失败。

```json
{
  "pnpm": {
    "patchedDependencies": {
      "express@4.18.1": "patches/express@4.18.1.patch"
    },
    "allowNonAppliedPatches": true
}
```



## pnpm.updateConfig

### pnpm.updateConfig.ignoreDependencies

有时你无法更新依赖项。 例如，最新版本的依赖项开始使用 ESM，但你的项目尚未采用 ESM。 恼人的是，这样的包将始终被 `pnpm outdated` 命令打印出来，并在运行 `pnpm update --latest` 时更新。 但是，你可以在 `ignoreDependencies` 字段中列出你不想更新的包：

```json
{
  "pnpm": {
    "updateConfig": {
      "ignoreDependencies": ["load-json-file"]
    }
  }
}
```



模式匹配也是支持的，因此你可以忽略在特定范围内的任何包： `@babel/*`。

## pnpm.auditConfig

### pnpm.auditConfig.ignoreCves

[`pnpm audit`](https://pnpm.io/zh/cli/audit) 命令将忽略的 CVE ID 列表。

```json
{
  "pnpm": {
    "auditConfig": {
      "ignoreCves": [
        "CVE-2022-36313"
      ]
    }
  }
}
```



### pnpm.auditConfig.ignoreGhsas

[`pnpm audit`](https://pnpm.io/zh/cli/audit) 命令将忽略的 GHSA 代码列表。

```json
{
  "pnpm": {
    "auditConfig": {
      "ignoreGhsas": [
        "GHSA-42xw-2xvc-qx8m",
        "GHSA-4w2v-q235-vp99",
        "GHSA-cph5-m8f7-6c5x",
        "GHSA-vh95-rmgr-6w4m"
      ]
    }
  }
}
```



## pnpm.requiredScripts

工作区的每个项目，都必须含有此数组中的所有脚本。 否则， `pnpm -r run <script name>` 将失败。

```text
{
  "pnpm": {
    "requiredScripts": ["build"]
  }
}
```



## pnpm.supportedArchitectures

你可以指定要安装的可选依赖项的架构，即使它们与运行安装的系统的架构不匹配。

例如，以下配置指示安装 Windows x64 的可选依赖项：

```json
{
  "pnpm": {
    "supportedArchitectures": {
      "os": ["win32"],
      "cpu": ["x64"]
    }
  }
}
```



而此配置将为 Windows、macOS 以及当前正在运行安装的系统架构安装可选依赖项。 它包括 x64 和 arm64 CPU 的工件：

```json
{
  "pnpm": {
    "supportedArchitectures": {
      "os": ["win32", "darwin", "current"],
      "cpu": ["x64", "arm64"]
    }
  }
}
```



另外， `supportedArchitectures` 还支持指定系统的 `libc`。

## pnpm.ignoredOptionalDependencies

如果可选依赖项的名称包含在此数组中，则会跳过它。 示例：

```json
{
  "pnpm": {
    "ignoredOptionalDependencies": ["fsevents", "@esbuild/*"]
  }
}
```



## pnpm.executionEnv.nodeVersion

指定应用于项目运行时的确切 Node.js 版本。 pnpm 将自动安装指定版本的 Node.js 并将其用于执行 `pnpm run` 命令或 `pnpm node` 命令。

示例：

```json
{
  "pnpm": {
    "executionEnv": {
      "nodeVersion": "16.16.0"
    }
  }
}
```



## resolutions

该字段的功能与 ·pnpm.overrides· 相同，旨在使从 Yarn 迁移变得更容易。

`resolutions` 和 `pnpm.overrides` 在包解析之前被合并（`pnpm.overrides` 优先），这在你从 Yarn 迁移并且需要仅为 pnpm 调整一些包时非常有用。