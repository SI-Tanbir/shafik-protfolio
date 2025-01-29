import React from "react";
import img from "../../public/img/1.png";
import Image from "next/image";
import { Github, Linkedin, MailOpen } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" container  ">
      <div className="navbar bg-base-100  text-black  ">
        <div className="flex-1">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-60 rounded-full">
              <Image alt="Shafik bage" src={img} />
            </div>
          </div>
          <a className="btn btn-outline border border-secondary text-xl">
            Shafikul Islam
          </a>

          <div>
            <ul className="flex ml-[25vw] gap-10 text-2xl">
              {/* <li>Home</li> */}
              {/* <li>About Me</li> */}
              {/* <li>Contract Me</li> */}
            </ul>
          </div>
        </div>

        <div className="flex-none gap-2">
          <div className="flex gap-10">
        
            <a
              className="btn btn-outline border border-secondary"
              href="https://github.com/SI-Tanbir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="text-gray-400 hover:text-secondary transition-colors"
                size={28}
              />
              Github
            </a>
            <a
              className="btn btn-outline border border-secondary"
              href="https://www.linkedin.com/in/shafikul-islam-22a280316/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                className="text-gray-400 hover:text-secondary transition-colors"
                size={28}
              />
              Linkedin
            </a>
            <a
              className="btn btn-outline border border-secondary flex items-center gap-2 px-4 py-2"
              href="mailto:shafiktanbir@gmail.com?subject=Hello%20Shafikul!&body=I%20would%20like%20to%20contact%20you."
            >
              <MailOpen
                className="text-gray-400 hover:text-secondary transition-colors"
                size={24}
              />
              Mail Me
            </a>

            <a href="#contract" className="btn btn-outline btn-secondary">
              Hire me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
