#Node.js学习手记
##Node.js学习(一)

###global全局环境
   和JavaScript在浏览器中的window对象一样,node.js的一些函数和变量也是global的属性,
   
   在cmd终端输入node,进入Node的REPL(Node的命令行方式),然后输入console.log(global);然后回车可以看到挂在global上面的定义好的属性.
   
   比如:
   
   (一).process
   
   Node的进程模块,允许开发者与进程互动,如若要退出REPL,则可以输入process.exit().
   
   process 属性还包括好多属性,
   
   标准的输入流 process.stdout 这个属性下还有各自的属性方法.....

   标准的输出流 process.stdin  同上,也有自己的属性方法.....

   事件循环 process.nextTick  有什么任务不能在当下执行完，需要交给下次事件循环响应,比如占用大量cpu的一个IO密集型运算...
   
   process.cwd() 是当前执行node命令时候的文件夹地址
   
   (二).console
   
   Node内置的控制台标准输出模块,向标准输出流 (stdout)和标准错误流(stderr)输出错误
   
   它可以接受若干个参数,用逗号分隔
   ```javascript
      console.log('aaa','bbb','ccc','dddd');
      console.error() 输出当前错误流.
      console.trace() 输出当前调用栈.
   ```
   (三).Buffer
   
   javascript对字符处理还是比较强的,但是对于二进制却非常棘手,所以有了Buffer,它把原始数据放在Buffer类的实例中
   
   而这个实例类似一个数组,储存在V8堆之外的分配区域.
   
   (四)require

   这个方法就是我们经常用来引用包的方法,实际上它属于Modules类,本地的每个Modules都有此方法
   
   所以也可以理解成是一个全局的方法,比如 require('http');
   
   (五).__filename

   获取当前所执行代码文件的路径,可以获得代码文件所在的绝对路径.也被称作node.js中的魔术变量.
   
   (六).__dirname

   获取当前执行脚本所在的目录,同上,也是node.js中的魔术变量.(注意这里是获取脚本所在的目录名,而__filename是获取路径)
   
   __dirname 是被执行的js 文件的地址
   
   (七).module

   这个类和require类似,其实是属于每个模块的本地方法,直接拿来使用,你也可以理解成一个全局变量.
   
   module变量指代当前模块

   module下有个非常重要的方法:exports
   
   module.exports变量表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量
   
   (八).exports

   exports 和 module.exports 其实是一样的,但是为了简化使用,exports 是 module.exports 的一个引用,他们最终指向一个对象.
   
   即var exports=module.exports;所以可以向exports添加方法/变量,但是不能直接赋值
   
   例如:
   ```javascript
      //不允许
      exports=function(a){
        console.log(a);
      }
      //允许
      exports.demo=function(a){
        console.log(a);
      }
   ```
   我的建议是一直使用module.exports
   
   (九).定时器函数:共有4个,分别是setTimeout(), clearTimeout(), setInterval(), clearInterval()
   
   总结,除去上面的全局对象方法,如果有需要你也可以自己定义全局变量.

   定义方法,在入口文件定义,如下代码:
   ```javascript
      global.pageInfo={
        title:"百度一下",
        url:"http://www.baidu.com/"
      }
   ```
   如何使用:在项目的任意一个模块里直接引用 pageInfo.title 或 pageInfo.url 无需require任何东西.
   
   还有一种定义全局变量的方法:利用javascript中Object的方法defineProperty定义属性的方法
   ```javascript
      Object.defineProperty(global, "pageInfo", {
        value: {
    				title:"百度一下",
    				url:"http://www.baidu.com/"
				},
        writable: false		//定义该属性只读 ,true 表示该属性值可被修改
      });
  ```
  参考文章:
  [一介布衣的博客](http://yijiebuyi.com/blog/e1d00bcd8d67e9cc0af437f703978da7.html)
##Node.js学习(一)
    
