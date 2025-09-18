import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='relative h-screen'>
        <h1 className='absolute top-0 left-0 right-0 m-auto text-5xl text-center font-serif italic'>
                Who Am I?
            </h1>
    <div className='absolute top-0 bottom-0 flex items-center justify-items-end justify-evenly'>
        <div className='w-full flex justify-center'>
        <Image
        src={'/aboutMe.png'}
        width={400}
        height={400}
        alt='aboutMe'
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="500"
                      data-aos-once="false"

        />
        </div>
        <div className='relative w-full flex justify-center'>
            <div 
            data-aos="flip-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            className='absolute w-3/5 h-full -top-12 bg-gray-100 -rotate-15 rounded-md z-[-1]'></div>
            <div 
            data-aos="flip-up"
            data-aos-delay="200"
            data-aos-duration="2000"
            className='bg-yellow-300 drop-shadow-xl p-8 w-3/5 rounded-md'>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Know me more
                </h1>
            </div>

        </div>
    </div>
    </div>
  )
}

export default page