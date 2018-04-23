import React from 'react'

class Bomb extends React.Component {
  constructor(props){
    console.log(props)
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    if (this.state.secondsLeft===0){
      return 'Boom!'
    } else {
      return (
        <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
      )
    }
    return (
      <h1>{this.props.initialCount}</h1>
    )
  }
}

export default Bomb
