---
title: 
article: false
order: 5

---

## 数据类型

引用数据类型

​ 只有一种引用数据类型object，即对象

### 1.原生对象

**调用方法：**

```js
var str= "stt"
var s=str.charAt(0)
console.log(s)
​
内部
var _str=new String('stt')
var s=_str.charAt(0)
_str=null
```

#### （3）构造函数

1. Object
2. Function
3. Array
4. Date

5. Error

6. RegExp

#### （4）其他对象

1. Math
2. Json
3. Arguments
4. Global：全局对象根据宿主对象不同而不同：浏览器环境是window对象，node环境是Global对象
