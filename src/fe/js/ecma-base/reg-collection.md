---
title: 1
article: false
order: 1
---
## 数据类型

基本数据类型

| 类型      | **案例**                                                     |
| --------- | ------------------------------------------------------------ |
| number    | js是弱数据类型语言数字。（正数，负数，小数，整数，NaN(not a number)）统成number |
| string    | 单引号、双引号 反引号。 推荐使用单引号。字符串拼接：`+`或者`反引号`。例如document.write(\`$我今年{age}岁了\`) |
| boolean   | true/false                                                   |
| null      | 声明已初始化，但为空                                         |
| undefined | 声明的变量**未初始化时**。                                   |

```js
类型查看变，量名为name：
console.log(typeof name); 
typeof(name);
```

引用数据类型

​	只有一种引用数据类型object，即对象

### 1.原生对象

#### （1）原始值和包装类

| **原始值**  | **包装类** |
| ----------- | ---------- |
| **number**  | Number     |
| **string**  | String     |
| **boolean** | Boolean    |

通过包装类调用属性或者方法：

1. 创建 类的一个实例
2. 在实例上调用指定的方法
3. 销毁这个实例

**调用属性：**

```js
var s1='abc'

s1.color='red'//触发构造函数，color挂载到临时对象中。

console.log(s1.color)//undefined

 

var s2=new String('abc')

s2.color='green'

console.log(s2.color)//green

 

var s3=String('abc')

s3.color='blue'

console.log(s3.color)//undefined

 

console.log(s1===s2)//false

console.log(s1===s3)//true
```

 

**调用方法：** 

```js
var str= "stt"
var s=str.charAt(0)
console.log(s)

内部
var _str=new String('stt')
var s=_str.charAt(0)
_str=null
```

#### （2）引用值

Object

#### （3）undefined PK null

undefined：原始值的初始值，未定义。

场景：

   1.已声明未赋值的变量

   2.访问对象不存在的属性

   3.函数没有返回值的情况

   4.函数参数没有传入

```js
console.log(String(undefined))//undefined
console.log(Boolean(undefined))//false
console.log(Number(undefined))//NaN

null：对象的初始值，空对象的引用。  
console.log(String(null))//null
console.log(Boolean(null))//false
console.log(Number(null))//0
```



#### （3）构造函数

1.   Object
2.   Function
3.   Array
4.   Date
5.   Error
6.   RegExp

#### （4）其他对象

1.   Math
2.   Json
3.   Arguments
4.   Global：全局对象根据宿主对象不同而不同：浏览器环境是window对象，node环境是Global对象

### 2.宿主对象

#### 隐式转换

**常用：**

  `+`（拼接）以外的运算符如-*/等会把得到的数据转为数字类型。‘10’-‘1’

  `+`‘234’:`正号123`，会把字符串隐式转为数字。

####  显示转换

**其他类型转Number****：

```js
Number()
ParseInt()
parseInt("20"); //会转为字面的值 一般用parseInt
parseInt("30AABBCC"); //会转为 30后面不转换

parseInt("abc")//转为NaN
parseInt("abc123")//转为NaN

parseInt(true)//转为1
```

NaN转为数字还是NaN

NaN和数字操作结果是NaN

**其他类型—>boolean**：

数字-->boolean: 0会转为**false**，其他数字转为true

字符转-->boolean: ""空字符/null/undefined 转为**false**其他类型转为true,一般用于字符串判空

```js
Boolean(0)//转为false
```

 

### 2.变量和常量

1. var声明变量，类似**全局变量** ，没有块作用域，可以重复定义。deprecated
2. ECMAScript新增了let定义变量，**局部变量**。不能重复定义。
3. 变量只能用$、字母、数字、下划线且数字不能开头。
4. 变量严格区分
5. ECMAScript新增了const关键字定义常量。 必须初始化。且不能修改

**简单数据**类型用**let**，复杂数据类（数组和对象）型建议用const（修饰地址）

### 3.输入输出

```js
window.alert("Hello JS"); //弹出框 window可省略
document.write("Hello JS"); //写入HTML的body中  如果是标签也会被解析
console.log("Hello JS"); //浏览器控制台
prompt('请输入年龄：');//prompt和表单获得数据默认字符串类型
```

alert和prompt会跳过页面渲染，先被执行。

## （二）运算符

| **优先级** | **运算符** | **顺序**               |
| ---------- | ---------- | ---------------------- |
| **1**      | 小括号     | `()`                   |
| **2**      | 一元运算符 | `++` `--` `!`          |
| **3**      | 算数运算符 | 先`*/`%后`+-`          |
| **4**      | 关系运算符 | `>` `>=` `<`  `<=`     |
| **5**      | 相等运算符 | `==` `!=` `===`  `!==` |
| **6**      | 逻辑运算符 | 先`&&`后`||`           |
| **7**      | 赋值运算符 | `=`                    |
| **8**      | 逗号运算符 | `，`                   |

 

算术运算符：`+`，`-`，`*`，`/`，`%`，`++`，`--`

赋值运算符：`=`，`+=`，`-=`，`*=`，`/=`，`%=`

比较运算符：`>`，`<`，`>=`，`<=`，!=`，`!==`，`==`，`===`

逻辑运算符：`&&`，`‖`，`！`

三元运算符：`条件表达式？true value：false value`

 

- ==：比较 20=="20"(true)。会先进行类型转换，之后再比较。
-  ===：不会类型转换，类型不一样直接false，一样比较。开发中强烈建议。
-  js也会发生逻辑中断。
-  **?.** ：
- let nestedProp = obj.first?.second;

可选链运算符，通过使用 ?. 运算符取代 . 运算符，JavaScript 会在尝试访问 obj.first.second 之前，先隐式地检查并确定 obj.first 既不是 null 也不是 undefined。如果obj.first 是 null 或者 undefined，表达式将会短路计算直接返回 undefined。

l **delete :**

**delete**运算符用于删除对象的一个属性；如果该属性的值是一个对象，并且没有更多对该对象的引用，该属性所持有的对象最终会自动释放。

## （三）控制语句

表达式和语句的区别：表达式可以求值，语句不一定能求值。

顺序

选择

```js
if…else if  …else…

 switch

   switch (count){
       case 1:{
      alert("周一");
      break;
     }

     case 3:{
       alert("周三");
       break;
     }

     default:{
       alert("休息");

         }

   }
```

三元运算符：条件**？**代码1**：**代码2  适当可以替换if else。

switch一般用作等值判断(===)，不用于区间判断。

 循环

- for：建议用let定义
- while
- do…while

js同样使用break和continue。

## （四）函数

js函数的形参和返回值**不需要写类型，**没有return默认返回undefined。

js函数不允许重载

js函数调用是，传入参数不受限制，

函数名：前缀一般为动词

### 1.函数定义

#### （1）函数式声明

 语法：通过function关键字

```js
function functionName(parameters) {

  执行的代码

 }
```

 

 

```js
function fun(){//1.无参
  alert("无参函数被调用了");
}

function fun2(a,b)//2有参
{
  alert(a+b);
}

function fun3(a,b)//3有返回值
{
  var res=a+b;
  return res;
}

fun();
fun2(1,2);
alert(fun3(1,3));
```



#### （2）函数表达式

 语法：匿名函数

```js
var functionName=function(param){
  return param+1
}
```



### 2.匿名函数和立即函数

#### （1）匿名函数

 类似函数名提前

```js
// javascript不允许重载

letfun=function (){
    alert("无参");
}

let fun2=function (a,b)
{
    alert(a+b);
}

let fun3=function (a,b){
    return a+b;
}
```

 

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



#### （2）立即函数

避免全局变量污染。没有函数名。使用关键字直接调用。;

```js
(function(){})()；

( function(){}() )；
```



### 3.函数提升

函数提升：函数调用发生在函数声明之前

会把所有函数声明提升到当前作用域的最前面

  只提升函数声明，不提升函数调用

 

```
 fn()

  function fn() {

   console.log('函数提升')

}
```

 

//var fun  

```js
fun()
var fun = function () {
console.log('函数表达式')
}
```

   **函数表达式 必须先声明和赋值， 后调用 否则** 报错

​    **typeError: fun is not a function**

### 4.函数参数

函数参数有默认参数，动态参数，

#### （1）动态参数

-  函数不写参数
-  arguments 动态参数 只存在于 函数里面
-  arguments是伪数组 里面存储的是传递过来的实参
-  动态参数可以实现函数重载。

 

```js
function getSum() {
    // console.log(arguments)  [2,3,4]
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

getSum(2, 3, 4)
getSum(1, 2, 3, 4, 2, 2, 3, 4
```



#### （2）剩余参数

一个不定量的参数 表示为一个数组。类似java中的**可变参数**

…获取的剩余参数，是一个**真实数组**。

开发中建议使用剩余参数代替动态参数。function(…arr)

```js
function getSum(a, b, ...arr) {
    console.log(arr)  // 使用的时候不需要写 ...
}

getSum(2, 3)
getSum(1, 2, 3, 4, 5)
```

### 5.箭头函数

目的：ES6箭头函数的目的是更简短的函数写法并且不绑定this,箭头函数的语法比函数表达式更简洁

使用场景：箭头函数更适用于那些本来需要匿名函数的地方

```js
const fn = function () {
   console.log(123)
}
```



#### （1）箭头函数语法

```js
const fn = () => {
    console.log(123)
}

fn()

const fn = (x) => {
    console.log(x)
}

fn(1)
```



#### （2）箭头函数省略

1.一个形参的时候，可以**省略小括号**

```js
const fn = x => {
    console.log(x)
}

fn(1)
```

2.有一行代码的时候，我们可以**省略大括号**

```js
const fn = x => console.log(x)
fn(1)
```

3.一行代码的时候，可以**省略****retur**n

```js
const fn = x => x + x
console.log(fn(1))
```

4.箭头函数可以直接**返回一个对象**

（属性值）=>({属性名：属性值})

```js
const fn = (uname) => ({ uname: uname }) // 箭头函数后面的{}改为（）便于区分
console.log(fn('刘德华')) //{uname:‘刘德华’}
```

#### （3）头函数参数

箭头函数没有动态参数arguments，但是有剩余参数…args

eg:利用箭头函数来求和

  

```js
const getSum = (...arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum

}

const result = getSum(2, 3, 4)
console.log(result) // 9
```

