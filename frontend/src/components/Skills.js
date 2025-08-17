import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiDjango, SiPostgresql, SiTailwindcss, SiBootstrap, SiBlender, SiVercel, SiJavascript, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const skillTexts = useMemo(() => [
    "Frontend Development",
    "Backend Development", 
    "Database Management",
    "DevOps & Tools",
    "3D & Creative"
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 1500;

    const typeText = () => {
      const currentFullText = skillTexts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % skillTexts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, skillTexts]);

  const skillCategories = [
    {
      title: "Frontend",
      icon: FiCode,
      description: "I make pixels behave and buttons dance 🎭",
      skills: [
        { name: "React.js", icon: FaReact, level: 90, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, level: 85, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952B3" }
      ]
    },
    {
      title: "Backend",
      icon: FiServer,
      description: "I build servers that never sleep 🌙",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 80, color: "#000000" },
        { name: "Python", icon: FaPython, level: 75, color: "#3776AB" },
        { name: "Django", icon: SiDjango, level: 70, color: "#092E20" }
      ]
    },
    {
      title: "Databases",
      icon: FiDatabase,
      description: "Because someone has to remember everything 🧠",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 75, color: "#336791" },
        { name: "SQLite", icon: FiDatabase, level: 80, color: "#003B57" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: FiTool,
      description: "I dockerize my dreams 🐳",
      skills: [
        { name: "GitHub", icon: FaGithub, level: 90, color: "#181717" },
        { name: "Docker", icon: FaDocker, level: 70, color: "#2496ED" },
        { name: "Vercel", icon: SiVercel, level: 85, color: "#000000" }
      ]
    },
    {
      title: "3D & Creative",
      icon: FiCode,
      description: "I bend reality into pixels 🎨",
      skills: [
        { name: "Blender", icon: SiBlender, level: 80, color: "#F5792A" },
        { name: "3D Modeling", icon: FiCode, level: 75, color: "#8B5CF6" },
        { name: "Animation", icon: FiCode, level: 70, color: "#EC4899" },
        { name: "VFX", icon: FiCode, level: 65, color: "#F59E0B" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -30, 0],
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-2xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Skills & <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-8 bg-primary-500 ml-1"
              />
            </span>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive collection of technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50, y: 30 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: categoryIndex * 0.2
                  }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-600 relative overflow-hidden group"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.5, type: "spring" }}
                  className="flex items-center gap-4 mb-6"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"
                  >
                    <category.icon />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.2 + 0.5, duration: 0.6, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {category.description}
                    </p>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.7, 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm shadow-md"
                            style={{ backgroundColor: skill.color }}
                          >
                            <skill.icon />
                          </motion.div>
                          <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover/skill:text-primary-500 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1, 
                            duration: 1.5,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ backgroundColor: skill.color }}
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Always Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 dark:from-primary-400/20 dark:to-purple-400/20 p-8 rounded-2xl border border-primary-200 dark:border-primary-800 relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 w-8 h-8 bg-primary-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/20 rounded-full"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Always Learning 📚
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I! Currently exploring new frameworks, 
                cloud technologies, and advanced 3D techniques to stay at the cutting edge.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;