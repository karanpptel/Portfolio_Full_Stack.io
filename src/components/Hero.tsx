import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const BlurText = ({ text, highlightText }: { text: string; highlightText: string }) => {
  return (
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-4 sm:mb-6"
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {text}{' '}
      <motion.span 
        className="text-indigo-600"
        initial={{ filter: 'blur(10px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {highlightText}
      </motion.span>
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6">
      <div className="container mx-auto py-16 md:py-24 text-center">
        <BlurText text="Hi, I'm" highlightText="Karan Patel" />
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Full Stack Developer | MERN Stack Designer | React Developer | Problem Solver
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a 
            href="#contact"
            className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            Get in Touch
          </a>
          <a 
            href="#projects"
            className="w-full sm:w-auto border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
          >
            View Projects
          </a>
          <a 
            href="https://drive.google.com/file/d/18P61vgO4moe0RtJG3fnsGZ_-_ferFV74/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            Resume
          </a>
        </motion.div>
        <motion.div 
          className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <ArrowDown className="text-gray-400 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;