import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiAward, FiCoffee, FiHeart } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: FiCode,
      title: "Full-Stack Apps",
      description: "Built multiple full-stack applications with MERN & Django",
      color: "text-blue-500"
    },
    {
      icon: FiAward,
      title: "Freelance Projects",
      description: "Successfully completed web dev & 3D animation projects",
      color: "text-green-500"
    },
    {
      icon: FiHeart,
      title: "Open Source",
      description: "Contributed to various open-source repositories",
      color: "text-purple-500"
    },
    {
      icon: FiCoffee,
      title: "Continuous Learning",
      description: "Exploring AI, cloud computing, and advanced web apps",
      color: "text-orange-500"
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
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Once upon a time, I broke my PC while installing Linux. Instead of crying, I learned how to fix it — and that started my journey as a developer.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-700 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                My Story 📖
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Now, I build full-stack applications, create 3D art, and explore new technologies every day. 
                  I believe in writing clean, functional code (with just enough bugs to keep life exciting 🐞).
                </p>
                <p>
                  When I'm not coding, you'll find me experimenting with Blender animations, reading about AI, 
                  or brewing the perfect cup of tea ☕.
                </p>
                <p>
                  I'm passionate about creating meaningful digital experiences that make a difference in people's lives.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 dark:from-primary-400/20 dark:to-primary-500/20 p-6 rounded-xl border border-primary-200 dark:border-primary-800">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Location:</span>
                  <p className="text-gray-800 dark:text-white">Uttara, Dhaka, Bangladesh</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Experience:</span>
                  <p className="text-gray-800 dark:text-white">2+ Years</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Specialties:</span>
                  <p className="text-gray-800 dark:text-white">MERN Stack, Django, 3D Art</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Interests:</span>
                  <p className="text-gray-800 dark:text-white">AI, Cloud Computing, Animation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Experience & Achievements 🏆
            </h3>
            
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gray-100 dark:bg-dark-600 ${achievement.color}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 rounded-xl text-white text-center"
            >
              <h4 className="text-xl font-bold mb-2">
                Ready to Build Something Amazing? 🚀
              </h4>
              <p className="text-primary-100">
                Let's collaborate and create something extraordinary together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;