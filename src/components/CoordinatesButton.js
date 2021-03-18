// Code CoordinatesButton Component Here
import React, { Component } from 'react'
class CodeCoordinatesButton extends Component {
  handleMouseMove = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.handleMouseMove}> 
        Here
      </button>
    );
  }
}
export default CodeCoordinatesButton
