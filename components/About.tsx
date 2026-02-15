import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Layout, Terminal } from 'lucide-react';
import { Card } from './ui/Card';

const stack = [
  { icon: Layout, category: "Frontend", items: ["React", "Next.js 15", "TypeScript", "Tailwind", "Framer Motion"] },
  { icon: Server, category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
  { icon: Cloud, category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"] },
  { icon: Terminal, category: "Automation", items: ["n8n", "Puppeteer", "Telegram API", "OpenAI API"] },
];

export const About: React.FC = () => {
  return (
    <Section id="about" className="relative">
      <div className="flex flex-col items-center gap-10 max-w-4xl mx-auto">
        
        {/* Profile Image - Centered, Smaller Avatar Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Subtle Glow Behind Avatar */}
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-blue-500/50 to-purple-600/50 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
         
               <img 
                 src="/assets/unnamed.jpg" 
                 alt="Profile" 
                 className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
               />
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full text-xs font-mono text-blue-300 shadow-lg whitespace-nowrap">
            DUBAI, UAE
          </div>
        </motion.div>

        {/* Bio Text */}
        <div className="text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400">
              Engineering outcomes, not just code.
            </span>
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a Software Engineer specialized in high-ticket automation. Unlike traditional agencies that sell hours, I build automated systems that scale revenue and reduce operational drag.
            </p>
            <p>
              Focused on the Dubai enterprise sector, I bridge the gap between complex backend logic and premium, intuitive user interfaces.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
            {stack.map((group, idx) => (
              <Card key={idx} className="p-5 border-blue-500/10 bg-blue-950/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white">{group.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

      </div>
    </Section>
  );
};