import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass-card rounded-2xl p-6 relative overflow-hidden group ${className}`}>
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`flex flex-col space-y-1.5 mb-4 ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return <h3 className={`font-semibold leading-none tracking-tight text-white ${className}`}>{children}</h3>;
};

export const CardDescription: React.FC<CardProps> = ({ children, className = '' }) => {
  return <p className={`text-sm text-slate-400 ${className}`}>{children}</p>;
};

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};