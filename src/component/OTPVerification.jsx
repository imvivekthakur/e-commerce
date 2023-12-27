import React, { useState } from "react";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the verification logic with the submitted OTP
    // For demonstration purposes, just console log the OTP
    console.log("Submitted OTP:", otp);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-[90%] sm:w-[60%] md:w-[50%] max-w-md text-black">
        <h2 className="text-4xl mb-6 font-bold">Verify OTP</h2>
        {isSubmitted ? (
          <p className="text-green-600">
            OTP verification successful! Access granted.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                required
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
            <div className="submit mt-8">
              <div className="text-center">
                <div
                  className="btn bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-2 border-2 border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl p-2 rounded-md cursor-pointer"
                  onClick={handleSubmit}
                >
                  Verify
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
