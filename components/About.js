import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='flex items-center w-full h-full p-2 py-16 md:'>
        <div className='max-w-[1240px] m-auto md:grid grid-col-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>About</p>
                <h2 className='py-4 mt-0 mb-2 text-4xl font-medium leading-tight'>Who I Am</h2>
                <p className='py-2 text-gray-600'> I am Not Your Normal Developer</p>
                <p className='py-2 text-gray-600'>I have spent the 3 years in the fire service working as a professional firefighter & paramadic. I have always had 
                    a knack for technology and working with computers. in 2020 i started working with HTML5 & CSS3 to make some minor edits 
                    on a small business website that i was operating. What I thought was just a few small edits turned into a love for programing
                </p>
                <p className='py-2 text-gray-600'>
                    Fascinated with how intricat programing can be I was quickly drawn to learn more. I started learning javascript and was even more enthused
                    with making websites interactive. I then started freelancing for e-commerce companies on the Shopify platform. I am now spending my time building
                    projects with React JS, Firebase, and learning new technologies.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check Out some of my latest projects.</p>
                <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
                    <Image className='rounded-xl' src='/../public/assets/laptop.jpg' 
                    width='300px' 
                    height='200px' 
                    alt='/aboutproj1' 
                    /> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About