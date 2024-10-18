import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Contact() {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userSubject: "",
    userMsg: "",
  });
  const handleInputValueChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <section className="bg-[#fcfbfb]">
      <div className="pt-12 px-14 mb-10 xs:pt-24 xs:px-2 md:px-10 xl:px-14 xl:pt-13">
        <h4 className="text-center tracking-widest font-semibold font-mono text-red-500">
          CONTACT
        </h4>
        <h1 className="text-center text-3xl font-bold xs:text-2xl xs:px-3 md:text-3xl xl:px-0">
          I'd Love To Hear From You.
        </h1>
        <p className="text-center m-auto w-1/2 mt-3 text-gray-600 xs:w-full xs:px-3 xl:w-2/3">
          Have a project or an idea you'd like to share? I'm all ears! Feel free
          to get in touch, and let's explore how we can work together to create
          something amazing.
        </p>
        <form
          className="w-3/4 m-auto xs:w-[80%] xl:w-3/4"
          onSubmit={handleSubmitForm}
        >
          <input
            type="text"
            name="userName"
            id="userName"
            value={user.userName}
            onChange={handleInputValueChange}
            placeholder="Name"
            required
            
            className="w-full border-b-[1px] outline-none bg-[#fcfbfb] py-4 px-2 my-3 mt-10 focus:border-gray-500 focus:duration-500 xs:my-1 xs:mt-5 xl:mt-10"
          />
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={user.userEmail}
            onChange={handleInputValueChange}
            placeholder="Email"
            required
            className="w-full border-b-[1px] outline-none bg-[#fcfbfb] py-4 px-2 focus:border-gray-500 focus:duration-500"
          />
          <input
            type="text"
            name="userSubject"
            id="userSubject"
            placeholder="Subject"
            required
            value={user.userSubject}
            onChange={handleInputValueChange}
            className="w-full border-b-[1px] outline-none bg-[#fcfbfb] py-4 px-2 focus:border-gray-500 focus:duration-500"
          />
          <textarea
            name="userMsg"
            id="userMsg"
            placeholder="message"
            required
            value={user.userMsg}
            onChange={handleInputValueChange}
            className="w-full border-b-[1px] outline-none bg-[#fcfbfb] py-4 px-2 focus:border-gray-500 focus:duration-500 h-32"
          ></textarea>
          <button className="text-sm bg-pink-700 hover:bg-pink-600 duration-500 mt-7 w-full py-4 text-white font-medium tracking-widest">
            SUBMIT
          </button>
        </form>
        <div className="flex justify-between w-[90%] mt-10 xl:mt-16 m-auto xs:block md:flex">
          <div className="w-1/3   text-center flex justify-center items-center flex-col xs:w-full xs:mb-8">
            <IoLocationSharp className="text-2xl xs:text-4xl" />
            <h4 className="text-sm font-bold mt-4 mb-2">WHERE TO FIND ME</h4>
            <p className="text-base font-normal">
              Delhi, Near Nangloi Metro Station
            </p>
          </div>
          <div className="w-1/4   text-center flex justify-center items-center flex-col xs:w-full xs:mb-8">
            <MdEmail className="text-2xl xs:text-4xl" />
            <h4 className="text-sm font-bold mt-4 mb-2">EMAIL ME AT</h4>
            <p className="text-base font-normal">saurabhkumar22278@gmail.com</p>
          </div>
          <div className="w-1/4  text-center flex justify-center items-center flex-col xs:w-full xs:mb-8 md:w-3/5">
            <IoCall className="text-2xl xs:text-4xl" />
            <h4 className="text-sm font-bold mt-4 mb-2">CALL ME AT</h4>
            <p className="text-base font-normal">+91-8920023440</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
