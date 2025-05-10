import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";

const Tool = () => {
  const handleOpenModel = () => {
    window.open("https://1priyayadav-construction-optimization-main-app-l6bllv.streamlit.app/", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header with uploaded building image background */}
        <section className="py-10 bg-cover bg-center bg-no-repeat" style={{ 
          backgroundImage: "url('/lovable-uploads/b4b1ef68-9610-4f3f-a205-abb112402ae0.png')", 
          minHeight: "300px" 
        }}>
          <div className="lt-container bg-black bg-opacity-50 py-10 rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-white">Risk Prediction Tool</h1>
            <p className="text-xl text-white">
              Use our AI-powered tool to analyze and predict risks for your construction projects
            </p>
          </div>
        </section>
        
        {/* Tool Link Section */}
        <section className="py-10">
          <div className="lt-container">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div 
                className="flex justify-between items-center cursor-pointer hover:bg-lt-gray hover:bg-opacity-10 p-2 rounded-lg transition-all"
                onClick={handleOpenModel}
              >
                <h2 className="text-2xl font-bold">Integrated Risk Prediction Dashboard</h2>
                <div className="text-lt-blue">
                  <ChevronRight size={24} />
                </div>
              </div>
              
              <p className="text-gray-600 mt-4">
                Click on the heading above to open our AI-driven dashboard in a new tab. 
                This dashboard provides real-time risk assessment and visualization for your construction projects.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Features of our Risk Prediction Tool:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                  <li>Advanced risk analysis and prediction</li>
                  <li>Interactive visualizations of project data</li>
                  <li>Real-time monitoring of risk factors</li>
                  <li>Customizable dashboards for different project types</li>
                  <li>Exportable reports for stakeholder presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Resources */}
        <section className="py-10 bg-lt-gray">
          <div className="lt-container">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">User Guide</h3>
                <p className="text-gray-600 mb-4">
                  Detailed instructions on using the risk prediction tool effectively.
                </p>
                <a href="#" className="text-lt-light-blue hover:underline font-medium flex items-center">
                  Download PDF
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Case Studies</h3>
                <p className="text-gray-600 mb-4">
                  Real-world examples of how this tool has improved project outcomes.
                </p>
                <a href="#" className="text-lt-light-blue hover:underline font-medium flex items-center">
                  View Case Studies
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">API Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Technical documentation for integrating with your existing systems.
                </p>
                <a href="#" className="text-lt-light-blue hover:underline font-medium flex items-center">
                  View Documentation
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tool;
