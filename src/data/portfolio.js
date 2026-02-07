export const personalInfo = {
  name: "Luis Santos",
  title: "Junior Software Engineer",
  tagline: "Building reliable software with .NET & modern web technologies",
  description:
    "Computer Engineering graduate from IPLeiria, currently pursuing a Master's in Software Engineering at ISEP. Passionate about clean architecture, backend systems, and continuous learning.",
  email: "luismanuelsantos2801@gmail.com",
  github: "https://github.com/LuygiZ",
  linkedin: "https://www.linkedin.com/in/lu%C3%ADs-santos-434376281/",
  location: "Porto, Portugal",
};

export const credentials = [
  {
    id: "ipleiria",
    name: "IPLeiria",
    fullName: "Polytechnic Institute of Leiria",
    type: "Bachelor's in Computer Engineering",
    status: "Completed",
    url: "https://www.ipleiria.pt",
  },
  {
    id: "isep",
    name: "ISEP",
    fullName: "Instituto Superior de Engenharia do Porto",
    type: "Master's in Software Engineering",
    status: "Ongoing",
    url: "https://www.isep.ipp.pt",
  },
  {
    id: "udemy",
    name: "Udemy",
    fullName: "Udemy Professional Certifications",
    type: "Professional Certifications",
    status: "Continuous",
    url: "https://www.udemy.com",
  },
];

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

export const certifications = [
  {
    name: "Complete C# & .NET Developer Bootcamp",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "#",
  },
  {
    name: "ASP.NET Core Web API",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "#",
  },
  {
    name: "SQL Server & Database Design",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "#",
  },
  {
    name: "English B2 – Cambridge",
    issuer: "Cambridge Assessment",
    date: "2022",
    credentialUrl: "#",
  },
];

export const skillCategories = [
  {
    name: "Backend Development",
    icon: "Server",
    skills: [
      { name: "C#", level: 85 },
      { name: ".NET / ASP.NET Core", level: 80 },
      { name: "Entity Framework", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Unit Testing", level: 70 },
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "SQL Server", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "Database Design", level: 75 },
      { name: "LINQ", level: 70 },
    ],
  },
  {
    name: "Frontend & Web",
    icon: "Globe",
    skills: [
      { name: "HTML / CSS", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Responsive Design", level: 70 },
    ],
  },
  {
    name: "Tools & Practices",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Visual Studio", level: 85 },
      { name: "VS Code", level: 80 },
      { name: "Docker", level: 55 },
      { name: "Agile / Scrum", level: 65 },
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Enterprise Task Management API",
    subtitle: "RESTful API with Clean Architecture",
    description:
      "A full-featured task management API built with ASP.NET Core following Clean Architecture principles. Supports user authentication, role-based authorization, and CRUD operations with pagination and filtering.",
    context:
      "Developed as a capstone project to demonstrate enterprise-level backend development skills and architectural knowledge.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "JWT Auth", "xUnit"],
    architecture:
      "Clean Architecture with separate layers for Domain, Application, Infrastructure, and Presentation. Repository pattern for data access, MediatR for CQRS.",
    challenges: [
      "Implementing role-based authorization with fine-grained permissions",
      "Designing efficient pagination for large datasets",
      "Structuring the project for testability and maintainability",
    ],
    results: [
      "95%+ code coverage with unit and integration tests",
      "Sub-100ms response times for standard queries",
      "Well-documented API with Swagger/OpenAPI",
    ],
    github: "#",
    live: null,
    featured: true,
  },
  {
    id: "project-2",
    title: "Student Portal Web Application",
    subtitle: "Full-Stack Academic Platform",
    description:
      "A comprehensive web application for managing student information, course enrollments, and grade tracking. Features a responsive dashboard with real-time data visualization.",
    context:
      "Built during the Bachelor's program as a team project, serving as a practical application of full-stack development skills.",
    technologies: ["C#", "ASP.NET MVC", "SQL Server", "Bootstrap", "JavaScript", "Chart.js"],
    architecture:
      "MVC pattern with service layer, repository pattern, and dependency injection. SQL Server for data persistence with stored procedures for complex queries.",
    challenges: [
      "Coordinating work across a team of 4 developers",
      "Handling complex data relationships between students, courses, and grades",
      "Building responsive dashboards with real-time chart updates",
    ],
    results: [
      "Successfully used by 50+ students during academic period",
      "Responsive design working across all device sizes",
      "Positive feedback from professors on code quality",
    ],
    github: "#",
    live: null,
    featured: true,
  },
  {
    id: "project-3",
    title: "Personal Portfolio Website",
    subtitle: "React + Tailwind CSS",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance. Showcases projects, skills, and professional background.",
    context:
      "Created to establish a professional online presence and demonstrate frontend development capabilities beyond backend expertise.",
    technologies: ["React", "Tailwind CSS", "Vite", "React Router", "Lucide Icons"],
    architecture:
      "Component-based architecture with context API for theme management. Data-driven design with centralized portfolio data.",
    challenges: [
      "Designing a visually appealing and professional layout",
      "Implementing smooth dark/light mode transitions",
      "Ensuring accessibility and performance across devices",
    ],
    results: [
      "Lighthouse score 95+ across all categories",
      "Fully responsive from mobile to 4K displays",
      "Easy to update with centralized data structure",
    ],
    github: "#",
    live: "#",
    featured: false,
  },
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
