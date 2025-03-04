---
title: 创建、调用函数
article: false
order: 2
---

在 MySQL 中，**函数**是一段可重用的代码，用于执行特定任务并返回一个值。函数可以是内置的（如 `SUM()`、`COUNT()`）或用户自定义的。以下是创建和调用用户自定义函数的详细说明和示例：

---

## **1. 创建函数**

### **语法**
```sql
create function function_name (parameter1 data_type, parameter2 data_type, ...)
returns return_data_type
deterministic
begin
    -- 函数逻辑
    return value;
end;
```

### **参数说明**
- **`function_name`**: 函数的名称。
- **`parameter1, parameter2, ...`**: 函数的参数列表。
- **`return_data_type`**: 函数的返回值类型。
- **`deterministic`**: 指定函数是否是确定性的（即相同的输入是否总是返回相同的结果）。
- **`begin ... end`**: 函数的主体逻辑。

### **示例**
创建一个函数，计算两个数的和：
```sql
create function add_numbers (a int, b int)
returns int
deterministic
begin
    return a + b;
end;
```

---

## **2. 调用函数**

### **语法**
```sql
select function_name (parameter1, parameter2, ...);
```

### **示例**
调用 `add_numbers` 函数：
```sql
select add_numbers(10, 20);  -- 返回 30
```

---

## **3. 删除函数**

### **语法**
```sql
drop function if exists function_name;
```

### **示例**
删除 `add_numbers` 函数：
```sql
drop function if exists add_numbers;
```

---

## **4. 函数的高级用法**

### **(1) 使用变量**
在函数中可以使用局部变量来存储中间结果。

**示例**:
```sql
create function calculate_discount (price decimal(10, 2), discount_rate decimal(5, 2))
returns decimal(10, 2)
deterministic
begin
    declare discounted_price decimal(10, 2);
    set discounted_price = price * (1 - discount_rate);
    return discounted_price;
end;
```

**调用**:
```sql
select calculate_discount(100.00, 0.10);  -- 返回 90.00
```

---

### **(2) 使用条件语句**
在函数中可以使用 `IF`、`CASE` 等条件语句。

**示例**:
```sql
create function get_grade (score int)
returns varchar(10)
deterministic
begin
    declare grade varchar(10);
    if score >= 90 then
        set grade = 'A';
    elseif score >= 80 then
        set grade = 'B';
    elseif score >= 70 then
        set grade = 'C';
    else
        set grade = 'F';
    end if;
    return grade;
end;
```

**调用**:
```sql
select get_grade(85);  -- 返回 'B'
```

---

### **(3) 使用循环语句**
在函数中可以使用 `LOOP`、`WHILE` 等循环语句。

**示例**:
```sql
create function factorial (n int)
returns int
deterministic
begin
    declare result int default 1;
    declare i int default 1;
    while i <= n do
        set result = result * i;
        set i = i + 1;
    end while;
    return result;
end;
```

**调用**:
```sql
select factorial(5);  -- 返回 120
```

---

## **5. 注意事项**
1. **函数命名**: 函数名不能与 MySQL 内置函数或关键字冲突。
2. **返回值**: 函数必须返回一个值，且返回值类型与 `RETURNS` 子句指定的类型一致。
3. **确定性**: 如果函数是确定性的，必须指定 `DETERMINISTIC`，否则可以省略。
4. **权限**: 创建函数需要 `CREATE ROUTINE` 权限。

---

通过创建和调用函数，可以将复杂的逻辑封装起来，提高代码的重用性和可维护性！
