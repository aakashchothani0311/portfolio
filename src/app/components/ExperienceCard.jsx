import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ExperienceCard = ({ experience, idx }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const x = useTransform(scrollYProgress, [0, 0.50], [idx % 2 === 0 ? 100 : -100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div ref={ref} className='grid grid-cols-12 rounded-xl bg-[#1C1B21] pl-4 pr-8 pt-4 pb-8' style={{ x, opacity }} >
            <div className='hidden sm:col-span-3 sm:flex flex-col justify-center items-center'>
                <Image src={experience.imgSrc} width={experience.dimension} height={experience.dimension} alt={experience.company} />
                {/* <Icon className='text-purple-500 w-16 h-16' /> */}
                {
                    experience.tenure.map((time, idx) => <p key={idx} className='text-white mt-1'>{time}</p>)
                }
            </div>
            <div className='col-span-12 sm:col-span-9'>
                <h5 className='mb-2 text-xl font-semibold text-white'>{experience.company}</h5>
                <p className='sm:mb-2 text-white'>{experience.role}</p>
                {
                    experience.tenure.map((time, idx) =><p key={idx} className='sm:hidden mb-2 sm:mb-0 text-white'>{time}</p>)
                }
                <ul className='list-disc text-base text-justify text-pink-500 pl-4 sm:pl-8'>
                    {
                        experience.tasks.map((task, idx) => 
                            <li key={idx}>
                                <span className='text-[#ADB7BE]'>{task}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </motion.div>
    )
}
