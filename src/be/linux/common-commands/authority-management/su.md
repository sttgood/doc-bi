---
title: su
article: false
order: 
---

`su`命令是Linux和类Unix操作系统中的一个重要命令，用于切换当前用户的身份。以下是`su`命令的详细解释：

### 一、基本语法

```bash
bash复制代码

su [选项] [用户名] [命令]
```

- **选项**：用于控制切换用户的行为，可选参数。
- **用户名**：要切换到的用户名，可选参数。如果不指定用户名，则默认切换到root用户。
- **命令**：在新用户身份下执行的命令，可选参数。

### 二、常用选项

- `-` 或 `-l` 或 `--login`：加载目标用户的环境变量，并将当前的shell变为登录shell。这意味着会清除当前的环境变量（除了`TERM`和通过`--whitelist-environment`选项指定的变量），并初始化目标用户的环境变量（如`HOME`、`SHELL`、`USER`、`LOGNAME`、`PATH`等）。同时，会变更到目标用户的家目录。
- `-c` 或 `--command`：指定在新用户身份下执行的命令。执行完该命令后，会恢复到原来的用户身份。
- `-m` 或 `-p` 或 `--preserve-environment`：保留当前的环境变量不变，不会更新`HOME`、`SHELL`、`USER`、`LOGNAME`等。此选项与`-`或`-l`或`--login`是互斥的，不能同时使用。
- `-s` 或 `--shell`：指定切换用户后使用的shell程序，而不是使用默认shell。
- `-w` 或 `--whitelist-environment`：环境变量白名单，指定在`-`或`-l`或`--login`选项下不会重置的环境变量列表，格式通过逗号分隔。但需要注意的是，`HOME`、`SHELL`、`USER`、`LOGNAME`和`PATH`这五个变量始终会被重置，即使它们被列在白名单中。
- `-h` 或 `--help`：显示帮助信息。
- `-V` 或 `--version`：显示版本信息。

### 三、常见用法

1. **切换到root用户并使用其环境变量**：

   ```bash
   bash复制代码
   
   su - root
   ```

2. **切换到指定用户并使用其环境变量**：

   ```bash
   bash复制代码
   
   su - username
   ```

3. **在新用户身份下执行指定命令**：

   ```bash
   bash复制代码
   
   su -c "command" username
   ```

   例如，切换到root用户并执行`ls -l`命令：

   ```bash
   bash复制代码
   
   su -c "ls -l" root
   ```

4. **切换到新用户但保持当前环境变量不变**：

   ```bash
   bash复制代码
   
   su -m username
   ```

5. **切换到新用户并使用指定的shell**：

   ```bash
   bash复制代码
   
   su -s /bin/bash username
   ```

### 四、注意事项

- 当使用`su`命令切换到其他用户时，通常需要输入目标用户的密码。
- 在图形界面环境下，`su`命令通常会被`sudo`命令替代，因为`sudo`提供了更细粒度的权限控制。
- 某些命令的选项和语法可能会因不同的Linux发行版和版本而略有不同，请根据实际情况调整命令的具体细节。
- 为了安全起见，建议不要频繁使用`su`命令切换到root用户，而是使用`sudo`命令来临时获取root权限执行需要的操作。

### 五、示例

1. 从当前用户切换到root用户：

   ```bash
   bash复制代码
   
   su -
   ```

   或者明确指定切换到root用户：

   ```bash
   bash复制代码
   
   su - root
   ```

2. 从当前用户切换到普通用户（例如`student`）：

   ```bash
   bash复制代码
   
   su - student
   ```

3. 以root用户身份执行`df -h`命令：

   ```bash
   bash复制代码
   
   su -c "df -h" root
   ```

通过理解`su`命令的基本语法、常用选项、常见用法和注意事项，你可以更有效地管理用户身份切换，确保系统的安全性和访问控制。