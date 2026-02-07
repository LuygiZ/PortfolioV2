// ── Asset imports ──
import iplLogo from "../assets/ipl.png";
import isepLogo from "../assets/isep.png";
import udemyLogo from "../assets/udemy.png";
import profilePhoto from "../assets/Luís_Santos.png";
import luisLogo from "../assets/LuisLogo.png";

import ainetImg from "../assets/projects/ainet.png";
import wheelchairImg from "../assets/projects/wheelchair.png";
import jogralImg from "../assets/projects/portfolio.png";
import gjfImg from "../assets/projects/GJF.png";

import cambridgeCert from "../assets/certificates/cambridgecertificate.png";
import csharpCert from "../assets/certificates/csharpcertificate.jpg";
import licenciaturaCert from "../assets/certificates/licenciatura.jpg";

// ── Personal Info ──
export const personalInfo = {
  name: "Luís Santos",
  title: "Junior Software Developer",
  tagline: "Building reliable software with .NET & modern web technologies",
  description:
    "Computer Engineering graduate from IPLeiria, currently pursuing a Master's in Software Engineering at ISEP.",
  email: "luismanuelsantos2801@gmail.com",
  github: "https://github.com/LuygiZ",
  linkedin: "https://www.linkedin.com/in/lu%C3%ADs-santos-434376281/",
  location: "Porto, Portugal",
  profilePhoto,
  logo: luisLogo,
};

// ── Credibility Badges ──
export const credentials = [
  {
    id: "ipleiria",
    fullName: "Polytechnic Institute of Leiria",
    type: "Bachelor's in Computer Engineering",
    status: "Completed",
    url: "https://www.ipleiria.pt",
    logo: iplLogo,
  },
  {
    id: "isep",
    fullName: "Instituto Superior de Engenharia do Porto",
    type: "Master's in Software Engineering",
    status: "Ongoing",
    url: "https://www.isep.ipp.pt",
    logo: isepLogo,
  },
  {
    id: "udemy",
    fullName: "Udemy Professional Certifications",
    type: "Professional Certifications",
    status: "Continuous",
    url: "https://www.udemy.com",
    logo: udemyLogo,
  },
];

// ── Education ──
export const education = [
  {
    institution: "ISEP – Instituto Superior de Engenharia do Porto",
    degree: "Master's in Software Engineering",
    period: "2025 – Present",
    status: "Ongoing",
    description:
      "Advanced studies in software architecture, design patterns, distributed systems, and agile methodologies. Focus on building scalable and maintainable enterprise solutions.",
    highlights: [
      "Software Architecture & Design Patterns",
      "Distributed Systems",
      "Agile Methodologies & DevOps",
      "Advanced Database Systems",
    ],
  },
  {
    institution: "IPLeiria – Polytechnic Institute of Leiria",
    degree: "Bachelor's in Computer Engineering",
    period: "2020 – 2024",
    status: "Completed",
    description:
      "Solid foundation in computer science, programming, databases, networking, and software engineering. Developed practical skills through hands-on projects and lab work.",
    highlights: [
      "Object-Oriented Programming",
      "Database Design & SQL",
      "Web Development",
      "Software Engineering Fundamentals",
    ],
  },
];

// ── Certifications ──
export const certifications = [
  {
    name: "Bachelor's Degree in Computer Engineering",
    issuer: "IPLeiria",
    date: "2024",
    description: "Bachelor's degree diploma from the Polytechnic Institute of Leiria in Computer Engineering.",
    image: licenciaturaCert,
    credentialUrl: "#",
  },
  {
    name: "Web Development with C# & ASP.NET",
    issuer: "Udemy",
    date: "2024",
    description: "Professional certification covering C#, ASP.NET Core, and full-stack web development patterns.",
    image: csharpCert,
    credentialUrl: "#",
  },
  {
    name: "English B2 – Cambridge",
    issuer: "Cambridge Assessment",
    date: "2022",
    description: "B2 First Certificate in English, demonstrating upper-intermediate proficiency.",
    image: cambridgeCert,
    credentialUrl: "#",
  },
];

