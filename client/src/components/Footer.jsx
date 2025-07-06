import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-[#0a0a14] to-[#0f0f1e] text-gray-300 px-6 md:px-36 lg:px-56 pt-20 pb-10 overflow-hidden z-10">
      {/* Decorative thread stroke */}
      <svg
        className="absolute top-0 left-0 w-full opacity-[0.03] pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C360,100 1080,0 1440,100"
          fill="none"
          stroke="rgba(248,69,101,0.15)"
          strokeWidth="1"
        />
      </svg>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-600 pb-14 gap-12 md:gap-8 relative z-10">
        
        {/* VOID logo and description */}
        <div className="md:max-w-sm">
          <img src={assets.logo} alt="VOID" className="w-36" />
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            Step into <span className="text-primary font-semibold">VOID</span> — where the screen ends and shadows begin.
            Explore stories beyond the edge, where each ticket is a thread in the unseen.
          </p>
          <div className="flex gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="Google Play"
              className="h-9 w-auto hover:scale-105 transition"
            />
            <img
              src={assets.appStore}
              alt="App Store"
              className="h-9 w-auto hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Links & Contact */}
     <div className="flex  md:flex-row md:items-start gap-20 md:gap-40 w-full md:mt-24">

          
          {/* Company Links */}
          <div>
            <h2 className="text-white font-semibold tracking-widest mb-5 text-sm ">
              COMPANY
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Home", "About us", "Contact us", "Privacy policy"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="">
            <h2 className="text-white font-semibold tracking-widest mb-5 text-sm">
              GET IN TOUCH
            </h2>
            <div className="text-sm space-y-2 text-gray-400">
              <p>+1-234-567-VOID</p>
              <p>support@voidscreen.app</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 pt-6 z-10 relative">
        © {new Date().getFullYear()} <span className="text-primary">VOID</span>. All rights reserved in the shadows.
      </p>
    </footer>
  );
};

export default Footer;
