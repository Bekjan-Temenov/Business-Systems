import React from 'react';

const TechIcon: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-slate-500 text-xs font-mono border border-white/10 px-2 py-1 rounded bg-white/5">
    {label}
  </span>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Systems Architect. Dubai, UAE.
        </div>
        
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="text-slate-600 text-xs mr-2">POWERED BY:</span>
          <TechIcon label="Next.js 15" />
          <TechIcon label="React 19" />
          <TechIcon label="Tailwind" />
          <TechIcon label="Framer Motion" />
        </div>
      </div>
    </footer>
  );
};