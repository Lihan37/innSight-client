import React from 'react';
import logo from '../../../../src/assets/logo.jpg';
import './banner.css'

const Banner = () => {
  return (
    <div className="relative text-center mb-20">
      <figure className='relative'>
        <img src={logo} alt="" className="w-full h-[600px]" style={{ filter: 'brightness(50%)' }} />
      </figure>

      <div className='mx-auto lg:w-3/4 absolute inset-0 flex flex-col items-center justify-center text-center text-gray-100'>
        <h2 className='font-bold lg:mb-5 text-xl lg:text-4xl'>Innsight: Discover the Art of Hospitality</h2>
        <p className='font-semibold text-sm lg:text-xl parallax'>
          Welcome to Innsight, where the journey begins into a world of unparalleled hospitality and warmth. We invite you to experience the essence of comfort and luxury, where every stay is a delightful memory waiting to be created. Our mission is to provide you with the ultimate escape, a home away from home, where tranquility and exceptional service await. Join us on this enchanting voyage and make every moment extraordinary
        </p>
      </div>
    </div>
  );
};

export default Banner;
