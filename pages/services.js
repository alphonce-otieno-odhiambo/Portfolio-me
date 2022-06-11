import React from 'react';
import { Element } from "react-scroll";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi"
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai"


function services() {
  return (
    <Element id='services' name='services'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-900 '>My Skills</p>
            <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Expertise</h1>

            <div className='flex justify-items-start items-center mx-40 gat-10 mt-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <GiCardboardBox className='w-10 h-10 bg-yellow-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '>Strategy & Direction</h2>
                    </div>
                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <HiColorSwatch className='w-10 h-10 bg-red-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '>Branding & Logo</h2>
                    </div>
                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            {/* scond section */}
            <div className='flex justify-items-start items-center mx-40 gat-10 mt-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <MdDeveloperBoard className='w-10 h-10 bg-green-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '>Motion & Animation</h2>
                    </div>
                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <AiOutlineBlock className='w-10 h-10 bg-blue-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '>Design & Development</h2>
                    </div>
                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
       
    </Element>
  )
}

export default services