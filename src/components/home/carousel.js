import React from 'react';
import { Carousel } from 'react-bootstrap'; 

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {  
    return (
      <>
   <Carousel>
 
{/* <Carousel.Item key = "2"  interval={2000}>
  <img
    className="d-block w-100"
    src={CarouselImg}
    style={{height: '45vh'}}
    alt="carousel"
  />
</Carousel.Item>

<Carousel.Item key = "2"  interval={2000}>
  <img
    className="d-block w-100"
    src={CarouselImg1}
    style={{height: '40vh'}}
    alt="carousel"
  />
</Carousel.Item> */}

</Carousel>

</>
  );
  }
}
 
export default Banner;
