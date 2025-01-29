"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "react-typewriter-effect";

import img from "../../public/img/1.png";
import icon1 from "../../public/icons/1175110.webp";
import icon2 from "../../public/icons/1689418463906.png";
import icon3 from "../../public/icons/1_doAg1_fMQKWFoub-6gwUiQ.png";
import icon4 from "../../public/icons/featured.png";
import icon5 from "../../public/icons/file-2.png";
import icon6 from "../../public/icons/file.png";
import icon7 from "../../public/icons/free-github-169-1174970.webp";
import icon8 from "../../public/icons/HTML5_logo_and_wordmark.svg.png";
import icon9 from "../../public/icons/images.png";
import icon10 from "../../public/icons/Javascript-shield.svg.png";
import dynamic from "next/dynamic";
import { Download } from "lucide-react";

const Banner = () => {
  const Typewriter = dynamic(() => import("react-typewriter-effect"), { ssr: false });

  return (
    <div className="bg-slate-100 pt-20">
      <main className="flex flex-col md:flex-row items-center justify-center max-w-6xl gap-16 p-20">
        {/* Profile Image */}
        <div>
          <Image
            src={img}
            alt="Shafikul Islam"
            width={300}
            height={300}
            className="shadow-2xl w-[800px] h-[250px] shadow-slate-600 rounded-full object-cover"
          />
        </div>

        {/* Text Section with Typewriter Effect */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-950 mb-2">
            <Typewriter
              text="Hello, I am Shafikul Islam"
              cursorColor="black"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              
            />
          </h2>
          <p className="text-gray-800 text-xl mb-6">
            Hello! I am Shafikul Islam, a passionate Junior Web Developer eager to
            contribute to cutting-edge web projects. Proficient in front-end
            development using HTML, CSS, JavaScript, and React, with a solid
            understanding of back-end technologies like Node.js and Express.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
          

            <a
          href="/Shafikul_Islam_10.pdf"  
          download="/Shafikul_Islam_10.pdf"
          className="bg-primary hover:bg-primary-focus text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all"
        >
          <Download size={20} /> Download CV
        </a>
            
            <button className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Icons Section */}
      <div className="mt-20 p-10">
        <h4 className="text-5xl text-black mb-10">Fully compatible with:</h4>
        <div className="flex justify-evenly flex-wrap gap-4">
          {[icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10].map((icon, index) => (
            <Image key={index} width={100} height={100} src={icon} alt="icons" className="w-16 h-16" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
