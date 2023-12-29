// src/components/ForgetPassword.js
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API request logic here to send the email to the server
    // Set isSubmitted to true on successful request
    try {
      const res = await fetch("https://renting-carnival.onrender.com/auth/forget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
      });
      console.log("reset password link sent to your email");
      setIsSubmitted(true);
    } catch (error) {
        console.log("error occured", error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-[90%] sm:w-[60%] md:w-[50%] max-w-md text-black">
        <h2 className="text-4xl mb-6 font-bold">Forget Password</h2>
        {isSubmitted ? (
          <p className="text-green-600">Check your email for further instructions.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="submit mt-8">
                <div className="text-center">
                  <div
                    className="btn bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-2 border-2 border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl p-2 rounded-md cursor-pointer"
                    onClick={handleSubmit}
                  >
                    Submit
                  </div>
                </div>
              </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
