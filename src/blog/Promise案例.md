---
title: Promise案例
category: 
  - Promise
  - 异步
date: 2023-9-31 9:58:00
article: true
timeline: true
---
Promis案例：异步嵌套
<!-- more -->

### 案例1

要点：异步嵌套

```js

Promise.resolve().then(function () {
  console.log("1");
  setTimeout(function () {
    console.log("2");
  }, 0);
});
setTimeout(() => {
  console.log("3");
  setTimeout(function () {
    console.log("4");
  }, 0);
}, 0);
console.log('hi')
// hi
// 1
// 3
// 2
// 4

```

### 案例2

要点：微任务优先

```js
Promise.resolve().then(function () {
  console.log("1");
  setTimeout(function () {
    console.log("2");
  }, 0);
});

setTimeout(() => {
  console.log("3");
  Promise.resolve().then(function () {
    console.log("4");//微任务
  });
}, 0);
console.log('hi')
// hi
// 1
// 3
// 4
// 2
```

### 案例3

要点：promise嵌套状态依赖

```js
const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('err')
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(p1)
    },1000)
})

p2.then(res=>console.log(res))
  .catch(err=>console.log(err))//err
```
