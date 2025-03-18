import React, {useEffect, useState} from 'react';
import { Carousel } from 'antd';
import image1 from '../assets/Avengers.png';
import image2 from '../assets/harry.jpg';
import image3 from '../assets/hulk.jpg';
import image4 from '../assets/spiderman.jpg';

const Carousels = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow(); 
    window.addEventListener("resize", updateSlidesToShow); 

    return () => window.removeEventListener("resize", updateSlidesToShow); 
  }, []);
  return (
    <>
      <Carousel
        autoplay
        arrows
        infinite
        dotPosition="bottom"
        effect="scrollx"
        style={{ padding: '0 20px' }}
        slidesToShow={slidesToShow} 
        centerMode={true} 
        centerPadding="50px" 
      >
        <div className="carousel-item">
          <div className="carousel-card">
            <img src={image1} alt="Avengers" className="carousel-image" />
            <div className="carousel-info">
              <h3 className="carousel-title">Avengers</h3>
              <p className="carousel-description">
                The Avengers assemble to save the world from a powerful force.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <img src={image2} alt="Harry Potter" className="carousel-image" />
            <div className="carousel-info">
              <h3 className="carousel-title">Harry Potter</h3>
              <p className="carousel-description">
                Join Harry Potter as he embarks on magical adventures.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <img src={image3} alt="Hulk" className="carousel-image" />
            <div className="carousel-info">
              <h3 className="carousel-title">Hulk</h3>
              <p className="carousel-description">
                The Hulk fights to control his anger and powers.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <img src={image4} alt="Spiderman" className="carousel-image" />
            <div className="carousel-info">
              <h3 className="carousel-title">Spiderman</h3>
              <p className="carousel-description">
                Spiderman swings through New York City to protect the innocent.
              </p>
            </div>
          </div>
        </div>
      </Carousel>

      <style jsx>{`
        .carousel-item {
          display: flex;
          justify-content: center;
        }

        .carousel-card {
          position: relative;
          width: 90%; /* Adjust this width as per your design */
          height: 300px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease;
        }

        .carousel-card:hover {
          transform: scale(1.05);
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .carousel-card:hover .carousel-image {
          transform: scale(1.1);
        }

        .carousel-info {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 15px;
          border-radius: 5px;
        }

        .carousel-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .carousel-description {
          font-size: 14px;
          line-height: 1.4;
        }

        .slick-dots {
          bottom: 20px;
        }

        @media (max-width: 1024px) {
          .carousel-card {
            width: 95%;
            height: 250px;
          }
        }

        @media (max-width: 768px) {
          .carousel-card {
            width: 90%;
            height: 200px;
          }

          .carousel-title {
            font-size: 16px;
          }

          .carousel-description {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .carousel-card {
            width: 95%;
            height: 180px;
          }

          .carousel-title {
            font-size: 14px;
          }

          .carousel-description {
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Carousels;
