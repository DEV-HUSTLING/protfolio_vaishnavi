'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import'../mobile.css'
function Page() {
      const [menu, setMenu] = useState(false)
    
    return (
        <div className="flex flex-col pb-8 knowMemore">
            <header className="fixed bg-gray-300 z-[99] w-full flex float-right big-menu">
                <nav className="flex gap-12 p-4 w-full text-lg justify-end">
                    <Link className="cursor-pointer" href="/"><u>Home</u></Link>
                    <Link className="cursor-pointer" href="/knowMeMore">Know Me More</Link>
                    <a className="cursor-pointer" href=""><u>Resume</u></a>
                </nav>
            </header>
            {/* Short menu for mobiles */}
      <button className="flex justify-items-start short-menu-btn" onClick={()=>setMenu(!menu)} >
        <Image
            src='/menu.png'
            alt="Menu Img"
            width={60}
            height={60}
          />
      </button>
      {menu?<header className="fixed bg-gray-300 w-xs flex items-start justify-between float-right short-menu">
        <nav className="flex flex-col gap-12 p-4 w-fit text-lg justify-end">
          <Link className="cursor-pointer" href="/">Home</Link>
          <Link className="cursor-pointer" href="/knowMeMore"><u>Know Me More</u></Link>
          <a  className="cursor-pointer" href=""><u>Resume</u></a>
        </nav>
        <button onClick={()=>setMenu(!menu)}>close</button>
      </header>:null}
            <br />
            <div className='w-full h-96 p-12 flex items-center justify-center text-center bg-gray-400 know-me-cover'>
                <h1 className='text-xl lg:text-3xl md-1/2 lg:w-3/4 font-bold text-center tracking-[0.2rem] text-white'>
Personal Branding Strategist, full-time mom, and Founder of AYIRA PEB Solutions, helping leaders build LinkedIn authority and connecting suppliers with clients through seamless industrial roofing solutions — all whilst raising my child with <span className='bg-green-500 p-2'>strength and purpose.</span>                </h1>
            </div>
            {/* Main Content */}
            {/* Propieter */}
            <div className='p-24 flex flex-col justify-evenly gap-[10rem] md:gap-[15rem]'>

                <div className='flex flex-col align-center md:flex-row   md:items-center gap-8 md:justify-evenly'>
                    <div>
                        <Image src='/brand1.png' alt="brand 1" className='drop-shadow-xl' width={300} height={300} />
                    </div>
                    <div className='md:w-1/3 w-full flex flex-col gap-[3rem] article-content'>
                        <div>
                            <h1 className='text-5xl'><b>AYIRA PEB SOLUTION</b></h1>
                            <p className='text-gray-500 text-lg'><b>
                                One-stop destination for all industrail needs
                            </b></p>
                        </div>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                {/* New Section */}
                <div className='flex flex-col align-center md:flex-row   md:items-center md:justify-evenly'>
                    <div>
                        <Image src='/giphy.gif' alt="brand 1" className='drop-shadow-xl' width={300} height={300} />
                    </div>
                    <div className='md:w-1/3 w-full flex flex-col gap-[3rem] article-content'>
                        <div>
                            <h1 className='text-5xl'><b>LinkedIn Brand Strategist</b></h1>
                            <p className='text-gray-500 text-lg'><b>
                                Empowering Brands with Data & Design
                            </b></p>
                        </div>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a className='text-blue-600' target='blank' href="https://www.linkedin.com/in/vaishnavi-brand-strategist/"><b>visit</b></a>.
                        </p>
                    </div>
                </div>

                {/* New Section */}
                <div className='flex flex-col align-center md:flex-row   md:items-center md:justify-evenly'>
                    <div>
                        <Image src='/motherHood.png' alt="brand 1" className='drop-shadow-xl grayscale' width={300} height={250} />
                    </div>
                    <div className='w-full md:w-1/3 flex flex-col gap-[3rem] article-content'>
                        <div>
                            <h1 className='text-5xl'><b>Mother Hood</b></h1>
                            <p className='text-gray-500 text-lg'><b>
                                One-stop destination for all industrail needs
                            </b></p>
                        </div>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page