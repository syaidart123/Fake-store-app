import React, { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/Index";
import { useSelector } from "react-redux";
import Modal from "../Elements/Modal";
import Cart from "../Fragment/Cart";
import { useDispatch } from "react-redux";
import { close, open } from "../../redux/slices/openCart";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const products = useSelector((state) => state.product.data);
  const openCart = useSelector((state) => state.open.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="bg-white border-gray-200 shadow sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex cursor-pointer gap-3">
            <Link to={"/"}>
              <img src={logo} alt="Fake Store" className="w-10 rounded" />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <button
              onClick={() => dispatch(open())}
              type="button"
              className="ml-5  cursor-pointer flex items-center p-2 hover:rounded-full hover:bg-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <p
                className={`text-sm text-red-700 font-bold ${
                  totalCart === 0 && "hidden"
                }`}
              >
                {totalCart}
              </p>
              <Modal open={openCart} onClose={() => dispatch(close())}>
                <Cart products={products} />
              </Modal>
            </button>
            <Button
              className="ml-5 bg-purple-800 hover:bg-purple-900"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
