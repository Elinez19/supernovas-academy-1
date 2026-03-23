"use client";

import { useState, useEffect } from "react";
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
    <section className="relative h-[85vh] w-full pt-28 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
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
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-2"
          >
            {slide.subtitle}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white text-5xl md:text-6xl font-bold max-w-4xl leading-tight mb-2"
          >
            {slide.title}
          </motion.h1>

          {/* Social Proof Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full flex items-center gap-3 text-white text-[13px] font-medium mb-2"
          >
            <div className="bg-emerald-500 p-1 rounded-full">
              <GraduationCap size={16} />
            </div>
            Join 50,000+ students who have aced their exams with Supernovas Academy
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/90 text-lg md:text-xl mb-4 max-w-2xl font-medium"
          >
            {slide.description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.8 }}
            className="bg-[#05203C] text-white px-10 py-3.5 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all cursor-pointer mt-2 mb-12"
          >
            {slide.buttonText}
          </motion.button>
        </motion.div>
      </AnimatePresence>

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
