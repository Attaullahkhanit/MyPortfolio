import React from 'react';
import {AiOutlineMail } from 'react-icons/ai';
import {FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'; 


function Main() {
  return (

    <div id="home" className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-3 flex justify-center items-center'>
        <div>
            <p className='pt-10 text-sm font-bold tracking-widest text-gray-600 uppercase'>LETS BUILD SOMETHING TOGETHER</p>
            <h1 className='py-1 mt-0 mb-0 text-5xl font-medium leading-tight text-gray-700'>
                Hi, I am <span className='text-[#5651e5]'>Attaullah Khan</span>
            </h1>
            <h1 className='py-2 text-gray-700'>A Front End React Js Developer</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I am a front End React Js Web Developer spacializing in building and occasionally designing exceptional digital experience.
                Currently, I am focused on building responsive front-end web applications while learning back-end technologies.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className='p-6 text-xl duration-300 bg-[#0072b1] ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                    <FaLinkedinIn className='bg-[#0072b1] text-[#ffffff]'/>
                </div>
                <div className='p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                    <FaGithub className='rounded-xl' size={20}/>
                </div>
                <div className='p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                    <AiOutlineMail className='text-[red]'/>
                </div>
                <div className='p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                    <BsFillPersonLinesFill/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
