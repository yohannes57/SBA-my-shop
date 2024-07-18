import React from "react";
function HomeImage(props) {
  return (
    <>
      <img src={props.src} alt={props.text} />
      {/* //this should from db and add dynamically */}
    </>
  );
}

export default HomeImage;
