import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Shop from "./component/Shop";
import Blog from "./component/Blog";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import TogglePack from "./component/Toggle_Pack";
import DefaultNavbar from "./component/Default_Navbar";
import CityPreference from "./component/City_Preference";
import ShowUser from "./admin/ShowUser";
import ForgotPassword from "./component/FogotPassword";
import ResetPassword from "./component/ResetPassword";
import EmailVerification from "./component/EmailVerification";
import OTPVerification from "./component/OTPVerification";
import UserProfile from "./Users/UserProfile";
// import ProductForm from "./component/ProductForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/toggle" element={<TogglePack />} />
          <Route path="/admin" element={<ShowUser />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/email-verify" element={<EmailVerification />} />
          <Route path="/otp-verify" element={<OTPVerification />} />
          {/* <Route path="/product/create" element={<ProductForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
