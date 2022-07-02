import React from 'react';
import { Element } from "react-scroll";




import Image from 'next/image';
import cannect from "../public/icons/carnnect.png";
import ig from "../public/icons/ig.png";
import hotlineb from "../public/icons/hotlineb.png";
import netflix from "../public/icons/netflix.png";
import design from "../public/icons/design.png";

function work() {
  return (
   <Element 
   id='work'
   name='work'
   >
       <div>
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <p className='text-gray-500 uppercase font-bold'>projects</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Creative Work</h1>
                <div className='flex justify-between text-center mx-20 my-10 md:gap-10 space-x-4'>
                    <div className='flex justify-center cursor-pointer p-4 '>
                   <a href='https://carnnect.herokuapp.com/accounts/login/?next=/'>
                   <Image
                    src={cannect} alt='css'
                    layout='fixed'
                    objectFit='contain'
                    height={250}
                    width={250}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2
                    border-black m-2 hover:scale-105 transition transform duration-200 ease-out '
                    /></a> 
                    <a href='https://instagram-c9zmp5lix-odhiamboalphonce23-gmailcom.vercel.app/'>
                        <Image
                    src={ig} alt='css'
                    layout='fixed'
                    objectFit='contain'
                    height={250}
                    width={250}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2 
                    border-black m-2 hover:scale-105 transition transform duration-200 ease-out'
                    />
                    </a>
                    <a href='https://hotlineblink.herokuapp.com/'>
                        <Image
                    src={hotlineb} alt='css'
                    layout='fixed'
                    objectFit='contain'
                    height={250}
                    width={250}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2 
                    border-black m-2 hover:scale-105 transition transform duration-200 ease-out'
                    />
                    </a>
                    <a href='https://peaceful-brown-e4226c.netlify.app/'>
                        <Image
                    src={netflix} alt='css'
                    layout='fixed'
                    objectFit='contain'
                    height={250}
                    width={250}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2 
                    border-black m-2 hover:scale-105 transition transform duration-200 ease-out'
                    />
                    </a>
                    <a href='https://valentine-ochieng.github.io/Interior-Design-Website/'>
                        <Image
                    src={design} alt='css'
                    layout='fixed'
                    objectFit='contain'
                    height={250}
                    width={250}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2 
                    border-black m-2 hover:scale-105 transition transform duration-200 ease-out'
                    />
                    </a>
                    </div>
                </div>
            </div>
        </div>
   </Element>
  )
}

export default work