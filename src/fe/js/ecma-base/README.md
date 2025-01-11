---
title: ESMAScript
article: false
index: false
dir:
  order: 1
  collapsible: false
---

arguments是一个伪数组：有数组的length，但是没有pop等方法，可以通过 解构赋值 转换为数组

```js
function fun()
{
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[2]);
    alert(arguments[3]);
    alert("无参函数被调用");
}
fun(1,2,3,4);
```

