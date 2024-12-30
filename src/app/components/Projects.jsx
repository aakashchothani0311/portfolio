import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Crop Vista",
        desc: "Project 1 desc",
        imgUrl: "/images/projects/cropVista.png",
        gitUrl: "https://github.com/aakashchothani0311/crop-vista"
    },
    {
        id: 2,
        title: "REACT based Task Tracker",
        desc: "Project 2 desc",
        imgUrl: "/images/projects/taskTracker.png",
        gitUrl: "https://github.com/aakashchothani0311/task-tracker"
    },
    {
        id: 3,
        title: "Centralised Job Application Portal",
        desc: "Project 3 desc",
        imgUrl: "/images/projects/3.png",
        gitUrl: "https://github.com/aakashchothani0311/cent_job_app_portal"
    },
    {
        id: 4,
        title: "JavaFX based Task Tracker",
        desc: "Project 4 desc",
        imgUrl: "/images/projects/smartTaskTracker.png",
        gitUrl: "https://github.com/aakashchothani0311/smart_task_tracker"
    },
    {
        id: 5,
        title: "Hospital Inventory Management",
        desc: "Authentication and CRUD operations",
        imgUrl: "/images/projects/5.png",
        gitUrl: "https://github.com/aakashchothani0311/hospital-inventory-management"
    }
];

export const Projects = () => {
    return (
        <section id="projects">
            <h2 className='mt-4 mb-8 md:mb-12 text-center text-4xl font-bold text-white'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    projectsData.map(project => 
                        <ProjectCard key={project.id} title={project.title} desc={project.desc} imgUrl={project.imgUrl} gitUrl={project.gitUrl}/>
                    )
                }
            </div>
        </section>
    )
}
