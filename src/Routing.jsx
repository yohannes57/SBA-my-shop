import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Women from "./components/Women/Women";
import Home from "./components/Home/Home";
import Men from "./components/Men/Men";
import Products from "./components/products/Products";
import DetailProduct from "./components/products/DetailProduct";
import Orders from "./components/Oreders/Orders";
import Order from "./components/Oreders/Order";
import Total_Price from "./components/Oreders/Total_Price";
import Checkout from "./components/Oreders/Checkout";
import Login from "./components/registor/Login";
import Signup from "./components/registor/Signup";

//---------------------------------------j
function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Banner />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <Home />
            <Banner />
            <Women />
            <Men />
            <Products />
          </>
        }
      />
      <Route
        path="/women"
        element={
          <>
            <Home />
            <Women />
          </>
        }
      />
      <Route
        path="/men"
        element={
          <>
            <Home />
            <Men />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <Products />
          </>
        }
      />
      <Route
        path="/product-detail"
        element={
          <>
            <Home />
            <DetailProduct />
          </>
        }
      />
      {/* orders */}
      <Route
        path="/orders"
        element={
          <>
            <Orders />
          </>
        }
      />
      <Route
        path="/orders/order"
        element={
          <>
            <Order />
          </>
        }
      />
      <Route
        path="/checkout"
        element={
          <>
            <Total_Price />
            <Checkout />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Signup />
          </>
        }
      />
      {/*  */}
      <Route
        path="*"
        element={
          <>
            <Home />
            <Banner />
          </>
        }
      />
    </Routes>
  );
}

export default Routing;
