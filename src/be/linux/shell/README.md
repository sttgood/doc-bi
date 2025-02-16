---
title: shell编程
article: false
index: false
dir:
  order: 4
  link: true
---

Shell脚本（Bash）的完整生命周期包括从创建、编写、调试到执行结束的多个步骤。以下是常规操作流程及关键细节：

---

### **1. 创建脚本**
#### 步骤：
1. **新建文件**：使用文本编辑器（如 `vim`、`nano` 或 VS Code）创建 `.sh` 文件：
   ```bash
   touch script.sh
   chmod +x script.sh  # 添加可执行权限
   ```

2. **Shebang 行**：指定脚本解释器（首行）：
   ```bash
   #!/usr/bin/env bash  # 推荐：兼容不同环境
   # 或
   #!/bin/bash          # 明确使用系统Bash路径
   ```

---

### **2. 编写脚本**
#### 核心组成部分：
- **变量定义**：
  ```bash
  NAME="Alice"
  readonly PI=3.14    # 常量
  ARRAY=("A" "B" "C") # 数组
  ```

- **输入处理**：
  - **读取用户输入**：
    ```bash
    read -p "Enter your name: " USER_NAME
    ```
  - **命令行参数**：
    ```bash
    echo "脚本名: $0"     # 第一个参数是脚本自身
    echo "参数1: $1"     # $1, $2, ..., $9 对应参数
    echo "所有参数: $@"   # 参数列表
    echo "参数个数: $#"   # 参数总数
    ```

  - **选项解析**（`getopts`）：
    ```bash
    while getopts ":a:b:" opt; do
      case $opt in
        a) ARG_A="$OPTARG" ;;
        b) ARG_B="$OPTARG" ;;
        \?) echo "无效选项: -$OPTARG" >&2 ;;
      esac
    done
    ```

- **核心逻辑**：
  - **条件判断**：
    ```bash
    if [[ -f "$file" && "$name" == "Alice" ]]; then
      echo "文件存在且用户是Alice。"
    elif [[ "$num" -gt 10 ]]; then
      echo "数值大于10。"
    else
      echo "其他情况。"
    fi
    ```

  - **循环**：
    ```bash
    for i in {1..5}; do
      echo "循环次数: $i"
    done
    
    while read line; do
      echo "读取行: $line"
    done < input.txt
    ```

  - **函数**：
    ```bash
    function greet() {
      local name="$1"  # 局部变量
      echo "Hello, $name"
      return 0         # 返回状态码（0为成功）
    }
    greet "Bob"
    ```

- **错误处理**：
  ```bash
  set -euo pipefail  # 严格模式：遇错退出、未定义变量报错、管道错误检测
  trap 'echo "脚本被中断！"; exit 1' SIGINT  # 捕获Ctrl+C
  trap 'cleanup' EXIT  # 脚本退出时执行cleanup函数
  ```

---

### **3. 执行脚本**
#### 执行方式：
1. **直接运行**（需可执行权限）：
   ```bash
   ./script.sh arg1 arg2
   ```

2. **指定解释器**（无需可执行权限）：
   ```bash
   bash script.sh -a value1 -b value2
   ```

3. **调试模式**：
   ```bash
   bash -x script.sh  # 显示每一步执行命令
   ```

---

### **4. 输出与日志**
#### 输出管理：
- **标准输出/错误**：
  ```bash
  echo "正常信息" > output.txt   # 覆盖写入
  echo "追加内容" >> output.txt  # 追加写入
  command 2> error.log          # 错误输出重定向
  command &> all.log            # 全部输出重定向
  ```

- **同时输出到终端和文件**：
  ```bash
  echo "Hello" | tee -a log.txt  # -a表示追加
  ```

---

### **5. 调试与测试**
#### 调试技巧：
1. **逐行调试**：
   ```bash
   set -x   # 开启调试模式（显示执行的命令）
   # ...代码块...
   set +x   # 关闭调试模式
   ```

2. **检查变量值**：
   ```bash
   echo "变量值: $var"  # 简单输出
   declare -p var       # 显示变量类型和值
   ```

3. **静态检查工具**：
   ```bash
   shellcheck script.sh  # 安装：sudo apt install shellcheck
   ```

---

### **6. 结束与清理**
#### 终止操作：
1. **正常退出**：
   ```bash
   exit 0  # 0表示成功，非0表示失败
   ```

2. **捕获信号清理资源**：
   ```bash
   cleanup() {
     rm -f /tmp/tempfile
     echo "资源已清理。"
   }
   trap cleanup EXIT TERM INT  # 捕获退出、终止、中断信号
   ```

3. **错误回滚**：
   ```bash
   if ! command; then
     echo "命令执行失败，回滚操作..."
     rollback
     exit 1
   fi
   ```

---

### **完整示例脚本**
```bash
#!/usr/bin/env bash
set -euo pipefail  # 严格模式

# 定义变量和函数
readonly TMP_FILE="/tmp/data.txt"
cleanup() { rm -f "$TMP_FILE"; }

# 捕获退出信号
trap cleanup EXIT

# 输入参数处理
if [[ $# -eq 0 ]]; then
  echo "用法: $0 <文件名>"
  exit 1
fi

# 主逻辑
process_file() {
  local file="$1"
  if [[ ! -f "$file" ]]; then
    echo "错误: 文件不存在！" >&2
    exit 2
  fi
  grep "error" "$file" > "$TMP_FILE" || true  # 忽略grep无匹配的退出码
}

# 调用函数
process_file "$1"

# 输出结果
echo "处理完成，结果保存在: $TMP_FILE"
```

---

### **关键总结**
- **规范**：使用严格模式（`set -euo pipefail`）、明确变量作用域（`local`）、添加注释。
- **健壮性**：处理异常输入、资源清理（`trap`）、错误回滚。
- **可维护性**：模块化函数、分离配置与逻辑、使用静态检查工具。

掌握这些操作后，您可以编写高效、可靠的Shell脚本，适用于自动化任务、系统管理、CI/CD流水线等场景。
