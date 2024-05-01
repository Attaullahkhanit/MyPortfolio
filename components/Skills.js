import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <div id="skills" className='relative w-full p-6 my-6'>
      <div className='max-w-[1240] mx-auto flex-col mt-3 justify-center h-full'>
        <p className='text-xl- tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4 mt-0 mb-2 text-4xl font-medium leading-tight'>What I Can Do</h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1'>

            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/html.png" 
                        width='64px' 
                        height="64px" 
                        alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>HTML</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/css.png" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/javascript.png" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>Javascript</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/react.png" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>React Js</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/redux.png" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>Redux Js</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/tailwind.png" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>TailwindCSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/bootstrap5b.png" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>BootStrap5</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/materialize.png" width='70px' height="50px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>Materialize CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/firebase.jpg" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>Firebase</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                <div className='grid justify-center gap-4 grid-col-2 item-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/git.png" width='64px' height="64px" alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='mt-0 mb-2 text-3xl font-medium leading-tight'>GIT</h3>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Skills
