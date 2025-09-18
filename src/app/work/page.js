import React from 'react'
import Image from "next/image";
import '../globals.css'
import '../mobile.css'
export default function page() {
    return (
        <div className='flex flex-col gap-y-12 h-screen'>
            <h1 className='text-5xl text-center font-serif italic'>
                What I Do?
            </h1>
            <div className='flex items-center justify-evenly work-frames'>
                <div className='image-frame'>
                    <div 
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
              data-aos-easing="ease-in-out"
                    className="l-border"></div>

                    <div 
                    data-aos="zoom-in"
                     data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
                    className='p-12 w-full h-full'>
                        <Image
                            src={'/brand1.png'}
                            alt='brand'
                            width={200}
                            height={200}
                            style={{height:'250px', width:'230px'}}
                        />
                        <h1 className='text-2xl font-bold p-2'>AYIRA PEB SOLUTION</h1>
                        <p className='pl-2 text-red-500 text-lg font-bold'>Founder</p>
                    </div>

                    <div 
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
              data-aos-easing="ease-in-out"
                    className="l-border-bottom"></div>

                </div>
                <div className='image-frame'>
                    <div 
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
              data-aos-easing="ease-in-out"
                    className="l-border"></div>

                    <div 
                    data-aos="zoom-in"
                     data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
                    className='p-14 w-full h-full'>
                        <Image
                            src={'/branstra.png'}
                            alt='brand'
                            width={100}
                            height={100}
                            style={{width:'250px',height:'230px'}}
                        />
                        <h1 className='text-2xl font-bold p-2'>LinkedIn Brand <br/> Stratergist</h1>
                        <p className='pl-2 text-red-500 text-lg font-bold'>Strategist</p>
                    </div>
                    
                    <div 
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
              data-aos-easing="ease-in-out"
                    className="l-border-bottom"></div>

                </div>
            </div>
        </div>
    )
}
