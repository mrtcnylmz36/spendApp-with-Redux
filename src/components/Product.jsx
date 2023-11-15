import React from "react";
import Form from "./Form";

function Product({ item }) {
  return (
    <div className="product">
      <img src={item.image} />
      <h4>{item.title}</h4>
      <p>${item.price}</p>
      <Form item={item} />
    </div>
  );
}

export default Product;
