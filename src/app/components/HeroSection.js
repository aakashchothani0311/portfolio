"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
};

export const HeroSection = () => {
    return (
        <section id='home' className='lg:mb-32 lg:pt-40 lg:pb-8'>
            <motion.div className='grid grid-cols-1 lg:grid-cols-12' variants={variants} initial='initial' animate='animate' transition={{ duration: 0.5 }}>
                <div className='col-span-8 text-center lg:text-left'>
                    <h1 className='mb-4 place-self-center lg:justify-self-start text-white text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold'>
                        Hey👋🏻, I am <br/>
                        <TypeAnimation className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                            sequence={[
                                'Aakash Chothani',
                                1000,
                                'Full Stack Developer',
                                2000,
                                'Software Engineer',
                                3000,
                                'Salesforce Developer',
                                3500,
                                ''
                            ]}
                            wrapper="span" repeat={Infinity}
                        />
                    </h1>
                    <p className='mb-6 text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                        Welcome to my portfolio.
                    </p>
                    <div className='mb-6 flex flex-row place-self-center lg:justify-self-start gap-6'>
                        <Link href='mailto:aakashchothani@gmail.com'>
                            <EnvelopeIcon className='h-8 w-8 sm:h-12 sm:w-12 text-white'/>
                        </Link>
                        <Link href='https://github.com/aakashchothani0311' target='_blank'>
                            <Image src='/images/githubIcon.svg' height={50} width={50} className='h-8 w-8 sm:h-12 sm:w-12' alt="Github Icon" />
                        </Link>
                        <Link href='https://www.linkedin.com/in/aakash-chothani' target='_blank'>
                            <Image src='/images/linkedInIcon.svg' height={50} width={50} className='h-8 w-8 sm:h-12 sm:w-12' alt="Linkedin Icon" />
                        </Link>
                    </div>
                    <div>
                        <Link href='https://drive.google.com/file/d/1AD9XXO2m9e6XNZhRJtgFrJofK0s__Cor/view?usp=sharing' target='_blank' className='px-6 py-3 w-full inline-block md:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold'>Resume</Link>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-8 lg:mt-0'>
                    <Image src='/images/heroImg.png' width={350} height={350} alt='hero image'/>
                </div>
            </motion.div>
        </section>
    );
}
