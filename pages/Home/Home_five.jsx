
import Link from "next/link";
import { useEffect, useState } from "react";

const Home_five = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for the token (you can adjust based on where the token is stored)
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);
  return (
    // <div className="bg-gray-100 py-10">
    //   <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <h1 className="text-center font-bold text-3xl py-5">Want To Supercharge Your Career Growth With Our AI Tool?</h1>
    //     <div className="flex justify-center">
    //       <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
    //         <h1 className="font-bold text-xl mb-4">Resume Intellect Builder</h1>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>AI Score</span>
    //         </div>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>AI Parsing</span>
    //         </div>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>Resume Building</span>
    //         </div>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>AI Enhancer</span>
    //         </div>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>Match & Apply</span>
    //         </div>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>AI Skill Test</span>
    //         </div>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>Skill Badges</span>
    //         </div>
    //         <div className="flex items-center gap-2 font-medium mb-2">
    //           <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
    //           <span>& More</span>
    //         </div>
    //         <div className="flex justify-center mt-6">
    //         <Link href={isAuthenticated?"/dashboard":"/login2"}>
    //           <button className="px-6 py-3 rounded-2xl font-semibold text-purple-700 bg-white hover:bg-purple-600 hover:text-white shadow-md">
    //             Get Started For Free
    //           </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gray-100 py-8">
 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-center font-bold font-ubuntu text-2xl py-4 leading-tight">
    Want To Supercharge Your Career Growth with Our <span className="text-purple-800"> AI Tool</span>
  </h1>
  <div className="flex justify-center">
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 max-w-7xl w-full"> {/* Increased width */}
      <h2 className="font-bold text-lg mb-3 text-center"><span className="text-purple-800">Procraftr </span>Builder</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:grid-cols-2">
        {[
          "AI Score",
          "AI Parsing",
          "Resume Building",
          "AI Enhancer",
          "Match & Apply",
          "AI Skill Test",
          "Skill Badges",
          "& More",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg shadow-sm text-center"
          >
            {/* <i className="fa-solid fa-check text-white bg-green-500 p-1.5 rounded-full"></i> */}
            <TickIcon />
            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link href={isAuthenticated ? "/dashboard" : "/login2"}>
          <button className="px-4 py-2 rounded-xl font-semibold text-purple-700 bg-white hover:bg-purple-600 hover:text-white shadow-md transition">
            Get Started For Free
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

</div>

  );
};
const TickIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" width="24" height="24" className="inline-block">
    <path d="M9 16.2l-3.5-3.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4 4c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 16.2z" />
  </svg>
);
export default Home_five;

