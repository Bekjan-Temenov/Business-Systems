import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-32">
      {/* Background Glow Effect - Cosmic Blue/Purple */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm text-xs font-medium text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span>Available for Strategic Partnerships in Dubai</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
          <span className="text-white">Architecting</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white">
             Business Systems.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Engineering & Automation for the Dubai market. 
          I build high-performance ecosystems that eliminate manual labor and drive revenue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Strategic Consultation
          </Button>
          <Button variant="secondary" size="lg" className="group" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            View Case Studies 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};