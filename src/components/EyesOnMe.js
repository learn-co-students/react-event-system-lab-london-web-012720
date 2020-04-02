import React from 'react'

export default class EyesOnMe extends React.Component {

handleFocusEvent = (e) =>{
  console.log('Good!')
}

handleBurlEvent = (e) =>{
  console.log('Hey! Eyes on me!')
}


  render(){
    return(
      <button onFocus={this.handleFocusEvent} onBlur={this.handleBurlEvent}>Button</button>
    )
  }
}
