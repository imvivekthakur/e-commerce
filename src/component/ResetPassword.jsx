// ResetPassword.js
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  function validatepassword(password) {
    let regexPasswod =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    let result = regexPasswod.test(password);
    return result;
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!validatepassword(password)) {
      toast.error(
        `Invalid password format, Use capital ,small letters, numbers and special characters`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (!token) {
      console.log("Reset token not found in URL.");
      return;
    }

    // Construct the URL with the reset token
    const apiUrl = `https://renting-carnival.onrender.com/auth/reset?token=${token}`;
    // Validate password and confirm password
    if (password !== confirmPassword) {
      // Handle password mismatch
      toast.error("password doesn't match pls check again!!");
      return;
    }

    // Send a request to your backend to reset the password
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Password reset successful
        console.log(
          "password has been reset now you can login to you account!!"
        );
        setIsPasswordReset(true);
      } else {
        // Handle password reset error
        console.log("try reseting the password again!");
      }
    } catch (error) {
      // Handle fetch error
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-[90%] sm:w-[60%] md:w-[50%] max-w-md text-black">
        <h2 className="text-4xl mb-6 font-bold">Reset Password</h2>
        {isPasswordReset ? (
          <p className="text-green-600">
            Password reset successful. You can now log in with your new
            password.
          </p>
        ) : (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label className="block text-sm font-medium">New Password:</label>
              <input
                type="password"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Confirm Password:
              </label>
              <input
                type="password"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <div className="text-center">
                <div
                  className="btn bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-2 border-2 border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl p-2 rounded-md cursor-pointer"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
