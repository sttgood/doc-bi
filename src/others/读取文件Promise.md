---
title: Promise案例
category: 
  - Promise
  - 异步
---

-   class.txt 保存  ./name.txt
-   name.txt  保存  ./scroe.txt
-   score.txt 保存  99.9 

1.普通读取文件

```js
fs.readFile('./class.txt','utf-8',(err,data)=>{
    console.log(data)
    fs.readFile(data,'utf-8',(err,data)=>{
        console.log(data)
        fs.readFile(data,'utf-8',(err,data)=>{
            console.log(data)
        })
    })
   
})
```

2.读取文件Promise版

```js
function readFile(filename){
    return new Promise((resolve,reject)=>{
       fs.readFile(filename,'utf-8',(err,data)=>{//得到name
          resolve(data)
       })
    })
}
readFile('./class.txt')
  .then(res=>readFile(res))//得到score
  .then(res=>readFile(res))//得到分数
  .then(res=>console.log(res))
```

