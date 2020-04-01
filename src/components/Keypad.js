// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    handleKey = (e) =>{
        console.log("Entering password...");
      }

    render() {
        return (
            <div>
                <input 
                  onKeyUp={this.handleKey}
                  type="password" 
                  name="password" 
                  id="password"/>
            </div>
        )
    }
}
