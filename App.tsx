import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProblemGrid } from './components/ProblemGrid';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Header />
      <main className="flex flex-col w-full relative">
        <Hero />
        <About />
        <ProblemGrid />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;