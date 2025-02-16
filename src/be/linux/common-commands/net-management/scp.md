---
title: scp
article: false
order: 
---

SCP（secure copy）命令是一个基于SSH（Secure Shell）协议在网络之间进行安全文件传输的命令。以下是SCP命令的详细解析：

### 一、基本介绍

SCP命令用于在本地和远程系统之间安全地复制文件或目录。与CP命令不同，SCP可以在本地和远程服务器之间复制文件或目录，并且传输过程加密，确保数据安全。SCP命令享有与SSH相同级别的数据加密，因此被认为是跨两个远程主机传输文件的安全方式。

### 二、语法格式

SCP命令的基本语法格式如下：

```bash
bash复制代码

scp [选项] [源文件路径] [目标文件路径]
```

其中，源文件路径和目标文件路径分别表示要复制的本地文件或目录以及目标位置（可以是远程主机上的路径或本地路径）。选项用于指定SCP命令的行为，如压缩传输、递归复制等。

### 三、常用选项

SCP命令的常用选项包括：

1. **-C**：在复制过程中压缩文件或目录。这有助于加快传输速度，特别是在带宽有限的情况下。
2. **-P port**：指定SSH端口号。如果远程服务器使用非标准SSH端口，则需要使用此选项指定正确的端口号。注意，这里的P是大写。
3. **-r**：递归复制整个目录及其内容。这对于复制包含多个子目录和文件的目录非常有用。
4. **-p**：保留文件的访问和修改时间等属性。这有助于保持文件的元数据一致性。
5. **-q**：不显示传输进度条。默认情况下，SCP命令会显示传输进度，使用此选项可以隐藏进度条。
6. **-v**：详细方式显示输出。这有助于调试连接、验证和配置问题。SCP命令会显示整个过程的调试信息。

### 四、使用示例

以下是一些SCP命令的使用示例：

1. **复制文件到远程服务器**：

```bash
bash复制代码

scp /path/to/local/file username@remote_host:/path/to/remote/directory
```

例如，将本地文件`/home/user/document.txt`复制到远程主机`192.168.1.100`的`/home/user/`目录下：

```bash
bash复制代码

scp /home/user/document.txt user@192.168.1.100:/home/user/
```

1. **从远程服务器复制文件到本地**：

```bash
bash复制代码

scp username@remote_host:/path/to/remote/file /path/to/local/directory
```

例如，将远程主机`192.168.1.100`的`/home/user/document.txt`文件复制到本地`/home/user/downloads/`目录下：

```bash
bash复制代码

scp user@192.168.1.100:/home/user/document.txt /home/user/downloads/
```

1. **递归复制目录到远程服务器**：

```bash
bash复制代码

scp -r /path/to/local/directory username@remote_host:/path/to/remote/directory
```

例如，将本地目录`/home/user/pictures`递归复制到远程主机`192.168.1.100`的`/home/user/backup/`目录下：

```bash
bash复制代码

scp -r /home/user/pictures user@192.168.1.100:/home/user/backup/
```

1. **使用特定SSH端口复制文件**：

```bash
bash复制代码

scp -P port_number /path/to/local/file username@remote_host:/path/to/remote/directory
```

例如，使用端口号`2222`将本地文件`/home/user/document.txt`复制到远程主机`192.168.1.100`的`/home/user/`目录下：

```bash
bash复制代码

scp -P 2222 /home/user/document.txt user@192.168.1.100:/home/user/
```

1. **在复制过程中压缩文件**：

```bash
bash复制代码

scp -C /path/to/local/file username@remote_host:/path/to/remote/directory
```

例如，将本地大文件`/home/user/largefile.zip`压缩后复制到远程主机`192.168.1.100`的`/home/user/backup/`目录下：

```bash
bash复制代码

scp -C /home/user/largefile.zip user@192.168.1.100:/home/user/backup/
```

1. **保留文件的时间属性**：

```bash
bash复制代码

scp -p /path/to/local/file username@remote_host:/path/to/remote/directory
```

例如，将本地文件`/home/user/music.mp3`保留时间属性后复制到远程主机`192.168.1.100`的`/home/user/music/`目录下：

```bash
bash复制代码

scp -p /home/user/music.mp3 user@192.168.1.100:/home/user/music/
```

### 五、注意事项

1. 在使用SCP命令时，请确保具有远程主机的访问权限（用户名和密码或SSH密钥）。
2. 如果远程主机使用非标准SSH端口，请使用`-P`选项指定正确的端口号。
3. SCP命令的传输效率不高，因为它是完全复制文件。对于需要增量备份的场景，建议使用`rsync`命令。
4. SCP命令不仅可以在Linux系统之间使用，还可以在Windows和Linux系统之间使用，但可能需要在Windows上安装相应的SSH客户端工具（如OpenSSH）。

综上所述，SCP命令是一个功能强大的网络文件传输工具，通过合理使用其各种选项和参数，可以实现高效、安全的文件传输。