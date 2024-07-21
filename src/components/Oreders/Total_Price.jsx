import React from "react";
import { useStateFromContext } from "../../stateProvider/StateProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Total_Price = () => {
  const [{ user, cart }, dispatch] = useStateFromContext();

  let navigate = useNavigate();
  //uset to calculate the total price of orderded product
  const getTotalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  // check the sum
  console.log("this is cart", cart);
  return (
    <div className="total_price">
      <div>
        <h3>Totoal Price:{getTotalPrice}</h3>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
};

export default Total_Price;
