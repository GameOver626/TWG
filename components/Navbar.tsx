'use client';

import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-mocha-900/80 backdrop-blur-md border-b border-mocha-700/50 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-mocha-800 border border-mocha-700 flex items-center justify-center text-lavender-300 group-hover:border-lavender-300/50 transition-colors">
            <Camera className="w-4 h-4" />
          </div>
          <span className="text-lg font-light tracking-wide text-platinum-100">
            TWG <span className="text-lavender-300 font-serif italic">Studio</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-platinum-400">
          <a href="#gallery" className="hover:text-lavender-300 transition-colors">
            Gallery
          </a>
          <a href="#booking" className="hover:text-lavender-300 transition-colors">
            Pricing
          </a>
          <a href="#booking-form" className="hover:text-lavender-300 transition-colors">
            Contact
          </a>
        </nav>

        {/* Quick CTA */}
        <a
          href="#booking"
          className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider bg-lavender-300 text-mocha-900 rounded-full font-medium hover:bg-lavender-400 transition-colors shadow-md"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}