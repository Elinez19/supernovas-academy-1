"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-[#05203C]" />
      <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-red-500 text-sm font-bold mb-8"
          >
            <Sparkles size={16} />
            Ready to Start Your Success Story?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Don&apos;t Just Study. <br />
            <span className="text-red-500">Excel With Confidence.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of students using Supernovas Academy to ace their JAMB, WAEC, and NECO exams on their first attempt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-red-600/20 transition-all flex items-center gap-3 group"
            >
              Get Started for Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <button className="text-white font-bold text-lg hover:text-red-500 transition-colors">
              View Pricing Plans
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
