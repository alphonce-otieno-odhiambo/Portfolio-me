import React from 'react';
import Image from "next/image"
import alphonce from "../public/icons/alphonce.jpg";
import { Element } from "react-scroll"
function homePage() {
  return (
      <Element id='home' name='home'>
        <div>
            <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28 '>
                <div className='w-[584px] h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
                    <Image
                    src={alphonce} alt='alphonce'
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
                        I am a Software engineer in the field of software development(Full stack) doing both websites and mobile applications.I've got intesive skills on different front-end packages(Reactjs,Angular, .NET) & back-end as well(Python-django, C#) also databases(Postgressql,MySQL ). 
                         tudied in Moringa School plus a lot of self commitments and researches.
                        <b/>
                        I'm Currently working on WEB 3.0 knowledge and projects and I welcome you all to work with me to improve Tech industries. 
                        </p>
                        <a href='https://github.com/alphonce-otieno-odhiambo' className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black'>
                            see my GitHub page!
                        </a>
                </div>

            </div>
        </div>
    </Element>
  )
}

export default homePage