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
import DynamicProducts from "./component/DynamicProducts/DynamicProducts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProductThunk } from "./redux/productSlice";
import Review from "./component/Review";
// import ProductForm from "./component/ProductForm";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProductThunk())
      .then((res) => {
        console.log(res);

        if (res.payload.data.success) {
          setAllProducts(res.payload.data.products);
          setLoading(false);
        }
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }, []);

  console.log(allProducts);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home allProducts={allProducts} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop allProducts={allProducts} />} />
          <Route path="/about" element={<Blog />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/toggle" element={<TogglePack />} />
          <Route path="/admin" element={<ShowUser />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/email-verify" element={<EmailVerification />} />
          <Route path="/otp-verify" element={<OTPVerification />} />
          <Route path="/allProducts" element={<DynamicProducts />} />
          <Route path="/review" element={<Review />} />
          {/* <Route path="/product/create" element={<ProductForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
