import React from 'react';
import { Element } from "react-scroll";
import { FaAirbnb} from "react-icons/fa";
import { FaAmazon} from "react-icons/fa";
import { FaDropbox} from "react-icons/fa";
import { FaMicrosoft} from "react-icons/fa";
import { FaApple} from "react-icons/fa";

function clients() {
  return (
    <Element id='Clients' name='Clients'>
        <div>
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <p className='text-gray-500 uppercase font-bold'>clients</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Clients</h1>
                <div className='flex justify-between text-center mx-20 my-10 md:gap-10 gap-2'>
                    <div className='flex justify-center items-center cursor-pointer space-x-8'>
                        <FaAirbnb className='md:h-20 md:w-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
                        <FaAmazon className='md:h-20 md:w-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
                        <FaDropbox className='md:h-20 md:w-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
                        <FaMicrosoft className='md:h-20 md:w-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
                        <FaApple className='md:h-20 md:w-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
                    </div>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default clients