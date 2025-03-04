---
title: path
article: false
order: 2
---

**Node.js 的 `path` 模块** 是用于处理文件和目录路径的工具模块。它提供了一系列方法来解析、拼接、规范化路径，以及提取路径中的特定部分（如文件名、扩展名等）。`path` 模块是 Node.js 的核心模块之一，无需安装即可直接使用。

---

### **1. 引入 `path` 模块**
```javascript
const path = require('path');
```

---

### **2. `path` 模块的常用方法**

#### **2.1 `path.join([...paths])`**
将多个路径片段拼接成一个完整的路径，并自动处理路径分隔符。

```javascript
const fullPath = path.join('/foo', 'bar', 'baz', 'qux');
console.log(fullPath); // 输出: /foo/bar/baz/qux
```

#### **2.2 `path.resolve([...paths])`**
将多个路径片段解析为绝对路径。从右到左处理路径，直到构建出一个绝对路径。

```javascript
const absolutePath = path.resolve('foo', 'bar', 'baz');
console.log(absolutePath); // 输出: /当前工作目录/foo/bar/baz
```

#### **2.3 `path.normalize(path)`**
规范化路径，处理多余的路径分隔符和相对路径符号（`.` 和 `..`）。

```javascript
const normalizedPath = path.normalize('/foo/bar//baz/../qux');
console.log(normalizedPath); // 输出: /foo/bar/qux
```

#### **2.4 `path.basename(path[, ext])`**
获取路径中的文件名部分。可以通过 `ext` 参数去除扩展名。

```javascript
const fileName = path.basename('/foo/bar/baz/qux.html');
console.log(fileName); // 输出: qux.html

const fileNameWithoutExt = path.basename('/foo/bar/baz/qux.html', '.html');
console.log(fileNameWithoutExt); // 输出: qux
```

#### **2.5 `path.dirname(path)`**
获取路径中的目录部分。

```javascript
const dirName = path.dirname('/foo/bar/baz/qux.html');
console.log(dirName); // 输出: /foo/bar/baz
```

#### **2.6 `path.extname(path)`**
获取路径中的文件扩展名。

```javascript
const extName = path.extname('/foo/bar/baz/qux.html');
console.log(extName); // 输出: .html
```

#### **2.7 `path.parse(path)`**
将路径解析为一个对象，包含 `root`、`dir`、`base`、`ext` 和 `name` 属性。

```javascript
const parsedPath = path.parse('/foo/bar/baz/qux.html');
console.log(parsedPath);
// 输出:
// {
//   root: '/',
//   dir: '/foo/bar/baz',
//   base: 'qux.html',
//   ext: '.html',
//   name: 'qux'
// }
```

#### **2.8 `path.format(pathObject)`**
将 `path.parse()` 返回的对象格式化为路径字符串。

```javascript
const formattedPath = path.format({
    root: '/',
    dir: '/foo/bar/baz',
    base: 'qux.html',
    ext: '.html',
    name: 'qux'
});
console.log(formattedPath); // 输出: /foo/bar/baz/qux.html
```

#### **2.9 `path.isAbsolute(path)`**
判断路径是否为绝对路径。

```javascript
const isAbsolute = path.isAbsolute('/foo/bar/baz');
console.log(isAbsolute); // 输出: true

const isNotAbsolute = path.isAbsolute('foo/bar/baz');
console.log(isNotAbsolute); // 输出: false
```

#### **2.10 `path.relative(from, to)`**
获取从 `from` 路径到 `to` 路径的相对路径。

```javascript
const relativePath = path.relative('/foo/bar', '/foo/baz/qux');
console.log(relativePath); // 输出: ../baz/qux
```

---

### **3. 跨平台路径处理**
`path` 模块提供了 `path.sep` 和 `path.delimiter` 来处理跨平台路径问题。

#### **3.1 `path.sep`**
返回当前操作系统的路径分隔符。
- Windows: `\`
- POSIX (Linux/Mac): `/`

```javascript
console.log(path.sep); // 在 Windows 上输出: \，在 POSIX 上输出: /
```

#### **3.2 `path.delimiter`**
返回当前操作系统的路径分隔符。
- Windows: `;`
- POSIX (Linux/Mac): `:`

```javascript
console.log(path.delimiter); // 在 Windows 上输出: ;，在 POSIX 上输出: :
```

---

### **4. 示例：构建跨平台路径**
```javascript
const filePath = path.join(__dirname, 'files', 'data.txt');
console.log(filePath); // 输出: /当前目录/files/data.txt
```

---

### **5. 总结**
- `path` 模块是 Node.js 中处理路径的核心工具。
- 常用方法包括 `path.join()`、`path.resolve()`、`path.basename()`、`path.dirname()`、`path.extname()` 等。
- `path` 模块支持跨平台路径处理，适用于 Windows 和 POSIX 系统。
- 使用 `path` 模块可以简化路径操作，避免手动拼接和解析路径。

掌握 `path` 模块的使用，可以更高效地处理文件和目录路径，提升 Node.js 开发的效率和代码质量。
