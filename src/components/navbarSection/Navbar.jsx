import React, { useState } from "react";
import Sk from "../../assets/sk.png";
import { NavLink } from "react-router-dom";
import Resume from "../../assets/Saurabhm Kumar CV.pdf";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [humBurgur, setHumBurgur] = useState(false);
  const handleNavbar = () => {
    setHumBurgur(!humBurgur);
  };
  return (
    <div className="shadow-xl fixed h-screen w-1/4 xs:w-full xs:h-14 z-30 xs:shadow-sm xs:bg-white lg:shadow-xl  lg:h-screen lg:w-1/4">
      <nav
        className={`flex flex-col justify-center  gap-7 px-20 xs:px-0  xs:gap-0 xs:${
          humBurgur ? "h-screen" : "h-full"
        } lg:gap-7 lg:px-20 lg:h-screen`}
      >
        <div className="logo flex items-end relative xs:justify-between xs:items-center xs:pt-1 xs:px-4  lg:p-0  lg:items-end lg:w-[65%] xl:w-1/3">
          <img
            src={Sk}
            className="w-1/2 xs:w-[13.5%] xm:w-[12%] sl:w-[11%] sm:w-[7%] md:w-[5.5%] lg:w-full xl:w-full"
            alt="Saurabh Kumar"
          />
          <span className="absolute xs:hidden lg:block left-[3.8rem] xs:left-12 xs:-bottom-[2px] xs:font-semibold bottom-2 text-lg font-bold tracking-widest xm:left-12 sl:left-[53px]  sm:bottom-0 md:left-12 md:-bottom-1 lg:left-[3.3rem] lg:bottom-0 lg:text-xl lg:font-bold">
            umar
          </span>
          <div className="flex text-3xl lg:hidden">
            {humBurgur ? (
              <RxCross2 className="" onClick={handleNavbar} />
            ) : (
              <RxHamburgerMenu className="" onClick={handleNavbar} />
            )}
          </div>
        </div>

        <ul
          className={`text-lg flex flex-col gap-3 xs:justify-center xs:gap-6 xs:items-end xs:h-[90vh] lg:h-1/3 lg:items-center lg:gap-3 lg:flex-col ${
            humBurgur ? "flex" : "hidden"
          } lg:flex lg:text-lg`}
        >
          <div className="text-lg flex flex-col gap-3 xs:justify-center xs:gap-4 xs:pr-4 xs:font-normal xs:pb-16 xs:items-end xs:w-3/5 xs:bg-[#FFFFFF] xs:z-10 xs:h-[90vh] sm:w-2/5 md:w-1/3 lg:gap-3 lg:flex-col lg:flex lg:h-full lg:w-full lg:items-start lg:text-lg lg:p-0 lg:justify-normal">
            <li>
              <NavLink
                to="/"
                className={(e) => {
                  return e.isActive ? "text-[#000000]" : "text-[#767676]";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(e) => {
                  return e.isActive ? "text-[#000000]" : "text-[#767676]";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <a
                href={Resume}
                download
                 className="text-[#767676] hover:text-[#000000]"
              >
                Resume
              </a>
            </li>
            {/* <li>
              <NavLink
                to="/portfolio"
                className={(e) => {
                  return e.isActive ? "text-[#000000]" : "text-[#767676]";
                }}
              >
                Portfolio
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={(e) => {
                  return e.isActive ? "text-[#000000]" : "text-[#767676]";
                }}
              >
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
