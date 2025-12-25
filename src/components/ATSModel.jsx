// import React, { useState } from "react";

// const ATSModal = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [jobDescription, setJobDescription] = useState("");
//   const [score, setScore] = useState(null);
//   const [suggestions, setSuggestions] = useState(null);

//   // Handle PDF selection
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   // Handle ATS check
//   const handleATSCheck = async () => {
//     if (!selectedFile || !jobDescription) {
//       alert("Please upload a resume and enter a job description.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("resume", selectedFile);
//     formData.append("job_description", jobDescription);

//     try {
//       // Use relative path so Vite proxy (dev) or the deployed backend handles the request
//       const response = await fetch("/api/v1/ats/check", {
//         method: "POST",
//         body: formData,
//       });

//       // If server returned non-2xx, show server text for debugging
//       if (!response.ok) {
//         const text = await response.text();
//         console.error("ATS server error:", response.status, text);
//         alert("Server error checking ATS. See console for details.");
//         return;
//       }

//       // Some responses may be empty or not valid JSON (404 HTML), handle safely
//       const text = await response.text();
//       let data = {};
//       try {
//         data = text ? JSON.parse(text) : {};
//       } catch (err) {
//         console.warn("Response not JSON:", text);
//         data = {};
//       }

//       setScore(data.ats_score ?? null);
//       // set suggestions if available
//       if (data.add || data.remove) {
//         setSuggestions({ add: data.add || [], remove: data.remove || [] });
//       }
//     } catch (error) {
//       console.error("Error checking ATS score:", error);
//       alert("Something went wrong. Check console for details.");
//     }
//   };

//   // return (
//   //   <div className="p-6 border rounded-lg shadow-md bg-white w-[400px]">
//   //     <h2 className="text-xl font-bold mb-4">ATS Resume Checker</h2>

//   //     {/* Upload Resume PDF */}
//   //     <label className="block mb-2 font-medium">Upload Resume (PDF)</label>
//   //     <input
//   //       type="file"
//   //       accept="application/pdf"
//   //       onChange={handleFileChange}
//   //       className="mb-4 w-full border p-2 rounded"
//   //     />

//   //     {/* Job Description Textarea */}
//   //     <label className="block mb-2 font-medium">Paste Job Description</label>
//   //     <textarea
//   //       placeholder="Enter job description..."
//   //       value={jobDescription}
//   //       onChange={(e) => setJobDescription(e.target.value)}
//   //       className="w-full p-2 border rounded mb-4"
//   //       rows="5"
//   //     />

//   //     {/* Check ATS Button */}
//   //     <button
//   //       onClick={handleATSCheck}
//   //       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//   //     >
//   //       Check ATS Score
//   //     </button>

//   //     {/* ATS Score Result */}
//   //     {score !== null && (
//   //       <p className="mt-4 text-lg font-semibold">
//   //         ATS Score: <span className="text-green-600">{score}%</span>
//   //       </p>
//   //     )}
//   //     {/* Suggestions */}
//   //     {suggestions && ( 
//   //       <div className="mt-4">
//   //         {suggestions.add && suggestions.add.length > 0 && (
//   //           <div className="mb-2">
//   //             <strong>Add / Emphasize:</strong>
//   //             <ul className="list-disc ml-6">
//   //               {suggestions.add.map((t) => (
//   //                 <li key={`add-${t}`}>{t}</li>
//   //               ))}
//   //             </ul>
//   //           </div>
//   //         )}
//   //         {suggestions.remove && suggestions.remove.length > 0 && (
//   //           <div>
//   //             <strong>Consider removing / de-emphasizing:</strong>
//   //             <ul className="list-disc ml-6">
//   //               {suggestions.remove.map((t) => (
//   //                 <li key={`rem-${t}`}>{t}</li>
//   //               ))}
//   //             </ul>
//   //           </div>
//   //         )}
//   //       </div>
//   //     )}
//   //   </div>
//   // );

//   return (
//   <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
//     <h2 className="text-2xl font-semibold mb-1">
//       ATS Resume Checker
//     </h2>
//     <p className="text-sm text-gray-500 mb-5">
//       Check how well your resume matches a specific job description.
//     </p>

//     {/* Upload Resume */}
//     <label className="block text-sm font-medium mb-1">
//       Upload Resume (PDF)
//     </label>
//     <input
//       type="file"
//       accept="application/pdf"
//       onChange={handleFileChange}
//       className="w-full border rounded-lg p-2 mb-4"
//     />

