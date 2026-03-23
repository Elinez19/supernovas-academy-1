"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../../../constants";
import { GraduationCap } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative h-[85vh] w-full pt-44 overflow-hidden -mt-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.span
          key={`subtitle-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-4"
        >
          {slide.subtitle}
        </motion.span>

        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white text-5xl md:text-7xl font-bold max-w-4xl leading-tight mb-8"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl font-medium"
        >
          {slide.description}
        </motion.p>

        <motion.button
          key={`btn-${currentSlide}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8 }}
          className="bg-white text-[#05203C] px-10 py-3.5 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all"
        >
          {slide.buttonText}
        </motion.button>
      </div>

      {/* Social Proof Badge */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full flex items-center gap-3 text-white text-[13px] font-medium"
        >
          <div className="bg-emerald-500 p-1 rounded-full">
            <GraduationCap size={16} />
          </div>
          Supernovas Academy is licensed by the National Universities Commission
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6 text-white/50 text-xs font-bold font-mono">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all ${currentSlide === idx ? "text-white scale-125 border-r-2 border-white pr-2" : "hover:text-white"}`}
          >
            {s.id}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
