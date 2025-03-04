---
title: 创建、管理分区表
article: false
order: 2
---

在 MySQL 中，分区表是一种将大表拆分为多个小表的技术，可以提高查询性能和管理效率。分区表通过将数据分布到多个物理存储单元中，减少单次查询的数据量，从而优化查询性能。以下是关于创建和管理分区表的详细说明：

---

### 1. **分区表的类型**
MySQL 支持多种分区类型，常见的包括：
- **RANGE 分区**：根据列值的范围进行分区。
- **LIST 分区**：根据列值的列表进行分区。
- **HASH 分区**：根据列值的哈希值进行分区。
- **KEY 分区**：根据列值的哈希值进行分区，类似于 HASH 分区，但支持多列。

---

### 2. **创建分区表**

#### 2.1 **RANGE 分区**
根据列值的范围进行分区。

#### 示例：
创建一个按年份分区的 `sales` 表：
```sql
create table sales (
    id int auto_increment primary key,
    sale_date date,
    amount decimal(10, 2)
)
partition by range (year(sale_date)) (
    partition p0 values less than (2020),
    partition p1 values less than (2021),
    partition p2 values less than (2022),
    partition p3 values less than (2023),
    partition p4 values less than maxvalue
);
```

#### 2.2 **LIST 分区**
根据列值的列表进行分区。

#### 示例：
创建一个按地区分区的 `customers` 表：
```sql
create table customers (
    id int auto_increment primary key,
    name varchar(50),
    region varchar(50)
)
partition by list (region) (
    partition p0 values in ('North', 'South'),
    partition p1 values in ('East', 'West')
);
```

#### 2.3 **HASH 分区**
根据列值的哈希值进行分区。

#### 示例：
创建一个按用户 ID 哈希分区的 `orders` 表：
```sql
create table orders (
    id int auto_increment primary key,
    customer_id int,
    order_date date,
    amount decimal(10, 2)
)
partition by hash (customer_id)
partitions 4;
```

#### 2.4 **KEY 分区**
根据列值的哈希值进行分区，支持多列。

#### 示例：
创建一个按用户 ID 和订单日期分区的 `orders` 表：
```sql
create table orders (
    id int auto_increment primary key,
    customer_id int,
    order_date date,
    amount decimal(10, 2)
)
partition by key (customer_id, order_date)
partitions 4;
```

---

### 3. **管理分区表**

#### 3.1 **添加分区**
为现有分区表添加新分区。

#### 示例：
为 `sales` 表添加一个 2023 年的分区：
```sql
alter table sales
add partition (
    partition p5 values less than (2024)
);
```

#### 3.2 **删除分区**
删除现有分区表中的分区。

#### 示例：
删除 `sales` 表中的 `p0` 分区：
```sql
alter table sales
drop partition p0;
```

#### 3.3 **合并分区**
将两个分区合并为一个分区。

#### 示例：
将 `sales` 表中的 `p1` 和 `p2` 分区合并：
```sql
alter table sales
reorganize partition p1, p2 into (
    partition p1_2 values less than (2022)
);
```

#### 3.4 **拆分分区**
将一个分区拆分为多个分区。

#### 示例：
将 `sales` 表中的 `p4` 分区拆分为 `p4` 和 `p5` 分区：
```sql
alter table sales
reorganize partition p4 into (
    partition p4 values less than (2023),
    partition p5 values less than (2024)
);
```

#### 3.5 **重建分区**
重建分区以优化存储。

#### 示例：
重建 `sales` 表中的 `p1` 分区：
```sql
alter table sales
rebuild partition p1;
```

#### 3.6 **优化分区**
优化分区以释放未使用的空间。

#### 示例：
优化 `sales` 表中的 `p1` 分区：
```sql
alter table sales
optimize partition p1;
```

#### 3.7 **检查分区**
检查分区的完整性。

#### 示例：
检查 `sales` 表中的 `p1` 分区：
```sql
alter table sales
check partition p1;
```

#### 3.8 **分析分区**
分析分区的统计信息。

#### 示例：
分析 `sales` 表中的 `p1` 分区：
```sql
alter table sales
analyze partition p1;
```

---

### 4. **查询分区表**

#### 4.1 **查询特定分区**
查询特定分区中的数据。

#### 示例：
查询 `sales` 表中 `p1` 分区的数据：
```sql
select * from sales partition (p1);
```

#### 4.2 **查询所有分区**
查询所有分区中的数据。

#### 示例：
查询 `sales` 表中所有分区的数据：
```sql
select * from sales;
```

---

### 5. **注意事项**
- **分区列的选择**：选择合适的分区列，确保分区策略能够有效提高查询性能。
- **分区数量**：分区数量不宜过多，否则会增加管理开销。
- **分区维护**：定期维护分区表，优化存储和查询性能。

---

### 6. **综合示例**
以下是一个综合示例，展示如何创建和管理分区表：
```sql
-- 创建分区表
create table sales (
    id int auto_increment primary key,
    sale_date date,
    amount decimal(10, 2)
)
partition by range (year(sale_date)) (
    partition p0 values less than (2020),
    partition p1 values less than (2021),
    partition p2 values less than (2022),
    partition p3 values less than (2023),
    partition p4 values less than maxvalue
);

-- 添加分区
alter table sales
add partition (
    partition p5 values less than (2024)
);

-- 删除分区
alter table sales
drop partition p0;

-- 查询特定分区
select * from sales partition (p1);

-- 查询所有分区
select * from sales;
```

---

通过掌握分区表的创建和管理，您可以有效地优化大表的查询性能和管理效率。
