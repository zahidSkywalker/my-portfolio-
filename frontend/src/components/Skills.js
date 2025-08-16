import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiServer, FiDatabase, FiTool, FiPalette,
  FaReact, FaNodeJs, FaPython, FaDocker, FaGithub,
  SiMongodb, SiExpress, SiDjango, SiPostgresql, SiTailwindcss,
  SiBootstrap, SiBlender, SiVercel, SiJavascript, SiTypescript
} from 'react-icons/all';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: FiCode,
      description: "I make pixels behave and buttons dance 🎭",
      skills: [
        { name: "React.js", icon: FaReact, level: 90, color: "#61DAFB" },
        { name: "Next.js", icon: FaReact, level: 85, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952B3" },
        { name: "JavaScript", icon: SiJavascript, level: 92, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" }
      ]
    },
    {
      title: "Backend",
      icon: FiServer,
      description: "I build servers that never sleep 🌙",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 88, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 85, color: "#000000" },
        { name: "Django", icon: SiDjango, level: 82, color: "#092E20" },
        { name: "Python", icon: FaPython, level: 85, color: "#3776AB" }
      ]
    },
    {
      title: "Databases",
      icon: FiDatabase,
      description: "Because someone has to remember everything 🧠",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "#336791" },
        { name: "SQLite", icon: FiDatabase, level: 75, color: "#003B57" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: FiTool,
      description: "I dockerize my dreams 🐳",
      skills: [
        { name: "GitHub", icon: FaGithub, level: 90, color: "#181717" },
        { name: "Docker", icon: FaDocker, level: 75, color: "#2496ED" },
        { name: "REST APIs", icon: FiCode, level: 88, color: "#FF6B6B" },
        { name: "Vercel", icon: SiVercel, level: 85, color: "#000000" }
      ]
    },
    {
      title: "3D / Creative",
      icon: FiPalette,
      description: "I bend reality into pixels 🎨",
      skills: [
        { name: "Blender", icon: SiBlender, level: 80, color: "#F5792A" },
        { name: "3D Animation", icon: FiPalette, level: 75, color: "#8B5CF6" },
        { name: "VFX", icon: FiPalette, level: 70, color: "#EC4899" }
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
    <section id="skills" className="section-padding">
      <div className="container-custom">
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
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive collection of technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-dark-700 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm italic">
                {category.description}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon 
                          className="w-4 h-4" 
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 dark:from-primary-400/20 dark:to-primary-500/20 p-8 rounded-2xl border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Always Learning 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently exploring AI, cloud computing, and advanced web applications to stay at the forefront of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI/ML', 'Cloud Computing', 'Microservices', 'GraphQL', 'Web3', 'Mobile Development'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                  className="px-4 py-2 bg-white dark:bg-dark-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;