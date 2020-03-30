// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends React.Component {

    theFocus(){
    console.log("Good!")
    }

    theBlur(){
        console.log('Hey! Eyes on me!')
    }

    render(){
        return (
            <div>
                <button onBlur={this.theBlur} onFocus={this.theFocus}>

                </button>
            </div>
        )
    }

    
}
export default EyesOnMe;

 