//     {/* Job Description */}
//     <label className="block text-sm font-medium mb-1">
//       Job Description
//     </label>
//     <textarea
//       placeholder="Paste the job description here..."
//       value={jobDescription}
//       onChange={(e) => setJobDescription(e.target.value)}
//       className="w-full border rounded-lg p-3 mb-4 text-sm"
//       rows="5"
//     />

//     <button
//       onClick={handleATSCheck}
//       className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//     >
//       Check ATS Score
//     </button>

//     {/* Result */}
//     {score !== null && (
//       <div className="mt-6">
//         <div className="flex items-center justify-between mb-2">
//           <span className="font-medium">ATS Match Score</span>
//           <span
//             className={`font-semibold ${
//               score >= 70
//                 ? "text-green-600"
//                 : score >= 40
//                 ? "text-yellow-600"
//                 : "text-red-600"
//             }`}
//           >
//             {score}%
//           </span>
//         </div>

//         {/* Progress bar */}
//         <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//           <div
//             className={`h-2 rounded-full ${
//               score >= 70
//                 ? "bg-green-500"
//                 : score >= 40
//                 ? "bg-yellow-500"
//                 : "bg-red-500"
//             }`}
//             style={{ width: `${score}%` }}
//           />
//         </div>

//         <p className="text-xs text-gray-500 mb-4">
//           This score represents how closely your resume matches the job
//           description based on keyword relevance.
//         </p>

//         {/* Suggestions */}
//         {suggestions?.add?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-medium mb-1">
//               Missing Keywords
//             </h4>
//             <ul className="list-disc ml-5 text-sm text-gray-700">
//               {suggestions.add.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {suggestions?.remove?.length > 0 && (
//           <div>
//             <h4 className="font-medium mb-1">
//               Less Relevant Keywords
//             </h4>
//             <ul className="list-disc ml-5 text-sm text-gray-700">
//               {suggestions.remove.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     )}
//   </div>
// );

// };

// export default ATSModal;


import React, { useState } from "react";

const ATSModel = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState(null);
  const [atsResult, setAtsResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleATSCheck = async () => {
    if (!selectedFile || !jobDescription) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);
    formData.append("job_description", jobDescription);

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/api/v1/ats/check`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("ATS server error:", text);
        alert("ATS server error. Check console.");
        return;
      }

      const data = await response.json();

      setScore(data.ats_score);
      setAtsResult(data);
    } catch (error) {
      console.error("Error checking ATS:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-1">
        ATS Resume Checker
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        Upload your resume and compare it with a job description.
      </p>

      {/* Upload Resume */}
      <label className="block text-sm font-medium mb-1">
        Upload Resume (PDF)
      </label>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="w-full border rounded-lg p-2 mb-4"
      />

      {/* Job Description */}
      <label className="block text-sm font-medium mb-1">
        Job Description
      </label>
      <textarea
        placeholder="Paste the job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4 text-sm"
        rows="5"
      />

      <button
        onClick={handleATSCheck}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
      >
        {loading ? "Analyzing Resume..." : "Check ATS Score"}
      </button>

      {/* Result */}
      {score !== null && atsResult && (
        <div className="mt-6">

          {/* Score */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">ATS Match Score</span>
            <span
              className={`font-semibold ${
                score >= 70
                  ? "text-green-600"
                  : score >= 40
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {score}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className={`h-2 rounded-full ${
                score >= 70
                  ? "bg-green-500"
                  : score >= 40
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${score}%` }}
            />
          </div>

          {/* Recommendation */}
          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <p className="text-xs text-gray-500">Recommendation</p>
            <p
              className={`font-semibold ${
                atsResult.recommendation === "Strong match"
                  ? "text-green-600"
                  : atsResult.recommendation === "Moderate match"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {atsResult.recommendation}
            </p>
          </div>

          {/* Matched Skills */}
          <div className="mb-4">
            <h4 className="font-medium mb-1">Matched Skills</h4>
            {atsResult.matched_skills?.length > 0 ? (
              <ul className="list-disc ml-5 text-sm text-green-700">
                {atsResult.matched_skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                No strong skill matches found.
              </p>
            )}
          </div>

          {/* Missing Skills */}
          <div className="mb-4">
            <h4 className="font-medium mb-1">Missing Skills</h4>
            {atsResult.missing_skills?.length > 0 ? (
              <ul className="list-disc ml-5 text-sm text-red-700">
                {atsResult.missing_skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                No major skills missing.
              </p>
            )}
          </div>

          {/* Section Scores */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Experience Match</p>
              <p className="font-semibold">
                {atsResult.experience_match}%
              </p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Project Match</p>
              <p className="font-semibold">
                {atsResult.project_match}%
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default ATSModel;
