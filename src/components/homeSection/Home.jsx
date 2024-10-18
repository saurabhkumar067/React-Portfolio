import React from "react";
import SaurabhImage from "../../assets/Saurabh.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

function Home() {
  return (
    <section className="bg-[#fcfbfb] md:py-3">
      <div className="flex gap-5 justify-between items-center h-screen px-28 xs:justify-center xs:flex-col xs:px-2 sm:mt-12 md:mt-20 lg:m-0 lg:px-20 xl:px-28 lg:flex-row lg:justify-between lg:items-center">
        <div className="container items-center flex justify-center w-2/3 mr-16 xs:mr-0 xs:w-2/4 lg:w-2/3 lg:mr-6 xl:mr-10 xl:w-2/4">
          <img
            src={SaurabhImage}
            className="shape animate-morph bg-custom-gradient z-[auto]  bg-no-repeat"
            style={{ outline: "10px solid #afa5a542" }}
          />
        </div>
        <div className="text xs:flex xs:justify-center xs:items-center xs:flex-col lg:flex-row lg:block">
          <h1 className="text-5xl font-bold xs:text-3xl lg:text-4xl">
            SAURABH KUMAR
          </h1>
          <p className="text-base text-[#777777] my-5 xs:mb-7 xs:text-center lg:text-start">
            I'm a Front-End Developer who builds dynamic, user-friendly
            websites, focusing on functionality and responsiveness.
          </p>
          <div className="icons flex text-xl gap-3 xs:gap-8 lg:gap-3 xl:gap-7">
            <a href="https://www.facebook.com/people/S%C3%B8urav-K%C5%ABm%C4%81r/pfbid02FBo8ZAbNzczCi9CBSWj8dmuzd3UqyGpBiTqNcspH7gsP9enZTZkwtS2ZG1PkEPFql/" target="_black">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/in/saurabhkumar-delhi/" target="_black">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/saurabhkumar067" target="_black">
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
