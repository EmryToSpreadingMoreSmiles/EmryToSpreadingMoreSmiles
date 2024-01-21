import React from "react";

const WorkTile = ({ image, title, description, z }) => {
  return (
    <div className="grid grid-cols-2 mb-5">
      {z === 1 ? (
        <>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[#F18384]">
              <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white mb-5">
                {title}
              </h1>
            </div>
            <div className="text-center">
              {description.map((sentence, index) => (
                <p key={index} className="text-[#241652] mb-5">
                  {sentence}
                </p>
              ))}
            </div>
            <div className="buttons text-white mt-4">
              <button className="bg-[#2774AC] p-3 inline-flex items-center hover:opacity-80">
                <span className="mx-2">See More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-10 p-7">
            <img
              src={image}
              alt=""
              className="w-full object-cover h-[500px]"
            />
          </div>
        </>
      ) : (
        <>
          <div className="mt-10 p-7">
            <img
              src={image}
              alt=""
              className="w-full object-cover h-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[#F18384]">
              <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white mb-5">
                {title}
              </h1>
            </div>
            <div className="text-center">
              {description.map((sentence, index) => (
                <p key={index} className="text-[#241652] mb-5">
                  {sentence}
                </p>
              ))}
            </div>
            <div className="buttons text-white mt-4">
              <button className="bg-[#2774AC] p-3 inline-flex items-center hover:opacity-80">
                <span className="mx-2">See More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
};

export default WorkTile;
