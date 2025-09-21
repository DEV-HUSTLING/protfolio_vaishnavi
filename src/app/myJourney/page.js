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
          <Link className="cursor-pointer" href="/">Home</Link>
          <Link className="cursor-pointer" href="/myJourney"><u>My Journey</u></Link>
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
      {menu?<
        header className=" w-xs flex items-start justify-between float-right short-menu">
        <nav className="flex flex-col gap-12 p-4 w-fit text-lg justify-end">
          <Link className="cursor-pointer" href="/">Home</Link>
          <Link className="cursor-pointer" href="/myJourney"><u>My Journey</u></Link>
          <a  className="cursor-pointer" href=""><u>Resume</u></a>
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

        </div>
    )
}

export default Page