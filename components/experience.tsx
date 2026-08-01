"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-full"
    >
      <SectionHeading>My experience</SectionHeading>

      <div className="relative w-full">
        {/* Vertical line */}
        <div
          className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 sm:-translate-x-0.5"
          style={{
            background:
              theme === "light"
                ? "linear-gradient(to bottom, #e5e7eb, #d1d5db)"
                : "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
          }}
        />

        <div className="flex flex-col gap-8 sm:gap-10">
          {experiencesData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-4 sm:gap-0 ${
                  isEven
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                }`}
              >
                {/* ── Icon bubble ── */}
                <div
                  className={`
                    relative z-10 flex-shrink-0
                    flex items-center justify-center
                    w-10 h-10 sm:w-11 sm:h-11 rounded-full
                    text-lg shadow-md
                    sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-3
                  `}
                  style={{
                    background:
                      theme === "light"
                        ? "white"
                        : "rgba(255,255,255,0.12)",
                    border:
                      theme === "light"
                        ? "2px solid #e5e7eb"
                        : "2px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {item.icon}
                </div>

                {/* ── Spacer for desktop alternating layout ── */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* ── Card ── */}
                <div
                  className={`
                    flex-1 min-w-0
                    sm:w-[calc(50%-2.5rem)]
                    sm:flex-none
                    ${isEven ? "sm:ml-10 sm:mr-auto sm:pr-6" : "sm:mr-10 sm:ml-auto sm:pl-6"}
                    rounded-2xl px-5 py-5 shadow-sm
                  `}
                  style={{
                    background:
                      theme === "light"
                        ? "#f3f4f6"
                        : "rgba(255,255,255,0.05)",
                    border:
                      theme === "light"
                        ? "1px solid rgba(0,0,0,0.06)"
                        : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Date badge */}
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                      theme === "light"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {item.date}
                  </span>

                  <h3 className="font-bold text-base sm:text-lg leading-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-gray-500 dark:text-white/50">
                    {item.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-white/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
