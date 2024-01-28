import React, { useState } from "react";
import "./Photo.css"; // Import CSS file for transition animation

const Photo = ({ images, title, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="photo-container h-[500px] w-[450px] relative mb-[150px]">
      <img
        className="photo-image w-full h-full object-cover"
        src={images[currentImageIndex]}
        alt="Image"
      />
      <div className="w-3/4 text-center absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F18384] p-4 w-[25em]">
        <div className="text-[#241652]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white mb-5">
            {title}
          </h1>
        </div>
        <h2 className="text-white">{description}</h2>
      </div>
      <div className="p-3 absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
        <div className="button-container">
          <button
            className="p-2 text-white text-3xl absolute left-0 bg-transparent focus:outline-none"
            onClick={prevImage}
          >
            &#10094;
          </button>
        </div>
        <div className="button-container">
          <button
            className="p-2 text-white text-3xl absolute right-0 bg-transparent focus:outline-none"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
