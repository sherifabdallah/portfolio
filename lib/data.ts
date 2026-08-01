import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Projecx - Cairo, Egypt",
    description:
      "Build and maintain automation systems running across 200+ mobile devices in parallel using Appium. Implement microservices to manage device coordination, task distribution, and execution tracking at scale. Integrate automation services with data pipelines and AI-powered agent systems using LangChain.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2026 – Present",
  },
  {
    title: "Software Engineer",
    location: "VertoWave - Cairo, Egypt",
    description:
      "Led development and deployment of StackX, an enterprise automation platform managing 10,000+ devices and 25+ backend services in production. Engineered a dynamic Workflow Engine executing 1,000+ automated tasks monthly. Built the Vertowave Authorization Package using Keycloak, reducing team setup time by 95%. Implemented CI/CD pipelines reducing deployment time by 65% with zero-downtime releases.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 – Jan 2026",
  },
  {
    title: "Software Engineer",
    location: "Freelancer.com",
    description:
      "Designed and delivered secure internal data management systems for government and security sector clients, enabling real-time monitoring and tracking. Built and deployed full-stack web applications and e-commerce platforms for international clients, covering end-to-end development from database design to frontend delivery.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2021 – Mar 2024",
  },
] as const;

export const projectsData = [
  {
    title: "StackX Automation Platform",
    description:
      "Enterprise automation platform managing 10,000+ devices and 25+ backend services in production. Developed a visual workflow builder and real-time response tools. Designed reusable UI and Authorization libraries, boosting frontend development speed. Applied AI-driven workflow automation and predictive analytics for task prioritization and error reduction.",
    tags: [".NET", "RabbitMQ", "Keycloak", "SQL", "React", "TypeScript", "Python", "LangChain", "Docker"],
    url: "",
    imageUrls: ["/stack-pic1.png", "/stack-pic2.png"],
  },
  {
    title: "Uber Eats Clone",
    description:
      "Contributed to the development of an Uber Eats clone system designed for users, restaurants, delivery drivers, and administrators. Implemented user authentication, dynamic listings, real-time tracking, and seamless integration with the Google Maps API.",
    tags: ["React", "JavaScript", "SASS"],
    url: "https://github.com/sherifabdallah/Uber-Eats-Clone",
    imageUrls: [],
  },
  {
    title: "Geekshub",
    description:
      "A feature-rich social network including a dynamic chat system, post interactions with 'love' and comments, a robust notification system, email-based password recovery, and an efficient search mechanism. Full-stack development with a focus on user authentication and dynamic listings.",
    tags: ["Django", "Python", "JavaScript", "jQuery", "Ajax", "SQL", "CSS"],
    url: "https://github.com/sherifabdallah/Geekshub",
    imageUrls: [],
  },
  {
    title: "EgyFlix",
    description:
      "A streaming platform reminiscent of Netflix, offering a diverse selection of content. Provides a user-friendly interface and smooth navigation, allowing viewers to enjoy their favorite shows and movies effortlessly.",
    tags: ["Django", "Python", "JavaScript", "jQuery", "Ajax", "SQL", "CSS"],
    url: "https://github.com/sherifabdallah/Egyflix",
    imageUrls: [],
  },
] as const;

export const skillsData = [
  // Backend
  ".NET Core",
  "C#",
  "Entity Framework",
  "REST APIs",
  "Microservices",
  "Python",
  "Flask",
  "Django",
  "Golang",
  "Java",
  "Spring Boot",
  // Frontend
  "React",
  "TypeScript",
  "Blazor",
  "JavaScript",
  "Tailwind CSS",
  "ShadCN",
  "SASS & CSS",
  "Bootstrap",
  "jQuery",
  "HTML",
  // Messaging
  "RabbitMQ",
  "MassTransit",
  // Auth
  "Keycloak",
  "OpenID Connect",
  "OAuth2",
  "JWT",
  // Databases
  "PostgreSQL",
  "SQL Server",
  "MongoDB",
  "Elasticsearch",
  // DevOps & Cloud
  "Docker",
  "Kubernetes",
  "CI/CD",
  "GitHub Actions",
  "AWS",
  "Azure IoT Hub",
  "Linux",
  "Git",
  "Terraform",
  // Testing
  "Unit Testing",
  "Playwright",
  "Appium",
  // AI & Automation
  "LangChain",
  "LangGraph",
  "RAG",
  "AI-Agentic Systems",
  // Observability
  "OpenTelemetry",
] as const;

export const certificationsData = [
  ".NET Core Microservices – Udemy",
  "Azure IoT: The Complete Guide – Udemy",
  ".NET Core: The Complete Guide – Udemy",
  "React: The Complete Guide – Udemy",
  "Python Django: The Practical Guide – Udemy",
  "The Complete Python Bootcamp – Udemy",
] as const;
