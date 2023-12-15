import "./App.css";
import Categories from "./component/Categories";
import Footer from "./component/Footer";
import Items from "./component/Items";
import Product from "./component/Product";
import Testimonials from "./component/Testimonials";
import Working from "./component/Working";

function App() {
  return (
    <>
      <Product />
      <Working />
      <Categories />
      <Items />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
