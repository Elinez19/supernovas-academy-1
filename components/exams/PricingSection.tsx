"use client";

import React from 'react';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  pricing: Array<{
    id: string;
    name: string;
    price: string;
    period: string;
    features: string[];
  }>;
  color: string;
}

export const PricingSection = ({ pricing, color }: PricingSectionProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Affordable Learning Plans</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Invest in your future with our flexible pricing options designed to provide maximum value for every student.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {pricing.map((plan) => (
            <div 
              key={plan.id}
              className="bg-white border-2 border-slate-100 rounded-3xl p-8 lg:p-12 w-full max-w-sm flex flex-col transition-all hover:border-[color] hover:shadow-2xl group"
              style={{ '--hover-color': color } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-10 grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div 
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}15`, color: color }}
                    >
                      <Check className="w-3 h-3 font-bold" />
                    </div>
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className="w-full py-4 rounded-xl font-bold text-slate-900 border-2 border-slate-200 transition-all group-hover:bg-(--hover-color) group-hover:text-white group-hover:border-(--hover-color)"
                style={{ '--hover-color': color } as React.CSSProperties}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
