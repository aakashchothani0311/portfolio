import React from 'react';
import { DiReact, DiNodejs, DiHtml5, DiCss3 } from 'react-icons/di';
import { SkillCard } from './SkillCard';
import Image from 'next/image';

const skills = [
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
        skill: DiReact,
        title: 'React',
        color: '#61DAFB'
    },
    {
        skill: DiNodejs,
        title: 'Node JS',
        color: '#68A063'
    }
]

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
]

export const Skills = () => {
    return (
        <section id="skills" className='lg:py-8'>
            <h2 className='mt-4 mb-8 md:mb-12 text-center text-4xl font-bold text-white'>Skills & Certifications</h2>
            <div className='flex flex-row justify-center gap-4'>
                {
                    skills.map((skill, ind) => 
                        <SkillCard key={ind} Icon={skill.skill} title={skill.title} color={skill.color}/>
                    )
                }
            </div>

            <div className='mt-8 flex flex-row justify-center gap-4 sm:gap-10'>
                {
                    certifications.map((cert, idx) => 
                        <Image key={idx} src={`/images/certifications/${cert.src}`} height={200} width={200} className='w-20 h-20 sm:w-28 sm:h-28' alt={cert.alt} />
                    )
                }
            </div>
        </section>
    );
}
