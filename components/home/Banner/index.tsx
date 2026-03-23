"use client";

import { motion } from "framer-motion";
import { ANNOUNCEMENT_TEXT } from "@/constants";
import { Megaphone } from "lucide-react";

const Banner = () => {
  return (
    <section className="bg-[#05203C] py-4 px-4 overflow-hidden border-y border-white/10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center gap-3 text-white text-center"
        >
          <div className="bg-red-500/20 p-2 rounded-full border border-red-500/30 shrink-0">
            <Megaphone size={18} className="text-red-400" />
          </div>
          <p className="text-sm md:text-base font-semibold tracking-wide">
            {ANNOUNCEMENT_TEXT}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-full transition-colors hidden md:block"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
