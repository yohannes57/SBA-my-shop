import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Banner.css";
import imag from "../../assets/bannerImage.jpg";
import BannerProps from "./BannerProps";
function Banner() {
  let [products, setProducts] = useState([]);
  let [displayedProduct, setDisplayedProduct] = useState([]);

  useEffect(() => {
    fetch("/sampleDB.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  //to clear and render the new one
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setDisplayedProduct(getRandomProducts(products, 4));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [products]);
  // //function to limit products to displayed per render
  // const getRandomProducts = (products, count) => {
  //   let shuffled = products.sort(() => 0.5 - Math.random());
  //   return shuffled.slice(0, count);
  // };
  return (
    <div className="product-container">
      <div className="women">
        <h2>______Catagories______</h2>
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
            {/* <BannerProps links={product.links} /> */}
            <Card.Link href="/product">Add-to-Cart</Card.Link>
            <Card.Link href={product.links.seeMore}>SeeMore</Card.Link>
          </Card.Body>
          {/* <Card.Title className="product-title">{product.title}</Card.Title> */}
          {/* {Object.entries(product.links).map(([key, link]) => (
            <Card.Body key={key} className="card-links">
              <Card.Link href="/product">Add-to-Cart</Card.Link>
              <Card.Link href={link.seeMore}>SeeMore</Card.Link>
            </Card.Body>
          ))} */}
        </Card>
      ))}
    </div>
  );
}

export default Banner;
