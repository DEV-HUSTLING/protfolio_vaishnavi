'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import '../mobile.css'
function Page() {
    const [menu, setMenu] = useState(false)
    return (
        <div className='relative'>
            <header className="absolute top-0 border-b-1 w-full flex justify-between z-1 items-center px-6 big-menu" style={{backgroundColor:'#FFFBE9'}}>
        <h1 className="text-2xl">Vaishnavi</h1>
        <nav className="flex gap-12 p-4 w-full text-lg justify-end">
          <Link className="cursor-pointer" href="/"><u>Home</u></Link>
          <Link className="cursor-pointer" href="/myJourney">My Journey</Link>
          <a  className="cursor-pointer" href=""><u>Resume</u></a>
        </nav>
      </header>
      {/* Short menu for mobiles */}
      <button className="invisible flex justify-items-start short-menu-btn" onClick={()=>setMenu(!menu)} >
        <Image
            src='/menu.png'
            alt="Menu Img"
            width={60}
            height={60}
          />
      </button>
      {menu?
      
      <header className=" w-xs flex items-start justify-between float-right short-menu">
        <nav className="flex flex-col gap-12 p-4 w-fit text-lg text-left justify-end">
          <Link 
          data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
          className="cursor-pointer" href="/"><u>Home</u></Link>
          <Link 
          data-aos="fade-right"
              data-aos-offset="100"
               data-aos-delay="500"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
          className="cursor-pointer" href="/myJourney">My Journey</Link>
          <a data-aos="fade-right"
              data-aos-offset="100"
               data-aos-delay="1000"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out" className="cursor-pointer" href=""><u>Resume</u></a>
        </nav>
      
        <button onClick={()=>setMenu(!menu)}>
          <Image
            src='/cross.png'
            alt="Menu Img"
            width={60}
            height={60}
            data-aos="zoom-in"
          />
        </button>
      </header>:null}
            {/* ************************************************ */}
            {/* *******Title****************** */}
            <div className='flex items-center justify-between p-24 myJourney-title'>
                <div className='w-full flex justify-end items-center myJourney-caption'>
                    <h1 className='text-2xl italic  font-serif'>From Motherhood to Entrepreneurship and everything in between.</h1>
                </div>
                <div className='w-5/6 flex justify-center items-center myJourney-title-Img'>
                    <Image
                        src={'/jourImg.webp'}
                        width={450}
                        height={300}
                        alt='journey image'
                        className='flex justify-center rounded-lg myJourney-title-Img-tag'
                    />
                </div>
            </div>
            {/* ********************************************* */}
            <div className='p-12 flex h-min w-full items-start gap-12 justify-center myJourney-gallery'>
            <div className='flex flex-col h-min items-start gap-6 left-grid'>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-96 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-72 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-96 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                
            </div>

        <div className='flex flex-col h-min items-start gap-6 right-grid'>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-72 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-96 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-96 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                
            </div>

            <div className='flex flex-col h-min items-start gap-6 left-grid'>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-96 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-72 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                <div data-aos="zoom-in" className='gallery-card bg-gray-200 rounded-2xl drop-shadow-sm flex flex-col gap-8 w-96 h-96 p-4 myJourney-gallery-card'>
                    <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
                    <p>A small try to find calmness during chaos. </p><br />
                    <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
                        <p className='text-xs'><b>1/2020-2/2021</b></p>
                        <p>blog</p>
                    </span>
                </div>
                
            </div>
            </div>
            <footer className='absolute  w-full left-0 right-0  overflow-hidden bg-black jourFooter' style={{borderTopLeftRadius:'10rem',borderTopRightRadius:'10rem'}}>
                <div className='flex items-center justify-center gap-12 text-white text-xl p-8'>
                    <p>Let's Connect !!</p>
                    <a href="https://www.instagram.com/vaishnavi_harish19/" target="blank"><Image
          src={"/insta.png"}
          width={30}
          height={30}
          alt="logo"
          />
          </a>
          <a href="https://www.linkedin.com/in/vaishnavi-brand-strategist" target="blank"><Image
          src={"/LinkedIn_icon.png"}
          width={30}
          height={30}
          alt="logo"
          />
          </a>
                </div>
                <div className='w-full flex items-center justify-center'> 
                <Image 
                src={'/vyshu.png'}
                width={200}
                height={200}
                alt='footer'
                className='w-[90vw] h-1/2 p-l-12 p-r-12'
                />
                </div>
            </footer>
        </div>
    )
}

export default Page