---
title: 算术运算符
article: false
order: 1
---

在 SQL 中，算术运算符用于对数值类型的数据进行数学运算。以下是 SQL 中常用的算术运算符及其说明：

---

### 1. **算术运算符列表**

| 运算符       | 描述         | 示例                   |
| ------------ | ------------ | ---------------------- |
| `+`          | 加法         | `a + b`                |
| `-`          | 减法         | `a - b`                |
| `*`          | 乘法         | `a * b`                |
| `/`          | 除法         | `a / b`                |
| `%` 或 `MOD` | 取模（取余） | `a % b` 或 `MOD(a, b)` |
| `DIV`        | 整数除法     | `a DIV b`              |

---

### 2. **运算符详解**

#### 2.1 **加法 (`+`)**
用于计算两个数的和。

#### 示例：
```sql
select 10 + 5; -- 结果为 15
```

#### 2.2 **减法 (`-`)**
用于计算两个数的差。

#### 示例：
```sql
select 10 - 5; -- 结果为 5
```

#### 2.3 **乘法 (`*`)**
用于计算两个数的积。

#### 示例：
```sql
select 10 * 5; -- 结果为 50
```

#### 2.4 **除法 (`/`)**
用于计算两个数的商。

#### 示例：
```sql
select 10 / 5; -- 结果为 2
select 10 / 3; -- 结果为 3.3333
```

#### 2.5 **取模 (`%` 或 `MOD`)**
用于计算两个数相除后的余数。

#### 示例：
```sql
select 10 % 3; -- 结果为 1
select mod(10, 3); -- 结果为 1
```

#### 2.6 **整数除法 (`DIV`)**
用于计算两个数相除后的整数部分。

#### 示例：
```sql
select 10 div 3; -- 结果为 3
```

---

### 3. **运算符优先级**
SQL 中算术运算符的优先级从高到低如下：
1. `*`、`/`、`%`、`DIV`
2. `+`、`-`

可以使用括号 `()` 来改变运算顺序。

#### 示例：
```sql
select (10 + 5) * 2; -- 结果为 30
select 10 + 5 * 2; -- 结果为 20
```

---

### 4. **在查询中使用算术运算符**
算术运算符可以直接用于查询中，对表中的数据进行计算。

#### 示例：
假设有一个 `products` 表，包含 `price` 和 `quantity` 列：
```sql
create table products (
    id int auto_increment primary key,
    name varchar(50),
    price decimal(10, 2),
    quantity int
);

insert into products (name, price, quantity)
values 
    ('Apple', 1.50, 10),
    ('Banana', 0.80, 20),
    ('Orange', 1.20, 15);
```

#### 查询总价（`price * quantity`）：
```sql
select name, price, quantity, price * quantity as total_price
from products;
```

#### 结果：
| name   | price | quantity | total_price |
| ------ | ----- | -------- | ----------- |
| Apple  | 1.50  | 10       | 15.00       |
| Banana | 0.80  | 20       | 16.00       |
| Orange | 1.20  | 15       | 18.00       |

---

### 5. **注意事项**
- **数据类型**：确保参与运算的数据类型是数值类型（如 `INT`、`FLOAT`、`DECIMAL` 等）。
- **除零错误**：如果除数为 0，会导致错误。可以使用 `NULLIF` 函数避免：
  ```sql
  select 10 / nullif(0, 0); -- 结果为 NULL
  ```
- **精度问题**：浮点数运算可能存在精度问题，建议对精度要求高的数据使用 `DECIMAL` 类型。

---

### 6. **综合示例**
以下是一个综合示例，展示如何在查询中使用算术运算符：
```sql
select 
    name,
    price,
    quantity,
    price * quantity as total_price,
    (price * quantity) * 0.9 as discounted_price
from products
where price * quantity > 15;
```

#### 结果：
| name   | price | quantity | total_price | discounted_price |
| ------ | ----- | -------- | ----------- | ---------------- |
| Banana | 0.80  | 20       | 16.00       | 14.40            |
| Orange | 1.20  | 15       | 18.00       | 16.20            |

---

通过掌握 SQL 中的算术运算符，您可以对数据进行灵活的计算和处理，满足各种业务需求。
