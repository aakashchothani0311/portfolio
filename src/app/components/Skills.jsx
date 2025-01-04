"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { DiCss3, DiHtml5, DiGit, DiGithubBadge, DiJava, DiMysql, DiNodejs, DiNpm, DiReact, DiSass } from 'react-icons/di';
import { BiLogoJavascript, BiLogoMongodb, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";

import { SkillCard } from './SkillCard';
import useMeasure from 'react-use-measure';

const skills = [
    {
        skill: DiJava,
        title: 'Java',
        color: '#68A063'
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
        color: '#E4A125'
    },
    {
        skill: BiLogoTypescript,
        title: 'TypeScript',
        color: '#68A063'
    },
    {
        skill: DiReact,
        title: 'React',
        color: '#61DAFB'
    },
    {
        skill: BiLogoRedux,
        title: 'Redux',
        color: '#FFFFFF'
    },
    {
        skill: DiMysql,
        title: 'MySQL',
        color: '#68A063'
    },
    {
        skill: BiLogoMongodb,
        title: 'MongoDB',
        color: '#68A063'
    },
    {
        skill: DiSass,
        title: 'Sass',
        color: '#68A063'
    },
    {
        skill: BiLogoTailwindCss,
        title: 'Tailwind CSS',
        color: '#68A063'
    },
    {
        skill: DiNodejs,
        title: 'Node JS',
        color: '#68A063'
    },
    {
        skill: DiNpm,
        title: 'NPM',
        color: '#68A063'
    },
    {
        skill: DiGit,
        title: 'Git',
        color: '#68A063'
    },
    {
        skill: DiGithubBadge,
        title: 'GitHub',
        color: '#FFFFFF'
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

export const Skills = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

    const [skillRef, { width }] = useMeasure();
    const x = useMotionValue(0);

    useEffect(() => {
        let finalPosition = -width / 2;
        
        let controls = animate(x, [0, finalPosition], {
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        });

        return controls.stop;
    }, [x, width]);

    return (
        <motion.section id="skills" ref={ref} className='lg:py-8' style={{ y, opacity }}>
            <h2  className='mt-4 mb-8 md:mb-12 text-center text-4xl font-bold text-white'>Skills & Certifications</h2>
            <div ref={skillRef} className='overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]'>
                <motion.div className='flex flex-row gap-6' style={{ x }}>
                    {
                        [...skills, ...skills].map((skill, ind) => 
                            <SkillCard key={ind} Icon={skill.skill} title={skill.title} color={skill.color}/>
                        )
                    }
                </motion.div>
            </div>

            <div className='mt-8 flex flex-row justify-center gap-4 sm:gap-10'>
                {
                    certifications.map((cert, idx) => 
                        <Image key={idx} src={`/images/certifications/${cert.src}`} height={200} width={200} className='w-20 h-20 sm:w-28 sm:h-28' alt={cert.alt} />
                    )
                }
            </div>
        </motion.section>
    );
}
