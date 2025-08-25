import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Gym Website",
      description: "A modern, responsive gym website with membership plans, trainer profiles, and class scheduling. Built with React and modern web technologies.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://gym-rho-beryl.vercel.app/",
      githubUrl: "https://github.com/zahidSkywalker/gym-website",
      category: "Frontend"
    },
    {
      title: "Savoria Restaurant",
      description: "An elegant restaurant website showcasing menu, reservations, and dining experience. Modern design with smooth animations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://savoria-sable.vercel.app/",
      githubUrl: "https://github.com/zahidSkywalker/savoria-restaurant",
      category: "Frontend"
    },
    {
      title: "Cafe Website",
      description: "A cozy cafe website with menu display, online ordering, and warm atmosphere design. Perfect blend of functionality and aesthetics.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://cafe-dusky-three.vercel.app/",
      githubUrl: "https://github.com/zahidSkywalker/cafe-website",
      category: "Frontend"
    },
    {
      title: "3D Portfolio Showcase",
      description: "A collection of my 3D modeling and animation work created with Blender. Showcasing character design, environment modeling, and visual effects.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      technologies: ["Blender", "3D Modeling", "Animation", "VFX", "Compositing"],
      liveUrl: "#",
      githubUrl: "#",
      category: "3D/Creative"
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

  // Card tilt handlers
  const [tiltStyleByIndex, setTiltStyleByIndex] = useState({});

  const handleMouseMove = (event, index) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;
    const centerX = rect.left + cardWidth / 2;
    const centerY = rect.top + cardHeight / 2;
    const posX = event.clientX - centerX;
    const posY = event.clientY - centerY;

    const rotateX = (+15 * posY) / (cardHeight / 2);
    const rotateY = (-15 * posX) / (cardWidth / 2);

    setTiltStyleByIndex((prev) => ({
      ...prev,
      [index]: {
        transform: `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`
      }
    }));
  };

  const handleMouseLeave = (index) => {
    setTiltStyleByIndex((prev) => ({
      ...prev,
      [index]: { transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)' }
    }));
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my recent work, from full-stack applications to creative 3D projects
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={tiltStyleByIndex[index]}
              className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-2xl transition-all duration-500 will-change-transform"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                      title="View Code"
                    >
                      <FiGithub className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Quick Link Pills */}
                <div className="flex items-center gap-3 mb-4">
                  {project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" /> Live
                    </motion.a>
                  )}
                  {project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-700 dark:bg-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" /> Code
                    </motion.a>
                  )}
                </div>

                {/* View Project Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => {
                    if (project.liveUrl !== "#") {
                      window.open(project.liveUrl, '_blank');
                    }
                  }}
                >
                  <FiEye className="w-4 h-4" />
                  {project.liveUrl !== "#" ? "View Project" : "Coming Soon"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to See More? 🚀
            </h3>
            <p className="text-primary-100 mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <motion.a
              href="https://github.com/zahidSkywalker"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FiGithub className="w-5 h-5" />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;