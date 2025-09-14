import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function page() {
    return (
        <div className="flex flex-col pb-8" style={{ gap: '5rem' }}>
            <header className="fixed bg-gray-300 z-[99] w-full flex float-right">
                <nav className="flex gap-12 p-4 w-full text-lg justify-end">
                    <Link className="cursor-pointer" href="/"><u>Home</u></Link>
                    <Link className="cursor-pointer" href="/knowMeMore">Know Me More</Link>
                    <a className="cursor-pointer" href=""><u>Resume</u></a>
                </nav>
            </header>
            <br />
            <div className='w-full h-96 p-12 flex items-center justify-center text-center bg-gray-400'>
                <h1 className='text-xl lg:text-3xl md-1/2 lg:w-3/4 font-bold text-center tracking-[0.2rem] text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h1>
            </div>
            {/* Main Content */}
            {/* Propieter */}
            <div className='p-24 flex flex-col justify-evenly gap-[10rem] md:gap-[15rem]'>

                <div className='flex flex-col align-center md:flex-row   md:items-center gap-8 md:justify-evenly'>
                    <div>
                        <Image src='/brand1.png' alt="brand 1" className='drop-shadow-xl' width={300} height={300} />
                    </div>
                    <div className='md:w-1/3 w-full flex flex-col gap-[3rem]'>
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
                    <div className='md:w-1/3 w-full flex flex-col gap-[3rem]'>
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
                    <div className='w-full md:w-1/3 flex flex-col gap-[3rem]'>
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

export default page