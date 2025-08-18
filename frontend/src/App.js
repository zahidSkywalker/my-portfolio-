import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeContext from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'dark bg-dark-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <Helmet>
          <title>zahidSkywalker - Portfolio</title>
          <meta name="description" content="MERN Stack Developer, Django enthusiast, and 3D Artist. Full-stack web development and creative solutions." />
          <meta name="keywords" content="zahidSkywalker, MERN Stack, React, Node.js, MongoDB, Django, 3D Artist, Web Developer, Full Stack" />
          <meta name="author" content="zahidSkywalker" />
          
          {/* Open Graph */}
          <meta property="og:title" content="zahidSkywalker - Portfolio" />
          <meta property="og:description" content="MERN Stack Developer, Django enthusiast, and 3D Artist" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zahidul-portfolio.vercel.app/" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="zahidSkywalker - Portfolio" />
          <meta name="twitter:description" content="MERN Stack Developer, Django enthusiast, and 3D Artist" />
        </Helmet>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;