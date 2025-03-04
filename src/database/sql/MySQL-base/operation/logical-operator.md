---
title: 逻辑运算符
article: false
order: 3
---

在 SQL 中，逻辑运算符用于组合或修改条件表达式，以便在 `WHERE` 或 `HAVING` 子句中过滤数据。以下是 SQL 中常用的逻辑运算符及其用法：

---

## **1. 逻辑与 (`AND`)**
- **描述**: 当所有条件都为真时，返回真。
- **语法**:
  ```sql
  where condition1 and condition2;
  ```
- **示例**:
  ```sql
  select * from users where age > 18 and city = 'new york';
  ```

---

## **2. 逻辑或 (`OR`)**
- **描述**: 当至少一个条件为真时，返回真。
- **语法**:
  ```sql
  where condition1 or condition2;
  ```
- **示例**:
  ```sql
  select * from users where city = 'new york' or city = 'los angeles';
  ```

---

## **3. 逻辑非 (`NOT`)**
- **描述**: 对条件取反。
- **语法**:
  ```sql
  where not condition;
  ```
- **示例**:
  ```sql
  select * from users where not city = 'new york';
  ```

---

## **4. 逻辑异或 (`XOR`)**
- **描述**: 当且仅当其中一个条件为真时，返回真。
- **语法**:
  ```sql
  where condition1 xor condition2;
  ```
- **示例**:
  ```sql
  select * from users where age > 18 xor city = 'new york';
  ```

---

## **5. 逻辑运算符的优先级**
SQL 逻辑运算符的优先级如下（从高到低）：
1. `NOT`
2. `AND`
3. `OR`
4. `XOR`

可以使用括号 `()` 来明确优先级。

**示例**:
```sql
select * from users where (age > 18 and city = 'new york') or city = 'los angeles';
```

---

## **6. 组合使用逻辑运算符**
逻辑运算符可以组合使用，以实现复杂的条件过滤。

**示例**:
```sql
select * from users
where (city = 'new york' or city = 'los angeles')
  and age > 18
  and not status = 'inactive';
```

---

## **7. 逻辑运算符与比较运算符的结合**
逻辑运算符通常与比较运算符（如 `=`, `>`, `<`, `>=`, `<=`, `!=`, `between`, `in`, `like` 等）结合使用。

**示例**:
```sql
select * from users
where age between 18 and 30
  and (city like 'new%' or city like 'los%')
  and not status = 'inactive';
```

---

## **8. 逻辑运算符与聚合函数的结合**
逻辑运算符可以与聚合函数（如 `count`, `sum`, `avg`, `max`, `min` 等）结合使用。

**示例**:
```sql
select city, count(*) as user_count
from users
where age > 18 and status = 'active'
group by city
having count(*) > 10;
```

---

## **9. 逻辑运算符与子查询的结合**
逻辑运算符可以与子查询结合使用，以实现更复杂的查询逻辑。

**示例**:
```sql
select * from users
where age > (select avg(age) from users)
  and city in (select city from cities where country = 'usa');
```

---

## **10. 注意事项**
1. **优先级问题**: 使用括号明确优先级，避免逻辑错误。
2. **空值处理**: 逻辑运算符在处理空值（`NULL`）时可能会返回意外结果。例如：
   ```sql
   select * from users where age > 18 or age is null;
   ```
3. **性能优化**: 复杂的逻辑条件可能会影响查询性能，建议使用索引和优化查询。

---

通过灵活使用逻辑运算符，可以编写出高效且功能强大的 SQL 查询！
