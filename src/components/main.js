import React from 'react';
import '../CSS/main.css';
import CarouselDemo from './carousel_demo'

class Main extends React.Component {
  render(){
    return (
      <div className="Main">
        <h2 className="text-center">Carousel</h2>
      <CarouselDemo />
      </div>
    );
  }
}

export default Main;
