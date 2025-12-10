import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiSearch } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Searchbar from './Searchbar';
import { CiLocationOn } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";

import Dropdown from "./Dropdown";

const services = ["Commercial Management", "Technical Management", "Crew Management","Consultancy Services"]
const pages = ["Project ", "Project Details", "Faq","Request Qoute"];
const news = ["Blog", "Blog Details"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);

  // 🔥 Hide topbar on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll) {
        setShowTopbar(false); // scrolling down → hide
      } else {
        setShowTopbar(true); // scrolling up → show
      }
      lastScroll = current <= 0 ? 0 : current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden 
          fixed top-0 left-0 w-full z-50
          bg-black/40 backdrop-blur-xl
          border-b border-white/20
          text-white text-[10px]
          px-4 py-2
          lg:flex justify-evenly items-center
          transition-all duration-500
          ${showTopbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* ADDRESS — visible on all screens */}
        <div className="text-white/90 flex items-center space-x-1">
          {/* icon */}
          <div>
            <CiLocationOn className='text-xl font-bold' />
          </div>
          {/* icon */}
          <div>
            <p>H.No. 8, NEERAV NIKUNJ PHASE 1, MAUJA KAKRETHA, AVAS VIKAS COLONY,</p>
            <span> SADAR AGRA, U.P. - 282007</span>
          </div>
        </div>

        <div className='flex gap-5'>
          <div className='flex items-center font-semibold gap-2 text-sm'>
            <IoMailUnreadOutline />
            <span>info@navtexmarine.com</span>
          </div>

          <div className='flex items-center font-semibold gap-2 text-sm'>
            <IoMailUnreadOutline />
            <span>crewing@navtexmarine.com</span>
          </div>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div
          className="flex items-center space-x-3 text-white/80 text-lg">
          <FaFacebook className="hover:text-orange-300 cursor-pointer" />
          <FaInstagram className="hover:text-orange-300 cursor-pointer" />
          <FaLinkedin className="hover:text-orange-300 cursor-pointer" />
          <FaTwitter className="hover:text-orange-300 cursor-pointer" />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className="
          fixed top-10 z-40 left-1/2 -translate-x-1/2
          flex justify-between items-center
          w-[92%] md:w-[85%] lg:w-[78%]
          px-6 py-3 md:px-10 md:py-4
          text-white
          rounded-full
          bg-white/10 backdrop-blur-2xl
          border border-white/30
          shadow-[0_8px_35px_rgba(0,0,0,0.2)]
          ring-1 ring-white/20
        "
        style={{
          boxShadow: "0 15px 25px rgba(255,165,0,0.25)"
        }}
      >
        {/* LEFT MENU */}
        <div className="hidden lg:flex space-x-6 font-medium text-white/90 relative">

          {/* HOME */}
          <Link className="hover:text-orange-300 transition-all" to="/">Home</Link>

          {/* SERVICES DROPDOWN */}
          <div className="group relative">
            <span className="cursor-pointer hover:text-orange-300 transition-all">
              Services+
            </span>

            <div className="opacity-0 group-hover:opacity-100 transition-all">
              <Dropdown items={services} />
            </div>
          </div>

          {/* ABOUT US */}
          <Link className="hover:text-orange-300 transition-all" to="about">About Us</Link>
                    <Link className="hover:text-orange-300 transition-all" to="contact">Contact Us</Link>
        </div>

        {/* LOGO */}
        <div className="w-16 md:w-20">
          <img
            src="/Navtex-logo.png"
            alt="logo"
            className="drop-shadow-[0_0_10px_rgba(255,136,0,0.4)]"
          />
        </div>

        {/* CONTACT + ICONS */}
        <div className="hidden lg:flex items-center space-x-5">
          <span className="text-orange-400 font-semibold tracking-wide">
            +91 8451967013
          </span>

          <button className="text-orange-400 hover:text-orange-300 transition">
            <HiPhone size={22} />
          </button>

          <button
            className="text-white cursor-pointer hover:text-orange-300 transition"
            onClick={() => setShowSearchBar(true)}
          >
            <HiSearch size={22} />
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <HiMenu size={28} className="text-white cursor-pointer drop-shadow-lg" />
          </button>

          <button
            className="text-white cursor-pointer ml-2 hover:text-orange-300 transition"
            onClick={() => setShowSearchBar(true)}
          >
            <HiSearch size={25} />
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      <Searchbar showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-6 text-white text-xl">
          <button
            className="absolute top-6 cursor-pointer right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiX size={34} className="text-orange-300" />
          </button>
          <Link className="hover:text-orange-300 transition" to="#" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link className="hover:text-orange-300 transition" to="#" onClick={() => setIsMenuOpen(false)}>Services+</Link>
          <Link className="hover:text-orange-300 transition" to="#" onClick={() => setIsMenuOpen(false)}>Pages+</Link>
          <Link className="hover:text-orange-300 transition" to="#" onClick={() => setIsMenuOpen(false)}>News+</Link>
          <Link className="hover:text-orange-300 transition" to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <span className="text-orange-500 font-semibold mt-4">+91 8451967013</span>
        </div>
      )}
    </>
  );
};
export default Navbar;