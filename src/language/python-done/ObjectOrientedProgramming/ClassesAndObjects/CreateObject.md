---
title: 实例化
article: false
order: 2
---

在Python中，类实例化是指通过类创建一个对象的过程。这个过程涉及到调用类的构造器（`__init__`方法），该方法用于初始化新创建对象的属性。实例化后，你将获得一个类的实例，可以访问其属性和方法。

### 实例化的步骤

1. **定义类**：首先，你需要定义一个类，这通常包含类属性和一个或多个方法，其中最重要的是`__init__`构造器方法。
2. **调用构造器**：当你想要创建一个类的实例时，你会调用该类并使用括号`()`。这实际上是在调用`__init__`方法，你可以向它传递参数以初始化对象的属性。
3. **返回对象**：`__init__`方法不返回任何值（或者更确切地说，它返回`None`），但Python会自动将新创建的对象赋值给你指定的变量。

### 示例

下面是一个简单的例子，展示了类的定义和实例化过程：

```python
# 定义类
class Car:
    # 类属性（所有实例共享，但通常我们不在这里定义实例特有的属性）
    manufacturer = "Unknown"
 
    # 构造器方法
    def __init__(self, model, year, color):
        # 实例属性（每个实例都有自己的副本）
        self.model = model
        self.year = year
        self.color = color
 
    # 实例方法
    def describe(self):
        return f"This is a {self.year} {self.color} {self.model} made by {self.manufacturer}."
 
# 实例化对象
my_car = Car("Toyota", 2020, "Red")
your_car = Car("Honda", 2019, "Blue")
 
# 访问实例属性
print(my_car.model)  # 输出: Toyota
print(your_car.year) # 输出: 2019
 
# 调用实例方法
print(my_car.describe())  # 输出: This is a 2020 Red Toyota made by Unknown.
 
# 注意：类属性manufacturer在所有实例之间共享
# 但通常，我们会在构造器中为每个实例设置特定的属性
# 而不是依赖于类属性（除非这是你的意图）
```

在这个例子中：

- 我们定义了一个名为`Car`的类，它有一个类属性`manufacturer`和三个实例属性`model`、`year`、`color`。
- 我们通过调用`Car`类并传递必要的参数来创建了两个`Car`对象：`my_car`和`your_car`。
- 我们访问了这些对象的实例属性，并调用了它们的`describe`方法。

### 注意事项

- 每次你调用类并传递参数时，都会创建一个新的实例。
- 实例属性是每个对象特有的，而类属性则是由所有实例共享的（尽管在上面的例子中，我们可能不希望`manufacturer`是一个类属性，因为它通常应该是特定于每个模型的）。
- 你可以通过点（`.`）操作符来访问实例的属性和方法。