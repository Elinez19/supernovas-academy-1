"use client";

import React from 'react';
import * as Icons from 'lucide-react';

interface SubjectGridProps {
  subjects: Array<{ id: string; name: string; icon: string }>;
  color: string;
}

export const SubjectGrid = ({ subjects, color }: SubjectGridProps) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Browse Subjects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from our wide range of subjects. Each course is designed to meet the specific requirements of the examination syllabus.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => {
            const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[subject.icon] || Icons.Book;
            return (
              <div 
                key={subject.id}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${color}10`, color: color }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{subject.name}</h3>
                <div className="flex items-center text-sm font-medium" style={{ color: color }}>
                  Explore Course <Icons.ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
