import React from "react";
import { Link } from "react-router-dom";

function Order({ key, price, links }) {
  return (
    <div>
      <div key={key}>
        <h5>Price: {price}</h5>
        {links && links.length > 0 ? (
          links.map((link, index) => (
            <Link key={index} to={link.checkout}>
              Checkout
            </Link>
          ))
        ) : (
          <p>No checkout links available</p>
        )}
      </div>
    </div>
  );
}

export default Order;
