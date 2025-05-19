
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
                src="/lovable-uploads/7a3543b7-61de-4a1c-a48a-072390745c7d.png" 
                alt="agisol.ai logo" 
                className="h-10"
              />
            </Link>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
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
