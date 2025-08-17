import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import { 
  SiReact, 
  SiMongodb, 
  SiExpress, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiDjango, 
  SiBlender, 
  SiJavascript, 
  SiPython,
  SiGit,
  SiVercel,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeaftereffects
} from 'react-icons/si';

// Modern Hero component with animated skill bubbles
const Hero = () => {
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

  const skillIcons = [
    { icon: SiReact, name: 'React', color: '#61DAFB', delay: 0 },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248', delay: 0.5 },
    { icon: SiExpress, name: 'Express', color: '#000000', delay: 1 },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933', delay: 1.5 },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26', delay: 2 },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6', delay: 2.5 },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', delay: 3 },
    { icon: SiDjango, name: 'Django', color: '#092E20', delay: 3.5 },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', delay: 4 },
    { icon: SiPython, name: 'Python', color: '#3776AB', delay: 4.5 },
    { icon: SiGit, name: 'Git', color: '#F05032', delay: 5 },
    { icon: SiVercel, name: 'Vercel', color: '#000000', delay: 5.5 },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E', delay: 6 },
    { icon: SiBlender, name: 'Blender', color: '#F5792A', delay: 6.5 },
    { icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF', delay: 7 },
    { icon: SiAdobeaftereffects, name: 'After Effects', color: '#9999FF', delay: 7.5 }
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
                </motion.span>
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight text-white dark:text-white"
              >
                A{' '}
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                  MERN Stack Developer
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-white dark:text-white leading-relaxed font-medium"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                I code apps, design experiences, and sometimes break the internet (don't worry, I fix it too).
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

          {/* Right Content - Profile Image with Animated Skill Bubbles */}
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
                
                {/* Animated Skill Icon Bubbles */}
                {skillIcons.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: skill.delay, 
                      duration: 0.8, 
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute w-12 h-12 bg-white dark:bg-dark-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-600 cursor-pointer group"
                    style={{
                      top: `${20 + (index % 4) * 15}%`,
                      left: index % 2 === 0 ? '-20px' : 'auto',
                      right: index % 2 === 1 ? '-20px' : 'auto',
                      zIndex: 10
                    }}
                    title={skill.name}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="text-xl"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </motion.div>
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      {skill.name}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;