import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContactUs as CU } from "../assets/index.js";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-[90px] relative">
          <a href="https://forms.gle/dXEtDCtDnWPFnY8z6" target="_blank">
            <img src={CU} alt="" className="w-full" />
          </a>
        </div>
        <div className="buttons text-white m-4 flex flex-col items-center">
          <a href="https://forms.gle/dXEtDCtDnWPFnY8z6" target="_blank">
            <button className="bg-[#F18384] p-3 inline-flex items-center hover:opacity-80">
              <span className="mx-2">Become a Volunteer!</span>
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
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
