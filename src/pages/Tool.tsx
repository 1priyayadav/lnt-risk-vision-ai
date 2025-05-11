
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, BarChart2, Shield, Clock, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tool = () => {
  const handleOpenModel = () => {
    window.open("https://constructionriskdashboard-fhfthsx5etlr2womdmdguw.streamlit.app/", "_blank");
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Risk Prediction Tool</h1>
            <p className="text-xl text-white">
              Use our AI-powered tool to analyze and predict risks for your construction projects
            </p>
          </div>
        </section>
        
        {/* Tool Link Section */}
        <section className="py-10">
          <div className="lt-container">
            <div className="bg-gradient-to-br from-white to-sky-50 rounded-lg shadow-lg p-6 border border-sky-100">
              <div 
                className="flex justify-between items-center cursor-pointer hover:bg-sky-100 p-4 rounded-lg transition-all group"
                onClick={handleOpenModel}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-lt-blue p-3 rounded-full text-white">
                    <BarChart2 size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-lt-blue">Integrated Risk Prediction Dashboard</h2>
                </div>
                <Button 
                  onClick={handleOpenModel} 
                  className="bg-lt-blue hover:bg-lt-light-blue text-white font-medium flex items-center gap-2 px-6 py-5"
                >
                  Launch Tool <ExternalLink size={18} />
                </Button>
              </div>
              
              <p className="text-gray-600 mt-6 ml-16">
                Click on the button above to open our AI-driven dashboard in a new tab. 
                This dashboard provides real-time risk assessment and visualization for your construction projects.
              </p>
              
              <div className="mt-8 ml-16">
                <h3 className="text-xl font-semibold mb-4 text-lt-blue">Features of our Risk Prediction Tool:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <div className="text-lt-light-blue mt-1">
                      <Shield size={20} />
                    </div>
                    <span className="text-gray-700">Advanced risk analysis and prediction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-lt-light-blue mt-1">
                      <BarChart2 size={20} />
                    </div>
                    <span className="text-gray-700">Interactive visualizations of project data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-lt-light-blue mt-1">
                      <Clock size={20} />
                    </div>
                    <span className="text-gray-700">Real-time monitoring of risk factors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-lt-light-blue mt-1">
                      <Download size={20} />
                    </div>
                    <span className="text-gray-700">Exportable reports for stakeholder presentations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Resources */}
        <section className="py-10 bg-gradient-to-b from-lt-gray to-white">
          <div className="lt-container">
            <h2 className="text-2xl font-bold mb-6 text-lt-blue">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-lt-blue hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-100 rounded-full text-lt-blue">
                    <Download size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-lt-blue">User Guide</h3>
                </div>
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
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-lt-blue hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-100 rounded-full text-lt-blue">
                    <BarChart2 size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-lt-blue">Case Studies</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Real-world examples of how this tool has improved project outcomes.
                </p>
                <a href="#" className="text-lt-light-blue hover:underline font-medium flex items-center">
                  View Case Studies
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-lt-blue hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-100 rounded-full text-lt-blue">
                    <svg className="w-5 h-5 text-lt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-lt-blue">API Documentation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Technical documentation for integrating with your existing systems.
                </p>
                <a href="#" className="text-lt-light-blue hover:underline font-medium flex items-center">
                  View Documentation
                  <ChevronRight className="ml-1 w-4 h-4" />
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
