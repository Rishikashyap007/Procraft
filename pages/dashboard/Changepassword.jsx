import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-toastify";
import { ToastContainer } from "react-toastify";

function Changepassword() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [changePassword, setChangePassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChangePassword({ ...changePassword, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      toast("❌ No token found. Please log in.");
      return;
    }

    const requestBody = {
      old_password: changePassword.old_password,
      new_password: changePassword.new_password,
      confirm_password: changePassword.confirm_password,
    };

    axios({
      method: "PUT",
      url: "https://api.resumeintellect.com/api/user/change-password",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
      data: requestBody,
    })
      .then((response) => {
        console.log(response.data.message);
        toast("✅ Password has been changed successfully");
      })
      .catch((err) => {
        console.log(err);
        toast("❌ Something went wrong. Check the password again or try again later.");
      });
  };

  return (
    <>
<div className="bg-gray-50 min-h-screen flex items-start justify-center p-4 pt-8">
  <ToastContainer />
  <div className="bg-white max-w-2xl w-full p-10 rounded-xl shadow-lg"> {/* Increased width and padding */}
    <div className="flex justify-between items-center mb-6">
      <h5 className="text-2xl font-bold uppercase text-purple-700 flex items-center">
        <span className="mr-2">🔐</span> Change Password
      </h5>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label htmlFor="old_password" className="block mb-2 text-gray-600 font-semibold">
            Old Password
          </label>
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-shadow"
              onChange={handleChange}
              id="old_password"
              name="old_password"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              <i className={showOldPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="new_password" className="block mb-2 text-gray-600 font-semibold">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-shadow"
                onChange={handleChange}
                id="new_password"
                name="new_password"
                required
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                <i className={showNewPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="confirm_password" className="block mb-2 text-gray-600 font-semibold">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-shadow"
                onChange={handleChange}
                id="confirm_password"
                name="confirm_password"
                required
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className={showConfirmPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-purple-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-800 transition-colors"
          >
            🔄 Update Password
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  );
}

export default Changepassword;
