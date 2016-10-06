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
  
  Store包含所有数据.如果想要得到某个时刻的数据(State),可以通过store.getState().
  ```javascript
  import {createStore} from 'redux';
  let store=createStore(fn);
  let state=store.getState();
  ```
  State与视图是一一对应的关系,只要State相同,View就相同,反之亦然.
  
  3.Action
  
  Action是什么,上面我们知道State与View是一一对应的关系,所用用户在View页面操作导致State可能会发生变化的过程叫做Action.
  
  Action是一个对象.可以查看Action的规范:[链接](https://github.com/acdlite/flux-standard-action)
  
  Action的规范:
  
  (必须项)a.Action必须是一个对象 b.必须有type属性.
  
  (可选项)a.payload属性 b.error属性 c.meta属性
  
  type:表示Action的名称.
  payload:当error属性为true时,payload必须为error对象(new Error()).
  ```javascript
  let action={
    type:"add",
    payload:"a action test"
  }
  ```
  ```javascript
  let action={
    type:"add",
    payload:new Error(),
    error:true
  }
  ```
  可以这样理解,Action描述当前发生的事情.改变State的唯一办法就是使用Action.
  
  4.store.dispatch()
  
  store.dispatch()是View发出 Action 的唯一方法.
  ```javascript
  import {createStore} from 'redux';
  let store=createStore(fn);
  let action={
    type:"add",
    payload:"a add action"
  }
  store.dispatch(action);
  ```
  store.dispatch()接受一个action并将它发送出去.
  
  5.Reducer
  
  store接受action以后,必须给出新的state,view才会变化.
  
  这种计算state的过程叫做Reducer.Reducer是一个函数,参数为Action和当前state.
  ```javascript
  let reducer=function(state,action){
    return new_state;
  }
  ```
  例子:
  ```javascript
  const defaultState=0;
  let reducer=(state=defaultState,action)=>{
    switch(action.type){
      case 'add':
        return state+action.payload;
      default:
        return state;
    }
  };
  let state=reducer(1,{
    type:'add',
    payload:3
  });
  ```
  实际中并不会手动调用reducer方法,而是在生成store的时候把reducer作为参数传入createStore()方法中.
  
  这样在执行store.dispatch()时会自动自动调用reducer方法.
  ```javascript
  import {createStore} from 'redux';
  let store=createStore(reducer);
  let state=store.dispatch(action);
  ```
  每当store.dispatch()接受一个新的action时,就会自动调用reducer并返回一个新的state.
  
  Reducer重要的特性是它是一个纯函数:同样的输入必定得到同样的输出.
  
  因此在Reducer里面不能改变State,只能返回一个全新的State.
  
  6.store.subscribe().
  
  Store允许使用store.subscribe方法设置监听函数.一旦State发生变化,就自动执行这个函数.
  ```javascript
  import {createState} from 'redux';
  let store=createState(reducer);
  let unsubscribe=store.subscribe(listener);
  unsubscribe();//解除监听
  ```
  store.subscribe方法返回一个函数,调用这个函数就可以解除监听.
##Redux(三)
  Reducer的拆分和合并
  
  
