import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookMessenger, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  //

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/8801842089174",
      color: "hover:text-green-500"
    },
    {
      name: "Messenger",
      icon: FaFacebookMessenger,
      url: "https://m.me/zahidul.islam",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/zahidSkywalker",
      color: "hover:text-gray-800 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/zahidul-islam",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white relative">
      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2"
      >
        <Link to="home" smooth={true} duration={500}>
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.button>
        </Link>
      </motion.div>

      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Zahidul Islam
            </h3>
            <p className="text-gray-400 mb-4">
              MERN Stack Developer, Django enthusiast, and 3D Artist
            </p>
            <p className="text-sm text-gray-500">
              "I don't just write code, I write stories in JavaScript and Python."
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t border-gray-800 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Zahidul Islam. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;