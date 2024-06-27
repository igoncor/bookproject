import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselBook.css';

import carouselImg1 from '../../assets/img/carousel-img1.jpg';
import carouselImg2 from '../../assets/img/carousel-img2.jpg';
import carouselImg3 from '../../assets/img/carousel-img3.jpg';
import carouselImg4 from '../../assets/img/carousel-img4.jpg';
import carouselImg5 from '../../assets/img/carousel-img5.jpg';

const images = [
  { src: carouselImg1, alt: 'Carousel Image 1' },
  { src: carouselImg2, alt: 'Carousel Image 2' },
  { src: carouselImg3, alt: 'Carousel Image 3' },
  { src: carouselImg4, alt: 'Carousel Image 4' },
  { src: carouselImg5, alt: 'Carousel Image 5' }
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="carousel-background">
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;


