import React from 'react';
import Carousel from '../module/carousel'

class CarouselDemo extends React.Component {
  render(){
    const data = ()=>{
        return (<div className="slideshow">
                    <div className="slides fade">
                        <img alt="img_one" src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg" className="w-100"/>
                        <h3 className="text">Caption One</h3>
                    </div>
                    
                    <div className="slides fade">
                        <img alt="img_two" src="https://i.ytimg.com/vi/sjkPeexEdyI/maxresdefault.jpg" className="w-100"/>
                        <h3 className="text">Caption Two</h3>
                    </div>
                    <div className="slides fade">
                        <img alt="img_three" src="https://inteng-storage.s3.amazonaws.com/img/iea/nZwXYgDgOv/sizes/the-moon-images_resize_md.jpg" className="w-100"/>
                        <h3 className="text">Caption Three</h3>
                    </div>
                    
                    <div className="slides fade">
                        <img alt="img-four" src="https://live.mrf.io/statics/i/ps/cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000/https://dailygalaxy.com/wp-content/uploads/2018/09/scarce-in-solar-system-nasa-astrobiologists-are-tracking-phosphorus-for-signs-of-other-life.jpg" className="w-100"/>
                        <h3 className="text">Caption Four</h3>
                    </div>
                </div>
                )
            }
    return (
      <Carousel data={data} show_dots= {true} show_prev_next = {true}/>
    );
  }
}

export default CarouselDemo;
