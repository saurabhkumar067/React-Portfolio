import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi";

function About() {
  const skills = [
    {
      name: "Html",
      pre: 95,
    },
    {
      name: "Css",
      pre: 90,
    },
    {
      name: "JavaScript",
      pre: 80,
    },
    {
      name: "Tailwind",
      pre: 85,
    },
    {
      name: "React",
      pre: 85,
    },
    {
      name: "Gsap",
      pre: 65,
    },
  ];
  return (
    <section className="bg-[#fcfbfb] ">
      <div className=" px-16 py-10 xs:px-4 xs:pb-8 xs:pt-20 xm:px-5 sl:pt-20 md:px-10 xl:px-16 xl:py-10">
        <h1 className="text-6xl font-semibold xs:text-4xl xl:text-6xl">About me</h1>
        <div className="line border-b-[1px] w-3/4 mt-7 mb-10 border-[#c0b7b7] xs:mb-3"></div>
        <p className="text-gray-500">
          Bringing concepts to life through engaging web experiences is at the
          heart of my work. During my 6-month internship and a freelancing
          project, I crafted visually stunning, intuitive websites that
          captivate users, seamlessly blending creativity and functionality.
          With a deep understanding of web architecture, I create solutions that
          are both innovative and efficient, delivering projects that stand out
          in a digital world.
        </p>
        <div className="my-10 mb-20 xs:my-8 xl:my-10">
          <h4 className="text-xl font-bold mb-7">Programming Skills</h4>
          <ul className="grid grid-cols-2 gap-y-8 gap-x-10 xs:grid-cols-1 xs:px-7 xs:gap-y-3 md:grid-cols-2 xl:px-0 xl:gap-y-8">
            {skills.map((item, index) => {
              const sa = parseInt(item.pre);
              // console.log(typeof sa);
              return (
                <li key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-500 tracking-wider">{item.name}</p>
                    <p className="text-gray-500">{item.pre}%</p>
                  </div>
                  <div className="w-full h-[2px] bg-gray-300 ">
                    <div
                      className="h-[2px] bg-black"
                      style={{ width: `${item.pre}%` }}
                    ></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div>
            <h3 className="text-2xl font-bold mb-4 xs:mb-3 xl:mb-4">
              More of my credentials.
            </h3>
            <p className="text-gray-700 text-lg xs:text-base xl:text-lg">
              I have experience collaborating in fast-paced environments, where
              I enjoy working closely with teams to deliver quality solutions.
              My approach centers around understanding user needs and
              translating them into clean, effective, and scalable designs. I'm
              continuously pushing my creative and technical boundaries to stay
              ahead in the ever-evolving world of web development.
            </p>
          </div>
          <div className="z-10 relative">
            <h4 className="text-xl text-gray-800 font-semibold text-center mt-8 xs:mb-4 md:text-3xl md:mb-8 xl:text-xl">
              Work Experience
            </h4>
            <div className="relative xs:pl-4 xm:-z-10 ">
              <div className="flex gap-7 justify-between">
                <div className="relative w-40 flex flex-col justify-center items-center">
                  <div className="w-[1.3px] h-full bg-black absolute"></div>
                  <div className="bg-[#313131] p-3 rounded-full absolute top-0">
                    <HiOutlineBriefcase className="text-white text-2xl" />
                  </div>
                  <div className="bg-[#313131] p-3 rounded-full absolute top-60 xs:top-[34.3%] md:top-[35.5%] xl:top-[34.5%]">
                    <HiOutlineBriefcase className="text-white text-2xl" />
                  </div>
                  <div className="bg-[#313131] p-3 rounded-full absolute top-[30.5rem] xs:top-[62%] md:top-[65%]">
                    <HiOutlineBriefcase className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <h4 className="text-xl font-semibold xs:text-lg xl:text-xl">
                        Front-end Developer Inten
                      </h4>
                      <p className="text-gray-600 mt-1 xs:text-sm">
                        April 2024 - September
                      </p>
                    </div>
                    <div className="w-12 my-4 h-[3px] bg-gray-500 rounded-full"></div>
                    <div>
                      <h5 className="text-lg font-semibold">Web Agency</h5>
                      <p className="mt-2 mb-12 text-gray-500 xs:text-sm xl:text-base">
                        I contributed to building and enhancing web applications
                        by turning design concepts into responsive, functional
                        websites. I worked closely with the team, assisting in
                        coding, debugging, and refining user interfaces. This
                        role provided valuable hands-on experience and the
                        opportunity to grow in a dynamic, team-oriented
                        environment, allowing me to contribute to real projects
                        that improved user experiences.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4 className="text-xl font-semibold xs:text-lg xl:text-xl">
                        Front-end Developer
                      </h4>
                      <p className="text-gray-600 mt-1 xs:text-sm">
                        March 2024 - April
                      </p>
                    </div>
                    <div className="w-12 my-4 h-[3px] bg-gray-500 rounded-full"></div>
                    <div>
                      <h5 className="text-lg font-semibold">Freelance</h5>
                      <p className="mt-2 mb-12 text-gray-500 xs:text-sm xl:text-base">
                        I worked on a travel project, creating a seamless user
                        experience for exploring destinations. I implemented
                        responsive layouts and optimized performance to ensure
                        easy navigation, focusing on usability and engaging
                        visuals to help travelers find information effortlessly
                        across devices.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4 className="text-xl font-semibold xs:text-lg xl:text-xl">
                        Front-end Developer
                      </h4>
                      {/* <p className="text-gray-600 mt-1">
                        July 2015 - June 2018
                      </p> */}
                    </div>
                    <div className="w-12 my-4 h-[3px] bg-gray-500 rounded-full"></div>
                    <div>
                      <h5 className="text-lg font-semibold xs:text-base xl:text-lg">
                        Practice Project's
                      </h5>
                      <p className="mt-2 mb-6 text-gray-500 xs:text-sm xl:text-base">
                        I have developed several practice projects that
                        highlight my ability to create engaging web
                        applications. The Ochi Design Project features a modern
                        layout with responsive designs and smooth navigation.
                        The Pokémon App allows users to explore various Pokémon
                        species, complete with search functionality and detailed
                        information. The Drag-and-Drop Page offers interactive
                        features, enabling users to rearrange items easily
                        through drag-and-drop functionality. Each project
                        showcases my commitment to delivering quality user
                        experiences and emphasizes attention to detail in design
                        and functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
