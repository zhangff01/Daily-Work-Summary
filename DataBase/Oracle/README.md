# 工作中遇到的oracle数据库总结
# 1.oracle数据库不支持

  insert into tablename (字段1,字段2) values ((值1,值2),(值1,值2)) 这种批量插入    --（oracle,sql server不支持,mysql支持）
  
  可以考虑insert into tablename (字段1,字段2) (select 值1,值2 from dual) union all (select 值1,值2 from dual)...这种用法
  
# 2.带有小数的字段转换成字符串小数点后为零时被截取的问题
  如16.00,to_char之后变成16,使用to_char(字段,'fm999990.00')格式化,fm99990.00代表保留两位小数
# 3.常用的日期格式
  to_char(字段,'yyyy-mm-dd HH24:mi:ss')
# 4.判断字段数值大于零,等于零,小于零,sign(字段)
  sign(字段)函数有三种结果:1是大于零,0是等于零,-1是小于零
# 5.decode()函数用法
  decode(字段,条件1,结果1,条件2,结果2,其他条件时的结果)
  
  例:decode(sign(product_num),'-1',0,product_num):如果product_num的数量小于0,则字段值赋为0,大于等于0的不作处理
# 6.sysdate,sys_guid():插入系统时间,自动生成uuid
# 7.效率比较高的sql分页
 
## 不带排序:

```sql
  select temp.* from (select rownum as rowno,tb.* from tablename tb where rowno<=10*K) temp where temp.rowno>10*(K-1)
```
## 带有排序的:
```sql
    select temp2.* from 
      (select temp.* from 
        (select rownum as rowno,tb.* from 
          tablename tb order by tb.sort asc|desc
        ) temp where temp.rowno<=10*K
      ) temp2 where temp2.rowno>10*(K-1)
```
# 8.connect by start with 从下往上的树形结查询
```sql
    select ps.sortid, ps.sortname
      from product_sort ps
connect by prior parentid = sortid
start with sortid = '125'
```
  公式:

```sql
    select * from table
    connect by prior 父节点=子节点
    start with 子节点=子节点值
```
