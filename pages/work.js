import React from 'react';
import { Element } from "react-scroll"
import Image from 'next/image';
import bagger from "../public/icons/bagger.jpg"
import car from "../public/icons/car.jpg"
import des from "../public/icons/des.jpg"
import foo from "../public/icons/foo.jpg"
import plate from "../public/icons/plate.jpg"
import eagle from "../public/icons/eagle.jpg"

function work() {
  return (
   <Element 
   id='work'
   name='work'
   >
       <div className=' w-full my-20 h-auto flex flex-col items-center justify-center'>
            <p className='text-sm uppercase text-gray-400'>Portfolio</p>
            <h2 className='text-indigo-900 text-6xl font-bold text-bold'>All creative Work</h2>
            <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10'>
                <div className='rounded w-80 h-60 shadow-xl relative'>
                    <Image 
                        src={bagger}  
                        alt='bagger'
                        layout='fill'
                        objectFit='cover'
                        className='p-2 rounded cursor-pointer'                  
                    />
                    <Image 
                        src={car}  
                        alt='car'
                        layout='fill'
                        objectFit='cover'
                        className='p-2 rounded cursor-pointer'                  
                    />
                    <Image 
                        src={des}  
                        alt='des'
                        layout='fill'
                        objectFit='cover'
                        className='p-2 rounded cursor-pointer'                  
                    />
                </div>
            </div>
            <div className='md:flex sm:flex-col md:flex-row justify-center items-start sm:gap-10 sm:pb-10 mt-10'>
                <div className='rounded w-80 h-60 shadow-xl relative'>
                    <Image 
                        src={foo}  
                        alt='foo'
                        layout='fill'
                        objectFit='cover'
                        className='p-2 rounded cursor-pointer'                  
                    />
                    <Image 
                        src={plate}  
                        alt='plate'
                        layout='fill'
                        objectFit='cover'
                        className='p-2 rounded cursor-pointer'                  
                    />
                    <Image 
                        src={eagle}  
                        alt='eagle'
                        layout='fill'
                        objectFit='cover'
                        className='p-2 rounded cursor-pointer'                  
                    />
                </div>
            </div>
       </div>

   </Element>
  )
}

export default work