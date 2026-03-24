"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ExamHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    color: string;
    features: string[];
  };
}

export const ExamHero = ({ data }: ExamHeroProps) => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
        <div 
          className="w-64 h-64 rounded-full" 
          style={{ backgroundColor: data.color }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide"
              style={{ backgroundColor: `${data.color}15`, color: data.color }}
            >
              {data.subtitle}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              {data.description}
            </p>
            
            <div className="space-y-4 mb-10">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" style={{ color: data.color }} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                style={{ backgroundColor: data.color }}
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
                View Schedule
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative">
              {/* Replace with actual image when available */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  background: `linear-gradient(135deg, ${data.color}, transparent)` 
                }}
              />
              <div className="flex items-center justify-center h-full text-slate-400 text-6xl font-bold italic opacity-30 select-none">
                 SUPERNOVAS
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="text-3xl font-bold text-slate-900">50k+</div>
              <div className="text-sm text-slate-500 font-medium">Students Enrolled</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
