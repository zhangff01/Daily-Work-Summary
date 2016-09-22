var TestClickComponent=React.createClass({
    handleClick:function(event){
        var ref_span=ReactDOM.findDOMNode(this.refs.tip);              
        if(ref_span.style.display==="none"){
            ref_span.style.display="inline";
        }else{
            ref_span.style.display="none";
        }
        event.stopPropagation();
        event.preventDefault();
    },
    render:function(){                 
        return (
                  <div className="btn_one">
                    <button onClick={this.handleClick}>显示|隐藏</button>
                    <span ref='tip'>测试点击显示隐藏</span>
                  </div>
                );
    }
});

var TestInputComponent=React.createClass({
    getInitialState:function(){
        return {
            inputContent:""
        };
    },
    handleChange:function(event){
        this.setState({
            inputContent:event.target.value
        });
        event.stopPropagation();
        event.preventDefault();
    },
    render:function(){
        return (
            			<div className="btn_one">
            				<input type="text" onChange={this.handleChange} />
            				<span ref="tip">{this.state.inputContent}</span>
            			</div>
            	 );
    }
});

ReactDOM.render(
    <div>
      <TestClickComponent /><br />
      <TestInputComponent />
    </div>,
    document.getElementById("container")
);
