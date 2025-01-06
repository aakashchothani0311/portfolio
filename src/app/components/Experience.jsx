'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { experiences } from '../constants';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
	const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

	return (
		<motion.section id="experience" ref={ref} className='lg:py-8' style={{ y, opacity }}>
            <h2 className='mt-4 mb-8 md:mb-12 text-center text-4xl font-bold text-white'>Professional Experience</h2>
			<div className='flex flex-col gap-4 overflow-hidden'>
				{
					experiences.map((experience, idx) =>
						<div key={idx} >
							<ExperienceCard key={idx} Icon={experience.compIcon} experience={experience} idx={idx} />
						</div>
					)
				}
			</div>
        </motion.section>
	);
}
