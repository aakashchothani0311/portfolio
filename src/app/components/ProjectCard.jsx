import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export const ProjectCard = ({ project }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.30], [200, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div ref={ref} style={{ y, opacity }}>
            <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: `url(${project.imgUrl})`, backgroundSize: 'cover' }}>
                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#1C1B21] hidden group-hover:flex group-hover:bg-opacity-80'>
                    <Link href={project.gitUrl} target='_blank' className='border-2 border-[#ADB7BE] hover:border-white h-14 w-14 relative rounded-full group/link'>
                        <CodeBracketIcon className='h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] group-hover/link:text-white cursor-pointer'/>
                    </Link>
                </div>
            </div>
            <div className='rounded-b-xl bg-[#1C1B21] text-white py-6 px-4'>
                <h5 className='mb-2 text-xl font-semibold'>{project.title}</h5>
                {/* <p className='text-[#ADB7BE]'>{desc}</p> */}
            </div>
        </motion.div>
    );
}
