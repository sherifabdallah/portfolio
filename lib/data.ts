import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Front-End Developer",
    location: "",
    description:
      "Canspect Corporation",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Data Science Engineer",
    location: "Freelance (Self employed)",
    description:
      "Executed diverse data science projects, including meteorological and satellite image analysis, Developed an R-based tool for urban dynamics analysis through population data visualization, Created a Python web scraper to gather country data, enabling further analysis and visualization.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Bachelor's degree, Computer Science & Artificial Intelligence",
    location: "",
    description:
      "Modern University for Technology & Information",
      icon: React.createElement(CgWorkAlt),
      date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "React JS",
  "React Native",
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
  "C#",
  "Machine Learning & Deep Learning",
  "Data Science",
  "PyTorch",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Web Scraping",
  "OpenCV",
  "Git & GitHub",
  "Linux",

] as const;
