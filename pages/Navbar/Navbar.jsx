import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logo from "../../assets/lg1.jpg";
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // Check API success
      const checkApiSuccess = async () => {
        try {
          const response = await fetch('https://api.resumeintellect.com/api/user/user-profile', {
            headers: { 'Authorization': `Bearer ${token}` },
          });
          setIsDropdownOpen(response.ok);
        } catch {
          setIsDropdownOpen(false);
        }
      };
      checkApiSuccess();
    }
  }, []);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-200 shadow-sm font-ubuntu">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="nav-logo" className="h-10 w-40 rounded-lg" width={180} height={100}/>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex sm:text-medium space-x-4">
            <Link href="/navbarcontent" className="text-gray-700 px-3 py-2 rounded-md text-lg font-bold group hover:text-purple-600">
              AI Resume Builder
              <span className="block h-0.5 bg-purple-600 transition-all duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
            <Link href="https://blog.resumeintellect.com/" className="text-gray-700 px-3 py-2 rounded-md text-lg font-bold group hover:text-purple-600">
              Resources
              <span className="block h-0.5 bg-purple-600 transition-all duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
            <Link href="https://blog.resumeintellect.com/" className="text-gray-700 px-3 py-2 rounded-md text-lg font-bold group hover:text-purple-600">
              About Us
              <span className="block h-0.5 bg-purple-600 transition-all duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
            <a href="#phone" className="text-gray-700 px-3 py-2 rounded-md text-lg font-bold group hover:text-purple-600">
              📞 Contact us
              <span className="block h-0.5 bg-purple-600 transition-all duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </div>



          {/* User/Login Section */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center bg-gray-50 text-gray-800 hover:text-purple-600 px-4 py-2 text-md font-semibold border-2 border-gray-200 rounded-xl"
                >
                  <Image
                    src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                    alt="User-profile"
                    className="w-8 h-8 rounded-full"
                    width={180}
                    height={100}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-700">
                    <Link href="/" className="block px-4 py-2 text-purple-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Home</Link>
                    <Link href="/dashboard/page" className="block px-4 py-2 text-purple-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Profile</Link>
                    <button onClick={() => { handleLogout(); setIsDropdownOpen(false); }} className="block w-full text-left px-4 py-2 text-purple-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login2" className="text-gray-700 hover:text-purple-600 px-4 py-2 text-md font-bold border-2 border-gray-200 rounded-xl">Log in</Link>
                <Link href="/signup" className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 text-md font-bold rounded-xl">Sign up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuClick} className="text-gray-800 hover:text-purple-600 focus:outline-none px-3 py-2 rounded-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-gray-700 block px-3 py-2 rounded-md text-base font-extrabold hover:text-purple-600" onClick={handleLinkClick}>AI Resume Builder</Link>
              <Link href="https://blog.resumeintellect.com/" className="text-gray-700 block px-3 py-2 rounded-md text-base font-bold hover:text-purple-600" onClick={handleLinkClick}>Resources</Link>
              <Link href="https://blog.resumeintellect.com/" className="text-gray-700 block px-3 py-2 rounded-md text-base font-bold hover:text-purple-600" onClick={handleLinkClick}>About Us</Link>
              <Link href="/blog" className="text-gray-700 block px-3 py-2 rounded-md text-base font-semibold hover:text-purple-600" onClick={handleLinkClick}>Blog</Link>

              {isLoggedIn ? (
                <Link href="/" className="text-gray-700 block px-3 py-2 rounded-md text-base font-semibold hover:text-purple-600" onClick={() => { handleLogout(); handleLinkClick(); }}>Logout</Link>
              ) : (
                <>
                  <Link href="/login2" className="text-gray-700 block px-3 py-2 rounded-md text-base font-semibold hover:text-purple-600" onClick={handleLinkClick}>Log in</Link>
                  <Link href="/signup" className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-semibold hover:bg-purple-700" onClick={handleLinkClick}>Sign up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

