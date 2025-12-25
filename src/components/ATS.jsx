// import ATSModal from "./ATSModal";
// import ATSModel from "./ATSmodel";
import ATSModel from "./ATSModel";
import Navbar from "./shared/Navbar";
const ATS = () => {
  return (
   <div>
     <Navbar/>
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl font-semibold mb-2">
          ATS Resume Checker
        </h1>
        <p className="text-gray-600 mb-6">
          Upload your resume and compare it with a job description to see how
          well it matches Applicant Tracking Systems.
        </p>

        <ATSModel />
      </div>
    </div>
  </div> 
  );
};

export default ATS;
