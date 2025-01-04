"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiAccenture } from 'react-icons/si';

import { ExperienceCard } from './ExperienceCard';

const experiences = [
	{
		role: 'Full Stack Engineering Senior Analyst',
		company: 'Accenture',
		start: 'Dec 2021',
		end: 'Dec 2023',
		compIcon: SiAccenture,
		compIconColor: 'text-purple-500',
		tasks: [
			'Engineered REST API-based Salesforce integration with Slack and MS Teams, to reduce internal sales approval time by 25%',
			'Architected reusable and configurable web components like custom drop-down, search box, reusable grid with update, sort, filter capabilities, etc. that reduced development times for new user stories',
			'Led a five member team at a client Hackathon to design a dynamic lead scoring model to enhance opportunity conversion',
			'Performed code review for various teams to improvise code quality and ensure best practices'
		]
	},
	{
		role: 'Full Stack Engineering Analyst',
		company: 'Accenture',
		start: 'Dec 2020',
		end: 'Dec 2021',
		compIcon: SiAccenture,
		compIconColor: 'text-purple-500',
		tasks: [
			'Served as a Salesforce Developer for a US based healthcare client, implementing LWC, Apex Classes, Triggers, complex SOQL queries and implementing data loads',
			'Architected reusable and configurable web components like custom drop-down, search box, reusable grid with update, sort, filter capabilities, etc. that reduced development times for new user stories',
			'Spear-headed the development team to design a cookie-less e-commerce platform, leveraging user interactions and promotions for user-tracking and personalized experiences'
		]
	}
];

export const Experience = () => {
	const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

	return (
		<section id="experience" className='lg:py-8'>
            <motion.h2 className='mt-4 mb-8 md:mb-12 text-center text-4xl font-bold text-white' style={{ y, opacity }}>Professional Experience</motion.h2>
			<div className='flex flex-col gap-4'>
				{
					experiences.map((experience, idx) =>
						<div key={idx} >
							<ExperienceCard key={idx} Icon={experience.compIcon} experience={experience} idx={idx} />
						</div>
					)
				}
			</div>
        </section>
	);
}
