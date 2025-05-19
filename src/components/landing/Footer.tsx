
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ffcf3e65-6f9f-4053-9235-d5732b161ff0.png" 
                alt="agisol.ai logo" 
                className="h-14 md:h-16"
              />
            </Link>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} agisol.ai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
