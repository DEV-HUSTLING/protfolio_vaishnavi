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
import { motion, AnimatePresence, easeInOut } from "framer-motion";

export default function Home() {
  const sectionToScrollToRef = useRef(null)
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    AOS.init();

    if (sectionToScrollToRef.current) {
      sectionToScrollToRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  }, [])
  const sections =[
    {
      id:0, page:<div className="cover-main font-sans flex  justify-between items-center min-h-screen  gap-16 sm:p-20" >
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
            className="coverImg-tag"
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
      </div>},
     { id:1, page: <AboutMe />},
     { id:2, page: <Work />},
      {id:3, page: <Testimonial />},

    
  ]
  const [secActive, setSecActive] = useState(0)
  useEffect(()=>{
  let lastChange = Date.now();
  let touchStartY = 0;
  let touchEndY = 0;

  const changeSection = (direction) => {
    const now = Date.now();
    if (now - lastChange < 800) return; // wait 0.8s before next change
    lastChange = now;

    setSecActive((prev) => {
      if (direction === "down") return Math.min(prev + 1, sections.length - 1);
      return Math.max(prev - 1, 0);
    });
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      changeSection("down");
    } else {
      changeSection("up");
    }
  };

  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartY - touchEndY;
    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        // Swipe Up → next section
        setSecActive((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        // Swipe Down → previous section
        setSecActive((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: true });
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchend", handleTouchEnd, { passive: true });

  return () => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchend", handleTouchEnd);
  };
  },[])
  console.log(secActive)
  console.log(sections[secActive].id)
  return (
    <div className="relative flex flex-col justify-center overflow-hidden h-screen" ref={sectionToScrollToRef}>
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
      {menu?
      
      <header className=" w-xs flex items-start justify-between float-right short-menu">
        <nav className="flex flex-col gap-12 p-4 w-fit text-lg text-left justify-end">
          <Link 
          data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
          className="cursor-pointer" href="/">Home</Link>
          <Link 
          data-aos="fade-right"
              data-aos-offset="100"
               data-aos-delay="500"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
          className="cursor-pointer" href="/myJourney"><u>My Journey</u></Link>
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
      <AnimatePresence mode="wait">
        <motion.div
        key={secActive}
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.6, ease:easeInOut}}
        className="absolute top-0 bottom-0 left-0 right-0 margin-auto h-screen w-screen"
        >
      {sections[secActive].page}
      </motion.div>
      </AnimatePresence>

      {/* <footer className="absolute bottom-0 left-0 right-0 text-grey italic text-sm p-4 text-center flex gap-8 flex-col justify-center items-center">
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
      </footer> */}
    </div>
  );
}
