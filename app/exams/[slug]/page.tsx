import React from 'react';
import { notFound } from 'next/navigation';
import { EXAM_DATA } from '@/constants/exams';
import { ExamHero } from '@/components/exams/ExamHero';
import { SubjectGrid } from '@/components/exams/SubjectGrid';
import { PricingSection } from '@/components/exams/PricingSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExamCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const exam = EXAM_DATA[slug];

  if (!exam) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ExamHero data={exam} />
      <SubjectGrid subjects={exam.subjects} color={exam.color} />
      <PricingSection pricing={exam.pricing} color={exam.color} />
      
      {/* Additional CTA or Newsletter section could go here */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
           <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
             Join thousands of students who have achieved excellence with Supernovas Academy.
           </p>
           <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
             Create Free Account
           </button>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(EXAM_DATA).map((slug) => ({
    slug: slug,
  }));
}
