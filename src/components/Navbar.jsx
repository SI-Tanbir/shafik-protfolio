"use client";

import React, { useState } from "react";
import img from "../../public/img/1.png";
import Image from "next/image";
import { AlignJustify, Github, Linkedin, MailOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container w-full">
      <div className="navbar bg-base-100 text-black flex justify-between items-center p-4">


        <div className="flex items-center gap-4">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-20 rounded-full">
              <Image alt="Shafik badge" src={img} />
            </div>
          </div>
          <a className="btn btn-outline border border-secondary text-xl">Shafikul Islam</a>
        </div>



        {/* Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-square btn-outline">
            <AlignJustify className="text-gray-400 hover:text-secondary transition-colors" />
          </button>
        </div>



        {/* Navigation Links */}
        <div className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-base-100 shadow-md lg:shadow-none lg:flex flex-col lg:flex-row items-center gap-4 p-4 lg:p-0 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="menu menu-vertical lg:menu-horizontal w-full lg:w-auto gap-4">
            <li>
              <a className="btn btn-outline border border-secondary" href="https://github.com/SI-Tanbir" target="_blank" rel="noopener noreferrer">
                <Github className="text-gray-400 hover:text-secondary transition-colors" size={28} /> Github
              </a>
            </li>
            <li>
              <a className="btn btn-outline border border-secondary" href="https://www.linkedin.com/in/shafikul-islam-22a280316/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-400 hover:text-secondary transition-colors" size={28} /> Linkedin
              </a>
            </li>
            <li>
              <a className="btn btn-outline border border-secondary flex items-center gap-2 px-4 py-2" href="mailto:shafiktanbir@gmail.com?subject=Hello%20Shafikul!&body=I%20would%20like%20to%20contact%20you.">
                <MailOpen className="text-gray-400 hover:text-secondary transition-colors" size={24} /> Mail Me
              </a>
            </li>
            <li>
              <a href="#contract" className="btn btn-outline btn-secondary">Hire me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
