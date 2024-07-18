import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Women from "./components/Women/Women";
import Home from "./components/Home/Home";
import Men from "./components/Men/Men";
import Products from "./components/products/Products";
import DetailProduct from "./components/products/DetailProduct";
import { reducer } from "./reducer";
let initialState={cart:0}
function Routing() {
  const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
          <Header />
            <Home />
            <Banner />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
           <Header />
            <Home />
            <Banner />
          </>
        }
      />
      <Route
        path="/women"
        element={
          <>
           <Header />
            <Home />
            <Women />
          </>
        }
      />
      <Route
        path="/men"
        element={
          <>
           <Header />
            <Home />
            <Men dispatch={dispatch}/>
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <Header />
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
