
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Building, Shield, ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Enhanced Hero Section with better visuals */}
      <section className="bg-gradient-to-r from-lt-blue to-lt-light-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.larsentoubro.com/media/40010/lt-homepage-banner.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="lt-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI-Powered Risk Monitoring for Large-Scale Projects
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-lt-yellow font-medium">
                Seamlessly integrate predictive analytics into your construction workflow
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/tool" className="lt-btn-secondary flex items-center gap-2 transform transition-transform hover:scale-105 shadow-lg">
                  <Shield size={20} />
                  Try the Risk Tool
                </Link>
                <a href="#features" className="lt-btn-primary flex items-center gap-2 group">
                  Learn More
                  <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lt-yellow to-lt-light-blue rounded-lg blur-md"></div>
                <div className="relative bg-white rounded-lg p-2">
                  <img 
                    src="https://www.larsentoubro.com/media/40010/lt-homepage-banner.jpg" 
                    alt="L&T Construction Project" 
                    className="rounded-lg shadow-xl h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="lt-container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-lt-blue group hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 bg-lt-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lt-blue">Risk Prediction</h3>
              <p className="text-gray-600">
                Advanced ML algorithms analyze historical data to predict potential risks before they occur.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-lt-blue group hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 bg-lt-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lt-blue">Resource Optimization</h3>
              <p className="text-gray-600">
                Optimize resource allocation and scheduling to improve project efficiency and reduce costs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-lt-blue group hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 bg-lt-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lt-blue">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Monitor construction site data in real-time to detect high-risk scenarios and take immediate action.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-lt-gray">
        <div className="lt-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-lt-blue">About This Tool</h2>
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
              <div className="mt-8">
                <Link to="/tool" className="lt-btn-primary inline-flex items-center gap-2 shadow-lg">
                  <Building size={20} />
                  Explore Risk Analysis Tool
                  <ArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-lt-light-blue/20">
              <h3 className="text-2xl font-bold mb-4 text-lt-blue">Key Benefits</h3>
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
      
      {/* Contact Section - Removed the send message form */}
      <section id="contact" className="py-16 bg-lt-blue text-white">
        <div className="lt-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Interested in learning more about our AI-powered risk monitoring platform? Contact us today for a personalized demonstration.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
