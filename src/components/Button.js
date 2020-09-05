import React from 'react'


class Button extends React.Component{
 constructor(props){
   super(props)

 }
  render(){
    
    return(
      <div>
        <button className="number_btn" onClick={()=>this.props.action(this.props.element)}>{this.props.element}</button>
      </div>
    )
  }
}

export default Button;