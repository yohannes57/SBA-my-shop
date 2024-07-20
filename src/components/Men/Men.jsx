import React, { useEffect, useReducer, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Men.css";
import Button from "react-bootstrap/esm/Button";
import { useStateFromContext } from "../../stateProvider/StateProvider";
function Men() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [{ cart, user }, dispatch] = useStateFromContext();

  // const[cart,setCart]=useState(0)
  useEffect(() => {
    fetch("/men.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  function handleAddToCart() {
    dispatch({ type: "add_to_cart", cart: products[count] });
    setCount((count) => count + 1);
  }
  // console.log(products[count]);
  return (
    <div className="women-wrapper">
      <div className="women">
        <h2>For Men </h2>
      </div>
      {products.map((product) => (
        <Card
          className="product-card"
          key={product.id}
          style={{ width: "10rem" }}
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="product-title">{product.title}</Card.Title>
            <Card.Title>${product.price}</Card.Title>
          </Card.Body>
          <Card.Body className="card-links">
            <Button onClick={handleAddToCart}>Add-to-Cart</Button>
            <Card.Link to="/detail">See detail</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Men;
