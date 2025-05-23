'use client';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

import { setActiveSection } from '../redux/activeSection-slice';
import { projectsData } from '../constants';
import { ProjectCard } from './ProjectCard';

const gitHubLink = 'https://github.com/aakashchothani0311';

export const Projects = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    const dispatch = useDispatch();

	useEffect(() => {
        return scrollYProgress.onChange(latest => {
            if (latest > 0.3) {
				dispatch(setActiveSection('Projects'));
            }
        });
    }, [scrollYProgress]);

    return (
        <motion.section ref={ref} id="projects" className='mt-12 sm:mt-0 lg:py-8' style={{ y, opacity }}>
            <h2 className='mt-4 mb-8 md:mb-12 text-center text-3xl sm:text-4xl font-bold text-white'>My Projects</h2>
            <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    projectsData.map((project, index) => 
                        <li key={index}>
                            <ProjectCard project={project} />
                        </li>  
                    )
                }
            </ul>
            <Link href={gitHubLink} target='_blank' className={`text-center pt-8 block text-[#ADB7BE] sm:text-xl`}>
                View All Projects
            </Link>
        </motion.section>
    );
}
