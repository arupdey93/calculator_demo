import React from 'react'

class Display extends React.Component{
  render(){
    return(
      <div>
        <div className="screen">
          <p className="screen_digit">{this.props.viewResult}</p>
        </div>
      </div>
    )
  }
}

export default Display;