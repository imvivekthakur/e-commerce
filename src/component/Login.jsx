import React, { useEffect, useState } from "react";
import loginImg from "../assets/signin.svg";
import { NavLink, useNavigate } from "react-router-dom";
import DefaultNavbar from "./Default_Navbar";
import Footer from "./Footer";
import { validatemail, validatepassword } from "../utils/validation";
import { ToastContainer, toast } from "react-toastify";
import { loginUserThunk } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    email,
    password,
  };

  const handleLogin = () => {
    if (!email || !password) {
      toast.error(`Please fill all the required fields`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (!validatemail(email)) {
      toast.error(`Invalid email format`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

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
    dispatch(loginUserThunk(userData))
      .then((res) => {
        // setLoading(res.payload.data.isLoading);
        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setEmail("");
          setPassword("");

          setTimeout(() => {
            navigate("/");
          }, 3000);

          localStorage.setItem("userInfo", JSON.stringify(res.payload.data));
        } else {
          toast.error(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };
  return (
    <>
      <DefaultNavbar />
      <div className="min-w-screen min-h-screen bg-white flex items-center justify-center mt-20 px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div
              className="hidden md:block w-1/2 bg-primary
             py-10 px-10"
            >
              <img src={loginImg} alt="" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-6 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                        placeholder="johnsmith@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-6 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mb-12 mt-2 cursor-pointer hover:text-primary">
                  <NavLink to="/forget">Forgot Password</NavLink>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      className="block w-full max-w-xs mx-auto bg-primary hover:bg-focus:bg-primary text-white font-bold  rounded-lg px-3 py-3 dark:hover:bg-gray-700 p-3 hover:bg-gray-500 hover:text-white hover:no-underlinen  text-center m-2"
                      onClick={handleLogin}
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  New User?{" "}
                  <NavLink
                    to="/email-verify"
                    className="font-bold hover:text-primary hover:underline"
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
