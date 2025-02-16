---
title: python创建文件夹
description: python
icon: html
author: false
isOriginal: true
date: 2025-2-9 15:36:00
category: 
  - python
tag: 
  - 文件管理
sticky: 1
star: true
timeline: true
---
python创建文件夹
<!-- more -->

## 二级文件目录

```python
import os

# 定义Linux命令分类及其对应的命令列表
commands_dict = {
    "file-management": [
        "ls", "cd", "pwd", "mkdir", "rm", "cp", "mv", "touch", "cat", "less",
        "head", "tail"
    ],
    "process-management": [
        "ps", "top", "htop", "kill", "pkill", "nice", "renice", "nohup"
    ],
    "network-configuration": [
        "ifconfig", "ip", "netstat", "ss", "ping", "traceroute", "nslookup",
        "dig", "wget", "curl"
    ],
    "System Monitoring": [
        "free", "df", "du", "vmstat", "iostat", "sar", "uptime"
    ],
    "User and Permission Management": [
        "useradd", "userdel", "passwd", "groupadd", "groupdel", "chown",
        "chmod", "su", "sudo"
    ],
    "Software Package Management": [
        "apt-get", "apt", "yum", "dnf", "pacman", "zypper"
    ],
    "Compression and Archiving": [
        "tar", "gzip", "gunzip", "bzip2", "bzcat", "zip", "unzip"
    ],
    "Text Processing": [
        "grep", "awk", "sed", "sort", "uniq", "cut", "paste"
    ],
    "Other Useful Commands": [
        "echo", "date", "cal", "whoami", "hostname", "clear", "man", "help"
    ]
}

# 创建主目录
main_dir = "linux_commands"
os.makedirs(main_dir, exist_ok=True)

for category, commands in commands_dict.items():
    # 为每个类别创建文件夹
    category_dir = os.path.join(main_dir, category)
    os.makedirs(category_dir, exist_ok=True)
    
    for command in commands:
        # 为每个命令创建Markdown文件
        md_file_path = os.path.join(category_dir, f"{command}.md")
        with open(md_file_path, 'w') as file:
            file.write(f"# {command}\n\n")
            file.write("## Description\n\n")
            file.write("Description of the command goes here.\n\n")
            file.write("## Usage\n\n")
            file.write("Usage example goes here.\n")

print("Markdown files created successfully.")
```

## 三级文件目录

明白了，我们将创建一个包含多个三级目录、每个三级目录包含多个二级目录，而每个二级目录又包含多个Markdown文档的文件结构。同时，我们将在每个Markdown文档中写入相同的指定内容。

假设我们要创建如下的目录结构：

```
python_learning/
├── level1_dir1/
│   ├── level2_dir1/
│   │   ├── basics.md
│   │   └── control_flow.md
│   └── level2_dir2/
│       ├── functions.md
│       └── data_structures.md
├── level1_dir2/
│   ├── level2_dir1/
│   │   ├── modules.md
│   │   └── file_operations.md
│   └── level2_dir2/
│       ├── exceptions.md
│       └── oop.md
└── level1_dir3/
    ├── level2_dir1/
    │   ├── loops.md
    │   └── conditionals.md
    └── level2_dir2/
        ├── strings.md
        └── lists.md
```

并且每个Markdown文档将包含以下相同的内容：

```markdown
# 标题

这是每个Markdown文档的通用内容。
```

以下是用于创建上述目录结构并写入指定内容的Python脚本：

```python
import os

# 定义目录结构
directory_structure = {
    "level1_dir1": {
        "level2_dir1": ["basics.md", "control_flow.md"],
        "level2_dir2": ["functions.md", "data_structures.md"]
    },
    "level1_dir2": {
        "level2_dir1": ["modules.md", "file_operations.md"],
        "level2_dir2": ["exceptions.md", "oop.md"]
    },
    "level1_dir3": {
        "level2_dir1": ["loops.md", "conditionals.md"],
        "level2_dir2": ["strings.md", "lists.md"]
    }
}

# 定义要写入每个Markdown文件的内容
markdown_content = """# 标题

这是每个Markdown文档的通用内容。
"""

# 创建目录和文件，并写入内容
for level1_dir, level2_dirs in directory_structure.items():
    for level2_dir, files in level2_dirs.items():
        # 创建完整的路径
        path = os.path.join(level1_dir, level2_dir)
        # 确保目录存在
        os.makedirs(path, exist_ok=True)
        # 创建文件并写入内容
        for file in files:
            file_path = os.path.join(path, file)
            with open(file_path, 'w') as f:
                f.write(markdown_content)

print("Directory structure created successfully and content written to Markdown files.")
```
