import React from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  console.log("cart : ", cart);

  return (
    <section className="flex flex-col justify-center items-center w-screen h-max">
      {cart &&
        cart.items.map((item) => {
          return (
            <div className="w-96 h-full flex flex-col gap-y-5 rounded-md shadow-md p-4">
              <img src={item?.image} className="h-40 w-max mx-auto" />
              <p className="font-semibold">{item?.title}</p>
              <p>{item?.description}</p>
              <p className="font-semibold">Price : {item?.price}</p>
            </div>
          );
        })}
    </section>
  );
};

export default Checkout;
