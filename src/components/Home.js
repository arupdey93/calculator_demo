import React from 'react'
import Display from './Display'
import Calculate from './Calculate'

class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      data:[],
      expression:''
    }
  }

  addElement = (item)=>{
    this.setState((prevState)=>{
      return ({
      expression: prevState.expression.concat(item)
    })
  })
  }

  deleteElement = (item)=>{
    
    if(item === 'DEL'){
      this.setState({
        expression: this.state.expression.substr(0,this.state.expression.length-1)
      })
    }
  }

  eraseFull = (item)=>{
    if(item === 'C'){
      this.setState({
        expression:'' 
      })
    }
  }

  calcOfElement=(item)=>{
    if(item === '='){
      let strExpress = this.state.expression.toString()
      // console.log(strExpress)
      let result = eval(strExpress)
      console.log(result)
      this.setState({
        expression:result
      })
      }  
    }


  render(){
  
    return(
      <div style={layout}>
        <h1>Hi There</h1>
        <Display viewResult={this.state.expression}/>
        <Calculate showResult={this.addElement} deleteResult={this.deleteElement} eraseResult={this.eraseFull} appendNumbers={this.calcOfElement}/>
    </div>
    )
  }
}

const layout = {
  textAlign:"center"
}

export default Home;

