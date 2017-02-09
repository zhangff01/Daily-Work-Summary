#日期数据类型,时间类型使用总结
datetime: 8bytes  YYYY-MM-DD HH:MM:SS  1000-01-01 00:00:00 ~ 9999-12-31 23:59:59

timestamp:4bytes  YYYY-MM-DD HH:MM:SS  1970-01-01 00:00:01 ~ 2038 

可以看到datetime的日期时间范围比较大,但是存储空间也大,timestamp虽然存储空间小,但是表示的时间范围也小.

另外,timestamp类型的列还有个特性:默认情况下,在 insert,update 数据时,timestamp列会自动以当前时间(CURRENT_TIMESTAMP)填充/更新.

"自动"的意思就是你不去管它,MySQL 会替你去处理.

一般情况下选择datetime,因为timestamp时间范围小,也比较受时区,MYSQL版本和服务器的SQL MODE的影响.
#获得当前日期时间函数
##获得当前日期+时间(date+time)函数:now()
select now() from dual;

还有current_timestamp,current_timestamp(),localtime,localtime()等同于now()的作用.(但是now()拼写简单啊)

还有一个sysdate()函数和now()类似,now()是返回基于语句的开始执行时间,而sysdate返回系统时间.
##获得当前日期(date)函数:curdate()
还有current_date,current_date()等同于curdate();
##获取当前时间(time)函数:curtime()
还有current_time,current_time()等同于curtime()
##获得当前UTC(和格林尼治标准时间(GMT)一样,即经度零度的时间)日期时间函数
utc_date(),utc_time(),utc_timestamp()
#mysql的简单语法
##表的操作
###创建表
```sql
create table tablename(
  字段 字段类型 [null,not null,primary key,unique,unsigned],...
)
```
###删除表
```sql
drop table tablename
```
###修改表名
```sql
alter table tablename rename to tablename2
```
###修改字段
```sql
alter table tablename change 原字段名 字段名 字段类型 [null,not null,primary key,unique,unsigned]
alter table tablename modify 字段名 字段类型 [null,not null,primary key,unique,unsigned]
```
###删除字段
```sql
alter table tablename drop 字段名
```
###增加字段
```sql
alter table tablename add 字段 字段类型 [null,not null,primary key,unique,unsigned]
```
##数据类型
###整形
tinyint:范围相当于byte;smallint:范围相当于short;mediumint:三个字节

int:4字节;bigint:范围相当于long. 
###浮点型
float和double,一般用float就可以了,float(x,y):x代表数字有多少位,y代表小数点后有多少位,例如:float(4,2)最大表示99.99
###字符
char和varchar,char是定长,varchar不是.

varchar存储规则:
4.0版本以下,varchar(20),指的是20字节,如果存放UTF8汉字时,只能存6个(每个汉字3字节).

5.0版本以上,varchar(20),指的是20字符,无论存放的是数字、字母还是UTF8汉字,都可以存放20个,最大大小是65532字节.
##limit的使用
```sql
....limit x,y (x代表从结果集的索引x开始,y代表记录数，即从结果集的x索引开始取y条记录)
```
##concat,concat_ws
concat(str1,str2):str1str2

concat_ws(separator,str1,str2),concat_ws(',',str1,str2):str1,str2
##字符串截取
从左开始截取字符串:left(str,length) 说明:left（被截取字段，截取长度）

从右开始截取字符串:right(str,length) 说明:right（被截取字段，截取长度）

substring(str,pos)和substring(str,pos,length) 

说明:substring(被截取字段,从第几位开始截取)  substring(被截取字段,从第几位开始截取,截取长度) 
##控制流函数
###nullif(x,y)
如果x==y,则返回null,否则返回x
###ifnull(x,y)
如果x不为空,则返回x,x为空返回y  (和oracle里面的nvl()函数是一样的)
###if(test,x,y)
如果test为真,返回x,否则返回y
###case...when
```sql
case 字段
when 条件 then result1
when 条件2 then result2
...
else default result
end
```
常常和select查询语句一起用
##索引index(主键是默认建立了索引的)
tips:对于什么时候添加B+树索引,一般的经验是如果这个字段的取值范围很大,则比较适合建立索引,比如人们的姓名;

如果字段的取值范围很小,比如人们的性别,取值范围只有男女,则不适合建立索引,

还有一种参考方法就是对字段建立索引然后通过show index from tablename,

查看该索引的cardinality值(这个是预估值),一般来说此值越大越适合建立索引.
###创建索引
普通索引(index,数据可以重复):alter table tablename add index 索引名称 (字段(长度));

唯一索引(unique,唯一索引,要求所有记录都唯一):alter table tablename add unique 索引名称 (字段(长度));

主键索引(primary key,在唯一索引的基础上相应的列必须为主键,所以一张表只有一个主键索引):

alter table tablename add primary key 索引名称 (字段(长度));
###删除索引
```sql
alter table tablename drop index 索引名称
alter table tablename drop primary key  //删除主键索引
```
##子查询
比较子查询(>,<,=,>=,<=,!=,<>后跟子查询):any,all,some;in和= any等价,not in和!= all等价

exists子查询(如果子查询返回行,则为true,否则返回false,子查询为显示select null时也会为true)
```sql
select column... from tablename where exists (子查询) 
```
##存储过程
###创建存储过程
```sql
delimiter $
drop procedure if exists 存储过程名称$
create procedure 存储过程名称()(
 [in|out|inout] 参数1 datatype,
 [in|out|inout] 参数2 datatype...
)
begin
 mysql语句;//sql语句后的分号;是必须要加的
end$
delimiter ;
```
###使用存储过程
```sql
call 存储过程();
```
