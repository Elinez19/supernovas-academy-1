"use client";

import { motion } from "framer-motion";
import { BookOpen, Monitor, Award, BookCheck } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "JAMB (UTME)",
    description: "Master the Unified Tertiary Matriculation Examination with our comprehensive CBT practice and study guides.",
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-blue-600",
    link: "#",
  },
  {
    title: "WAEC (SSCE)",
    description: "Ace your West African Senior School Certificate Examination with expert-led classes and past questions.",
    icon: <BookCheck className="w-8 h-8" />,
    color: "bg-red-600",
    link: "#",
  },
  {
    title: "NECO (SSCE)",
    description: "Get ready for the National Examinations Council tests with targeted resources and mock exams.",
    icon: <Award className="w-8 h-8" />,
    color: "bg-blue-600",
    link: "#",
  },
  {
    title: "Post-UTME",
    description: "Bridge the gap to your dream university with institution-specific preparation materials.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-red-600",
    link: "#",
  },
];

const InfoCards = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#05203C] mb-4"
          >
            Choose Your Exam Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            We provide specialized coaching and resources for Nigeria&apos;s major entrance and certification exams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full"
            >
              <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${category.color.split('-')[1]}-200`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                {category.description}
              </p>
              <Link 
                href={category.link}
                className="inline-flex items-center text-[#05203C] font-bold hover:gap-2 transition-all group"
              >
                Learn More 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
