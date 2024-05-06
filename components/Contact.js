import React from "react";
import Image from "next/image";
import Link from "next/Link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
//import '../styles/globals.css';
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 mt-0 mb-2 text-4xl font-medium leading-tight">
          Get In Touch
        </h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/*Left Side */}
          <div className="w-full h-full col-span-3 p-1 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  width="530px"
                  height="360px"
                  src="/../public/assets/imageone.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4 mt-0 mb-2 text-4xl font-bold leading-tight">
                  Name here
                </h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full time positions. Contact me and lets
                  talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/attaullahkhanit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-6 text-xl duration-300 bg-[#0072b1] ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                      <FaLinkedinIn className="bg-[#0072b1] text-[#ffffff]" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Attaullahkhanit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
                      style={{ backgroundColor: "#000000" }}
                    >
                      <FaGithub className="rounded-xl text-white" size={20} />
                    </div>
                  </a>

                  <a href="mailto:attaullahkhanit@gmail.com">
                    <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                      <AiOutlineMail className="text-[red]" />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/923448985072"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
                      style={{ backgroundColor: "#5FFC7B" }}
                    >
                      <FaWhatsapp style={{ color: "white" }} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Right Side */}

          <div className="w-full h-auto shadow-xl col-span-3 shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300"
                    rows="10"
                    type="text"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  {" "}
                  Send Message{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
