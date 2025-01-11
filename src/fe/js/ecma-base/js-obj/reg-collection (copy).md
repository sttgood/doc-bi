---
title: javascript对象
article: false
order: 2
---

# 二、JavaScript对象

 

## （一）对象基础

### 1. 创建对象的三种方式

#### （1）字面量创建对象

```js
const obj = {
    name: 'stt'
}
```

#### （2）new Object

无参构造

```js
const obj = new Object()
obj.uname = stt'
```

有参构造

```js
 const obj = new Object({ uname: stt})
```



#### （3）构造函数

ES5构造函数。

JS中的构造函数和普通函数的区别：构造函数首字母大写

 

```js
function Goods(name, price, count) {

    this.name = name
    this.price = price
    this.count = count
    this.sayhi = function () { }

}

const mi = new Goods('小米', 1999, 20)
const hw = new Goods('华为', 3999, 59)
console.log(mi === hw)

// 静态成员 ：构造函数的属性或方法

Goods.num = 10
console.log(Goods.num)
Goods.sayhi = function () { }
```

**new****创建对象过程：**

1.创建空对象{}

2.this执行对象

3.执行构造函数代码，通过this添加属性

4.返回新对象

**实例成员：**通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员（实例属性和实例方法）

由于构造函数创建的是不同的对象，彼此独立。创建对象后**单独**给某个实例添加的属性和方法称为实例成员

**静态成员：**构造函数的属性和方法被称为静态成员（静态属性和静态方法）

### 2.类和构造函数

ES5中的构造函数和ES6中的类。

​                               

区别：

1.class不能提升

  2.class只能通过new实例。构造函数不new只是没有返回值。

  3.class采用严格模式

  4.类原型上的属性不能遍历。

  5.class内部不能修改类的名称。

### 3.基本包装类型

对基本数据类型的包装

在JavaScript中最主要的数据类型有6种：

**基本数据类型**：字符串、数值、布尔、undefined、null

**引用类型**：对象

其实字符串、数值、布尔、等基本类型也都有专门的构造函数，这些我们称为包装类型。

JS中几乎所有的数据都可以基于构成函数创建。

常用：Object Array String Number

### 4.Object静态方法

| **方法**                 |      | **描述**           |
| ------------------------ | ---- | ------------------ |
| `Object.keys(o)`         |      | 获得所有的属性名   |
| `Object.values(o)`       |      | 获得所有的属性值   |
| `Object. assign(oo,  o)` |      | 对象的拷贝集和赋值 |

 

```js
const o = { uname: stt, age: 18 }

// 1.获得所有的属性名
console.log(Object.keys(o))  //返回数组['uname', 'age']

// 2. 获得所有的属性值
console.log(Object.values(o))  //  ['pink', 18]

// 3. 对象的拷贝
// const oo = {}
// Object.assign(oo, o)
// console.log(oo)

给对象追加属性
Object.assign(o, { gender: '女' })
console.log(o)
```



## （二）基础对象Array

### 1.数组定义

javaScript中[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)对象用于定义数组。

js数组的**长度可变，类型可变**。

Array可省略new，会自动补上：它就是在Array内置函数中判断如果this的的原型不是Array 则用new重新调用一下

**定义**

```js
var变量名=new Array(元素列表)；/方式一
var arr = new Array(1,2,3,4);
var变量名=[元素列表]：/方式二
var arr=[1,2,3,4]; js中[]，java中简化用{}
```

**访问**

```js
arr[索引]=值；
arr[10]="hello";
```

 

```js
//push 将元素添加到数组尾部
arr.push(7,8,9);
arr.push(10)
console.log(arr)

//splice 删除元素
arr.splice(3,2)//从索引3(0开始)删除，删除2个元素 
```

array作为函数参数最好写成：`function myFunction(arr=[]){}` 形式。



[**unshift,shift**,…,…,push,pop]

```js
//1.数组定义

let arr=[10,20, 30]
let arr2=['刘德华','张学友','黎明']
let arr3=new Array(100,200,300) /* 麻烦不推荐 */



console.log(arr2)
console.log(arr2[0])

// 2.length属性
console.log(arr2.length)

//3.增
arr.push(50) /* 添加到末尾  返回数组长度*/

arr.push(60,70,80)

arr.unshift(500) /* 同push，插入开头，返回数组长度 */

arr.unshift(600,700,800)

//4.删
arr.pop()  /* 删除最后一个元素，返回删除的元素 */

arr.shift() /* 删除第一个元素，返回删除的元素 */  

arr.splice(0,arr.length)  /* splice(start,deleteCount) 从start(默认0)开始删除deleteCount(默认arr.length)个元素 常用*/

//5.查 通过下标访问

//6.改 直接赋值

arr[1]=100;
```



