import React from "react";

const ProductRow = ({ product }) => {
  // If product is stocked, show product name else show product that are NOT STOCKED ,as red
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
