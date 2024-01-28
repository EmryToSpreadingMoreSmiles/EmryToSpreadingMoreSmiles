import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Fact1,
  Fact2,
  Fact3,
  Mission as M,
  Vission,
  WhyItMatters,
} from "../constants/index.js";

const Mission = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[110px] relative">
        <img className="h-[500px] w-full object-cover" src={Vission} alt="" />
        <div className="w-[500px] absolute top-0 left-[800px] right-0 bottom-0 flex flex-col justify-center items-center text-center">
          <h1 className="mb-10 text-[#59CCBE] text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            Our Vision
          </h1>
          <h2 className="">
            Our vision is to establish a transformative mentorship platform
            focused on providing quality education to children and youth from
            underserved communities. We believe that education is a fundamental
            right, not a privilege, and through targeted mentorship, we aim to
            empower these individuals to achieve their dreams and aspirations.{" "}
            <br />
            <br />
            Ultimately, in everything we do, our goal is to spread more smiles.
          </h2>
        </div>
      </section>
      <section className="mt-[110px] relative">
        <img className="h-[500px] w-full object-cover" src={M} alt="" />
        <div className="w-[500px] absolute top-0 left-[180px] right-0 bottom-0 flex flex-col justify-center items-center text-center">
          <h1 className="mb-10 text-[#59CCBE] text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            Our Mission
          </h1>
          <h2 className="">
            Our mission centers on tackling challenges in the educational
            landscape through holistic interventions. Originating from an
            emphasis on accessible and quality education through story books,
            our mission has expanded to include comprehensive solutions for
            bridging gender disparities, enhancing overall well-being, and
            promoting digital literacy. Collaborating with communities, we will
            create safe and innovative learning spaces, ensuring every child has
            an equal opportunity to learn and grow.
            <br />
            <br />
            Together, we aspire to build a future where education serves as a
            powerful catalyst for positive change and equitable opportunities.
          </h2>
        </div>
      </section>
      <div className="mt-10 md:mt-[110px] relative">
        <img src={WhyItMatters} alt="" className="h-[250px] md:h-[500px] w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl md:text-5xl text-white font-bold">Why It Matters?</p>
        </div>
      </div>
      <div className="w-full bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="left-side mx-12">
          <div className="p-7">
            <img src={Fact1} alt="" className="w-full object-cover" />
          </div>
        </div>
        <div className="right-side flex flex-cols items-center">
          <div className="left-side mx-12 mt-[50px]">
            <div className="subtitile text-[#F18384] mb-[40px] text-center">
              <h2>
                <span className="text-2xl text-[#241652]">
                  More than{" "}
                  <span className="text-[#FF0000]">360 million students</span>{" "}
                  in India faced difficulty during the COVID-19 pandemic-induced
                  lockdown, due to which their education was impeded.
                </span>
                <br />
                <br />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="right-side flex flex-cols items-center">
          <div className="left-side mx-12 mt-[50px]">
            <div className="subtitile text-[#F18384] mb-[40px] text-center">
              <h2>
                <span className="text-2xl text-[#241652]">
                  At least{" "}
                  <span className="text-[#FF0000]">35 million children</span>{" "}
                  between the ages of 6 and 14 do not attend school. Of this,
                  53% are girls who are kept at home and illiterate.
                </span>
                <br />
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="left-side mx-12">
          <div className="p-7">
            <img src={Fact2} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="left-side mx-12">
          <div className="p-7">
            <img src={Fact3} alt="" className="w-full object-cover" />
          </div>
        </div>
        <div className="right-side flex flex-cols items-center">
          <div className="left-side mx-12 mt-[50px]">
            <div className="subtitile text-[#F18384] mb-[40px] text-center">
              <h2>
                <span className="text-2xl text-[#241652]">
                  Only <span className="text-[#FF0000]">53%</span> of the
                  population of the country has access and means to a primary
                  school.
                </span>
                <br />
                <br />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5 md:m-10 text-center text-xl">
        <h2 className="text-red-600 md:text-[20px]">
          ....And many more debilitating realities urging community
          intervention. So let’s come together to change the educational
          landscape and create an equitable ground, giving each child
          opportunity and access.
        </h2>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
