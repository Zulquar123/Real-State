import assets from "../assets/logo.svg"
import menu from "../assets/menu_icon.svg";
import cross from "../assets/cross_icon.svg";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [MobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    if (MobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [MobileMenu]);
  return (
    <div className="absolute top-0 left-0  w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-500">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-500">
            About
          </a>
          <a href="#Project" className="cursor-pointer hover:text-gray-500">
            Project
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-500"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          src={menu}
          onClick={() => setMobileMenu(true)}
          className="md:hidden w-7"
          alt=""
        />
      </div>

      {/* ================== Mobile Menu ====================== */}

      <div
        className={` ${
          MobileMenu ? "fixed w-full" : "h-0 w-0"
        }  md:hidden  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={cross}
            className="w-6"
            alt=""
            onClick={() => setMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium cursor-pointer">
          <a
            onClick={() => setMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}
