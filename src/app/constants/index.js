import { DiCss3, DiEclipse, DiHtml5, DiGit, DiGithubBadge, DiJava, DiMysql, DiNodejs, DiNpm, DiReact, DiSass, DiRedis } from 'react-icons/di';
import { BiLogoJavascript, BiLogoMongodb, BiLogoRedux, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript, BiLogoVisualStudio } from 'react-icons/bi';
import { SiApachetomcat, SiMui, SiOracle, SiPostman, SiSalesforce, SiSwagger, SiRabbitmq, SiElasticsearch } from 'react-icons/si';

export const navLinks = [
    {
        title: 'About',
        path: '#about'
    },
    {
        title: 'Skills',
        path: '#skills'
    },
    {
        title: 'Experience',
        path: '#experience'
    },
    {
        title: 'Projects',
        path: '#projects'
    }
];

export const skills = [
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
        color: '#8CC84B',
        dimension: 20
    },
    {
        skill: DiNpm,
        title: 'NPM',
        color: '#CB3837'
    },
    {
        skill: BiLogoSpringBoot,
        title: 'Spring',
        color: '#8BC34A'
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
        skill: DiRedis,
        title: 'Redis',
        color: '#EB352A'
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
        skill: SiRabbitmq,
        title: 'RabbitMQ',
        color: '#FF6600',
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
    },
    {
        skill: SiApachetomcat,
        title: 'Tomcat',
        color: '#FFCA28',
        dimension: 14
    }
];

export const certifications = [
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

export const experiences = [
    {
		role: 'Graduate Teaching Assistant',
		company: 'Northeastern University',
        tenure: ['Jan 2025 - Apr 2025', 'Sept 2025 - Dec 2025'],
        imgSrc: '/images/profExp/northeasternLogo.png',
        dimension: 180,
		tasks: [
			'Assisted Prof. Dr. Chen Hsiang “Jones” Yu for the course INFO 6205: Program Structures and Algorithms, focusing on core data structures like set, queue, linked list, etc and algorithm techniques such as sorting and searching',
			'Graded assignments and quizzes, conducted office hours and code review sessions for 100 students providing support on topics like efficient data structures, optimal algorithms and time and space complexity analysis using Big O notation'
		]
	},
	{
		role: 'Full Stack Engineering Senior Analyst',
		company: 'Accenture',
        tenure: ['Dec 2021 - Dec 2023'],
        imgSrc: '/images/profExp/accentureLogo.png',
        dimension: 120,
		tasks: [
			'Engineered REST API-based Salesforce integration with Slack and MS Teams, reducing internal sales approval time by 25%',
			'Developed Lightning Web Components (LWC) analysis tool for custom metadata and settings optimization, generating exportable reports and achieving 14% and 7% space savings respectively',
			'Architected reusable and configurable LWC for common use cases like custom picklists, lookups, reusable grid with update, sort and filter capabilities, etc. which helped reduce development times for new user stories',
			'Led a five member team in client Hackathon, designing dynamic lead scoring model using Salesforce Analytics to enhance opportunity conversion and sales productivity',
            'Performed code review for various teams to improvise code quality and ensure best practices'
		]
	},
	{
		role: 'Full Stack Engineering Analyst',
		company: 'Accenture',
        tenure: ['Dec 2020 - Dec 2021'],
		imgSrc: '/images/profExp/accentureLogo.png',
        dimension: 120,
		tasks: [
			'Served as Salesforce Developer for a US based client, implementing LWC, Apex Classes, Triggers, complex SOQL queries and implementing data loads',
			'Customized and created Lightning flows, aura components, approval processes, page layouts, users, roles and profiles, permissions sets, validation rules, schemas, etc. to accommodate new business requirements efficiently',
			'Developed and deployed Einstein chatbot that resolved customer queries and generated 250+ leads, resulting in $340K worth of won opportunities over 2.5 years',
            'Spear-headed the development team to design a cookie-less e-commerce platform using Experience Cloud, leveraging user interactions and promotions for user-tracking and personalized experiences'
		]
	}
];

export const projectsData = [
    {
        title: 'Vroom-N-Zoom Car Rental',
        desc: '',
        imgUrl: '/images/projects/vroomNzoom.png',
        gitUrl: 'https://github.com/aakashchothani0311/vroom-n-zoom-car-rental'
    },
    {
        title: 'Crop Vista',
        desc: 'A MERN application to bring farmers, FMCGs and distributors on a single platform to simplify the crop purchase process and ensure cost security for all the involved entities.',
        imgUrl: '/images/projects/cropVista.png',
        gitUrl: 'https://github.com/aakashchothani0311/crop-vista'
    },
    {
        title: 'Healthcare Plan Management',
        desc: 'This project implements a backend system for managing healthcare plans, incorporating secure API access, caching, message queues, and real-time logging and analytics.',
        imgUrl: '/images/projects/healthPlanMgmt.png',
        gitUrl: 'https://github.com/aakashchothani0311/healthcare-plan-management'
    },
    /* {
        title: 'Portfolio Website',
        desc: 'My Portfolio Website',
        imgUrl: '/images/projects/portfolio.png',
        gitUrl: 'https://github.com/aakashchothani0311/portfolio'
    }, */
    {
        title: 'REACT based Task Tracker',
        desc: 'A MERN stack application to manage tasks with filtering capabilities, with features for marking task completion status and filtering by creation date, title, description and task status using Mongoose to perform CRUD on MongoDB.',
        imgUrl: '/images/projects/taskTracker.png',
        gitUrl: 'https://github.com/aakashchothani0311/task-tracker'
    },
    {
        title: 'Centralised Job Application Portal',
        desc: 'This OracleDB based project simplifies the job application process by creating a centralized platform where candidates can enter their details once and apply to multiple jobs seamlessly. It eliminates redundancy for job seekers and provides recruiters with consistent, accurate data.',
        imgUrl: '/images/projects/jobAppTracker.png',
        gitUrl: 'https://github.com/aakashchothani0311/cent_job_app_portal'
    },
    {
        title: 'JavaFX based Task Tracker',
        desc: '',
        imgUrl: '/images/projects/smartTaskTracker.png',
        gitUrl: 'https://github.com/aakashchothani0311/smart_task_tracker'
    },
    /* {
        title: 'Hospital Inventory Management',
        desc: 'Authentication and CRUD operations',
        imgUrl: '/images/projects/hospInvMgmt.png',
        gitUrl: 'https://github.com/aakashchothani0311/hospital-inventory-management'
    } */
];