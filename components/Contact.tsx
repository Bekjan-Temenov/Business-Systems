import React from 'react';
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './Section';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="text-center pt-32 pb-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Ready to optimize?
        </h2>
        <p className="text-lg text-neutral-400">
          I only take on 2 strategic projects per quarter to ensure maximum attention and quality. 
          Let's discuss if your requirements align with my capabilities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="https://wa.me/+971589684041" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px] bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </a>
          <a href="http://linkedin.com/in/bekjan-temenov/" target="_blank" rel="noopener noreferrer">
             <Button size="lg" variant="secondary" className="w-full sm:w-auto min-w-[200px]">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/Bekjan-Temenov" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px]">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </a>
          <a href="https://t.me/temen0v" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px]">
              <MessageCircle className="w-5 h-5 mr-2" />
              Telegram
            </Button>
          </a>
        </div>
        
        <div className="pt-8">
          <a href="mailto:temenovbekzan@gmail.com" className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            temenovbekzan@gmail.com
          </a>
        </div>
      </div>
    </Section>
  );
};