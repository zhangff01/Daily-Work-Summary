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