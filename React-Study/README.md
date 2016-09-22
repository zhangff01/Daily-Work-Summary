#React学习手记
##react学习(一)
 个人理解,开发React组件分为两部分,即编写组件和使用组件
 编写组件
 
 ```javascript
 var TestPlugin(组件名,首字母需要大写)=React.createClass({
    render:function(){
      return (<div>
                <span>Hello World!</span>
              </div>
      );//一些html标签
    }
  });
 ```
