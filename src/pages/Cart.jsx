import { useLocation } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";

import { useCallback } from "react";

export default function Cart() {
  const location = useLocation();
  const products = location.state?.products || [];
  console.log(products);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center my-[1rem]">
        {products.length > 0 ? (
          products.map((pro) => (
            <div
              key={pro.id}
              className="w-[20rem] h-[30rem] m-[1rem] p-[0.8rem] ring-2 ring-cyan-900/50 rounded-[2rem]"
            >
              <img
                className="w-full h-[20rem] rounded-[3rem]"
                src={pro.image}
              />
              <h2 className="mt-[1rem] mb-[0.7rem] font-bold truncate text-cyan-900">
                {pro.title}
              </h2>
              <span className="bg-cyan-900/70 p-[0.2rem] text-cyan-50 text-[1rem]">
                ${pro.price}
              </span>
              <p className="text-cyan-800/50 mt-[1rem]">
                Quantity: <span className="text-cyan-800"> {pro.quantity}</span>
              </p>
            </div>
          ))
        ) : (
          <div className="w-full h-[10rem] flex justify-center items-center mt-[10rem] ring-2 ring-cyan-900/30">
            <h1 className="text-cyan-800 text-[1.3rem]">Cart is empty...</h1>
          </div>
        )}
      </div>
    </>
  );
}
