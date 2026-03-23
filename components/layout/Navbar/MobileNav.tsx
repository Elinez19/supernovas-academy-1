"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { MAIN_NAV_LINKS, PHONE_NUMBER } from "../../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="lg:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-[#05203C]"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-110"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[300px] bg-white z-120 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="font-bold text-xl text-[#05203C]">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <X size={24} className="text-[#05203C]" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile Navigation">
                <ul className="flex flex-col">
                  {MAIN_NAV_LINKS.map((link) => (
                    <li key={link.label} className="border-b border-gray-50 last:border-none">
                      <div className="flex items-center justify-between px-6 py-4">
                        <Link 
                          href={link.href} 
                          className="text-sm font-semibold text-[#05203C]"
                          onClick={() => !link.hasMegaMenu && setIsOpen(false)}
                        >
                          {link.label}
                          {link.badge && (
                            <span className="bg-[#BE1E2D] text-white text-[8px] px-1 rounded ml-1">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                        {link.hasMegaMenu && link.subLinks && (
                          <button 
                            onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                            className="p-1"
                            aria-expanded={expanded === link.label}
                            aria-label={`Toggle ${link.label} submenu`}
                          >
                            <ChevronDown 
                              size={18} 
                              className={`transition-transform duration-300 ${expanded === link.label ? 'rotate-180' : ''}`} 
                            />
                          </button>
                        )}
                      </div>
                      
                      <AnimatePresence>
                        {expanded === link.label && link.subLinks && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-gray-50 overflow-hidden"
                          >
                            <ul className="py-1">
                              {link.subLinks.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-8 py-3 text-sm text-[#05203C]/80 hover:text-[#BE1E2D]"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-[#05203C] text-sm font-bold"
                >
                  <Phone size={18} className="text-[#BE1E2D]" />
                  {PHONE_NUMBER}
                </a>
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#05203C] text-white py-3 rounded text-center text-xs font-bold uppercase tracking-wider"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
