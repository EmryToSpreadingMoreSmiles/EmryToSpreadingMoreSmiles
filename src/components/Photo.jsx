import React from "react";

const Photo = ({ image, title, description }) => {
  return (
    <div className="h-[500px] w-[450px] relative mb-[150px]">
      <img className="w-full h-full object-cover" src={image} alt="Image" />
      <div className="w-3/4 text-center absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F18384] p-4 w-[25em]">
        <div className="text-[#241652]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white mb-5">
            {title}
          </h1>
        </div>
        <h2 className="text-white">{description}</h2>
      </div>
    </div>
  );
};

export default Photo;
