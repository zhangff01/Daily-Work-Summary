   var React=require("react");
   var CounterPlugin=React.createClass({
    propTypes:{
      title:React.PropTypes.string
    },
    getDefaultProps:function(){
      console.log("getDefaultProps...");
      return {
        title:"A Counter",
        step:1
      };
    },
    getInitialState:function(){
      console.log("getInitialState...");
      return {
        num:0
      };
    },
    handleClick:function(value){
      var count=this.state.num+value;
      this.setState({
        num:count
      });
    },
    componentWillMount:function(){
      console.log("componentWillMount...");
    },
    render:function(){
      console.log("render...");
      var step=this.props.step;
      return (
          <div>
            <h2>{this.props.title}</h2>
            <div>{this.state.num}</div>
            <input type="button" value="+" onClick={this.handleClick.bind(this,step)} />
            <input type="button" value="-" onClick={this.handleClick.bind(this,-step)} />
          </div>
        );
    },
    componentDidMount:function(){
      console.log("componentDidMount...");
    },
    shouldComponentUpdate:function(nextProps,nextState){
      console.log("shouldComponentUpdate...");
      if(this.state.num===nextState.num){
        return false;
      }else{
        return true;
      }
    },
    componentWillUpdate:function(){
        console.log("componentWillUpdate...");
    },
    componentDidUpdate:function(){
        console.log("componentDidUpdate...");
    }
  });
  module.exports=CounterPlugin;