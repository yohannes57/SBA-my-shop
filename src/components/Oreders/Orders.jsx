import React, { useState } from "react";
import { useStateFromContext } from "../../stateProvider/StateProvider";
import "./Orders.css";
import { Link } from "react-router-dom";
import Order from "./Order";
import Total_Price from "./Total_Price";

function Orders() {
  const [{ user, cart }, dispatch] = useStateFromContext();
  const [totalPrice, setTotalPrice] = useState(0);
  if (!cart) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 no-orders">
            <h3>Loading orders...</h3>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 no-orders">
            <h3>No orders found</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {cart.map((product, i) => (
        <div className="container container-orders" key={i}>
          <div className="row row-orders">
            <div className="col-6 col-12-orders">
              <img src={product.image} alt="product" />
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <Order key={i} price={product.price} links={product.links} />
              {/*
              {product.links && product.links.order && (
                <Link to={product.links.checkout}>checkout</Link>
              )}
           */}
            </div>
          </div>
        </div>
      ))}
      <div className="check_out">
        <Total_Price />
      </div>
    </>
  );
}

export default Orders;
