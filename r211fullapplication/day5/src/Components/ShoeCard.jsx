import React from "react";

const ShoeCard = ({ id, name, image, category }) => {
  // let shoeId = "";
  return (
    <div
      data-cy={`shoe-card-wrapper-${id}`}
      style={{
        display: "block",
        width: "300px",
        height: "390px",
        border: "5px solid black",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "320px",
          padding: "25px 25px 0 25px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          data-cy="shoe-card-image"
          alt="shoe"
          src={image}
          style={{
            backgroundSize: "contain",
            width: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div data-cy="shoe-name" style={{ fontSize: "20px" }}>
          {name}
        </div>
        <div data-cy="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
