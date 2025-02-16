'use client';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { motion, useScroll, useTransform } from 'framer-motion';

import { setActiveSection } from '../redux/activeSection-slice';
import { experiences } from '../constants';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
	const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

	const dispatch = useDispatch();

	useEffect(() => {
        return scrollYProgress.onChange(latest => {
            if (latest > 0.4)
				dispatch(setActiveSection('Experience'));
        });
    }, [scrollYProgress]);

	return (
		<motion.section id="experience" ref={ref} className='mt-12 sm:mt-0 lg:py-8' style={{ y, opacity }}>
            <h2 className='mt-4 mb-8 md:mb-12 text-center text-2xl sm:text-4xl font-bold text-white'>Professional Experience</h2>
			<div className='flex flex-col gap-4 overflow-hidden'>
				{
					experiences.map((experience, idx) =>
						<div key={idx} >
							<ExperienceCard key={idx} experience={experience} idx={idx} />
						</div>
					)
				}
			</div>
        </motion.section>
	);
}
