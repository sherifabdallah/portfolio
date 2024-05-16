import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const skillsData = [
  ".NET",
  "Entity Framework",
  "C#",
  "Elasticsearch",
  "RabbitMQ",
  "MassTransit",
  "Blazor",
  "Docker",
  "React",
  "JavaScript",
  "SASS & CSS",
  "REST APIs",
  "jQuery",
  "Ajax",
  "HTML",
  "Bootstrap",
  "Python",
  "Django",
  "PHP",
  "SQL",
  "C++",
  "Git & GitHub",
  "Linux",
  

] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Bachelor's degree, Computer Science & Artificial Intelligence",
    location: "",
    description:
      "Modern University for Technology & Information",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Software Engineer",
    location: "Vertowave",
    description:
      "Skills: C# · .NET Core · Entity Framework · Elasticsearch · SQL · Blazor · RabbitMQ · MassTransit · Docker",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Uber Eats Clone",
    description:
      "Contributed to the development of an Uber Eats clone system designed for users, restaurants, delivery drivers, and administrators. Demonstrated expertise in full-stack development, with a focus on implementing user authentication, dynamic listings, real-time tracking, and seamless integration with the Google Maps API.",
    tags: ["React", "Node.js", "MongoDB", "JavaScript", "SQL", "HTML", "SASS"],
    url: "https://github.com/sherifabdallah/Uber-Eats-Clone",
  },

  {
    title: "Geekshub",
    description:
      "Is a feature-rich social network. It includes a dynamic chat system, post interactions with ’love’ and comments, a robust notification system, email-based password recovery, and an efficient search mechanism, Demonstrated expertise in full-stack development, with a focus on implementing user authentication, dynamic listings.",
    tags: ["Django", "Python", "JavaScript", "jQuery", "Ajax", "SQL", "CSS"],
    url: "https://github.com/sherifabdallah/Geekshub",
  },

  {
    title: "EgyFlix",
    description:
      "EgyFlix is a streaming platform reminiscent of Netflix, offering a diverse selection of content. It provides a user-friendly interface and smooth navigation, allowing viewers to enjoy their favorite shows and movies effortlessly.",
    tags: ["Django", "Python", "JavaScript", "jQuery", "Ajax", "SQL", "CSS"],
    url: "https://github.com/sherifabdallah/Egyflix",
  },

  {
    title: "Social Club",
    description:
      "A dynamic Django application meticulously designed to emulate the user experience of Twitter. With its sleek interface and comprehensive functionality, users can engage in real-time conversations, share updates, follow their interests, and connect with others seamlessly, providing an authentic social media experience.",
    tags: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQL"],
    url: "https://github.com/sherifabdallah/social-club",
  },




] as const;


