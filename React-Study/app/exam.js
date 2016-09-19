/*
  react学习(一)
  个人理解,React组件分为两部分,即编写组件和使用组件
  编写组件 
  var TestPlugin(组件名,首字母需要大写)=React.createClass({
    render:function(){
      return (<div>
                <span>Hello World!</span>
              </div>
      );//一些html标签
    }
  });
  传入一个对象,属性render返回组件的UI界面组成(html部分)
  
  使用组件
  ReactDOM.render(<TestPlugin />,document.getElementById("id"));
  第一个参数为编写的组件,第二个为组件要放在页面上的位置
*/
  var TestPlugin=React.createClass({
    render:function(){
      return (<div>
                <span>Hello World!</span>
              </div>
      );
    }
  });
  ReactDOM.render(<TestPlugin />,document.getElementById("container"));
  
