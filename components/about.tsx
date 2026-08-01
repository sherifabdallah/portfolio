"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a{" "}
        <span className="font-medium">Senior Software Engineer</span> based in{" "}
        <span className="font-medium">Cairo, Egypt</span>, with a degree in{" "}
        <span className="font-medium">Computer Science & Artificial Intelligence</span>. I have{" "}
        <span className="font-medium">4+ years of experience</span> building
        production-grade systems across backend, frontend, DevOps, and AI
        automation.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of engineering</span> is
        designing{" "}
        <span className="font-medium">scalable distributed systems</span> from
        microservices and message queues to workflow engines and AI-powered
        pipelines. My core stack is{" "}
        <span className="font-medium">.NET Core, React, Python, and Docker</span>.
        I love tackling hard infrastructure problems and turning complex
        requirements into clean, maintainable solutions.
      </p>
      <p>
        Currently, I'm working as a{" "}
        <span className="font-medium">Senior Software Engineer at Projecx</span>
        , maintaining automation systems running across{" "}
        <span className="font-medium">200+ mobile devices</span> in parallel and
        integrating AI-powered agents using{" "}
        <span className="font-medium">LangChain & LangGraph</span>.{" "}
        <span className="italic">When I'm not coding</span>, I enjoy working
        out, watching movies, and learning new things in history and philosophy.
      </p>
    </motion.section>
  );
}
