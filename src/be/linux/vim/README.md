---
title: vim
article: false
index: false
dir:
  order: 3
  link: true
---

### Vim 详细介绍

Vim（**Vi IMproved**）是一款高度可定制的、跨平台的文本编辑器，以其高效的键盘操作和模态编辑模式闻名。它是经典 Unix 编辑器 `vi` 的增强版，支持语法高亮、插件扩展、脚本编程等功能，适用于代码开发、文本编辑等场景。

---

#### 一、Vim 的核心特点

1. **模态编辑**  
   Vim 的核心在于其**模式化操作**，通过不同模式区分编辑与命令操作：
   - **普通模式（Normal Mode）**：默认模式，用于移动光标、执行命令。
   - **插入模式（Insert Mode）**：输入文本。
   - **可视模式（Visual Mode）**：选择文本块。
   - **命令行模式（Command-Line Mode）**：执行保存、搜索、替换等命令。

2. **键盘高效操作**  
   几乎无需鼠标，通过组合键完成复杂操作（如 `dw` 删除单词，`ci"` 修改引号内内容）。

3. **高度可扩展**  
   支持插件、自定义配置（通过 `.vimrc` 文件）、脚本（Vimscript/Lua）。

4. **跨平台**  
   支持 Linux、macOS、Windows 等操作系统。

---

#### 三、基础使用

1. **启动与退出**  

   ```bash
   vim 文件名       # 打开文件
   :q              # 退出（未修改时）
   :q!             # 强制退出（放弃修改）
   :wq 或 :x       # 保存并退出
   ```

2. **模式切换**  
   - `i`：进入插入模式（当前光标位置）。
   - `a`：在光标后进入插入模式。
   - `Esc`：返回普通模式。
   - `v`：进入可视模式。
   - `:`：进入命令行模式。

3. **光标移动**  
   - `h/j/k/l`：左/下/上/右。

   - `w/b`：跳到下/上一个单词开头。

   - `0/$`：行首/行尾。

   - `gg/G`：文件开头/结尾。

   - `Ctrl + f/Ctrl + b`：向下/上翻页。

     ​                     <img src="./assets/image-20250201192729268.png" style="zoom:80%;" />

     | i     | 光标之前插入 |
     | ----- | ------------ |
     | a     | 光标之后插入 |
     | o     | 光标下一行   |
     | O     | 光标上一行   |
     | I     | 当前行头插入 |
     | A     | 当前行尾插入 |
     | ctl+b | 上翻屏       |
     | ctl+f | 下翻屏       |

4. **文本编辑**  

    <table width="80%">
         <tr>
           <th>命令</th>
           <th>描述</th>
         </tr>
   ​      <tr>
   ​        <td>yy<br>数字yy</td>
   ​        <td>复制当前行<br>复制指定行数</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>y$<br>y^</td>
   ​        <td>复制光标后内容到行尾<br>复制光标前内容到行首</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>d$<br>d^</td>
   ​        <td>删除光标后内容到行尾<br>删除光标前内容到行首</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>yw<br>dw</td>
   ​        <td>复制单词<br>删除单词</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>x<br>X<br>r<br>R</td>
   ​        <td>剪切当前字符向后<br>剪切前一个字符<br>替换单个字符<br>连续替换字符</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>p<br>数字p</td>
   ​        <td>粘贴<br>连续粘贴多次</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>dd<br>数字dd</td>
   ​        <td>删除当前行<br>删除多行</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>u</td>
   ​        <td>撤销操作</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>^<br>$<br>w<br>b<br>e</td>
   ​        <td>移动到行首<br>移动到行尾<br>跳至下个单词首<br>跳至上个单词首<br>跳至单词尾</td>
   ​      </tr>
   ​
   ​      <tr>
   ​        <td>gg<br>G<br>数字G</td>
   ​        <td>移动到文件首行<br>移动到文件末行<br>跳转到指定行</td>
   ​      </tr>
   ​    </table>

5. **搜索与替换**  

   - `/关键词`：向后搜索。
   - `?关键词`：向前搜索。
   - `n/N`：跳转到下/上一个匹配项。
   - `:s/old/new`:替换光标所在行的查找的第一个
   - `:%s/旧文本/新文本/g`：全局替换。
   - `:s/旧文本/新文本/g`：当前行替换。

---

#### 四、高级功能

1. **分屏与多文件编辑**  

   - `:sp 文件名`：水平分屏。
   - `:vsp 文件名`：垂直分屏。
   - `Ctrl + w + 方向键`：切换分屏。

2. **宏录制**  
   - `q + 寄存器名`：开始录制（如 `qa`）。
   - 执行操作后按 `q` 停止录制。
   - `@ + 寄存器名`：回放宏（如 `@a`）。

3. **插件管理**  
   常用插件管理器：

   - [Vim-Plug](https://github.com/junegunn/vim-plug)
   - [Pathogen](https://github.com/tpope/vim-pathogen)
   - [Vundle](https://github.com/VundleVim/Vundle.vim)

4. **正则表达式支持**  
   Vim 支持强大的正则表达式，例如：

   ```vim
   :%s/\v\d{4}-\d{2}-\d{2}/[日期]/g  # 替换所有日期格式
   ```

---

#### 五、配置 Vim（`.vimrc`）

用户配置文件通常位于 `~/.vimrc`，示例配置：

```vim
" 显示行号
set number

" 语法高亮
syntax on

" 缩进设置
set tabstop=4
set shiftwidth=4
set expandtab

" 高亮搜索
set hlsearch

" 插件管理（Vim-Plug）
call plug#begin('~/.vim/plugged')
Plug 'preservim/nerdtree'        " 文件树
Plug 'ycm-core/YouCompleteMe'    " 代码补全
call plug#end()
```

---

#### 六、学习资源

1. **官方文档**  
   `:help` 命令查看内置文档。
2. **在线教程**  
   - [Open Vim](https://www.openvim.com/)（交互式教程）
   - [Vim Adventures](https://vim-adventures.com/)（游戏化学习）
3. **书籍**  
   - 《Practical Vim》
   - 《Learn Vimscript the Hard Way》
