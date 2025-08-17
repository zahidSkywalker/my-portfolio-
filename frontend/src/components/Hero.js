import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

// Enhanced Hero component with stunning animations
const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = useMemo(() => [
    "MERN Stack Developer",
    "Django Enthusiast", 
    "3D Artist",
    "Creative Coder"
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 1000;

    const typeText = () => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(prev => {
          const newText = currentFullText.substring(0, prev.length - 1);
          if (newText === '') {
            setIsDeleting(false);
            setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
          }
          return newText;
        });
      } else {
        setCurrentText(prev => {
          const newText = currentFullText.substring(0, prev.length + 1);
          if (newText === currentFullText) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
          return newText;
        });
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/zahidSkywalker',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/zahidul-islam',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/8801842089174',
      color: 'hover:text-green-500'
    },
    {
      name: 'Messenger',
      icon: FaFacebookMessenger,
      url: 'https://m.me/zahidul.islam',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="home" className="section-padding min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-lg text-primary-500 dark:text-primary-400 font-medium"
              >
                Hi, I'm{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold text-white dark:text-white tracking-wider bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
                    filter: 'drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))'
                  }}
                >
                  ZAHIDUL ISLAM
                </motion.span>{' '}
                👋
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight text-white dark:text-white"
              >
                A{' '}
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                  <span className="inline-block">
                    {currentText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-8 bg-primary-500 ml-1"
                    />
                  </span>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-white dark:text-white leading-relaxed font-medium"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                I code apps, design experiences, and sometimes break the internet (don't worry, I fix it too 😅).
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 dark:from-primary-400/20 dark:to-primary-500/20 p-6 rounded-xl border border-primary-200 dark:border-primary-800 relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: [0, 100, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <p className="text-lg font-medium text-white dark:text-white relative z-10 font-semibold">
                  💡 Motto: "I don't just write code, I write stories in JavaScript and Python."
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="contact" smooth={true} duration={500}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <FiMail className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Get In Touch</span>
                  </motion.button>
                </Link>
                
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <FiDownload className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download CV</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <span className="text-gray-600 dark:text-gray-400">Follow me:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20, scale: 0 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-all duration-300 ${social.color} shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Enhanced Glow Effect */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl"
                />
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dbi2rwlso/image/upload/v1755423286/IMG_8802_m9ge9g.jpg"
                    alt="Zahidul Islam"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/0ea5e9/ffffff?text=Zahidul+Islam';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                >
                  React
                </motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    y: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                >
                  Django
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                >
                  3D
                </motion.div>

                {/* New Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-1/4 -right-12 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                >
                  JS
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 20, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute bottom-1/4 -right-6 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                >
                  CSS
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;