import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailVerifyThunk } from "../redux/authSlice";
import { ColorRing } from "react-loader-spinner";
import toast from "react-hot-toast";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const data = {
    email,
    otp,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !otp) {
      toast.error("Enter Email and otp ");
      return;
    }

    setLoading(true);

    dispatch(emailVerifyThunk(data))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`);
          setLoading(false);
          setEmail("");
          setOTP("");

          localStorage.setItem("userInfo", JSON.stringify(res.payload.data));

          setTimeout(() => {
            navigate("/signup");
          }, 5000);
        } else {
          setLoading(false);
          toast.error(`${res.payload.data.msg}`);
        }
        return res;
      })
      .catch((err) => {
        return err.response;
      });
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
              <label className="block text-sm font-medium">Enter Email:</label>
              <input
                type="text"
                id="otp"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
            {loading ? (
              <div className="loader-container w-[100%] mx-auto flex items-center justify-center">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : (
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
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
