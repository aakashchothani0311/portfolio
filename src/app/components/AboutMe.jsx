"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutMe = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

    return (
        <motion.section id="about" ref={ref} className='lg:py-8' style={{ y, opacity }}>
            <h2 className='mt-4 mb-8 text-center text-4xl font-bold text-white'>About Me</h2>
            <p className='text-white lg:text-lg'>
                I am Aakash Chothani. I am currently pursuing my Masters in Software Engineering Systems from Northeastern University - Boston campus.
                <br/><br/>
                As I prepare for internships/ co-op opportunities starting January 2025, I am seeking roles in Software Engineering/ Full Stack development or as a Salesforce Developer. With three years of professional experience as a Full Stack Developer, I possess skills in Java, HTML, CSS and JavaScript along with other widely used web technologies like the MERN stack, Node.js, etc. My foundation of web technologies enables me to easily adapt to new frameworks.
            </p>
        </motion.section>
    );
}
