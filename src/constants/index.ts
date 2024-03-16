import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    docker,
    pluto7,
    microland,
    linkedin,
    github,
    Gmail,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    }
];

const services = [
    {
        title: "FrontEnd Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Data Science Intern",
        company_name: "Pluto7",
        icon: pluto7,
        iconBg: "#383E56",
        date: "Feb 2023 - May 2023",
        points: [
            "Created ML models using Bigquery for forecasting adtech data.",
            "Monitored forecasted values against actual observations to assess the accuracy and reliability of predictions, and built dashboards for data visualization",
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Microland",
        icon: microland,
        iconBg: "#E6DEDD",
        date: "Oct 2023 - Feb 2024",
        points: [
            "Worked on Microland’s employment verification, Alumni Portal and AI assistant.",
            "Experience in working with data extraction, backend technologies, Nginx, and Docker.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

const sociallinks = [
    {
        title: "linkedin",
        link: "https://www.linkedin.com/in/gagan-a-99877324b",
        icon: linkedin
    },
    {
        title: "github",
        link: "https://github.com/gagan-a18",
        icon: github
    },
    {
        title: "gmail",
        link: "mailto:gagangowda4646@gmail.com",
        icon: Gmail
    },
]



export { services, technologies, experiences, sociallinks };