'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';

import { certifications, skills } from '../constants';
import { SkillCard } from './SkillCard';

const FAST_DURATION = 15;
const SLOW_DURATION = 25;

export const Skills = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

    const [skillRef, { width }] = useMeasure();
    const x = useMotionValue(0);

    const [finish, setFinish] = useState(false);
    const [rerender, setRerender] = useState(false);
    const [duration, setDuration] = useState(FAST_DURATION);

    useEffect(() => {
        let finalPosition = -width/2;
        let controls;

        if(finish){
            controls = animate(x, [x.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - x.get() / finalPosition),
                onComplete: () => {
                    setFinish(false);
                    setRerender(!rerender);
                }
            });
        } else
            controls = animate(x, [0, finalPosition], { ease: 'linear', duration: duration, repeat: Infinity, repeatType: 'loop', repeatDelay: 0 });
    
        return controls.stop;
    }, [x, width, duration, rerender]);

    const handleHoverStart = () => {
        setFinish(true);
        setDuration(SLOW_DURATION);
    };

    const handleHoverEnd = () => {
        setFinish(true);
        setDuration(FAST_DURATION);
    }

    return (
        <motion.section id="skills" ref={ref} className='lg:py-8' style={{ y, opacity }}>
            <h2  className='mt-4 mb-8 md:mb-12 text-center text-4xl font-bold text-white'>Skills & Certifications</h2>
            <div className='overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]'>
                <motion.div ref={skillRef} className='flex flex-row gap-6 w-max' style={{ x }} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
                    {
                        [...skills, ...skills].map((skill, ind) => 
                            <SkillCard key={ind} Icon={skill.skill} title={skill.title} dimension={skill.dimension} color={skill.color}/>
                        )
                    }
                </motion.div>
            </div>

            <div className='mt-12 flex flex-row justify-center gap-4 sm:gap-10'>
                {
                    certifications.map((cert, idx) => 
                        <Image key={idx} src={`/images/certifications/${cert.src}`} height={200} width={200} className='w-20 h-20 sm:w-28 sm:h-28' alt={cert.alt} />
                    )
                }
            </div>
        </motion.section>
    );
}
