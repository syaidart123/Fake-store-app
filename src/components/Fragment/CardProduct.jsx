import React, { useState } from "react";
import Button from "../Elements/Button/Index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/sliceCart";
import { open } from "../../redux/slices/openCart";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-slate-500 my-4 rounded-lg shadow mx-2 flex flex-col justify-between hover:shadow-md">
      {children}
    </div>
  );
};

export const Header = ({ id, image }) => {
  return (
    <>
      {image ? (
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt="product"
            className="p-8 rounded-t-lg h-80 object-contain w-full"
          />
        </Link>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export const Body = ({ name, children }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold  tracking-tight text-black truncate">
          {name}
        </h5>
        <p className="text-m text-black truncate">{children}</p>
      </a>
    </div>
  );
};

export const Footer = ({ price, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart({ id, qty: 1 }));
    dispatch(open());
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <div className="flex items-center justify-between pb-5 px-5">
      <span className="text-s font-bold  text-black">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button className="bg-purple-600" onClick={handleCart}>
        {isLoading ? "Loading..." : "Add To Cart"}
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
