
#ES6学习手记
####前言:本来是学习React和Redux的,结果看到大家都在用ES6写,只能先填ES6的坑了...^_^...
##ES6学习(一):箭头函数(Arrow Functions)
  语法:
  ```javascript
  (param...)=>{
    statements
  }
  
  (param...)=>expression
  ```
  根据param参数的不同,又可以分为以下三种写法:
  
  ()=>{},零个参数用()表示.
  
  param=>{},一个参数时可以省略().
  
  (param...)=>{},标准写法.单行表达式可以省略{},如(a,b)=>a*b;但是多行或者retur时不能省略{}.
  
  示例:
  ```javascript
  //ES5
  var fna=function(a,b){
    return a*b;
  }
  //ES6
  var fna=(a,b)=>a*b;
  //或者
  var fna=(a,b)=>{return a*b;}
  ```
  特性:
  
  箭头函数内部没有constructor,也没有prototype,所以不支持new操作.
  
  但是箭头函数内部的this与一般的函数不一样,箭头函数里面的this始终指向函数定义时的this(指向调用者),而非执行时的.
  
  举个例子:
  ```javascript
  var obj={
    fna:function(){
      console.log("it's fna...");
    },
    fnb:function(){
      setTimeout(function(){
        this.fna();   //因为调用了setTimeout函数,所以此时的this指向window
      },1000);
    }
  }
  //如果运行obj.fnb();会报错:this.funa is not a function
  //ES6
  var obj={
    fna:function(){
      console.log("it's fna...");
    },
    fnb:function(){
      setTimeout(()=>{this.fna();},1000);//这里的this依然指向obj
    }
  }
  //obj.fnb();正常运行
  ```
  还有就是用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略
##ES6学习(二):类(class)
  class一直是js的保留字,但是一直没有用,这次在ES6中终于用上了.
  
  以前在js中使用类,智能用prototype原型链模拟,ES6中class类的使用,使js更像Java、C#这样的后端语言.
  
  用法:
  ```javascript
  //ES5
  function Student(name){
    this.name=name;
  }
  Student.prototype.sayHello=function(){
    console.log("Hi "+this.name+" !");
  }
  //ES6
  class Student{
    constructor(name){
      this.name=name;
    }
    sayHello(){
      console.log("Hi "+this.name+" !");
    }
  }
  //就像函数有函数声明和函数表达式两种方式,类也可以用类表达式书写
  var Student=class{
    constructor(name){
      this.name=name;
    }
    sayHello(){
      console.log("Hi "+this.name+" !");
    }
  }
  //ES5的代码分为了两个部分,而ES6的代码全部在一个代码块里面
  //使用是一样的
  var ff=new Student("zhangff01");
  ff.sayHello();
  ```
  类的继承-extends
  
  用class定义对象的另一个巨大的好处是继承更方便了.以前在ES5里面需要考虑的东西在ES6里面都不需要考虑了.
  
  如我们新建一个CoderStudent类继承于Student类,还可以在里面添加静态方法(类方法),可以这样写:
  ```javascript
  class CoderStudent extends Student{
    constructor(name,lanuage){
      super(name);  //记得用super调用父类的构造方法!
      this.lanuage=lanuage;
    }
    style(){
      console.log(this.name+" is a "+this.lanuage+" coder");
    }
    static testMethod(){
      console.log("testMethod is a static fn!");
    }
  }
  CoderStudent.testMethod();//调用静态方法
  var js_coder=new CoderStudent("zhangff01","javascript");
  js_coder.style();
  js_coder.sayHello();//调用继承的方法
  ```
##ES6学习(三):增强对象字面量(对象可以继承)
  用法:
  ```javascript
  //通过对象字面量创建对象
  var human = {
    breathe() {
      console.log('breathing...');
    }
  };
  var worker={
    __proto__:human,
    title:"Hello World!",
    work(){
      console.log(this.title);
    }
  }
  ```
##ES6学习(四):let和const
  ES6以前我们都是用var来声明变量,在ES6中增加了let,const声明变量的方式.
  
  const是用来声明变量,代表一个值的常量索引.
  
  let是用来声明块级作用域变量,以前在js中只有函数作用域.
##ES6学习(五):模块(Module)
  modules规范分两部分，一部分是如何导出，一部分是如何导入.
  
  导出:
  
  
  
  