### 2.Array常用方法

| **静态方法**  | **说明**                                                     |
| ------------- | ------------------------------------------------------------ |
| **forEach()** | 遍历数组不返回新数组，经常用于查找遍历数组元素               |
| **map ()**    | 遍历迭代数组,返回**新数组**，                                |
| **filter ()** | 不改变原数组，过滤数组返回**新数组**，返回的是筛选满足条件的数组元素 |
| **Reduce()**  | 累计器,返回累计处理的结果，经常用于求和等                    |

#### foreach()

语法：`forEach(callbackFn)`

callbackFn参数：

- `element`：数组中正在处理的当前元素。
- `index`：数组中正在处理的当前元素的索引。
- `array`：调用了 `forEach() 的数组本身

作用：历数组不返回数组，经常用于查找遍历数组元素

 

```js
var arr=[1,2,3,4];

// for循环遍历数组的所有元素
for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

//foreach  只遍历数组中有值的元素。

//数组.forEach(function(当前数组元素，索引号)) 

当前数组元素：必须

索引号：可选

//将遍历的数组元素给形参e。每遍历一次，调用一次function
arr.forEach(function(e){
    console.log(e)
});

//ES6 箭头函数 简化函数定义
arr.forEach((e)=>{
    console.log(e)
});

foreach()和map的区别。forEach只遍历不返回
#### map()
```

语法：`arr.map(function (item, index){})`

作用：可以**遍历**数组处理数据，并且返回**新的数组**

```js
const arr = ['red', 'blue', 'green']

// map 方法也是遍历  处理数据 可以返回一个数组
const newArr = arr.map(function (item, index) {
    console.log(item)  // 数组元素  'red'
    console.log(index)  // 下标
    return item + '颜色'
})

console.log(newArr)//['red颜色', 'blue颜色', 'green颜色']
```



#### filter()

语法：`filter(callbackFn)`

作用：不改变原数组，过滤数组返回**新数组**，返回的是筛选满足条件的数组元素

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = ***words\***.filter(word => ***word\***.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```



#### reduce()

[reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)**作用**：计算数组

**语法**：arr.reduce(function(累计值, 当前元素){}, 起始值)

有初始值

arr.reduce(function (accumulator, currentValue) {

   return accumulator + currentValue

}, 0)

无初始值

  arr.reduce(function (accumulator, currentValue) { 

   return accumulator + currentValue

  })

  const arr = [1, 2, 3]

  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(re)

accumulator：上一次调用 callbackFn 的结果。。

currentValue：当前元素的值。

**有initValue**

accumulator：initialValue

currentValue：array[0]

**无initValue:**

accumulator：array[0]

currentValue：array[1]

### 3.Array其他方法

