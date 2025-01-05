"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { DiCss3, DiEclipse, DiHtml5, DiGit, DiGithubBadge, DiJava, DiMysql, DiNodejs, DiNpm, DiReact, DiSass } from 'react-icons/di';
import { BiLogoJavascript, BiLogoMongodb, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript, BiLogoVisualStudio } from 'react-icons/bi';
import { SiMui, SiOracle, SiPostman, SiSalesforce, SiSwagger } from 'react-icons/si';

import { SkillCard } from './SkillCard';
import useMeasure from 'react-use-measure';

const skills = [
    {
        skill: DiJava,
        title: 'Java',
        color: '#007396'
    },
    {
        skill: DiHtml5,
        title: 'HTML5',
        color: '#E34F26'
    },
    {
        skill: DiCss3,
        title: 'CSS3',
        color: '#1572B6'
    },
    {
        skill: BiLogoJavascript,
        title: 'JavaScript',
        color: '#F7DF1E'
    },
    {
        skill: BiLogoTypescript,
        title: 'TypeScript',
        color: '#3178C6'
    },
    {
        skill: DiReact,
        title: 'React',
        color: '#61DAFB'
    },
    {
        skill: BiLogoRedux,
        title: 'Redux',
        color: '#764ABC'
    },
    {
        skill: SiMui,
        title: 'MUI',
        color: '#007FFF',
        dimension: 14
    },
    {
        skill: DiSass,
        title: 'Sass',
        color: '#C69A8D'
    },
    {
        skill: BiLogoTailwindCss,
        title: 'Tailwind CSS',
        color: '#06B6D4'
    },
    {
        skill: DiNodejs,
        title: 'Node JS',
        color: '#8CC84B'
    },
    {
        skill: DiNpm,
        title: 'NPM',
        color: '#CB3837'
    },
    {
        skill: SiOracle,
        title: 'Oracle DB',
        color: '#F80000',
        dimension: 16
    },
    {
        skill: DiMysql,
        title: 'MySQL',
        color: '#00758F'
    },
    {
        skill: BiLogoMongodb,
        title: 'MongoDB',
        color: '#47A248'
    },
    {
        skill: DiGit,
        title: 'Git',
        color: '#F1502F'
    },
    {
        skill: DiGithubBadge,
        title: 'GitHub',
        color: '#FFFFFF'
    },
    {
        skill: DiEclipse,
        title: 'Eclipse',
        color: '#2C2255'
    },
    {
        skill: BiLogoVisualStudio,
        title: 'VS Code',
        color: '#0066F1',
        dimension: 16
    },
    {
        skill: SiPostman,
        title: 'Postman',
        color: '#FF6C37',
        dimension: 14
    },
    {
        skill: SiSwagger,
        title: 'Swagger',
        color: '#85B642',
        dimension: 14
    },
    {
        skill: SiSalesforce,
        title: 'Salesforce',
        color: '#00A1E0',
        dimension: 14
    }
];

const certifications = [
    {
        src: 'jsDev.png',
        alt: 'Salesforce Java Script Developer Certification Badge'
    },
    {
        src: 'appBuilder.png',
        alt: 'Salesforce App Builder Certification Badge'
    },
    {
        src: 'associate.png',
        alt: 'Salesforce Associate Certification Badge'
    }
];

const FAST_DURATION = 15;
const SLOW_DURATION = 25;

export const Skills = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

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
            <div className='overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]'>
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
