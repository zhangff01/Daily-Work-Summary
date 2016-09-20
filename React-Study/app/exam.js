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
  
  jsx遇到(,会解析HTML
     遇到{,会解析成JavaScript
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
  
/*
  react学习(二)
  组件的PropTypes属性
  编写组件时保证组件被正确使用变得非常有用,React的PropTypes属性可以对组件的属性值进行限定
  propTypes的常用值
  React.PropTypes.array|React.PropTypes.array.isRequired
  React.PropTypes.bool|React.PropTypes.bool.isRequired
  React.PropTypes.func|React.PropTypes.func.isRequired
  React.PropTypes.number|React.PropTypes.number.isRequired
  React.PropTypes.object|React.PropTypes.object.isRequired
  React.PropTypes.string|React.PropTypes.string.isRequired
  this.props代表组件的属性
*/
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
/*
  react学习(三)
  getDefaultProps来设置组件属性的默认值
*/
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
/*
  react学习(四)
  获取真实的DOM节点
  组件不是真实的DOM节点，而是存在于内存之中的一种数据结构，叫做虚拟DOM(virtual DOM).
  只有把它插入文档以后才会变成真实的DOM.所有的DOM变得都是先在虚拟DOM上发生,然后通过DOM diff算法反应到真实的DOM上
  但是若果需要获取真实的DOM节点,需要用到ref属性.
  有关于props和state的关系,可以看看这篇blog:
  http://blog.csdn.net/code_for_free/article/details/50762171
  
  getInitialState用于定义初始状态(是一个对象),可以通过this.state获取这个对象,this.setState方法用于修改状态值
  每次修改后自动调用this.render方法,再次渲染组件
  this.props和this.state都用于描述组件的特性,较为粗浅的区分方法是this.props表示那些一旦定义就不再改变的特性
  this.state是会随着用户互动而产生变化的特性
*/
  var SearchInput=React.createClass({
    getInitialState:function(){
      return {
        val:"iphone 7"
      };
    },
    handleFocus:function(){
      var inputnode=ReactDOM.findDOMNode(this.refs.sin);//网上说this.refs.sin就可以取到DOM节点，我试了不行，后来发现可能是版本的原因
      inputnode.style.borderColor="#2E8B57";
      this.setState({
        val:""
      });
    },
    handleBlur:function(){
      var inputnode=ReactDOM.findDOMNode(this.refs.sin);
      inputnode.style.borderColor="#DCDCDC";
      this.setState({
        val:"iphone 7"
      });
    },
    render:function(){
      return (
          <div>
            <input type="text" ref="sin" value={this.state.val} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            <button>搜索</button>
          </div>
        );
    }
  });
  ReactDOM.render(<SearchInput />,document.getElementById("container"));
/*
  react学习(五)
  React组件之表单元素的组件
  约束性组件和非约束性组件的区分(使用value之分)
  非约束性组件:其value值由原生的DOM管理.用户输入A -> 显示A
  约束性组件:其value值由React管理.用户输入A -> 触发onChange事件 -> 事件处理函数中设置state.name=A -> 渲染标签并显示A
  
  不设置value(或者设置value=null)的组件是非约束性组件,此时如果想设置默认值可以使用defaultValue="sth"实现
  类型为radio,checkbox的<input />可以使用defaultChecked,<textarea />,<select />可以使用defaultValue.
  
  onChange事件中通过event.target.value来读取用户输入的值
*/
  var LimitPlugin=React.createClass({
    getInitialState:function(){
      return {
        value:"Hello World!"
      };
    },
    handleChange:function(event){
      this.setState({
        value:event.target.value
      });
      //如果把上面一段代码注释掉,不做任何处理,则组件为不可编辑状态
    },
    render:function(){
      return (
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
      );
    }
  });
  ReactDOM.render(<LimitPlugin />,document.getElementById("container"));
  
  var UnLimitPlugin=React.createClass({
    render:function(){
      return (
        <div>
          <input type="text" defaultValue="Hello NBA!" />
        </div>  
      );
    }
  });
  ReactDOM.render(<UnLimitPlugin />,document.getElementById("container"));
  
