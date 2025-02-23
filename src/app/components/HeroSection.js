'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { SiLinkedin, SiSalesforce } from 'react-icons/si';

const mailTo = 'mailto:aakashchothani@gmail.com';
const gitHubLink = 'https://github.com/aakashchothani0311';
const linkedInLink = 'https://www.linkedin.com/in/aakash-chothani';
const salesForceLink = 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=n9dbuThwUEzr2tBDuw4KYOe4SRuKwcQW8UvRnrUxdeL5gRganSM8n6ONvYesGKIq';
const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;

const textVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 }
};

const memojiVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 }
};

export const HeroSection = () => {
    return (
        <section id='home' className='lg:mb-32 lg:pt-40 lg:pb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <motion.div className='col-span-8 text-center lg:text-left' variants={textVariants} initial='initial' animate='animate' transition={{ duration: 0.5 }}>
                    <h1 className='mb-4 place-self-center lg:justify-self-start text-white text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold'>
                        Hey👋🏻, I am <br/>
                        <TypeAnimation className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500'
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
                    <div className='mb-6 flex flex-row justify-center lg:justify-start gap-6'>
                        <Link href={mailTo}>
                            <EnvelopeIcon className='h-8 w-8 sm:h-12 sm:w-12 text-white'/>
                        </Link>
                        <Link href={gitHubLink} target='_blank'>
                            <Image src='/images/githubIcon.svg' height={50} width={50} className='h-8 w-8 sm:h-12 sm:w-12' alt="Github Icon" />
                        </Link>
                        <Link href={linkedInLink} target='_blank'>
                            <SiLinkedin height={50} width={50} className='h-8 w-8 sm:h-10 sm:w-10 text-white' />   
                        </Link>
                        <Link href={salesForceLink} target='_blank'>
                            <SiSalesforce height={50} width={50} className='h-8 w-8 sm:h-10 sm:w-10 text-white' />   
                        </Link>
                    </div>
                    <div>
                        <Link href={resumeLink} target='_blank' className='px-6 py-3 w-full inline-block md:w-fit rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold'>Resume</Link>
                    </div>
                </motion.div>
                <motion.div className='col-span-4 place-self-center mt-8 lg:mt-0' variants={memojiVariants} initial='initial' animate='animate' transition={{ duration: 0.5 }}>
                    <Image src='/images/heroImg.png' width={350} height={350} alt='hero image' />
                </motion.div>
            </div>
        </section>
    );
}
