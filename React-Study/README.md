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
 传入一个对象,属性render返回组件的UI界面组成(html部分)
 
 使用组件
 ```javascript
 ReactDOM.render(<TestPlugin />,document.getElementById("id"));
 ```
 第一个参数为编写的组件,第二个为组件要放在页面上的位置
 
 jsx遇到(,会解析HTML;遇到{,会解析成JavaScript
 ```javascript
 var TestPlugin=React.createClass({
    render:function(){
      return (<div>
                <span>Hello World!</span>
              </div>
      );
    }
 });
 ReactDOM.render(<TestPlugin />,document.getElementById("container"));
 ```
##react学习(二)
 组件的PropTypes属性
 
 编写组件时保证组件被正确使用变得非常有用,React的PropTypes属性可以对组件的属性值进行限定
 
 propTypes的常用值:
 ```javascript
 React.PropTypes.array|React.PropTypes.array.isRequired
 React.PropTypes.bool|React.PropTypes.bool.isRequired
 React.PropTypes.func|React.PropTypes.func.isRequired
 React.PropTypes.number|React.PropTypes.number.isRequired
 React.PropTypes.object|React.PropTypes.object.isRequired
 React.PropTypes.string|React.PropTypes.string.isRequired
 ```
 this.props代表组件的属性
 
 代码:
 ```javascript
 var MyTitle=React.createClass({
    propTypes:{//此处propTypes为小写小写小写!!!
      title:React.PropTypes.string.isRequired,
    },
    render:function(){
      return (
        <div><span>Hello,{this.props.title}!</span></div>
      );
    }
 });
 ReactDOM.render(<MyTitle title="NBA" />,document.body);
 ```
##react学习(三)

 getDefaultProps来设置组件属性的默认值
 
 代码:
 ```javascript
 var SearchPlugin=React.createClass({
    getDefaultProps:function(){
      return {
        value:"iphone 7"
      };
    },
    render:function(){
      return (
          <div>
            <input type="text" value={this.props.value} />
            <button>搜索</button>
          </div>
        );
    }
 });
 ReactDOM.render(<SearchPlugin />,document.getElementById("container"));
 ```
 
