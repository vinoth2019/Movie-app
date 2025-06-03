// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ data }) => { 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // reduced for better responsiveness
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1144,
        settings: { slidesToShow: 3 }
      }, 
      {
        breakpoint: 1046,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div style={{ margin: '0 auto', width: '80%' }}>
      <Slider {...settings}>
        {data.slice(0, 6).map((item, index) => {
          
          const cells = item.c || [];
          const title = cells[2]?.v || `Card ${index + 1}`;
          const imageUrl = cells[5]?.v;
          const videoUrl = cells[6]?.v;
          if (!imageUrl) return null; // skip if image is missing

          return (
            <Link to={videoUrl} target="_blank" style={{ textDecoration: 'none', color: 'red' }} className='img-link'>
            
            <div key={index} style={{ padding: '10px' }}>
              <div style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 8px rgba(0,0,0)', 
                margin: '0 1rem'
              }}>
                <img
                  src={imageUrl}
                  alt={title}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div style={{ padding: '10px', textAlign: 'center', backgroundColor: 'white' }}>
                  <h4>{title}</h4>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
