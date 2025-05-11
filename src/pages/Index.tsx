
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Shield, ChevronDown, BarChart, Clock, AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Enhanced Hero Section with better visuals */}
      <section className="bg-gradient-to-br from-lt-blue via-lt-light-blue to-blue-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/40 to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-lt-yellow/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/30 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="lt-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-lg">
              AI-Powered Risk Monitoring
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-lt-yellow font-medium animate-fade-in delay-100 max-w-2xl mx-auto">
              Seamlessly integrate predictive analytics into your large-scale construction projects
            </p>
            <div className="flex flex-wrap gap-5 justify-center animate-fade-in delay-200">
              <Link to="/tool" className="lt-btn-secondary group flex items-center gap-2 transform transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden px-8 py-4 rounded-lg">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-lt-yellow opacity-80 group-hover:opacity-100 transition-opacity"></span>
                <Shield size={22} className="relative z-10" />
                <span className="relative z-10 font-bold">Try the Risk Tool</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#features" className="lt-btn-primary flex items-center gap-2 group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-lg">
                Learn More
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-lt-gray">
        <div className="lt-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-lt-blue">Key Features</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our AI platform combines decades of construction expertise with cutting-edge machine learning
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-lt-blue group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 bg-gradient-to-br from-lt-blue to-lt-light-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-lt-blue">Risk Prediction</h3>
              <p className="text-gray-600">
                Advanced ML algorithms analyze historical data to predict potential risks before they occur, reducing project delays by up to 40%.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-lt-blue group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 bg-gradient-to-br from-lt-blue to-lt-light-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-lt-blue">Resource Optimization</h3>
              <p className="text-gray-600">
                Optimize resource allocation and scheduling to improve project efficiency and reduce costs by an average of 25%.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-lt-blue group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 bg-gradient-to-br from-lt-blue to-lt-light-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-lt-blue">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Monitor construction site data in real-time to detect high-risk scenarios and take immediate action to enhance safety compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section with enhanced styling */}
      <section id="about" className="py-20 bg-lt-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lt-blue/5 to-transparent"></div>
        <div className="lt-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-lt-blue">About This Tool</h2>
              <p className="text-lg mb-6 text-gray-700">
                This AI-driven tool helps project managers, engineers, and planners monitor and manage risks in real time. 
                It leverages construction site data to detect high-risk scenarios, optimize resource usage, and suggest mitigation strategies.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Developed to align with India's smart infrastructure goals and enterprise-level use cases like metro rail, highways, and smart cities.
              </p>
              <div className="mt-8">
                <Link to="/tool" className="lt-btn-primary inline-flex items-center gap-2 shadow-lg bg-gradient-to-r from-lt-blue to-lt-light-blue hover:from-lt-light-blue hover:to-lt-blue transition-all px-8 py-4 rounded-lg">
                  <Shield size={20} />
                  Explore Risk Analysis Tool
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-lt-light-blue/20 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold mb-6 text-lt-blue">Key Benefits</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-lt-blue/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Reduce project risks by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-lt-blue/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Improve resource allocation efficiency by 25%</span>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-lt-blue/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Cut project delays by an average of 15%</span>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-lt-blue/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Enhance safety compliance across all project sites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section with better styling */}
      <section id="contact" className="py-20 bg-gradient-to-br from-lt-blue to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMDUiIGQ9Ik0wIDBoMTQ0MHY3NzNIMHoiLz48cGF0aCBkPSJNLTM4LjY4NSAyMzEuMzQuMzk1IDIzMS4wODJsMi4zNiA3My42OC0uNiAxMTkuMTMyIDQxLjA5NSA1OC42MTdMMTM0LjkgNTA4LjEwM2wtMjcuMDQtNS41MDMtMzMuMzQ1IDUuNTAzLTExLjc5OCAzMC40MDgtMjAuODQ3IDE4LjY0M0wzNC42OTggNTg1LjFsLTE2Ljc4NC0yNi40NC03LjE0OC0xMjYuNzYtMTUuNTYtNTUuNDc1TDc0Ljc5IDE5My4xMSA5Ni4xMDQgMTgzbDM4LjIgOS44NGgzNC40MDRsNTcuOTY3IDE3LjI4My00Mi43NDggOTIuODM1LTMwLjkwNCA0Ny44NTYgOS41MyA1OC42MTYgMTEuOTkgMjIuMDg0UzE2MiA0NDQuMzg1IDE0OC43NSA0NDQuMzM4Yy0xMy4yNDgtLjA0OC0zOC4xOTQgNy4wOS0zOC4xOTQgNy4wOUw4Mi4xOSA0MjkuOTk3IDcxLjcyOCAzODcuNDkzbC01LjIxLTQ4LjA3Ny0xOC4wOS01OC43NTQtMzAtMTYuMTk4LTI0LjM5NyAxLjgwMi0yLjMwMiA0OC41MDJMMCAzNDAuNDQzIi8+PC9nPjwvc3ZnPg==')] bg-no-repeat bg-cover opacity-10"></div>
        </div>
        <div className="lt-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Interested in learning more about our AI-powered risk monitoring platform? Contact us today for a personalized demonstration.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors transform hover:scale-105 duration-300">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-5 mx-auto shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3">Email</h3>
                <p className="text-lg">info@example.com</p>
              </div>
              
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors transform hover:scale-105 duration-300">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-5 mx-auto shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3">Phone</h3>
                <p className="text-lg">+91 1234567890</p>
              </div>
              
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors transform hover:scale-105 duration-300">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-5 mx-auto shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3">Address</h3>
                <p className="text-lg">L&T Technology Services, Mumbai</p>
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
