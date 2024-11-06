import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function Payment() {
    
  
    const handleChoosePlan3 = () => {
      const amount = 269; // Fixed price
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
  
      const payload = {
        amount,
        ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
        Token: token || '' // Ensure the field name matches the API expectation
      };
  
      axios.post('https://api.resumeintellect.com/api/user/paypal/create-payment', payload, {
        headers: { 'Content-Type': 'application/json' }, // Use JSON content type
      })
      .then(response => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          window.location.href = data.data;
        }
      })
      .catch(error => console.error('Payment Error:', error));
    };
    
  
    const handleChoosePlan4 = () => {
      const amount = 349; // Fixed price
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
  
      if(!token){
          window.location.href="/login2";
          return;
      }

      const payload = {
        amount,
        ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
        Token: token || '' // Ensure the field name matches the API expectation
      };
  
      axios.post('https://api.resumeintellect.com/api/user/paypal/create-payment', payload, {
        headers: { 'Content-Type': 'application/json' }, // Use JSON content type
      })
      .then(response => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          window.location.href = data.data;
        }
      })
      .catch(error => 
          console.error('Payment Error:', error));
    };
    

  return (

//     <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
//   <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl overflow-hidden min-h-[70vh]">
//     <table className="min-w-full">
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="px-6 py-4 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
//             <div>
//               <p className="text-lg font-semibold mb-1">AI Resume Writer</p>
//               <p className="text-violet-900">Starting <span className="font-bold text-lg">$49</span></p>
//               <Link href="/dashboard/ai-resume-builder">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mt-3 rounded-md">
//                   Choose This Plan
//                 </button>
//               </Link>
//             </div>
//           </th>
//           <th className="px-6 py-4 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
//             <div>
//               <p className="text-lg font-semibold mb-1">Expert Human Writer</p>
//               <p className="text-violet-900 font-bold text-lg">$269 <span className="text-sm">/ Resume</span></p>
//               <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 mt-3 rounded-md" onClick={handleChoosePlan3}>
//                 Choose This Plan
//               </button>
//             </div>
//           </th>
//           <th className="px-6 py-4 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
//             <div>
//               <p className="text-lg font-semibold mb-1">French-English Combo</p>
//               <p className="text-violet-900 font-bold text-lg">$369 <span className="text-sm">/ Resume</span></p>
//               <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-3 rounded-md" onClick={handleChoosePlan4}>
//                 Choose This Plan
//               </button>
//             </div>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr className="bg-white text-center">
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Create optimized resumes</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Create optimized resumes</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Create optimized resumes</td>
//         </tr>
//         <tr className="bg-white text-center">
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Copy and paste content from site</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Receive resume in PDF and DOCS</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Receive resume in PDF and DOCS</td>
//         </tr>
//         <tr className="bg-white text-center">
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Unlimited resume edits</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Cover letter included</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Cover letter included</td>
//         </tr>
//         <tr className="bg-white text-center">
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Save resume as PDF and DOCS</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ 3 revisions included</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ 3 revisions included</td>
//         </tr>
//         <tr className="bg-white text-center">
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Download fully formatted resume</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Speak one-on-one with writer</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Speak one-on-one with writer</td>
//         </tr>
//         <tr className="bg-white text-center">
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✖️</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Final delivery in 1 week</td>
//           <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600">✔️ Final delivery in 1 week</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>
<div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
  <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl overflow-hidden min-h-[70vh]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* First Plan */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold mb-1">AI Resume Writer</p>
        <p className="text-violet-900">Starting <span className="font-bold text-lg">$49</span></p>
        <Link href="/dashboard/ai-resume-builder">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mt-3 rounded-md">
            Choose This Plan
          </button>
        </Link>
        <p className="text-sm text-gray-600 mt-4">✔️ Create optimized resumes</p>
        <p className="text-sm text-gray-600">✔️ Copy and paste content from site</p>
        <p className="text-sm text-gray-600">✔️ Unlimited resume edits</p>
        <p className="text-sm text-gray-600">✔️ Save resume as PDF and DOCS</p>
        <p className="text-sm text-gray-600">✔️ Download fully formatted resume</p>
        <p className="text-sm text-gray-600">✖️</p>
      </div>

      {/* Second Plan */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold mb-1">Expert Human Writer</p>
        <p className="text-violet-900 font-bold text-lg">$269 <span className="text-sm">/ Resume</span></p>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 mt-3 rounded-md" onClick={handleChoosePlan3}>
          Choose This Plan
        </button>
        <p className="text-sm text-gray-600 mt-4">✔️ Create optimized resumes</p>
        <p className="text-sm text-gray-600">✔️ Receive resume in PDF and DOCS</p>
        <p className="text-sm text-gray-600">✔️ Cover letter included</p>
        <p className="text-sm text-gray-600">✔️ 3 revisions included</p>
        <p className="text-sm text-gray-600">✔️ Speak one-on-one with writer</p>
        <p className="text-sm text-gray-600">✔️ Final delivery in 1 week</p>
      </div>

      {/* Third Plan */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold mb-1">French-English Combo</p>
        <p className="text-violet-900 font-bold text-lg">$369 <span className="text-sm">/ Resume</span></p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-3 rounded-md" onClick={handleChoosePlan4}>
          Choose This Plan
        </button>
        <p className="text-sm text-gray-600 mt-4">✔️ Create optimized resumes</p>
        <p className="text-sm text-gray-600">✔️ Receive resume in PDF and DOCS</p>
        <p className="text-sm text-gray-600">✔️ Cover letter included</p>
        <p className="text-sm text-gray-600">✔️ 3 revisions included</p>
        <p className="text-sm text-gray-600">✔️ Speak one-on-one with writer</p>
        <p className="text-sm text-gray-600">✔️ Final delivery in 1 week</p>
      </div>
    </div>
  </div>
</div>


  );
}

export default Payment;
