'use client'
import Image from "next/image";
import Testimonial from "./testimonial/page"
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import'./mobile.css'
import Work from "./work/page"
import AboutMe from "./aboutMe/page"

export default function Home() {
  const sectionToScrollToRef = useRef(null)
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    AOS.init();

    if (sectionToScrollToRef.current) {
      sectionToScrollToRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  }, [])

  return (
    <div className="flex flex-col overflow-hidden" ref={sectionToScrollToRef}>
      <header className="fixed border-b-1 w-full flex justify-between z-1 items-center px-6 big-menu" style={{backgroundColor:'#FFFBE9'}}>
        <h1 className="text-2xl">Vaishnavi</h1>
        <nav className="flex gap-12 p-4 w-full text-lg justify-end">
          <Link className="cursor-pointer" href="/">Home</Link>
          <Link className="cursor-pointer" href="/knowMeMore"><u>Know Me More</u></Link>
          <a  className="cursor-pointer" href=""><u>Resume</u></a>
        </nav>
      </header>
      {/* Short menu for mobiles */}
      <button className="invisible flex justify-items-start" onClick={()=>setMenu(!menu)} >
        <Image
            src='/menu.png'
            alt="Menu Img"
            width={60}
            height={60}
          />
      </button>
      {menu?<header className="fixed w-xs flex items-start justify-between float-right short-menu">
        <nav className="flex flex-col gap-12 p-4 w-fit text-lg justify-end">
          <Link className="cursor-pointer" href="/">Home</Link>
          <Link className="cursor-pointer" href="/knowMeMore"><u>Know Me More</u></Link>
          <a  className="cursor-pointer" href=""><u>Resume</u></a>
        </nav>
        <button onClick={()=>setMenu(!menu)}>
          <Image
            src='/menu.png'
            alt="Menu Img"
            width={60}
            height={60}
          />
        </button>
      </header>:null}
      <div className="cover-main font-sans flex  justify-between items-center min-h-screen  gap-16 sm:p-20" >
        <div className="coverImg w-full">
          <Image
            data-aos=" fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            src='/titleImgpng.png'
            alt="Title Img"
            width={800}
            height={800}
          />
        </div>
        <div className="Title-Content w-1/2">
          <span className="title flex flex-col gap-8 width-fit">
            <h1
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="60"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-6xl bg-yellow-300 p-2 w-fit">Hi</h1>
            <h1
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="60"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-6xl bg-yellow-300 p-2 w-fit ">I am</h1>
            <h1
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="text-6xl bg-yellow-300 p-2 w-fit ">Vaishnavi</h1>
          </span>
          <span className="caption w-full">
            <p 
            data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="1000"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            className="text-lg italic">A 26 year old. A Daughter. A Wife. A Mother. An Entrepreneur.</p>
          </span>
        </div>
      </div>
      {/* About me section */}
      <AboutMe />
      {/* Work Section */}
      <Work />
      {/* Testimonial */}
      <Testimonial />
      {/* new section */}
      <footer className="text-grey italic text-sm p-4 text-center flex gap-8 flex-col justify-center items-center">
        <div className="flex items-center gap-8">
          <a href="https://www.linkedin.com/in/anushka-gangidi-a7377277" target="blank"><Image
          src={"/insta.png"}
          width={30}
          height={30}
          alt="logo"
          />
          </a>
          <a href="https://www.linkedin.com/in/anushka-gangidi-a7377277" target="blank"><Image
          src={"/LinkedIn_icon.png"}
          width={30}
          height={30}
          alt="logo"
          />
          </a>
        </div>
        <p className="text-gray-400">Developed by Anushka</p>
      </footer>
    </div>
  );
}
