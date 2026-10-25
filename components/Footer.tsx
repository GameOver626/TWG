'use client';

import { Mail, ArrowUp, Globe, Camera } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mocha-900 border-t border-mocha-800 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-light text-platinum-100">
            TWG <span className="text-lavender-300 font-serif italic">Portfolio</span>
          </h3>
          <p className="text-xs text-platinum-400 font-mono mt-1">
            © {new Date().getFullYear()} TWG Photography. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/thatweirdgenius?vrfl=MTdqdjF6Zjl6a212ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-mocha-800 border border-mocha-700 flex items-center justify-center text-platinum-300 hover:text-lavender-300 hover:border-lavender-300/40 transition-all"
          >
            <Camera className="w-4 h-4" />
          </a>
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unsplash Profile"
            className="w-10 h-10 rounded-full bg-mocha-800 border border-mocha-700 flex items-center justify-center text-platinum-300 hover:text-lavender-300 hover:border-lavender-300/40 transition-all"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a
            href="mailto:contact@twgstudio.com"
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-mocha-800 border border-mocha-700 flex items-center justify-center text-platinum-300 hover:text-lavender-300 hover:border-lavender-300/40 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll Back To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-platinum-400 hover:text-lavender-300 transition-colors"
        >
          <span>Back To Top</span>
          <div className="w-8 h-8 rounded-full bg-mocha-800 border border-mocha-700 flex items-center justify-center text-lavender-300">
            <ArrowUp className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    </footer>
  );
}