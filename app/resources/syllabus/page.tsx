import React from "react";
import Link from "next/link";
import { BookOpen, Search, Download } from "lucide-react";

const SyllabusPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="bg-[#05203C] text-white rounded-3xl p-10 mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 whitespace-pre-wrap">
              Official Exam <span className="text-[#BE1E2D]">Syllabus</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              Access the most up-to-date syllabus for JAMB, WAEC, NECO, and Post-UTME. Download PDF versions to guide your study plan.
            </p>
            <div className="flex gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for a subject..." 
                  className="w-full pl-12 pr-4 py-3 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#BE1E2D]"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-linear-to-l from-white to-transparent pointer-events-none" />
          <BookOpen className="absolute -right-10 -bottom-10 text-white/5 pointer-events-none" size={300} />
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {["JAMB (UTME)", "WAEC (SSCE)", "NECO (SSCE)"].map((exam, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#05203C] mb-4">{exam}</h2>
              <p className="text-slate-600 mb-6">Comprehensive curriculum and topics to cover for excellent performance.</p>
              <ul className="space-y-3 mb-8">
                {["Mathematics", "Use of English", "Physics", "Chemistry"].map((subject, idx) => (
                  <li key={idx} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-slate-700 font-medium group-hover:text-[#BE1E2D] transition-colors">{subject}</span>
                    <button className="text-slate-400 hover:text-[#BE1E2D] p-2 bg-slate-50 rounded-full group-hover:bg-[#BE1E2D]/10 transition-colors">
                      <Download size={16} />
                    </button>
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-[#BE1E2D] font-bold text-sm hover:underline flex items-center justify-center w-full py-3 bg-[#BE1E2D]/5 rounded-xl">
                View All {exam} Subjects
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SyllabusPage;
