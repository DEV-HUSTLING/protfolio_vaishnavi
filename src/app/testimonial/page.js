'use client'
import React, { useEffect, useState } from 'react'
import '../globals.css'
import Image from "next/image";
import { motion,AnimatePresence } from "motion/react";
import '../mobile.css'

function Page() {
  const Img=[
    {src:'/testimonial/evi1.png',caption:'img-1'},
    {src:'/testimonial/evi2.png',caption:'img-1'},
    {src:'/testimonial/evi3.png',caption:'img-1'},
  ]
  const[curr, setCurr] = useState(0)
  const[autoplay, setAutoplay] =useState(true)
  useEffect(()=>{
    const timer = setInterval(()=>{
    setCurr((prev)=>(prev+1)%Img.length)
    },3000)
    return ()=>clearInterval(timer)
  },[autoplay])
  return (
    <div className='h-screen overflow-hidden relative'>
    <div className="testimonial flex items-center justify-center h-1/2  ">
        <p className='mt-24 w-full sm:w-full md:w-full w-full text-4xl text-center text-black font-bold text-shadow-lg/20'>
            I will listen to your words,
            Understand you by heart,
            and build connections that resonates true value.
        </p>
    </div>
    <div className='flex items-center w-full justify-center h-1/2 slideshow'>
    <div 
    data-aos="flip-down"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
    
    className='scoller relative w-full h-full flex items-center justify-center'>
      {Img.map((it,index)=> 
      {
        const offset = index - curr;
          let transform = `translateX(${offset * 60}%) scale(${1 - Math.abs(offset) * 0.2})`;
          let blur = Math.min(Math.abs(offset) * 3, 6);
          let zIndex = 100 - Math.abs(offset);
      return(
      <motion.div 
      key={index}
        className="absolute transition-all duration-500 ease-in-out"
        animate={{ opacity: offset === 0 ? 1 : 0.7 }}
        style={{
                zIndex,
                filter: `blur(${blur}px)`,
                transform,
              }}
      >
        <Image
        src={it.src}
        width={600}
        height={150}
        alt='evidence'
        className='rounded-lg'
        />
      </motion.div>
      )
    })}
    </div>
    </div>
 </div>
  )
}

export default Page