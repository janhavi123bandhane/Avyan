/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ImageCarousel from './Components/ImageCarousel';

function ImageSlider() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
  ];

  return (
    <div className="App  xl:w-full md:w-[90rem] lg:w-[100rem] w-[60rem] overflow-hidden">
      {/* <h1>React Carousel</h1> */}
      <ImageCarousel images={images} />
    </div>
  );
}

export default ImageSlider;
