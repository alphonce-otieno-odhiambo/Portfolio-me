import React from 'react';
import { Element } from "react-scroll"

function contact() {
  return (
    <Element id='contact' name='contact'>
        <div>
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
            <p className='text-gray-500 uppercase font-bold'>contact</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>Contact</h1>
                <div className='flex justify-center text-center md:w-1/2 w-full my-5 '>
                    <input type='text' name='email-address' id='email-address' autoComplete='email' placeholder='xyz@gmail.com'
                    className='mt-5 pb-1 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-indigo-500 h-10 pl-8'
                    />
                    <button className='mt-5 text-xl w-36 h-10 text-white-900 rounded-tr-lg rounded-br-lg hover:bg-black bg-indigo-700'>Submit</button>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default contact