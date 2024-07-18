import React from "react";
import Card from "react-bootstrap/Card";
function BannerProps({ links }) {
  return (
    <>
      {Object.entries(links).map(([key, link]) => (
        <Card.Body key={key} className="card-links">
          <Card.Link href="/product">Add-to-Cart</Card.Link>
          <Card.Link href={link.seeMore}>SeeMore</Card.Link>
        </Card.Body>
      ))}
    </>
  );
}

export default BannerProps;
