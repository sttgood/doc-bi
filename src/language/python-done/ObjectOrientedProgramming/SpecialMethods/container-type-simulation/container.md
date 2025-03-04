---
title: 容器类模拟类
article: false
order: 4
---

- **序列协议**：

  ```python
  __len__(self)          # len(obj)
  __getitem__(self, key) # obj[key]
  __setitem__(self, key, value) # obj[key] = value
  __contains__(self, item) # item in obj
  ```

- **示例**：

  ```python
  class MyList:
      def __init__(self, data):
          self.data = list(data)
      def __getitem__(self, index):
          return self.data[index]
      def __len__(self):
          return len(self.data)
      def __contains__(self, item):
          return item in self.data
  
  ml = MyList([1, 2, 3])
  print(ml[1])    # 2（调用 __getitem__）
  print(3 in ml)  # True（调用 __contains__）
  ```

- 实例

  ```python
  class MyContainer:
      def __init__(self, data):
          self.data = list(data)  # 将输入数据转换为列表以便处理
      
      # 支持索引访问
      def __getitem__(self, index):
          return self.data[index]
      
      # 支持设置索引值
      def __setitem__(self, index, value):
          self.data[index] = value
      
      # 支持删除索引值
      def __delitem__(self, index):
          del self.data[index]
      
      # 返回容器的长度
      def __len__(self):
          return len(self.data)
      
      # 实现加法操作
      def __add__(self, other):
          if isinstance(other, MyContainer):
              return MyContainer(self.data + other.data)
          elif isinstance(other, (list, tuple)):
              return MyContainer(self.data + list(other))
          return NotImplemented
      
      # 实现乘法操作
      def __mul__(self, other):
          if isinstance(other, int):
              return MyContainer(self.data * other)
          return NotImplemented
      
      # 支持成员资格检查
      def __contains__(self, item):
          return item in self.data
      
      # 返回容器的字符串表示形式
      def __str__(self):
          return f"MyContainer({self.data})"
      
      # 支持迭代
      def __iter__(self):
          return iter(self.data)
  
  # 使用示例
  container1 = MyContainer([1, 2, 3])
  container2 = MyContainer([4, 5, 6])
  
  print(container1[1])  # 访问第二个元素 输出2
  container1[1] = 10    # 修改第二个元素
  print(container1[1])  # 输出10
  
  print(len(container1))  # 输出3
  
  print(1 in container1)  # 检查成员资格 输出False
  
  combined = container1 + container2  # 连接两个MyContainer实例
  print(combined)  # 输出MyContainer([1, 10, 3, 4, 5, 6])
  
  multiplied = container1 * 2  # 重复MyContainer的内容
  print(multiplied)  # 输出MyContainer([1, 10, 3, 1, 10, 3])
  ```

  ### 解释

  - **`__getitem__`**: 允许使用索引访问对象中的元素。
  - **`__setitem__`**: 允许修改指定索引处的元素。
  - **`__delitem__`**: 支持删除指定索引处的元素。
  - **`__len__`**: 返回容器中元素的数量。
  - **`__add__`**: 定义了当使用加号(`+`)连接两个对象时的行为。
  - **`__mul__`**: 定义了当使用乘号(`*`)与整数相乘时的行为，通常用于重复容器内容。
  - **`__contains__`**: 支持`in`关键字进行成员资格检查。
  - **`__str__`**: 提供了一个可读的字符串表示形式，便于调试或日志记录。
  - **`__iter__`**: 支持迭代操作，允许对象在循环中使用或传递给需要迭代器的函数。

  通过上述代码，我们创建了一个名为`MyContainer`的类，它能够像内置的列表一样工作，包括支持索引访问、切片、长度获取、加法、乘法以及成员资格检查等功能。这展示了如何利用Python的魔术方法来扩展类的功能，使其行为更接近于内置类型。