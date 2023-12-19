import "./App.css";
import Home from "./component/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
