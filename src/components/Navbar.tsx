
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lt-blue text-white">
      <div className="lt-container">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold">L&T AI Platform</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-lt-yellow transition-colors">Home</Link>
            <a href="#features" className="hover:text-lt-yellow transition-colors">Features</a>
            <Link to="/tool" className="hover:text-lt-yellow transition-colors">Risk Tool</Link>
            <a href="#about" className="hover:text-lt-yellow transition-colors">About</a>
            <a href="#contact" className="hover:text-lt-yellow transition-colors">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-lt-yellow"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-lt-blue">
            <Link 
              to="/" 
              className="block px-3 py-2 hover:bg-lt-light-blue rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className="block px-3 py-2 hover:bg-lt-light-blue rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <Link 
              to="/tool" 
              className="block px-3 py-2 hover:bg-lt-light-blue rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Risk Tool
            </Link>
            <a 
              href="#about" 
              className="block px-3 py-2 hover:bg-lt-light-blue rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 hover:bg-lt-light-blue rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
