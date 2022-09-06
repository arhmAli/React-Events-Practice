import React, { Component } from 'react'

class Button extends Component{
    static defaultProps={
        colors:["Red","Blue","Pink"]
    }
    constructor(props){
        super(props);
        this.state={color:"cyan"};
    }
    handleClick(newColor){
        console.log(`new color is ${newColor}`);
        this.setState({color:newColor});
    }
    render(){
        return(
            <div className='button-div' style={{backgroundColor:this.state.color}}>
                {this.props.colors.map(c=>{
                    const colorObj={backgroundColor:c};
                    return <button style={colorObj} onClick={this.handleClick.bind(this,c)}>Click on me</button>
                })}
            </div>
        )
    }
}
export default Button;