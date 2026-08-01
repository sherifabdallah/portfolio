"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsChevronLeft, BsChevronRight, BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  url,
  imageUrls,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const hasImages = imageUrls && imageUrls.length > 0;

  const prevImage = () =>
    setCurrentImg((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  const nextImage = () =>
    setCurrentImg((prev) => (prev + 1) % imageUrls.length);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-6 sm:mb-10 last:mb-0 w-full"
    >
      <section className="bg-gray-100 w-full border border-black/5 rounded-2xl overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-md">
        {/* Image Gallery */}
        {hasImages && (
          <div className="relative w-full overflow-hidden bg-black/5 dark:bg-black/20">
            <div className="relative w-full" style={{ paddingBottom: "52%" }}>
              <Image
                src={imageUrls[currentImg]}
                alt={`${title} screenshot ${currentImg + 1}`}
                fill
                className="object-cover object-top"
                quality={95}
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Navigation arrows — only show if multiple images */}
            {imageUrls.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition z-10"
                  aria-label="Previous image"
                >
                  <BsChevronLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition z-10"
                  aria-label="Next image"
                >
                  <BsChevronRight size={16} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {imageUrls.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImg(i)}
                      className={`w-2 h-2 rounded-full transition ${
                        i === currentImg
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Featured badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
              Featured Project
            </div>
          </div>
        )}

        {/* Content */}
        <div className="pt-5 pb-6 px-5 sm:px-8 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white transition shrink-0 mt-1"
              >
                <BsGithub size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
          </div>

          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
