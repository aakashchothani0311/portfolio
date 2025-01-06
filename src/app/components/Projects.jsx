'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { projectsData } from '../constants';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    return (
        <motion.section ref={ref} id="projects" className='lg:py-8' style={{ y, opacity }}>
            <h2 className='mt-4 mb-8 md:mb-12 text-center text-4xl font-bold text-white'>My Projects</h2>
            <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    projectsData.map((project, index) => 
                        // <li key={index} variants={cardVariants} initial='initial' transition={{ duration: 0.5, delay: index * 0.2 }}>
                        <li key={index}>
                            <ProjectCard key={project.id} title={project.title} desc={project.desc} imgUrl={project.imgUrl} gitUrl={project.gitUrl}/>
                        </li>  
                    )
                }
            </ul>
        </motion.section>
    );
}
