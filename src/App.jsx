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
import Wishlist from "./component/Wishlist";
import Category from "./component/Category";
import Success from "./component/Success";
import Failure from "./component/Failure";
import AllUsers from "./admin/AllUsers";
import AllProductsAdmin from "./admin/AllProductsAdmin";
import AllOrders from "./admin/AllOrders";
import ShowPackages from "./admin/ShowPackage";
import ProductForm from "./component/CreateProduct/ProductForm";
import { Toaster } from "react-hot-toast";
import Vehicle from "./component/Vehicle";
import Combos from "./component/Combos";
import RentalSubscription from "./component/RentalSubscription";
// import ProductForm from "./component/ProductForm";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProductThunk())
      .then((res) => {
        if (res.payload.data.success) {
          setAllProducts(res.payload.data.products);
          setLoading(false);
        }
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home allProducts={allProducts} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop allProducts={allProducts} />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route
            path="/product/:productId"
            element={<Product allProducts={allProducts} />}
          />
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
          <Route path="/admin/allProducts" element={<AllProductsAdmin />} />
          <Route path="/combos" element={<Combos allProducts={allProducts}/>}/>

          <Route path="/review" element={<Review />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/orders" element={<AllOrders />} />
          <Route path="/user/package" element={<ShowPackages />} />
          <Route path="/vehicle" element={<Vehicle/>}/>
          <Route path="/rentalsubscription" element={<RentalSubscription/>}/> 

          {/* <Route path="/furniture" element={<Furniture filteredProduct={allProducts}/>} /> */}
          <Route
            path="/furniture"
            element={
              <Category category="Furniture" allProducts={allProducts} />
            }
          />
          <Route
            path="/decorative-items"
            element={
              <Category category="Decorative Items" allProducts={allProducts} />
            }
          />
          <Route
            path="/vehicles"
            element={<Category category="Vehicles" allProducts={allProducts} />}
          />
          <Route
            path="/home-appliance"
            element={
              <Category category="Home Appliance" allProducts={allProducts} />
            }
          />
          <Route
            path="/popular"
            element={<Category category="popular" allProducts={allProducts} />}
          />
          <Route path="/allUsers" element={<AllUsers />} />

          <Route path="/product/create" element={<ProductForm />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
