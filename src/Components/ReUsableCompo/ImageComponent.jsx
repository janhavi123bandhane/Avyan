/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ImageComponent = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Single Image" className='xl:w-[50rem] xl:h-[35rem] lg:w-[40rem] lg:h-[30rem] md:w-[30rem] md:h-[20rem] w-[20rem] h-[12rem] mr-6 rounded-xl'/>;
};

export default ImageComponent;