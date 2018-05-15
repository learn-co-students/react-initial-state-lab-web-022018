import React from 'react';

class Bomb extends React.Component {
  state = {
    secondsLeft: this.props.initialCount
  }
  render() {
    return(
      <p>{this.state.secondsLeft ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}</p>
    )
  }
}

export default Bomb
