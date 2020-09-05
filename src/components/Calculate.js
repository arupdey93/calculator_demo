import React from 'react'
import Button from './Button'

class Calculate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data_1:['C','%','DEL'],
      data_2:['7','8','9','/'],
      data_3:['4','5','6','*'],
      data_4:['1','2','3','-'],
      data_5:['0','.','=','+']

    }
  }


  render(){
    const { showResult,deleteResult,eraseResult,appendNumbers } = this.props

    return(
      <div>
        <div className="container">
        {this.state.data_1.map((item,index)=>{
          return <Button element={item} key={index} action={item==='DEL'? deleteResult : item === 'C' ? eraseResult : showResult}/>
        })}
        </div>
        <div className="container">
        {this.state.data_2.map((item,index)=>{
          return <Button element={item} key={index} action={item === 'DEL' ? deleteResult:showResult}/>
        })}
      </div>
      <div className="container">
        {this.state.data_3.map((item,index)=>{
          return <Button element={item} key={index} action={item === 'DEL' ? deleteResult:showResult}/>
        })}
      </div>
      <div className="container">
        {this.state.data_4.map((item,index)=>{
          return <Button element={item} key={index} action={item === 'DEL' ? deleteResult:showResult}/>
        })}
      </div>
      <div className="container">
        {this.state.data_5.map((item,index)=>{
          return <Button element={item} key={index} action={item === '=' ? appendNumbers:showResult}/>
        })}
      </div>
      </div>
    )
  }
}

export default Calculate;