import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav className={`flex items-center justify-between w-full max-w-5xl rounded-full px-6 transition-all duration-300 ${scrolled ? 'py-2 bg-black/60 backdrop-blur-xl border border-white/10' : 'py-3 bg-transparent border border-transparent'}`}>
        <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
          SYSTEMS_ARCHITECT
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="sm" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About
          </Button>
          <Button variant="ghost" size="sm" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            Work
          </Button>
          <Button variant="primary" size="sm" className="hidden md:inline-flex" onClick={scrollToContact}>
            Consultation
          </Button>
        </div>
      </nav>
    </header>
  );
};