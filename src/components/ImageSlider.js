// Bomb Component Code Goes Here
import React from 'react'
// In the components/ImageSlider.js file, create an ImageSlider React
 // component.
// Its initial state should have a property called currentSlideIndex that
// starts at 0.
// It should only render out the text 'I am on slide <CURRENT_SLIDE>',
//   where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
class ImageSlider extends React.Component{
  constructor(){
    super();
    this.state = {currentSlideIndex: 0}
  }
  render(){
    return(
      <div className="imageSlider">
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}//class

export default ImageSlider
