import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Bk1,
  Bk2,
  Bk3,
  Blue,
  Impact,
  Ob,
  PDF1,
  PDF2,
  PDF3,
  RWW1,
  RWW2,
  RWW3,
  Cam,
} from "../constants/index.js";

const Campaign = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[90px] relative">
        <img src={Blue} alt="" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl text-white font-bold">OUR CAMPAIGN</p>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <div className="heading below main pic mb-[50px]">
          <p className="italic text-3xl text-[#59CCBE] font-bold">
            “Access to a library and the treasure of knowledge that books have
            to offer should not be a privilege”
          </p>
        </div>
        <div className="title text-[#F18384] mb-[40px]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            BOOK DRIVE
          </h1>
        </div>
        <div className="heading flex flex-col items-center text-center">
          <p className="text-[#241652]">
            We reached out to our network, including friends from school and
            acquaintances, using messaging and social media platforms to
            disseminate information and seek contributions. The community in our
            hometown generously donated a large number of books they no longer
            found useful. These ranged from storybooks suitable for all ages to
            religious texts, dictionaries, materials for competitive exams, and
            even school-level textbooks. During the initial months, our
            principal focus was on efficiently coordinating the drop-off and
            collection of these books from various locations throughout the
            city, followed by storage in preparation for the sorting process.
          </p>
        </div>
        <div className="images grid grid-cols-3 gap-5 m-10">
          <div className="relative overflow-hidden h-80">
            <img src={Bk1} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative overflow-hidden h-80">
            <img src={Bk2} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative overflow-hidden h-80">
            <img src={Bk3} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <div className="title text-[#F18384] mb-[40px]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            BOOK RESALE
          </h1>
        </div>
        <div className="heading flex flex-col items-center text-center">
          <p className="text-[#241652]">
            We sifted through the donated books to identify those suitable for
            resale at significantly reduced prices, primarily focusing on
            novels, biographies, and children's books. We repackaged these books
            using paper and ribbon, attached tags and cataloged these specially
            curated collections in brochures. Utilizing social media and local
            children's groups, we disseminated these brochures and the response
            exceeded our expectations, leading to a swift sell-out of our
            initial round. Encouraged by this positive reception, we organized
            multiple rounds of these sales, collecting large funds and creating
            a sustainable and impactful initiative that served both the
            community and a noble cause.
          </p>
        </div>
        <div className="images grid grid-cols-3 gap-5 m-10">
          <div>
            <a href="https://drive.google.com/file/d/1EP0lMH5tprjwrfscsV34cCcRta8G5lgq/view" target="_blank">
              <img src={PDF1} alt="" />
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1ckqcJkUo4D18V326Ie_QXE2MA3Nep-u_/view" target="_blank">
              <img src={PDF2} alt="" />
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1OydVm1LxtinmgUJWYybtS6SFn0ATci_W/view" target="_blank">
              <img src={PDF3} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <div className="title text-[#F18384] mb-[40px]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            LIBRARY CREATION{" "}
          </h1>
        </div>
        <div className="heading flex flex-col items-center text-center">
          <p className="text-[#241652]">
            Books have been the most empowering tool of providing education.
            There are millions of children and young adults from vulnerable,
            underprivileged backgrounds who are deprived of proper schooling,
            mentorship and learning. It is at this time that books can help
            create a change- give exposure to a myriad of topics, help boost
            confidence, affect decision making and build on one’s capabilities
            and understanding of the world.
          </p>
          <br />
          <p className="text-[#241652]">
            The sad reality is that even though some have access to textbooks,
            the world of storybooks is still unknown to them. Through this
            campaign, we created libraries in NGOs and rural schools with the
            objective of:
          </p>
          <br />
        </div>
        <div className="image">
          <div>
            <img src={Ob} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <div className="title text-[#F18384] mb-[40px]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            FUND GENERATION
          </h1>
        </div>
        <div className="heading flex flex-col items-center text-center">
          <p className="text-[#241652]">
            The primary source of our funding stemmed from the proceeds
            generated through the resale of books. Additionally, we remained
            open to donations, and several contributors stepped forward
            generously. Initially, the funds were allocated to procure sanitary
            napkins and other menstrual hygiene products, which were then
            distributed among young girls lacking access to these essentials.
            Furthermore, the funds were utilized to purchase stationery and
            educational kits, which were distributed multiple times among
            children residing in slum areas through collaborations with various
            on ground local NGOs. The entirety of our initiatives, spanning
            workshops, the establishment of libraries, and the celebration of
            festivals with underprivileged children, has been sustained through
            these funds. This comprehensive campaign is an ongoing endeavor,
            with the intention of perpetuating its impact through periodic and
            sustainable sales and donations.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <div className="title text-[#F18384] mb-[40px]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            IMPACT{" "}
          </h1>
        </div>

        <div className="image">
          <div>
            <img src={Impact} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <div className="title text-[#F18384] mb-[40px]">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            READING WORKSHOPS
          </h1>
        </div>
        <div className="heading flex flex-col items-center text-center">
          <p className="text-[#241652]">
            An important segment of our campaign was the mini-library creation
            for NGOs and hosting reading and storytelling workshops with
            children from underserved communities. In these workshops, we
            highlighted the vital role of reading in education. Pronunciation
            and literary tools were taught, enhancing language skills. Through
            engaging visuals, we engaged in telling stories suited to their age,
            emphasizing voice projection and confident English communication.
            Recognizing challenges in fluency, we collaborated with local
            teachers to tailor effective teaching methods and learning tools.
          </p>
          <br />
          <p className="text-[#241652]">
            The workshop concluded with empowering initiatives - a wish list for
            future books, fostering anticipation, and a book list to track
            completed reads from the mini library which local teachers would
            return to us every 2 months. Interactive sessions fueled curiosity,
            leaving a lasting impact on spoken, reading, and written fluency.
            Our approach not only instills a love for stories but empowers these
            young minds with essential language skills, setting them on a
            transformative educational journey.
          </p>
        </div>
        <div className="images grid grid-cols-3 gap-5 m-10">
          <div className="relative overflow-hidden h-80">
            <img src={RWW1} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative overflow-hidden h-80">
            <img src={RWW2} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative overflow-hidden h-80">
            <img src={RWW3} alt="" className="object-cover w-full h-full" />
          </div>
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

      <Footer />
    </div>
  );
};

export default Campaign;
