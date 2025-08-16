import React from 'react';
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
      title: "E-Commerce Website",
      description: "An elegant, full-stack clothing store with cart, payments, and admin panel. Because everyone needs more carts in life.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "https://gym-rho-beryl.vercel.app/",
      githubUrl: "https://github.com/zahidSkywalker/gym-website",
      category: "Full Stack"
    },
    {
      title: "AI Art Generator (Zephyrus)",
      description: "A platform that makes robots paint like Picasso. When AI meets creativity, sparks fly ✨.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Python", "AI/ML", "OpenAI", "Tailwind"],
      liveUrl: "https://savoria-sable.vercel.app/",
      githubUrl: "https://github.com/zahidSkywalker/savoria-restaurant",
      category: "AI/ML"
    },
    {
      title: "Primrose AI Chatbot",
      description: "A loving, funny chatbot that talks like a real human. Code + Emotions = Primrose ❤️.",
      image: "https://images.unsplash.com/photo-1676299251950-8d9b1e5c1c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "OpenAI", "Socket.io", "Express"],
      liveUrl: "https://cafe-dusky-three.vercel.app/",
      githubUrl: "https://github.com/zahidSkywalker/cafe-website",
      category: "AI/ML"
    },
    {
      title: "3D Animated Short",
      description: "Made with Blender & VFX. Because sometimes code needs a little drama.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      technologies: ["Blender", "VFX", "Animation", "3D Modeling", "Compositing"],
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
              className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
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