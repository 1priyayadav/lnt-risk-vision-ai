
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Tool = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Add a listener to check if iframe loaded correctly
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        toast.error("Model is taking longer than expected to load. Please be patient.", {
          duration: 5000,
        });
      }
    }, 8000);
    
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    toast.success("Risk prediction model loaded successfully!", {
      duration: 3000,
    });
  };

  const handleIframeError = () => {
    setIsLoading(false);
    toast.error("There was an issue loading the model. Please try refreshing.", {
      duration: 5000,
    });
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
        
        {/* Tool Embed Section */}
        <section className="py-10">
          <div className="lt-container">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Integrated Risk Prediction Dashboard</h2>
                <p className="text-gray-600">
                  This dashboard provides real-time risk assessment and visualization for your construction projects.
                  The tool leverages advanced machine learning algorithms to analyze project data and identify potential risks.
                </p>
              </div>
              
              {/* Enhanced Streamlit Embed with error handling */}
              <div className="relative pt-0 border border-gray-200 rounded-lg overflow-hidden shadow-inner">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-lt-gray bg-opacity-75 z-10">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-lt-blue border-t-transparent mb-2"></div>
                      <p className="text-lt-blue font-medium">Loading Risk Prediction Model...</p>
                    </div>
                  </div>
                )}
                
                <div className="h-[800px]">
                  <iframe 
                    src="https://1priyayadav-construction-optimization-main-app-l6bllv.streamlit.app/?embedded=true" 
                    title="L&T Risk Prediction Tool" 
                    width="100%" 
                    height="100%" 
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">How to use this tool:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Input your project parameters in the left sidebar</li>
                  <li>Review the generated risk assessment visualizations</li>
                  <li>Analyze the risk factors and their potential impact</li>
                  <li>Download reports or export data for further analysis</li>
                </ol>
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
