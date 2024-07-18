import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Men.css";
function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/sampleDB.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="women-wrapper">
      <div className="women">
        <h2>Men</h2>
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
          </Card.Body>
          <Card.Body className="card-links">
            <Card.Link href="/order">Add-to-Cart</Card.Link>
            <Card.Link href="/detail">See detail</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Men;
