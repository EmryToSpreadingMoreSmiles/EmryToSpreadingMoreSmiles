import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Photo from "./Photo";
import { gallery } from "../constants/index.js";

const Gallery = () => {
  return (
    <>
        <Navbar />
      <div className="mt-[150px] grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-2 justify-items-center items-center">
        {gallery.map((item, index) => (
          <Photo
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            images={item.images}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
