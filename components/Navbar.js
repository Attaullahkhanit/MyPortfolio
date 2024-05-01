import {React, useState, useEffect} from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import {FaGithub, FaLinkedinIn, } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'; 
import Link from 'next/Link';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  useEffect(()=> {
  const  handleShadow = () => {
      if(window.scrollY >= 200){
        setShadow(true);
      } else{
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  },[]);
  return (
    <>
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
            <Image src='/../public/assets/logotransp.png' alt='/' width='125' height='50' className='content-start px-0 mr-auto'/>
        <div>
          {/* hello testing */}
          <ul className='hidden md:flex'>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href="/#about">
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href="/#skills">
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href="/#projects">
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu  size={25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'fixed top-0 left-0 h-screen w-fall bg-black/70': ''}>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-75% sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 
                                'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex items-center justify-between w-full '>
              <Link href='/'>
              <Image src='/../public/assets/logotransp.png' width='87' height='35' alt='/'/>
              </Link>
              
              <div onClick={handleNav} className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-4'>Lets build something legendary together </p>
            </div>
          </div>
          <div className='flex flex-col py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)}  className='py-4 text-sm'>Home</li> 
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li> 
              </Link>   
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li> 
              </Link>
              <Link href='/#projects'> 
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li> 
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li> 
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                  <FaLinkedinIn/>
                </div>
                <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                  <FaGithub/>
                </div>
                <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                  <AiOutlineMail/>
                </div>
                <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                  <BsFillPersonLinesFill/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
