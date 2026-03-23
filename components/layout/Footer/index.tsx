"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ArrowRight
} from "lucide-react";
import { PHONE_NUMBER } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    exams: [
      { label: "JAMB (UTME)", href: "#" },
      { label: "WAEC (SSCE)", href: "#" },
      { label: "NECO (SSCE)", href: "#" },
      { label: "Post-UTME", href: "#" },
      { label: "NABTEB", href: "#" },
    ],
    resources: [
      { label: "Syllabus", href: "#" },
      { label: "Exam Timetables", href: "#" },
      { label: "Past Questions", href: "#" },
      { label: "CBT Practice", href: "#" },
      { label: "Study Tips", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Success Stories", href: "#" },
      { label: "Our Tutors", href: "#" },
      { label: "Pricing Plans", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#05203C] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-1.2 font-bold text-2xl text-white whitespace-nowrap">
                <span className="text-[#BE1E2D]">SUPER</span>NOVAS
                <div className="flex flex-col border-l border-white/20 pl-2 ml-1">
                  <span className="text-[10px] leading-none font-bold uppercase tracking-tighter text-white/80">
                    Academy
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              Nigeria&apos;s leading online academy for secondary and post-secondary exam preparation. 
              We empower students with the tools, knowledge, and confidence to ace their exams 
              and secure their future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, backgroundColor: "#BE1E2D" }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Exam Prep
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#BE1E2D] rounded-full" />
            </h4>
            <ul className="space-y-4">
              {footerLinks.exams.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-white/60 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#BE1E2D]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#BE1E2D] rounded-full" />
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-white/60 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#BE1E2D]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#BE1E2D] rounded-full" />
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="text-[#BE1E2D] shrink-0" />
                <span>123 Academy Way, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={20} className="text-[#BE1E2D] shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={20} className="text-[#BE1E2D] shrink-0" />
                <a href="mailto:info@supernovas.academy" className="hover:text-white transition-colors">info@supernovas.academy</a>
              </li>
            </ul>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-white/80">Subscribe to our newsletter</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#BE1E2D] transition-colors pr-12"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#BE1E2D] p-2 rounded-md hover:bg-red-700 transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {currentYear} Supernovas Academy. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
