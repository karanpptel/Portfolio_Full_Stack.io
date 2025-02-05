import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Karan Patel</h3>
            <p className="text-gray-400 mt-2">A Full Stack focused Web Developer building the Frontend and Backend 
            <br></br>of Websites and Web Applications that leads to the success of the overall product</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/karanpptel" className="hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/karan-patel-5bb3b2206" className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/Karan_709r" className="hover:text-indigo-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/k_run_709/" className="hover:text-indigo-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Karan Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;