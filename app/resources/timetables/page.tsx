import React from "react";
import { CalendarDays, Clock, MapPin, Download } from "lucide-react";

export const metadata = {
  title: "Examination Timetables | Supernovas Academy",
  description: "Get the latest official timetables for JAMB, WAEC, NECO, and Post-UTME exams.",
};

const TimetablesPage = () => {
  const upcomingExams = [
    {
      exam: "JAMB UTME 2026",
      date: "April 15th - April 29th, 2026",
      status: "Upcoming",
      tag: "CBT",
    },
    {
      exam: "WAEC SSCE 2026",
      date: "May 8th - June 23rd, 2026",
      status: "Registration Ongoing",
      tag: "Pen & Paper",
    },
    {
      exam: "NECO SSCE 2026",
      date: "July 5th - August 14th, 2026",
      status: "Announced",
      tag: "Pen & Paper",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#BE1E2D]/10 rounded-full mb-4 text-[#BE1E2D]">
            <CalendarDays size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#05203C]">
            Examination Timetables
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Stay organized and never miss an exam date. Access the official
            timetables for all major examinations in Nigeria.
          </p>
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-[#05203C] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Next Major Examination</h2>
              <p className="text-slate-300">JAMB UTME 2026 Main Examination</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/20 min-w-[80px]">
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Days</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/20 min-w-[80px]">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Hours</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingExams.map((exam, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#BE1E2D]" />
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-[#BE1E2D] bg-[#BE1E2D]/10 px-2.5 py-1 rounded">
                    {exam.tag}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded ${
                    exam.status === "Upcoming" ? "bg-amber-100 text-amber-700" :
                    exam.status === "Registration Ongoing" ? "bg-green-100 text-green-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {exam.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#05203C] mb-2">{exam.exam}</h3>
                <div className="flex items-center gap-2 text-slate-500 mb-6 text-sm">
                  <Clock size={16} />
                  <span>{exam.date}</span>
                </div>
                <button className="flex items-center gap-2 text-sm font-semibold text-[#05203C] hover:text-[#BE1E2D] transition-colors">
                  <Download size={16} />
                  Download Complete PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
          <div className="mt-1 bg-blue-100 text-blue-600 p-2 rounded-full hidden sm:block">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-bold text-[#05203C] mb-2">Important Notice for All Candidates</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Examination dates are subject to change by the respective examination bodies. We update these timetables frequently. Ensure you confirm with your examination center or school management at least two weeks before your first paper.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TimetablesPage;
