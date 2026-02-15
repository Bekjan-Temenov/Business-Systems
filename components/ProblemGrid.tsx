import React from 'react';
import { Clock, TrendingDown, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Section } from './Section';
import { PainPoint } from '../types';

const painPoints: PainPoint[] = [
  {
    id: '1',
    title: 'Operational Time Leaks',
    description: 'Manual data entry and disjointed systems are costing your team 20+ hours weekly per employee. Automation recaptures this lost capital.',
    icon: Clock
  },
  {
    id: '2',
    title: 'Lead Conversion Drop-off',
    description: 'Slow response times and friction-heavy user flows kill conversion. I implement instant, AI-driven capture systems.',
    icon: TrendingDown
  },
  {
    id: '3',
    title: 'Human Error & Risk',
    description: 'Spreadsheet dependency leads to data corruption. Scalable architecture ensures data integrity and operational resilience.',
    icon: AlertTriangle
  }
];

export const ProblemGrid: React.FC = () => {
  return (
    <Section id="approach">
      <div className="mb-12 md:text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">The Cost of Inefficiency</h2>
        <p className="text-slate-400">
          Most Dubai enterprises hemorrhage value through outdated digital infrastructure. 
          My approach targets these specific bottlenecks.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((item) => (
          <Card key={item.id} className="border-white/5 hover:border-blue-500/30 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-slate-400">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};