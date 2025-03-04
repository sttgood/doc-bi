---
title: 分区表的类型
article: false
order: 1
---

**分区表**是将一个大表拆分成多个小表的技术，每个小表称为一个分区。分区可以提高查询性能、简化数据管理，并支持高效的数据删除和归档。MySQL 支持多种分区类型，包括 `RANGE`、`LIST`、`HASH` 和 `KEY`。以下是这些分区类型的详细说明和示例：

---

## **1. `RANGE` 分区**
### **描述**
根据列值的范围将数据分配到不同的分区。

### **特点**
- 适用于按时间范围（如日期）或数值范围（如 ID）分区的场景。
- 每个分区定义了一个范围，数据根据列值是否在范围内分配到对应的分区。

### **示例**
按年份对 `orders` 表进行分区：
```sql
create table orders (
    order_id int,
    order_date date,
    amount decimal(10, 2)
)
partition by range (year(order_date)) (
    partition p0 values less than (2020),
    partition p1 values less than (2021),
    partition p2 values less than (2022),
    partition p3 values less than (2023)
);
```

---

## **2. `LIST` 分区**
### **描述**
根据列值的离散值列表将数据分配到不同的分区。

### **特点**
- 适用于按类别（如地区、状态）分区的场景。
- 每个分区定义了一个值列表，数据根据列值是否在列表中分配到对应的分区。

### **示例**
按地区对 `customers` 表进行分区：
```sql
create table customers (
    customer_id int,
    name varchar(50),
    region varchar(50)
)
partition by list (region) (
    partition p_east values in ('New York', 'Boston'),
    partition p_west values in ('Los Angeles', 'San Francisco'),
    partition p_central values in ('Chicago', 'Dallas')
);
```

---

## **3. `HASH` 分区**
### **描述**
根据列值的哈希值将数据均匀分配到不同的分区。

### **特点**
- 适用于需要均匀分布数据的场景。
- 分区数量由用户指定，数据根据哈希函数的结果分配到对应的分区。

### **示例**
按 `customer_id` 对 `orders` 表进行哈希分区：
```sql
create table orders (
    order_id int,
    customer_id int,
    order_date date,
    amount decimal(10, 2)
)
partition by hash (customer_id)
partitions 4;
```

---

## **4. `KEY` 分区**
### **描述**
类似于 `HASH` 分区，但使用 MySQL 内置的哈希函数。

### **特点**
- 适用于需要均匀分布数据的场景。
- 分区数量由用户指定，数据根据 MySQL 内置的哈希函数分配到对应的分区。

### **示例**
按 `customer_id` 对 `orders` 表进行 KEY 分区：
```sql
create table orders (
    order_id int,
    customer_id int,
    order_date date,
    amount decimal(10, 2)
)
partition by key (customer_id)
partitions 4;
```

---

## **5. 复合分区**
### **描述**
结合两种分区类型（如 `RANGE` + `HASH`）进行分区。

### **特点**
- 适用于需要多层次分区的场景。
- 先按一种分区类型进行分区，再按另一种分区类型对每个分区进行子分区。

### **示例**
按年份和 `customer_id` 对 `orders` 表进行复合分区：
```sql
create table orders (
    order_id int,
    customer_id int,
    order_date date,
    amount decimal(10, 2)
)
partition by range (year(order_date))
subpartition by hash (customer_id)
subpartitions 4 (
    partition p0 values less than (2020),
    partition p1 values less than (2021),
    partition p2 values less than (2022),
    partition p3 values less than (2023)
);
```

---

## **6. 分区表的管理**

### **(1) 添加分区**
```sql
alter table orders
add partition (
    partition p4 values less than (2024)
);
```

### **(2) 删除分区**
```sql
alter table orders
drop partition p0;
```

### **(3) 合并分区**
```sql
alter table orders
reorganize partition p1, p2 into (
    partition p1_2 values less than (2022)
);
```

### **(4) 重建分区**
```sql
alter table orders
rebuild partition p1;
```

---

## **7. 注意事项**
1. **分区列的选择**:
   - 选择经常用于查询条件的列作为分区列。
   - 分区列的数据类型应支持分区函数。

2. **分区数量的控制**:
   - 分区数量过多会增加管理开销，建议根据实际需求选择合理的分区数量。

3. **分区表的限制**:
   - 分区表不支持外键。
   - 分区表不支持全文索引。

4. **性能优化**:
   - 分区可以提高查询性能，但需要合理设计分区策略。

---

通过合理使用分区表，可以提高数据库的性能和管理效率，特别适用于处理大数据量的场景！
