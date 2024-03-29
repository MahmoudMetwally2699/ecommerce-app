import React, { useEffect, useState } from "react";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Home from "./components/Home";
import Login from "./components/user/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import Register from "./components/user/Register";
import { loadUser } from "./actions/userActions";
import store from "./store";
import Profile from "./components/user/Profil";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className=" container container-fluid">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/search/:keyword" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/me" element={<Profile></Profile>} />
            <Route
              path="/product/:id"
              element={<ProductDetails></ProductDetails>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
