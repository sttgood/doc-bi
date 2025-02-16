---
title: id
article: false
order: 
---

id命令在Linux和Unix系统中用于显示用户的标识信息，包括用户ID（UID）、组ID（GID）以及用户所属的附加组。以下是id命令的详细解析：

### 一、基本语法

```bash
bash复制代码

id [选项] [用户名]
```

其中，[选项]用于指定id命令的行为，[用户名]表示要查询的用户名。如果不指定用户名，id命令会默认显示当前用户的标识信息。

### 二、常用选项

1. **-u或--user**：仅显示用户的用户ID（UID）。
2. **-g或--group**：仅显示用户的主组ID（GID）。
3. **-G或--groups**：显示用户所属的所有组ID（GID），包括主组和附加组。
4. **-n或--name**：与-u、-g或-G结合使用时，显示名称而不是ID。例如，显示用户名而不是UID，显示组名而不是GID。
5. **-r或--real**：与-u或-g结合使用时，显示真实的用户ID或组ID，而不是有效的用户ID或组ID。在某些情况下（如使用sudo命令时），用户的真实ID和有效ID可能不同。
6. **-z**：输出时不包含任何额外的字符，适合脚本使用。
7. **-Z**：显示用户的SELinux安全上下文（如果启用了SELinux）。这对于安全审计和调试非常有用。
8. **-l**：显示登录UID（登录ID表示登录会话时的系统凭据），可以通过-u选项来显示登录UID（实际登录用户的用户ID）或通过-g选项来显示登录用户的主组ID。

### 三、使用示例

1. **显示当前用户的完整信息**：

```bash
bash复制代码

id
```

输出示例：

```bash
bash复制代码

uid=1000(username) gid=1000(username) groups=1000(username),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),113(lpadmin),128(sambashare)
```

1. **显示指定用户的完整信息**：

```bash
bash复制代码

id alice
```

输出示例：

```bash
bash复制代码

uid=1001(alice) gid=1001(alice) groups=1001(alice),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),113(lpadmin),128(sambashare)
```

1. **仅显示当前用户的用户ID（UID）**：

```bash
bash复制代码

id -u
```

输出示例：1000

1. **仅显示当前用户的主组ID（GID）**：

```bash
bash复制代码

id -g
```

输出示例：1000

1. **显示当前用户所属的所有组ID（GID）**：

```bash
bash复制代码

id -G
```

输出示例：1000 4 24 27 30 46 113 128

1. **显示当前用户所属的所有组名**：

```bash
bash复制代码

id -Gn
```

输出示例：username adm cdrom sudo dip plugdev lpadmin sambashare

1. **显示当前用户的真实用户ID（UID）**：

```bash
bash复制代码

id -ur
```

输出示例：1000

1. **显示当前用户的真实主组ID（GID）**：

```bash
bash复制代码

id -gr
```

输出示例：1000

1. **输出时不包含任何额外的字符**：

```bash
bash复制代码

id -z
```

输出示例：uid=1000(username)gid=1000(username)groups=1000(username),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),113(lpadmin),128(sambashare)

1. **显示用户的SELinux安全上下文**：

```bash
bash复制代码

id -Z
```

输出示例：unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023（如果启用了SELinux）

### 四、注意事项

1. **权限问题**：使用id命令通常不需要特殊权限，任何用户都可以查看自己的用户和组信息。但是，查看其他用户的详细信息可能需要适当的权限。
2. **用户存在性**：如果指定的用户名不存在，id命令会显示“无效的用户名”错误信息。
3. **UID和GID的唯一性**：用户的UID和GID是系统内部分配的唯一标识符，用于在系统中标识用户和组，一般情况下不可修改。
4. **真实ID和有效ID的区别**：真实ID（Real ID）是指用户登录时的ID，有效ID（Effective ID）是指用户当前执行操作时的ID。在大多数情况下，这两个ID是相同的，但在某些情况下（如使用sudo命令时）可能会不同。

综上所述，id命令是Linux和Unix系统中一个非常实用的工具，用于显示用户的标识信息。通过灵活使用id命令及其选项，用户可以高效地获取所需的用户和组信息。