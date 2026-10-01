'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'nav-scrolled' : 'nav-blur'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center">
                <img
                  src="/yantralogo.jpg"
                  alt="Yantra AI Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                Yantra<span className="text-purple-400">AI</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/contact"
                className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                Talk to an AI Expert
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="md:hidden relative z-[110] p-2 text-gray-300 hover:text-white transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[90] bg-[#100817]">

          <div className="absolute top-16 left-0 right-0 bottom-0 overflow-y-auto">

            <div className="flex flex-col px-5 py-6 gap-3">

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-5 py-4 text-lg font-medium text-gray-200 border border-white/10 bg-white/[0.03] hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-white transition-all duration-300"
                >
                  <span>{link.label}</span>

                  <span className="text-purple-400 text-xl">
                    →
                  </span>
                </a>
              ))}

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full py-3.5 rounded-full text-base font-semibold text-center mt-4"
              >
                Talk to an AI Expert
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}