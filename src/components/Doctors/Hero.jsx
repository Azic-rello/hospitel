import React from 'react';
import hero from '../../../public/assets/6fcce8f0b03205463c35480c0da07b25515c4be0.png';
const Hero = () => {
  return (
    <section
      className="relative w-full h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6 flex items-center h-full text-white">
        <div className="text-left">
          <p className="text-lg md:text-2xl mb-6">Home / Doctors</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Doctors</h1>
          <a
            href="#doctors"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
