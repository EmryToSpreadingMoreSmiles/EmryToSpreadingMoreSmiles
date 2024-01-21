import { motion } from "framer-motion";

import { styles } from "../styles";
import Contact from "./Footer";
import Navbar from "./Navbar";
import { HomePageImage, OurStory, WhoWeAre } from "../constants/index.js";
const Home = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative w-full h-screen text-center"
        style={{
          backgroundImage: `url(${HomePageImage})`, // Update the path to the image
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: "0.9",
        }}
      >
        <div className="absolute inset-0 top-[690px] w-full h-[90px] bg-white w-full p-5 bg-opacity-30">
          <h2 className={`text-white ${styles.heroSubText}`}>
            <span className="text-5xl">To Spreading More Smiles!</span>
          </h2>
        </div>
      </section>
      <div className="w-full bg-white h-auto grid grid-cols-1 md:grid-cols-2">
        <div className="left-side mx-12 mt-[100px]">
          <div className="title text-[#59CCBE] mb-[40px]">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
              Who We Are?
            </h1>
          </div>
          <div className="subtitile text-[#F18384] mb-[40px]">
            <h2>
              Introducing EMRY, a non profit with a mission to address the
              educational needs of underprivileged communities. Founded by a
              group of four friends—Eira, Mahe, Riya, and Yashvi—this initiative
              emerged during the height of the COVID-19 crisis while we were
              still in high school.
            </h2>
          </div>
          <div className="subtext text-[#241652] mb-10">
            <h2>
              Having been actively involved in social and community work since a
              very young age, EMRY is an extension of our commitment to
              fostering education and empowering those in need, reflecting our
              belief in the transformative power of knowledge and the impact it
              can have on communities. Join us in this journey as we strive to
              create lasting change through the pages of education, creating
              stories of growth and success.
            </h2>
          </div>
          <div className="buttons text-white ">
            <button className="bg-[#2774AC] p-3 inline-flex items-center hover:opacity-80">
              <span className="mx-2">Read More</span>
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
        <div className="right-side">
          <div className="mt-10 p-7">
            <img
              src={OurStory}
              alt=""
              className="w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="left-side mx-12">
          <div className="p-7">
            <img
              src={WhoWeAre}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="right-side">
          <div className="left-side mx-12 mt-[50px]">
            <div className="title text-[#59CCBE] mb-[40px]">
              <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
                Our Story
              </h1>
            </div>
            <div className="subtitile text-[#F18384] mb-[40px]">
              <h2>
                <span className="text-[#241652]">
                  The coronavirus pandemic had adversely affected over 290
                  million students globally and had put crores of children out
                  of school in India alone. It is during these tough times that
                  most of us turned to books, to seek respite from the reality
                  around us. However, we noticed that so many among us had
                  shelves of books lying idle-either untouched or read and
                  forgotten.{" "}
                </span><br /><br />

                <span className="text-[#F18384]">
                  We founded ‘EMRY’ when we realized that in these difficult
                  times there were children and young adults out there who did
                  not have access to story books, most even oblivious to the
                  fact that they are essential tools of learning, development
                  and exposure.{" "}
                </span><br /><br />

                <span className="text-[#241652]">
                  Growing up, we have explored the universe through books in our
                  schools and homes and the benefits they have to offer. Which
                  is why, as a community, we wish to create change in our own
                  small way. By giving children and young adults from lesser
                  privileged sections of society access to story books, we can
                  help open the doors to their imagination, creativity and
                  skills. Everyone deserves an equal opportunity to learn and it
                  is our duty to come together and make it possible.
                </span><br /><br />

                <span className="text-[#241652]">
                  With a simple forward on Whatsapp we conducted a citywide
                  collection of second-hand books receiving an overwhelming
                  response. Seeing the massive response, we decided to turn it
                  into an initiative for opening libraries and since then have
                  continued collections and held second hand book sales for
                  funds, selling hundreds. With the hope of giving as many
                  children as possible a story book in their hand, we launched
                  this campaign.{" "}
                </span>
              </h2>
            </div>
            
            <div className="buttons text-white ">
              <button className="bg-[#2774AC] p-3 inline-flex items-center hover:opacity-80">
                <span className="mx-2">Read More</span>
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
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Home;
