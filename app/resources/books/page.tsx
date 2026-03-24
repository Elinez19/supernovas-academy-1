import React from "react";
import { BookMarked, Star, ShoppingCart, Info, Filter } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Recommended Books | Supernovas Academy",
  description: "Curated list of the best textbooks and study materials for WAEC, JAMB, and NECO preparations.",
};

const BooksPage = () => {
  const categories = ["All", "Science", "Art", "Commercial", "General"];

  const books = [
    {
      title: "New School Physics for SSS",
      author: "M.W. Anyakoha",
      subject: "Physics",
      rating: 4.9,
      reviews: 1240,
      imagePlaceholder: "bg-blue-100",
      tag: "Best Seller",
      category: "Science"
    },
    {
      title: "Essential Biology",
      author: "M.C. Michael",
      subject: "Biology",
      rating: 4.8,
      reviews: 980,
      imagePlaceholder: "bg-green-100",
      tag: "Highly Recommended",
      category: "Science"
    },
    {
      title: "Invisible Teacher of JAMB Use of English",
      author: "Dele Ashade",
      subject: "English",
      rating: 4.9,
      reviews: 2100,
      imagePlaceholder: "bg-amber-100",
      tag: "Must Have",
      category: "General"
    },
    {
      title: "New General Mathematics",
      author: "M.F. Macrae et al.",
      subject: "Mathematics",
      rating: 4.7,
      reviews: 1540,
      imagePlaceholder: "bg-slate-200",
      tag: null,
      category: "General"
    },
    {
      title: "Comprehensive Chemistry",
      author: "P.N. Okeke",
      subject: "Chemistry",
      rating: 4.8,
      reviews: 890,
      imagePlaceholder: "bg-cyan-100",
      tag: null,
      category: "Science"
    },
    {
      title: "Simplified Government",
      author: "A.A. Akinsanya",
      subject: "Government",
      rating: 4.6,
      reviews: 430,
      imagePlaceholder: "bg-purple-100",
      tag: null,
      category: "Art"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#05203C]">
              Recommended <span className="text-[#BE1E2D]">Textbooks</span>
            </h1>
            <p className="text-slate-600 text-lg">
              Our experts have selected the best study materials to help you grasp complex concepts faster and ace your examinations.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-slate-500 mr-2 font-medium">
            <Filter size={20} />
            <span>Filter by:</span>
          </div>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                index === 0
                  ? "bg-[#05203C] text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#05203C] hover:text-[#05203C]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group flex flex-col h-full">
              {/* Image Placeholder */}
              <div className={`h-48 ${book.imagePlaceholder} relative flex items-center justify-center`}>
                {book.tag && (
                  <span className="absolute top-4 right-4 bg-white text-[#BE1E2D] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {book.tag}
                  </span>
                )}
                <BookMarked size={48} className="text-white/50" />
              </div>
              
              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-bold text-[#BE1E2D] mb-2 uppercase tracking-wider">{book.subject}</div>
                <h3 className="font-bold text-lg text-[#05203C] mb-1 line-clamp-2" title={book.title}>
                  {book.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">by {book.author}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-1 mb-4">
                    <Star size={16} className="text-amber-400 fill-amber-400" />
                    <span className="font-bold text-sm text-[#05203C]">{book.rating}</span>
                    <span className="text-xs text-slate-500">({book.reviews})</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-[#05203C] font-semibold py-2 rounded-lg text-sm transition-colors border border-slate-200 flex items-center justify-center gap-2">
                      <Info size={16} />
                      Details
                    </button>
                    <button className="flex-1 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-semibold py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart size={16} />
                      Get Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Affiliation Banner */}
        <div className="bg-[#05203C] rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Can&apos;t afford physical textbooks?</h2>
            <p className="text-slate-300 mb-6">
              Supernovas Academy offers an extensive E-library with hundreds of study materials, past questions, and complete syllabus coverage included in all subscription plans.
            </p>
            <Link href="/pricing" className="inline-block bg-white text-[#05203C] font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Explore Subscription Plans
            </Link>
          </div>
          
          <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
      </div>
    </main>
  );
};

export default BooksPage;
