import Image from 'next/image'
import React from 'react'
import img from "../../public/img/1.png"

import icon1 from "../../public/icons/1175110.webp"
import icon2 from "../../public/icons/1689418463906.png"
import icon3 from "../../public/icons/1_doAg1_fMQKWFoub-6gwUiQ.png"

import icon4 from "../../public/icons/featured.png"
import icon5 from "../../public/icons/file-2.png"
import icon6 from "../../public/icons/file.png"
import icon7 from "../../public/icons/free-github-169-1174970.webp"
import icon8 from "../../public/icons/HTML5_logo_and_wordmark.svg.png"
import icon9 from "../../public/icons/images.png"
import icon10 from "../../public/icons/Javascript-shield.svg.png"



const Banner = () => {
  return (


    <div>
      
      
        <main className="flex flex-col   md:flex-row items-center justify-center max-w-6xl gap-10  p-6">


    <div className="  w-[25vw]">
      <Image
        src={img}
        alt="Shafikul Islam"
        width={1000}
        // height={900}
        // layout="fill"
        className=" drop-shadow-2xl shadow-slate-600 rounded-full "
      />
    </div>


    <div className="w-[50vw] text-center md:text-left">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">
        Hello, I am{" "}
        <span className="text-brown-700">Shafikul Islam</span>
      </h2>
      <p className="text-gray-600 text-xl mb-6">
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




<div className='mt-20 p-10'>

  <h4 className='text-5xl  mb-10'>Fully compatible with :</h4>
  <div className='flex justify-evenly'> 

    <Image 
   
    width={100}
    src={icon1}
    />
    <Image  width={100} 

    src={icon2}
    /><Image
    width={100}
    src={icon3}
    /><Image

    width={100}
    src={icon4}
    /><Image
    width={100}
    src={icon5}
    /><Image  width={100}
    src={icon6}
    /><Image  width={100}
    src={icon7}
    /><Image  width={100}
    src={icon8}
    /><Image  width={100}
    src={icon9}
    /><Image  width={100}
    src={icon10}
    />






  </div>
</div>




    </div>



  )
}

export default Banner