| **实例方法**         | **说明**                                                     |
| -------------------- | ------------------------------------------------------------ |
| **join()**           | 数组元素拼接为**字符串**，返回字符串（重点）                 |
| **find(callbackFn)** | 查找元素，返回符合测试条件的**第一个数**组元素值，如果没有符合条件的则返回undefined(重点) |
| **every()**          | 检测数组**所有元素**是否都符合指定条件，如果所有元素都通过检测返回true,否则返回false(重点 |
| **some()**           | 检测数组中的元素是否满足指定条件如果数组中有元素满足条件返回true,否则返回flse |
| **concat()**         | 合并两个数组，返回生成新数组                                 |
| **sort()**           | 对原数组单元值排序                                           |
| **splice()**         | 删除或替换原数组单元                                         |
| **reverse()**        | 反转数组                                                     |
| **findInde****×()**  | 查找元素的索引值                                             |

 

#### join()

把整个数组转换为**一个字符串**。

 const arr = ['red', 'blue', 'green']

  // 把数组元素转换为字符串

  console.log(arr.join(',')) //red,blue,green

 

#### find()

find返回一个元素，不会遍历整个数组。

filter返回一个新数组，会遍历整个数组。

//1.查找字符串

  const arr = ['stt', 'good', 'boy']

  const result = arr.find(function (item) {

   return item === 'boy'

  })

  console.log(result)//boy

  const arr2 = [

   {

​    name: '小米',

​    price: 1999

   },

   {

​    name: '华为',

​    price: 3999

   },

  ]

  //2.查找对象

  //包含name===华为的对象

  const huawei = arr2.find(function (item) {

   return item.name === '华为'

  })

  console.log(huawei)//{name: '华为',price: 3999}

  // find 箭头函数优化

  const mi = arr2.find(item => item.name === '小米')

console.log(mi)//{name: '小米', price: 1999}

#### every()

  //every 每一个是否都符合条件，如果都符合返回 true ，否则返回false

  const arr1 = [10, 20, 30]

  const flag = arr1.every(item => item >= 20)

  console.log(flag)//false

### 4.展开运算符

作用：用于展开数组或者对象

语法：…

展开运算符**不会改变原数组**

 

 const arr1 = [1, 2, 3]

  // 展开运算符 可以展开数组

  // console.log(...arr)

展开运算符**经典使用场景**：求最大值，合并数组

console.log(Math.max(1, 2, 3))  //...arr1 === 1,2,3 暂开的其实带**逗号**。

 

  // 1 求数组最大值 

  console.log(Math.max(...arr1)) // 3

  console.log(Math.min(...arr1)) // 1

  // 2. 合并数组

  const arr2 = [3, 4, 5]

  const arr = [...arr1, ...arr2]

  console.log(arr)

也可以用来展开对象

## （三）基础对象String

### 1.String定义

从[字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)字面量将字符串创建为原始值或使用 构造函数。

const string1 = "A string primitive";

const string2 = "Also a string primitive";

const string3 = `Yet another string primitive`;

const string4 = new String("A String object");

 

### 2.String常用方法

| **实例方法**                                        | **说明**                                                     |
| --------------------------------------------------- | ------------------------------------------------------------ |
| length                                              | 字符串长度                                                   |
| sp1it('分隔符')                                     | 用来将字符串拆分成数组（重点）                               |
| substring(需要截取的第一个字符的索引[，结束的索号]) | 用于字符串截取重点 （重点）                                  |
| startsWith(检测字符串[,检测位置索引号])             | 检测是否以某字符开头                                         |
| includes(搜索的字符串[,检测位置索引号])             | 判断一个字符串是否包含在另一个字符串中。根据情况返回true或false(重点) |
| toUpperCase()                                       | 用于将字母转换成大写                                         |
| toLowerCase()                                       | 用于将就转换成小写                                           |
| indexof()                                           | 检测是否包含某字符                                           |
| endsWith()                                          | 检测是否以某字符结尾                                         |
| rep1ace()                                           | 用于替换字符串，支持正则匹配                                 |
| Match()                                             | 用于查找字符串，支持正则匹配                                 |

 

 //创建字符串对象

 var str0 = new String("Hello String");

 var str = "  Hello String   ";

 console.log(str);

 //length  字符串长度

 console.log(str.length);

 //charAt  类似[]

 console.log(str.charAt(4));

 //indexOf  返回字符串起始下标，0开始

 console.log(str.indexOf("lo"));

 //trim  去除空格

 var s = str.trim();

 console.log(s);

 //substring(start,end) --- 开始索引, 结束索引 (含头不含尾)[)

 console.log(s.substring(0,5));

 

#### split()

把字符串 转换为 数组  和 join() 相反

  const str = 'stt,good'

  const arr = str.split(',')

  console.log(arr)//['stt', 'good']

  const str1 = '2022-4-8'

  const arr1 = str1.split('-')

  console.log(arr1)// ['2022', '4', '8']

#### substring()

#### startsWith()

#### includes()

作用 ：字符串截取，返回**[)**。带头不带尾

语法：str.substring(indexStart[, indexEnd])

如果省略 结束的索引号，默认取到最后

  const str2 = '今天又要做核酸了'

  console.log(str2.substring(5, 7))//核酸

  // 3. startsWith 判断是不是以某个字符开头

  const str3 = 'sttgood'

  console.log(str3.startsWith('stt'))//true

  // 4. includes 判断某个字符是不是包含在一个字符串里面

  const str4 = '我是sttgood'

  console.log(str4.includes('stt')) // true

#### replace()

作用：替换字符串

语法：字符串.replace(/正则表达式/,'替换的文本') 也可使用普通字符替换

 

const str='我学java'

const newStr=str.replace(/java/,'javascript')

console.log(newStr)// 我学javascript

 

## （四）日期对象Date

### 1.实例化

[Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)：用来表示时间的对象

作用：可以得到当前系统时间

 

//1.得到当前时间

 const date=new Date()

 console.log(date)//Tue Jun 20 2023 22:19:24 GMT+0800 (中国标准时间)

 //2.得到指定时间

 const date1=new Date('2022-5-1 08:30:00')

 console.log(date1)//Sun May 01 2023 08:30:00 GMT+0800 (中国标准时间)

 

### 2.日期格式

| **方法**      | **作用**           | **说明**             |
| ------------- | ------------------ | -------------------- |
| getFullYear() | 获得年份           | 获取四位年份         |
| getMonth()    | 获得月份           | 取值为0~11           |
| getDate()     | 获取月份中的每一天 | 不同月份取值也不相同 |
| getDay()      | 获取星期           | 取值为0~6            |
| getHours()    | 获取小时           | 取值为0~23           |
| getMinutes()  | 获取分钟           | 取值为059            |
| getSeconds()  | 获取秒             | 取值为0~59           |

js中的日期格式通过**魔法字符串拼接**的方式格式化。

 

div {

   width: 300px;

   height: 40px;

   border: 1px solid pink;

   text-align: center;

   line-height: 40px;

  }

 </style>

</head>

<body>

  <div></div>

  <script>

  const div = document.querySelector('div')

  function getMyDate() {

   const date = new Date()

   let h = date.getHours()

   let m = date.getMinutes()

   let s = date.getSeconds()

   h = h < 10 ? '0' + h : h

   m = m < 10 ? '0' + m : m

   s = s < 10 ? '0' + s : s

   return `今天是: ${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}号 ${h}:${m}:${s}`

  }

  div.innerHTML = getMyDate() 定时器隔1s,才开始调用。刚开始没内容，

  setInterval(function () {

   div.innerHTML = getMyDate()

  }, 1000)

 

 

yyyy/MM/dd HH:mm:ss

date.**tolocalString**()

**toLocaleDateString**()

date.**toLocaleTimeString**()

style>

  div {

   width: 300px;

   height: 40px;

   border: 1px solid pink;

   text-align: center;

   line-height: 40px;

  }

 </style>

</head>

<body>

  <div></div>

  <script>

  const div = document.querySelector('div')

  // 得到日期对象

  const date = new Date()

  div.innerHTML = date.toLocaleString()  // 2022/4/1 09:41:21

  setInterval(function () {

   const date = new Date()

   div.innerHTML = date.toLocaleString()  // 2022/4/1 09:41:21

  }, 1000)

  // div.innerHTML = date.toLocaleDateString()  // 2022/4/1

  // div.innerHTML = date.toLocaleTimeString()  // 09:41:21

 </script>

</body>

### 3.时间戳

使用场景：如果计算倒计时效果，前面方法无法直接计算，需要借助于时间戳完成

什么是时间戳：

是指1970年01月01日00时00分00秒起至现在的毫秒数，它是一种特殊的计量时间的方式

算法：

将来的时间戳-现在的时间戳=剩余时间毫秒数

剩余时间毫秒数转换为剩余时间的年月日时分秒就是倒计时时间

**获取时间戳：**

  // 1. getTime()

  const date = new Date()

  console.log(date.getTime())//1687272746613

  // 2. +new Date()* 推荐

  console.log(+new Date())

  // 3. Date.now()

  console.log(Date.now());

getTIme()和+new Date()可以返回指定时间戳

Date.now()只能获取当前时间戳。

// 2. +new Date()

  console.log(+new Date())

  console.log('-----------------');

  console.log(+new Date('2022-4-1 18:30:00'))

  // 我要根据日期 Day()  0 ~ 6  返回的是 星期一

  const arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

  // const date = new Date()

  console.log(arr[new Date().getDay()])

 

## （五）自定义对象

   let关键字定义一个对象。

#### （1）自定义对象

 

 

 let person = {

​      name: "张三",

​      "new-age": "21",

​      eat: function () {

​        alert(" like eat cake!")

​      }

​    }

​    //1.对象.属性名

​    alert(person.name);

​    //2.对象.['属性名']  使用字符串的形式

​    alert(person['new-age']);

 

​    //添加属性

​    person.num='123456789'

​    person.eat();

​    //遍历对象 增强for 

​    for(let key in person) //key是属性名，是字符串 如'name'

​    {

​      console.log(person[key])

​    }

 

  forin不建议遍历数组，他的遍历序号是字符串。容易出问题。

 

#### （2）渲染表格

<table>

​    <caption>学生列表</caption>

​    <tr>

​      <th>序号</th>

​      <th>姓名</th>

​      <th>年龄</th>

​      <th>性别</th>

​      <th>家乡</th>

​    </tr>

​    

        <script>

​      let students = [

​        { name: '小明', age: 18, gender: '男', hometown: '河北省' },

​        { name: '小红', age: 19, gender: '女', hometown: '河南省' },        { name: '小刚', age: 17, gender: '男', hometown: '山西省' },

​      ]

​      for (let i = 0; i< students.length; i++) {

​        document.write(`

​        <tr>

​          <th>${i+1}</th>

​          <th>${students[i].name}</th>

​          <th>${students[i].age}</th>

​          <th>性别</th>

​          <th>家乡</th>

​        </tr>

​        `)

​      }

​    

​    </script>

  </table>

要点：document.write(``) 

反引号：

   1.可以隔行字符串

   2.可以占位
