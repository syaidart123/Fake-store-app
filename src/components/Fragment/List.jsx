import React from "react";
import Button from "../Elements/Button/Index";

const ListProduct = (props) => {
  const { findProduct } = props;
  return (
    <>
      <div>
        <Button onClick={() => findProduct("men's clothing")}>Men</Button>
        <Button onClick={() => findProduct("women's clothing")}>Women</Button>
        <Button onClick={() => findProduct("jewelery")}>Jewelery</Button>
        <Button onClick={() => findProduct("electronics")}>Electronic</Button>
        <Button onClick={() => findProduct()}>All</Button>
      </div>
    </>
  );
};

export default ListProduct;
