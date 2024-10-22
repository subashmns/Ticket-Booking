import React from 'react';
import { Carousel } from 'antd';
import image1 from '../assets/Avengers.png'
import image2 from '../assets/harry.jpg'
import image3 from '../assets/hulk.jpg'
import image4 from '../assets/spiderman.jpg'


const Carousels = (props) => {
  const contentStyle = {
    margin: 0,
    width:'100%',
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    cursor: 'pointer',
    transition: 'transform 0.5s',
  };

  return (
  <>
    <Carousel arrows infinite={true}  autoplay>
    <div>
        <div style={contentStyle}><img src={image1} alt="1" style={{
          maxWidth: '100%',
          height: '100%',
          objectFit: 'cover'
        }}/></div>
      </div>
      <div>
        <div style={contentStyle}><img src={image2} alt="1" style={{
          maxWidth: '100%',
          height: '100%',
          objectFit: 'cover'
        }}/></div>
      </div>
      <div>
        <div style={contentStyle}><img src={image3} alt="1" style={{
          maxWidth: '100%',
          height: '100%',
          objectFit: 'cover'
        }}/></div>
      </div>
      <div>
        <div style={contentStyle}><img src={image4} alt="1" style={{
          maxWidth: '100%',
          height: '100%',
          objectFit: 'cover'
        }}/></div>
      </div>
    </Carousel>
    <br />
  </>
);
}
export default Carousels;