import { DiCss3, DiEclipse, DiHtml5, DiGit, DiGithubBadge, DiJava, DiMysql, DiNodejs, DiNpm, DiReact, DiSass } from 'react-icons/di';
import { BiLogoJavascript, BiLogoMongodb, BiLogoRedux, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript, BiLogoVisualStudio } from 'react-icons/bi';
import { SiAccenture, SiApachetomcat, SiMui, SiOracle, SiPostman, SiSalesforce, SiSwagger } from 'react-icons/si';

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
    },
    {
        skill: SiApachetomcat,
        title: 'Tomcat',
        color: '#FFCA28',
        dimension: 14
    },
    {
        skill: BiLogoSpringBoot,
        title: 'Spring',
        color: '#8BC34A'
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
		start: 'Jan 2025',
		end: 'Present',
		compIcon: SiAccenture,
		compIconColor: 'text-purple-500',
		tasks: [
			'Assisting Prof. Dr. Chen Hsiang “Jones” Yu for the course INFO 6205: Program Structures and Algorithms, focusing on core data structures like set, queue, linked list, etc and algorithm techniques such as sorting and searching',
			'Grading assignments and quizzes, conducting office hours and code review sessions for 100 students providing support on topics like efficient data structures, time and space complexity analysis using Big O notation and algorithm optimization'
		]
	},
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

export const projectsData = [
    {
        id: 1,
        title: "Crop Vista",
        desc: "A MERN application to bring farmers, FMCGs and distributors on a single platform to simplify the crop purchase process and ensure cost security for all the involved entities",
        imgUrl: "/images/projects/cropVista.png",
        gitUrl: "https://github.com/aakashchothani0311/crop-vista"
    },
    {
        id: 2,
        title: "Portfolio Website",
        desc: "My Portfolio Website",
        imgUrl: "/images/projects/portfolio.png",
        gitUrl: "https://github.com/aakashchothani0311/portfolio"
    },
    {
        id: 3,
        title: "REACT based Task Tracker",
        desc: "A MERN stack application to manage tasks with filtering capabilities, with features for marking task completion status and filtering by creation date, title, description and task status using Mongoose to perform CRUD on MongoDB",
        imgUrl: "/images/projects/taskTracker.png",
        gitUrl: "https://github.com/aakashchothani0311/task-tracker"
    },
    {
        id: 4,
        title: "Centralised Job Application Portal",
        desc: "Project 3 desc",
        imgUrl: "/images/projects/jobAppTracker.png",
        gitUrl: "https://github.com/aakashchothani0311/cent_job_app_portal"
    },
    {
        id: 5,
        title: "JavaFX based Task Tracker",
        desc: "Project 4 desc",
        imgUrl: "/images/projects/smartTaskTracker.png",
        gitUrl: "https://github.com/aakashchothani0311/smart_task_tracker"
    },
    {
        id: 6,
        title: "Hospital Inventory Management",
        desc: "Authentication and CRUD operations",
        imgUrl: "/images/projects/hospInvMgmt.png",
        gitUrl: "https://github.com/aakashchothani0311/hospital-inventory-management"
    }
];