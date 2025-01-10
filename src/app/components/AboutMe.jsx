'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutMe = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

    return (
        <motion.section id="about" ref={ref} className='mt-12 sm:mt-0 lg:py-8' style={{ y, opacity }}>
            <h2 className='mt-4 mb-8 text-center text-3xl sm:text-4xl font-bold text-white'>About Me</h2>
            <div className='text-white lg:text-lg text-justify space-y-4'>
                <p>
                    Greetings. I’m <span className='font-extrabold italic'>Aakash Chothani</span>, a results-driven Full Stack Engineer with a strong foundation in software engineering, currently pursuing Master's degree in Software Engineering Systems from Northeastern University, Boston.
                </p>
                <p>
                    Over three years of professional experience at Accenture, I led projects focused on Salesforce integration, web component development, and data-driven applications. With a diverse technical skill set ranging from Java, JavaScript, TypeScript, MySQL, MongoDB, to modern web development frameworks like React, Node.js, MUI, Tailwind CSS. My foundation of web technologies enables me to easily adapt to new frameworks. Additionally, I am 3x Salesforce Certified.
                </p>
                <p>
                    I believe in continuous learning and am currently excelling in my Master’s program while contributing as a Graduate Teaching Assistant for the course - INFO 6205: Program Structures and Algorithms.
                </p>
                <p>
                    Please feel free to reach out and connect with me to discuss about potential opportunities in the role of Software Engineering/ Full Stack development/ Salesforce Developer.
                </p>
            </div>
        </motion.section>
    );
}
