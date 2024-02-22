import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementCart,
  removeCart,
} from "../../redux/slices/sliceCart";
import Button from "../Elements/Button/Index";
import noData from "../../assets/images/notData.png";

const Cart = (props) => {
  const { className } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const products = useSelector((state) => state.product.data);
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const num = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(num);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setTotalPrice(0);
    }
  }, [cart, products]);

  return (
    <>
      <h1 className="text-3xl font-bold pb-3">My Cart</h1>
      <div className={`w-96 h-96 overflow-y-auto ${className}`}>
        {products.length > 0 ? (
          cart.length > 0 ? (
            cart.map((item) => {
              const proItem = products.find(
                (product) => product.id === item.id
              );
              return (
                <div
                  className="flex items-center gap-4 p-3 my-5 bg-white border-2 rounded-lg"
                  key={item.id}
                >
                  <div className="flex gap-16">
                    <img
                      src={proItem.image}
                      alt="product"
                      className="w-20 h-20 object-contain rounded-lg"
                    />
                    <div>
                      <p className="text-sm mb-3">
                        {proItem.title.substring(0, 15)}...
                      </p>

                      <p className="mb-3 font-bold text-sm">
                        {(item.qty * proItem.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                      <div className="flex justify-center">
                        {" "}
                        <Button
                          className="bg-purple-800"
                          onClick={() =>
                            dispatch(decrementCart({ id: item.id, qty: 1 }))
                          }
                        >
                          -
                        </Button>
                        <p className="text-lg mx-2">{item.qty}</p>
                        <Button
                          className="bg-purple-800"
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: item.id,
                                qty: 1,
                              })
                            )
                          }
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <Button
                      onClick={() => dispatch(removeCart({ id: item.id }))}
                      className="text-sm  py-1 rounded-full bg-gray-300 text-gray-400 hover:bg-gray-400 hover:text-gray-800"
                    >
                      x
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="border h-96 text-xl flex justify-center flex-col items-center">
              <img src={noData} alt="Nodata" className="w-48" />
              <p className="mt-5 text-lg text-slate-500">No Data Found</p>
            </div>
          )
        ) : (
          <div className="border h-96 text-xl flex justify-center flex-col items-center">
            <img src={noData} alt="Nodata" className="w-48" />
            <p className="mt-5 text-lg text-slate-500">No Data Found</p>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-5">
        <p className="mr-3 font-bold">Total Price : </p>
        <div>
          <p className="font-bold text-gray-600">
            {totalPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
