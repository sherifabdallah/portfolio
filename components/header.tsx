"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* ─── Desktop pill nav ─── */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 h-[3.25rem] w-[36rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2">
        <ul className="flex items-center gap-1 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center px-4 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200 rounded-full",
                  { "text-gray-950 dark:text-gray-200": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => handleClick(link.name)}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* ─── Mobile top bar ─── */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-5 h-14 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-black/5 dark:border-white/10">
        <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm tracking-wide">
          Sherif Abdullah
        </span>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* ─── Mobile dropdown menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed top-14 left-0 right-0 z-[998] bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-xl"
          >
            <ul className="flex flex-col py-3">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => handleClick(link.name)}
                    className={clsx(
                      "block px-6 py-3 text-sm font-medium transition",
                      activeSection === link.name
                        ? "text-gray-950 dark:text-white bg-gray-100 dark:bg-gray-800"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