// ── Skills ──
export const skillCategories = [
  {
    name: "Frontend",
    icon: "Globe",
    skills: [
      { name: "HTML & CSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 65 },
      { name: "Vue.js", level: 55 },
      { name: "Bootstrap", level: 70 },
      { name: "Tailwind CSS", level: 60 },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "C# / .NET", level: 85 },
      { name: "ASP.NET Core", level: 75 },
      { name: "Laravel (PHP)", level: 65 },
      { name: "Node.js", level: 55 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "SQL Server", level: 75 },
      { name: "MongoDB", level: 55 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Docker (Basics)", level: 50 },
      { name: "Azure DevOps", level: 55 },
      { name: "Postman", level: 70 },
      { name: "Visual Studio / VS Code", level: 85 },
    ],
  },
  {
    name: "AI & Data",
    icon: "Brain",
    skills: [
      { name: "Python", level: 60 },
      { name: "TensorFlow", level: 45 },
    ],
  },
];

// ── Projects ──
export const projects = [
  {
    id: "cinemagic",
    title: "CineMagic",
    subtitle: "Full-Stack Cinema Management Platform",
    grade: "18/20",
    image: ainetImg,
    description:
      "A web application developed using Laravel to manage movie sessions, theaters, ticket sales, and seat occupancy. This project provided deep learning experience in full-stack web development.",
    context:
      "Developed as part of the Internet Applications (AiNet) course at IPLeiria, requiring a complete CRUD-based web application with authentication, authorization, and a relational database.",
    technologies: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL"],
    architecture:
      "Laravel MVC with Blade templates, Eloquent ORM for database access, and middleware for authentication and role-based access control. MySQL relational schema designed for cinemas, sessions, movies, and ticket sales.",
    challenges: [
      "Designing a normalized database schema for cinemas, rooms, sessions, and seat maps",
      "Implementing a seat selection system with real-time availability checks",
      "Handling concurrent ticket purchases and preventing double-booking",
    ],
    results: [
      "Final grade of 18/20",
      "Full CRUD for movies, sessions, theaters, and users",
      "Responsive interface for both desktop and mobile devices",
    ],
    github: "#",
    live: null,
    featured: true,
  },
  {
    id: "wheelchair",
    title: "AI Voice-Controlled Wheelchair",
    subtitle: "Final Degree Project – AI & IoT",
    grade: "15/20",
    image: wheelchairImg,
    description:
      "Final degree project focused on developing a voice-controlled electric wheelchair system using Artificial Intelligence, deployed on a Raspberry Pi with a Vue.js-based web interface.",
    context:
      "Bachelor's thesis project at IPLeiria, combining AI, embedded systems, and web technologies to create an accessible mobility solution for people with motor disabilities.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "TensorFlow", "Vue.js"],
    architecture:
      "Raspberry Pi running a Python-based voice recognition engine powered by TensorFlow. Vue.js frontend for real-time status monitoring, configuration, and command history. WebSocket communication between the Pi and the web dashboard.",
    challenges: [
      "Training a custom voice recognition model for wheelchair commands in noisy environments",
      "Integrating TensorFlow Lite on a resource-constrained Raspberry Pi",
      "Building a responsive Vue.js dashboard for real-time wheelchair status monitoring",
    ],
    results: [
      "Final grade of 15/20",
      "Functional voice-controlled prototype with 85%+ command accuracy",
      "Web-based monitoring dashboard with real-time feedback",
    ],
    github: "#",
    live: null,
    featured: true,
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio Website",
    subtitle: "First React Project",
    grade: null,
    image: jogralImg,
    description:
      "Personal portfolio website developed using React. This was the first React project and served as a hands-on learning experience for modern frontend development.",
    context:
      "Created to establish a professional online presence while learning React, component-based architecture, and modern CSS frameworks.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Framer Motion", "MongoDB"],
    architecture:
      "Component-based SPA with React Router for navigation, Framer Motion for page transitions and animations, Bootstrap for responsive layout, and a MongoDB backend for contact form submissions.",
    challenges: [
      "Learning React fundamentals while building a production-ready application",
      "Implementing smooth page transitions with Framer Motion",
      "Setting up a MongoDB backend for the contact form",
    ],
    results: [
      "Fully functional portfolio deployed online",
      "Solid understanding of React fundamentals gained",
      "Foundation for this improved V2 portfolio",
    ],
    github: "#",
    live: null,
    featured: false,
  },
  {
    id: "gjf",
    title: "Grupo de Jovens de Fornos",
    subtitle: "Community Youth Group Website",
    grade: null,
    image: gjfImg,
    description:
      "A website developed to present information about a youth group that organizes activities and events in Fornos, Santa Maria da Feira, promoting community engagement and shared experiences.",
    context:
      "A personal project built to support a local community group, providing them with a digital presence to share events, activities, and contact information.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "MongoDB", "Web3Forms"],
    architecture:
      "React SPA with component-based design, MongoDB for event and member data storage, and Web3Forms integration for a serverless contact form.",
    challenges: [
      "Designing a user-friendly interface for a non-technical audience",
      "Integrating Web3Forms for contact form submissions without a backend",
      "Creating a content structure that's easy for the group to request updates",
    ],
    results: [
      "Active website used by the community group",
      "Serverless contact form reducing hosting complexity",
      "Positive feedback from group members and visitors",
    ],
    github: "#",
    live: null,
    featured: false,
    wip: true,
  },
];

// ── Navigation ──
export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
