import React from 'react';
import Image from "next/image"
import bold from "../public/icons/bold.JPG";
import { Element } from "react-scroll"
function homePage() {
  return (
      <Element id='home' id='home'>
        <div>
            <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
                <div className='w-[584px] h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
                    <Image
                    src={bold} alt='bold'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full cursor-pointer md:block'
                    />
                </div>
                <div className='flex flex-col md:ml-20 mt-10'>
                    <h1 className='font-bold text-7xl text-left mb-5'>
                        Hello, I am <span className='text-indigo-800'>Alphonce</span>
                    </h1>
                        <p className='text-left font-normal mb-5 flex-wrap'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        of letters, as opposed to using 'Content here, content here', making it look like 
                        </p>
                        <a href='#' className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black'>
                            see my portfolio!
                        </a>
                </div>

            </div>
        </div>
    </Element>
  )
}

export default homePage