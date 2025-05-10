
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-lt-dark-gray text-white">
      <div className="lt-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">L&T AI Platform</h3>
            <p className="text-gray-300 mb-4">
              AI-Powered Risk Monitoring for Large-Scale Projects
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-lt-yellow transition-colors">Home</Link></li>
              <li><a href="#features" className="text-gray-300 hover:text-lt-yellow transition-colors">Features</a></li>
              <li><Link to="/tool" className="text-gray-300 hover:text-lt-yellow transition-colors">Risk Tool</Link></li>
              <li><a href="#about" className="text-gray-300 hover:text-lt-yellow transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-lt-yellow transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lt-yellow transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lt-yellow transition-colors">White Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>L&T Technology Services</li>
              <li>Email: info@example.com</li>
              <li>Phone: +91 1234567890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 L&T Risk Monitoring Demo | Developed for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
