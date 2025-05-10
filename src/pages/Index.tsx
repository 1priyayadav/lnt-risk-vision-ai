
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-lt-blue text-white py-20">
        <div className="lt-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Powered Risk Monitoring for Large-Scale Projects
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Seamlessly integrate predictive analytics into your construction workflow
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/tool" className="lt-btn-secondary">
                  Try the Risk Tool
                </Link>
                <a href="#features" className="lt-btn-primary">
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://www.larsentoubro.com/media/40010/lt-homepage-banner.jpg" 
                alt="L&T Construction Project" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="lt-container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-lt-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Prediction</h3>
              <p className="text-gray-600">
                Advanced ML algorithms analyze historical data to predict potential risks before they occur.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-lt-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Resource Optimization</h3>
              <p className="text-gray-600">
                Optimize resource allocation and scheduling to improve project efficiency and reduce costs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-lt-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Monitor construction site data in real-time to detect high-risk scenarios and take immediate action.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tool Preview Section */}
      <section className="py-16 bg-lt-gray">
        <div className="lt-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrated Risk Prediction Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-driven tool helps project managers, engineers, and planners monitor and manage risks in real time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
              src="https://www.larsentoubro.com/media/40364/ltts_banner.jpg" 
              alt="Dashboard Preview" 
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <div className="text-center">
              <Link to="/tool" className="inline-flex items-center lt-btn-primary">
                Launch Risk Prediction Tool
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="lt-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Tool</h2>
              <p className="text-lg mb-6">
                This AI-driven tool helps project managers, engineers, and planners monitor and manage risks in real time. 
                It leverages construction site data to detect high-risk scenarios, optimize resource usage, and suggest mitigation strategies.
              </p>
              <p className="text-lg mb-6">
                Developed to align with India's smart infrastructure goals and enterprise-level use cases like metro rail, highways, and smart cities.
              </p>
              <p className="text-lg mb-6">
                L&T's AI Platform combines decades of construction expertise with cutting-edge machine learning to deliver actionable insights for your most challenging projects.
              </p>
            </div>
            <div className="bg-lt-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lt-blue mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce project risks by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lt-blue mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improve resource allocation efficiency by 25%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lt-blue mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cut project delays by an average of 15%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lt-blue mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enhance safety compliance across all project sites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-lt-blue text-white">
        <div className="lt-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Interested in learning more about our AI-powered risk monitoring platform? Contact us today for a personalized demonstration.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p>info@example.com</p>
              </div>
              
              <div className="text-center">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Phone</h3>
                <p>+91 1234567890</p>
              </div>
              
              <div className="text-center">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Address</h3>
                <p>L&T Technology Services, Mumbai</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lt-blue focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lt-blue focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lt-blue focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lt-blue focus:border-transparent"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="lt-btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
