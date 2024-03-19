import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://media.rapidbox.in/Production/merchandising_video/image/desktop/443344_1709973204415.jpg', // Replace with the actual image path
    'https://media.rapidbox.in/Production/merchandising_video/image/desktop/997054_1709973304387.jpg', // Replace with the actual image path
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-full lg:h-[70vh]  md:h-[20vh] bg-red-400 mt-5'>
        <div className="slider w-full h-48 md:h-full relative overflow-hidden p-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slide absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
         </div>
    </div>
  );
};

export default Slider;
