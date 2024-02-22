import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct, getProducts } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";
import Button from "../components/Elements/Button/Index";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/sliceCart";
import { open } from "../redux/slices/openCart";
import { useSelector } from "react-redux";
import { GETProducts, GetById } from "../redux/slices/productSlice";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const [isLoading, setIsLoading] = useState(false);

  const product = useSelector((state) => state.product.data);
  const handleCart = () => {
    dispatch(addToCart({ id: id, qty: 1 }));
    dispatch(open());
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getDetailProduct(id, (data) => {
      // setProduct(data);
      dispatch(GetById({ data }));
      console.log(data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="w-100 min-h-screen flex justify-center items-center">
        {product ? (
          <div className="flex font-sans max-w-xl border p-5">
            <div className="flex-none w-48 relative -z-10">
              <img
                src={product.image}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-8">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  {product.title}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  ${product.price}
                </div>
                {/* <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  {product.rating.rate}/5 ({product.rating.count})
                </div> */}
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  {product.description}
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <Button className="bg-purple-600" onClick={handleCart}>
                    {isLoading ? "Loading..." : "Add To Cart"}
                  </Button>
                  <button
                    className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default DetailProduct;
