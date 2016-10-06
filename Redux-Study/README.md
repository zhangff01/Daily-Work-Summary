#Redux学习总结
##Redux(一)
  Redux的设计思想:
  
  (1).Web应用是一个状态机,视图与状态是一一对应的(一个状态对应一个视图,状态的改变必然导致视图的变化).
  
  (2).所有的状态保存在一个对象里面.
##Redux(二)
  基本概念和API:
  
  1.Store
  
  Store就是存放State的地方,可以看成是一个容器,整个应用只能有一个Store.
  
  Redux提供createStore这个函数来生成Store.
  ```javascript
  import {createStore} from 'redux';
  let store=createStore(fn);
  ```
  createStore接受一个函数作为参数,返回新生成的store.
  
  2.State
  
  Store包含所有数据.
