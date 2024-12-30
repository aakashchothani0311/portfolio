"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text:4xl sm:text-5xl lg:text-7xl font-extrabold'>
                        Hey👋🏻, I am <br/>
                        <TypeAnimation
                            className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
                            sequence={[
                                'Aakash Chothani',
                                1000,
                                'Full Stack Developer',
                                2000,
                                'Salesforce Developer'
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi eius facilis neque veritatis amet voluptatibus. Exercitationem laboriosam aliquid quis alias illum maiores obcaecati, inventore cupiditate dolore possimus vero vitae!
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full border border-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white'>Resume</button>
                        {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white'>
                            <span className='px-5 py-2 block bg-[#121212] hover:bg-slate-800 rounded-full'>Resume</span>
                        </button> */}
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>

                    </div>
                </div>
            </div>
        </section>
    );
}
