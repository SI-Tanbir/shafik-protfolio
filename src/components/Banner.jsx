import Image from 'next/image'
import React from 'react'
import img from "../../public/img/1.png"

const Banner = () => {
  return (


    <div>  <main className="flex flex-col   md:flex-row items-center justify-center max-w-6xl gap-10 p-6">


    <div className="  w-[20vw]">
      <Image
        src={img}
        alt="Shafikul Islam"
        width={1000}
        // height={900}
        // layout="fill"
        className=" shadow-lg shadow-slate-500 rounded-full "
      />
    </div>


    <div className="w-[50vw] text-center md:text-left">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Hello, I am{" "}
        <span className="text-brown-700">Shafikul Islam</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Hello! Shafikul Islam, a passionate Junior Web Developer eager
        to contribute to cutting-edge web projects. Proficient in front-end
        development using HTML, CSS, JavaScript, and React, with a solid
        understanding of back-end technologies like Node.js and Express.
      </p>
      <div className="flex justify-center md:justify-start space-x-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Download CV
        </button>
        <button className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
          Learn More
        </button>
      </div>
    </div>



  </main>

    </div>



  )
}

export default Banner