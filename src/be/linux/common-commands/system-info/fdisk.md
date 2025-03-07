---
title: fdisk
article: false
order: 
---

`fdisk`是一个用于磁盘分区管理的命令行工具，它允许用户创建、删除、调整大小和管理硬盘上的分区。以下是`fdisk`命令的详细解析：

### 一、基本语法

```bash
bash复制代码

fdisk [选项] [设备文件名]
```

其中，`设备文件名`是指定要操作的磁盘，例如`/dev/sda`或`/dev/nvme0n1`。

### 二、常用选项

1. **-l**：列出指定设备的分区表信息。如果未指定设备，则列出所有磁盘的分区表信息。
2. **-u**：使用扇区而不是柱面作为单位（默认是柱面）。
3. **-c**：启用或禁用DOS兼容模式。
4. **-v**：显示`fdisk`的版本信息。
5. **-h**：显示帮助信息。

### 三、交互模式命令

在进入`fdisk`的交互模式后，可以使用以下命令来管理磁盘分区：

1. **m**：显示所有命令的帮助信息。
2. **p**：打印当前分区表。
3. **n**：创建一个新分区。在选择创建新分区后，需要选择分区类型（主分区或扩展分区）、分区号、起始扇区和结束扇区或分区大小。
4. **d**：删除一个分区。选择要删除的分区号即可。
5. **t**：更改分区类型。选择要更改类型的分区号，然后输入新的分区类型代码。
6. **a**：切换引导标志。选择要切换引导标志的分区号。
7. **w**：保存更改并退出。在执行此命令后，所做的更改将被写入分区表。
8. **q**：不保存更改并退出。

### 四、高级功能

1. **指定单位显示分区信息**：可以使用`-u`选项指定单位（如扇区、柱面等）来显示分区信息。
2. **设置分区标签（GPT分区表）**：对于GPT分区表，`fdisk`允许用户设置分区的标签（GUID）。在交互模式下，输入`l`命令可以列出所有可用的分区标签。
3. **调整分区大小**：虽然`fdisk`本身不直接支持调整分区大小的功能，但用户可以通过删除要调整大小的分区并创建一个新分区的方式来实现。请注意，这种操作可能会破坏分区上的数据，因此在进行此操作之前，请确保已经备份了所有重要数据。

### 五、使用示例

1. **列出所有磁盘和分区信息**：

   ```bash
   bash复制代码
   
   sudo fdisk -l
   ```

2. **创建新分区**：

   ```bash
   bash复制代码
   
   sudo fdisk /dev/sdb
   ```

   在交互模式下，输入`n`创建新分区，然后按照提示选择分区类型、分区号、起始扇区和结束扇区或大小。

3. **删除分区**：

   ```bash
   bash复制代码
   
   sudo fdisk /dev/sdb
   ```

   在交互模式下，输入`d`删除分区，然后选择要删除的分区号。

4. **更改分区类型**：

   ```bash
   bash复制代码
   
   sudo fdisk /dev/sdb
   ```

   在交互模式下，输入`t`更改分区类型，然后选择要更改类型的分区号，并输入新的分区类型代码。

### 六、注意事项

1. **权限要求**：使用`fdisk`命令通常需要管理员权限，因此需要使用`sudo`命令或以root用户身份执行。
2. **数据备份**：在进行分区操作之前，请务必备份重要数据，因为错误的操作可能导致数据丢失。
3. **分区表类型**：`fdisk`默认使用MBR分区表。如果需要使用GPT分区表，可以考虑使用`gdisk`或`parted`工具。
4. **重新扫描磁盘**：在执行`w`命令写入分区表后，操作系统可能需要重新扫描磁盘才能识别新的分区。可以使用`partprobe`命令强制重新扫描。

综上所述，`fdisk`是一个功能强大的磁盘分区管理工具，适用于多种类型的块设备，如物理硬盘、SSD、USB驱动器等。通过合理使用`fdisk`命令及其选项和参数，用户可以有效地管理和维护磁盘分区。