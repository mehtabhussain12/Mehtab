import React from "react";
import { FC } from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

const Contact: FC = () => {
  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center mt-12">
        <div className="flex flex-col gap-y-6 sm:flex sm:flex-row sm:gap-x-6 sm:gap-y-0  w-full max-w-4xl rounded-xl p-8 shadow-custom  mx-4">
          <div className="flex flex-col justify-between  gap-y-8 text-white">
            <div>
              <h1 className="font-bold sm:text-4xl text-xl tracking-wide ">Contact Me</h1>
              <p className="pt-2 tetxt-sm  ">
                Feel free to reach out. I’ll try my best to respond as soon as
                possible.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="inline-flex gap-x-2 items-center">
                <IoMdCall />
                <p>+923273366851</p>
              </div>
              <div className="inline-flex gap-x-2 items-center">
              <IoMdMail />
              <a href="mailto:hsiddiqui697@gmail.com" className="">mehtabmughal688@gmail.com</a>
              </div>
            </div>
            <div>
              <div className="flex gap-x-4  ">
                <Link href={"https://www.instagram.com/mamehtab714/"}>
                  <AiOutlineInstagram size={30} />
                </Link>
                <Link href={"https://www.facebook.com/mehtab.mughal.9085/"}>
                  <AiOutlineFacebook size={30} />
                </Link>
                <Link href={"https://www.linkedin.com/in/mehtab-hussain12"}>
                  <AiOutlineLinkedin size={30} />
                </Link>
                <Link href={"https://github.com/mehtabhussain12"}>
                  <AiOutlineGithub size={30} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 sm:w-80 ">
            <form className="flex flex-col gap-y-4">
             
              <div>
                <label htmlFor="">Your Name</label>
                <input type="text"  placeholder="Your Name" className="ring-1 ring-gray-600 w-full px-4 py-2 outline-none rounded-md mt-2"/>
              </div>
              <div>
              <label htmlFor="">Email Address</label>
              <input type="email"  placeholder="Email Address" className="ring-1 ring-gray-600 w-full px-4 py-2 outline-none rounded-md mt-2"/>
              </div>
              <div>
              <label htmlFor="">Message</label>
              <textarea placeholder="Message" className="ring-1 ring-gray-600 w-full px-4 py-2 outline-none rounded-md mt-2"> </textarea>
              </div>
              <button  className="inline-block self-end bg-[#232732] text-white font-bold rounded-lg px-6 py-2 uppercase text-sm" >
              send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
