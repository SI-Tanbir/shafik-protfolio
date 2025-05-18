"use client";
import React, { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import img from "../../public/img/1.png";

const Banner = () => {
  let imageBanner = useRef(null);
  let bannerContent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Image and content animation
    gsap.from(imageBanner.current, {
      delay: 1,
      x: -300,
      opacity: 0,
      ease: "bounce.out",
      duration: 0.4,
    });

    gsap.from(bannerContent.current, {
      delay: 1,
      x: 300,
      opacity: 0,
      ease: "bounce.out",
      duration: 0.4,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-slate-100 md:pt-20">
      <main className="flex flex-col md:flex-row items-center justify-center gap-16 md:p-10">
        {/* Profile Image */}
        <div
          ref={imageBanner}
          className="md:w-[40%] w-full flex justify-center"
        >
          <Image
            src={img}
            alt="Shafikul Islam"
            width={300}
            height={300}
            className="shadow-2xl w-[350px] h-[350px] shadow-slate-600 rounded-full object-cover"
          />
        </div>

        {/* Text Section with Typewriter Effect */}
        <div
          ref={bannerContent}
          className="text-center md:text-left md:w-[60%]"
        >
          <h2 className="text-4xl font-bold text-gray-950 mb-2">
            <Typewriter
              words={["Hello, I am Shafikul Islam"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-gray-800 text-xl mb-6">
            A passionate Junior Web Developer eager to contribute to
            cutting-edge web projects. Proficient in front-end development using
            HTML, CSS, JavaScript, and React.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/Shafikul_Islam_v23.pdf"
              download="Shafikul_Islam_v23.pdf"
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
    </div>
  );
};

export default Banner;
