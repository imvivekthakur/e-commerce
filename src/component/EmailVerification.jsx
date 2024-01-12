import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emailThunk } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import toast from "react-hot-toast";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const data = {
    email,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Enter Email ");
      return;
    }

    setLoading(true);

    dispatch(emailThunk(data))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`);
          setLoading(false);
          setEmail("");

          setTimeout(() => {
            navigate("/otp-verify");
          }, 2000);
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
        <h2 className="text-4xl mb-6 font-bold">Verify Email</h2>
        {isSubmitted ? (
          <p className="text-green-600">
            Check your email for further instructions.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email:</label>
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
                  <div
                    className="btn bg-primary hover:bg-white text-white hover:text-primary hover:border-primary hover:border-2 border-2 border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl p-2 rounded-md cursor-pointer"
                    onClick={handleSubmit}
                  >
                    Send OTP
                  </div>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
