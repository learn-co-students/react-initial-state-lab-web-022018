// Bomb Component Code Goes Here
import React from 'react'

class ImageSlider extends React.Component{

   state = {
     currentSlideIndex:0
   }

   render(){
     return (
       <h1>I am on slide {this.state.currentSlideIndex}</h1>
     )
   }
}

// ImageSlider.defaultProps = {
//   currentSlideIndex:0
// }

export default ImageSlider
