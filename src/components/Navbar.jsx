"use client";

import React, { useEffect, useRef, useState } from "react";
import img from "../../public/img/1.png";
import Image from "next/image";
import { AlignJustify, Github, Linkedin, MailOpen } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    // Animate the whole container first
    tl.from(headRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      scale: 1,
    });

    // Animate all elements with the class 'HeaderContent'
    tl.from(
      headRef.current.querySelectorAll(".HeaderContent"),
      {
        y: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.4,
        ease: "bounce.out",
      },
      1
    );

    tl.from(
      headRef.current.querySelectorAll(".HeaderContentReverse"),
      {
        y: -40,
        opacity: 0,
        duration: 0.6,
        stagger: -0.4,
        ease: "bounce.out",
      },
      1
    );

    // Animate the button separately, targetting the button explicitly
    // tl.from(headRef.current.querySelector("button"), {
    //   x: 20,
    //   opacity: 0,
    //   duration: 1,
    // });
  }, []);

  return (
    <div ref={headRef} className="container w-full">
      <div className="navbar bg-base-100 text-black flex justify-between items-center p-4">
        {/* left side */}
        <div className="flex items-center gap-4 HeaderContent">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-20 rounded-full ">
              <Image alt="Shafik badge" src={img} />
            </div>
          </div>
          <button className=" border px-4 py-2 rounded-xl border-pink-500 text-xl HeaderContent font-bold hover:bg-[#3b3b3f] hover:text-white hover:duration-100 hover:border-none">
            Shafikul Islam
          </button>
        </div>

        {/* Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-square btn-outline"
          >
            <AlignJustify className="text-gray-400 hover:text-secondary transition-colors" />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-base-100 shadow-md lg:shadow-none lg:flex flex-col lg:flex-row items-center gap-4 p-4 lg:p-0 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="menu menu-vertical lg:menu-horizontal w-full lg:w-auto gap-4">
            <li className="HeaderContentReverse">
              <a
                className="btn btn-outline border border-secondary "
                href="https://github.com/SI-Tanbir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  className="text-gray-400 hover:text-secondary transition-colors "
                  size={28}
                />{" "}
                Github
              </a>
            </li>
            <li className="HeaderContentReverse">
              <a
                className="btn btn-outline border border-secondary"
                href="https://www.linkedin.com/in/shafikul-islam-22a280316/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  className="text-gray-400 hover:text-secondary transition-colors"
                  size={28}
                />{" "}
                Linkedin
              </a>
            </li>
            <li className="HeaderContentReverse">
              <a
                className="btn btn-outline border border-secondary flex items-center gap-2 px-4 py-2"
                href="mailto:shafiktanbir@gmail.com?subject=Hello%20Shafikul!&body=I%20would%20like%20to%20contact%20you."
              >
                <MailOpen
                  className="text-gray-400 hover:text-secondary transition-colors"
                  size={24}
                />{" "}
                Mail Me
              </a>
            </li>
            <li className="HeaderContentReverse">
              <a href="#contract" className="btn btn-outline btn-secondary">
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
