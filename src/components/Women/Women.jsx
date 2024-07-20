import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Women.css";
import { useStateFromContext } from "../../stateProvider/StateProvider";

//----------------------
function Women() {
  const [products, setProducts] = useState([]);
  const [{ cart, user }, dispatch] = useStateFromContext();
  const [count, setCount] = useState(0);

  //--------------fetching data from sample data base
  useEffect(() => {
    fetch("/women.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  //------------dispatch selected product reducer
  function handleAddToCart() {
    dispatch({ type: "add_to_cart", cart: products[count] });
    setCount((count) => count + 1);
  }
  return (
    <div className="women-wrapper">
      <div className="women">
        <h2>_____For Women_____</h2>
      </div>
      {/* maping the producet */}
      {products.map((product) => (
        <Card
          className="product-card"
          key={product.id}
          style={{ width: "10rem" }}
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="product-title">{product.title}</Card.Title>
            <Card.Title className="product-title">${product.price}</Card.Title>
          </Card.Body>
          <Card.Body className="card-links">
            <button onClick={handleAddToCart}>Add-to-Cart</button>
            <Card.Link to="/detail">See Detail</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Women;
