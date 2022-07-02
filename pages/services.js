import React from 'react';
import Image from 'next/image';
import { Element } from "react-scroll";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi"
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai"
import csslogo from "../public/icons/css-logo.png";
import nextjs from "../public/icons/nextjs.png";
import tailwind from "../public/icons/tailwind-logo.png";
import react from "../public/icons/reactjs.png";
import recoil from "../public/icons/recoil.png";
import c from "../public/icons/chash.png";
import python from "../public/icons/python-logo.jpeg";
import django from "../public/icons/django-logo.png";
import flask from "../public/icons/flask-logo.png";
import postgres from "../public/icons/postgres-logo.png";
import mysql from "../public/icons/mysql-logo.png";
import mssql from "../public/icons/mssql-logo.png";
import cloud from "../public/icons/google-cloud-logo.png";
import git from "../public/icons/git-logo.png";
import figma from "../public/icons/figma-logo.png";
import vscode from "../public/icons/vscode-logo.jpeg";


function services() {
  return (
    <Element id='services' name='services'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-900 '>My Skills</p>
            <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Expertise</h1>

            <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <GiCardboardBox className='w-10 h-10 bg-yellow-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '>Front-end</h2>
                    </div>
                    <div className='flex justify-between text-center mx-20 my-10 md:gap-10 gap-8'>
                    <div className='flex-grow justify-center items-center cursor-pointer  '>
                    <Image
                    src={csslogo} alt='css'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2 rounded-full
                    border-black m-2'
                    />
                    <Image
                    src={nextjs} alt='nextjs'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-1 hover:text-black rounded-full'
                    />
                    <Image
                    src={tailwind} alt='tailwind'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-2 rounded-full hover:text-black'
                    />
                    <Image
                    src={react} alt='react'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-2 rounded-full hover:text-black'
                    />
                    <Image
                    src={recoil} alt='recoil'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-2 rounded-full border-black border-[2px] '
                    />
                        
                    </div>
                </div>

                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'>JavaScript is like my main meal of the day. with frame</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <HiColorSwatch className='w-10 h-10 bg-red-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '>Back-end</h2>
                    </div>
                    <div className='flex justify-between text-center mx-20 my-10 md:gap-10 gap-8'>
                    <div className='flex-grow justify-center items-center cursor-pointer  '>
                    <Image
                    src={python} alt='python'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2 rounded-full
                    border-black m-2'
                    />
                    <Image
                    src={c} alt='c'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-1 hover:text-black rounded-full'
                    />
                    <Image
                    src={flask} alt='tailwind'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-2 rounded-full hover:text-black'
                    />
                    <Image
                    src={react} alt='react'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-2 rounded-full hover:text-black'
                    />
                    
                        
                    </div>
                </div>
                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'></p>
                </div>
            </div>
            {/* scond section */}
            <div className='flex justify-items-start items-center mx-40 gat-10 mt-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <MdDeveloperBoard className='w-10 h-10 bg-green-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '> Databases & cloud</h2>
                    </div>
                    <div className='flex justify-between text-center mx-20 my-10 md:gap-10 gap-2'>
                    <div className='flex-grow mb-3 justify-center items-center cursor-pointer space-x-8'>
                    <Image
                    src={postgres} alt='postgres'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-1 hover:text-black'
                    />
                    <Image
                    src={mysql} alt='mysql'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-1 hover:text-black'
                    />
                    <Image
                    src={mssql} alt='mssql'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-1 hover:text-black'
                    />
                    <Image
                    src={cloud} alt='react'
                    layout='fixed'
                    objectFit='contain'
                    height={110}
                    width={120}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-2 hover:text-black'
                    />
                    
                    </div>
                </div>
                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'></p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <AiOutlineBlock className='w-10 h-10 bg-blue-400 text-gray-600 m-3 p-1 shadow-xl rounded-md'/>
                            <h2 className='text-xl text-indigo-600 font-bold '>Design & Tools</h2>
                    </div>
                    <div className='flex justify-between text-center mx-20 my-10 md:gap-10 gap-8'>
                    <div className='flex-grow justify-center items-center cursor-pointer  space-x-10'>
                    <Image
                    src={figma} alt='figma'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 md:m-3 p-2 border-2 rounded-full
                    border-black m-2'
                    />
                    <Image
                    src={git} alt='git'
                    layout='fixed'
                    objectFit='contain'
                    height={100}
                    width={100}
                    className='sm:h-3 sm:w-3 w-6 h-6 text-gray-400 md:m-3 p-1 hover:text-black rounded-full'
                    />
                    <Image
                    src={vscode} alt='vscode'
                    layout='fixed'
                    objectFit='contain'
                    height={80}
                    width={60}
                    className='sm:h-3 sm:w-3  text-gray-400 md:m-3 p-2 rounded-full hover:text-black mr-4 mb-8'
                    />
                   
                        
                    </div>
                </div>
                    <p  className='md:text-base text-gray-500 md:text-center sm:text-left sm:text-sm pr-6'></p>
                </div>
            </div> 
            {/* scond section */}
            
        </div>
       
    </Element>
  )
}

export default services