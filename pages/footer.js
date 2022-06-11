import React from 'react';
import {AiTwotoneHeart} from "react-icons/ai"

function footer() {
  return (
    <div className='w-full h-16 bg-gray-50 flex justify-center items-center'>
        <h1 className='text-xl text-blue-800 mr-2'>Made by </h1>
        <AiTwotoneHeart className='text-black'/>
        <h1 className='text-xl text-blue-800 ml-2 cursor-pointer hover:bg-black'>Created by <a href='#'
         className=' font-bold text-indigo-800 hover:bg-black underline'>
             </a> Alphonce</h1>
    </div>
  )
}

export default footer