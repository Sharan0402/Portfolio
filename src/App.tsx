import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        


        
        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
          <div className="container-responsive">
            <div className="text-center">
              <p className="text-gray-400">
                © 2024 Sharan Vaitheeswaran. Built with React, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Crafted with ❤️ and lots of ☕
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
