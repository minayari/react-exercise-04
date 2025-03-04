import { useLocation } from "react-router-dom";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function SingleProduct() {
  const location = useLocation();
  const { image, title, price } = location.state;
  return (
    <>
      <div className="w-[20rem] h-[35rem] ring-2 ring-cyan-900/70 mx-auto my-[1rem] p-[1rem] flex flex-col rounded-[1rem]">
        <div className=" h-[60%]">
          <img className="w-full h-full" src={image} />
        </div>
        <div className="h-[20%] mt-[2rem]">
          <h1 className="text-[1rem] font-bold text-cyan-950 my-[1rem]">
            {title}
          </h1>
          <span className="text-cyan-900/80 text-[1.1rem]">${price}</span>
        </div>
        <div className="h-[20%] flex flex-col items-center justify-end">
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}
