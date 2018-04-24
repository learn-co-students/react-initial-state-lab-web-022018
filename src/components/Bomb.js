// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      secondsLeft: props.initialCount
    }
    console.log(this.state)
  }

  render() {
    return(<p>{this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + ' seconds left before I go boom!'}</p>)
  }
}
export default Bomb;
