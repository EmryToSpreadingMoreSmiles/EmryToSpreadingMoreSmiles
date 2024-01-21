import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WorkTile from "./WorkTile";
import { work } from "../constants/index.js";

const Work = () => {
  const [z, setZ] = useState(1);

  return (
    <>
      <Navbar />
      <div className="mt-[140px] mx-[3em]">
        {work.map((item, index) => {
          // Calculate z for each iteration
          const currentZ = index % 2 === 0 ? 1 : -1;

          return (
            <WorkTile
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              z={currentZ}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Work;
