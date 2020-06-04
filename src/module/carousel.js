import React from 'react';
import '../CSS/main.css';
var slidePosition = 1,
slides = document.getElementsByClassName("slides"),
slides_len = 0

class Carousel extends React.Component {
  state = {
    slides_len:0
  }
  
  // React lifecycle
  componentDidMount(){
    this.showSlides(slidePosition);
    slides_len = slides.length
    if(this.state.slides_len !== slides_len){
      this.setState({slides_len:slides_len})
    }
   
  }
  // Change slide according to prev and next button
  changeSlides=(n)=> {
    this.showSlides(slidePosition += n);
  }
  // Get slide clicked on
  currentSlide=(n) =>{
    this.showSlides(slidePosition = n);
  }

  // Show selected slide
  showSlides=(n)=> {
    let i,
    dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slidePosition = 1}    
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slidePosition-1].style.display = "block";  
    dots[slidePosition-1].className += " active";  
  }

//Execute Elements 
  render(){
    return (
      <div>
        <div className="slides-container">
          {this.props.data()}
          {this.props.show_prev_next?
          <>
          <a className="prev" onClick={()=>this.changeSlides(-1)}>&#10094;</a>
          <a className="next" onClick={()=>this.changeSlides(1)}>&#10095;</a></>
          :null}
        </div>
      <br/>
      {this.props.show_dots?
      <div className="text-center">
        {new Array(this.state.slides_len||1).fill().map((_,index)=>{
          return <span className="dot" onClick={()=>this.currentSlide(index+1)}></span> 
        })}
        
      </div>:null}
     
    </div>

    );
  }
}

export default Carousel;
