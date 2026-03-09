import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 1. Framer Motion Values for Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Spring Physics for Premium, Heavy Feel
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Map Mouse Coordinates to 3D Rotation (-8 to 8 degrees)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  // Handle Mouse Move over the card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset card to flat resting state
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      // Apply the 3D perspective to the wrapper
      style={{ perspective: 1200 }}
      className="relative w-full h-125 cursor-pointer"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        // LayoutId is crucial for the seamless transition to the next page
        layoutId={`project-cover-${project.slug}`}
        className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 bg-[#0A0A0A]"
      >
        {/* The Image (Grayscale resting, Color on hover) */}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full relative"
        >
          {/* Replace src with project.image */}
          <img
            src={project.image}
            alt={project.title}
            className={`object-cover w-full h-full transition-all duration-700 ${
              isHovered
                ? "grayscale-0 filter-none"
                : "grayscale filter contrast-125 opacity-70"
            }`}
          />
        </motion.div>

        {/* The Glassmorphism Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

        {/* The Kinetic Content Reveal */}
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end pointer-events-none">
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: isHovered ? "0%" : "100%" }}
              transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
              className="text-[10px] font-mono tracking-widest text-white/60 uppercase"
            >
              {project.category} // {project.year}
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              layoutId={`project-title-${project.slug}`}
              animate={{ y: isHovered ? 0 : 8 }}
              className="text-3xl md:text-4xl font-serif text-white uppercase tracking-tight"
            >
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Subtle geometric corner accents (Editorial styling) */}
        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30" />
        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/30" />
        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30" />
      </motion.div>
    </motion.div>
  );
}
