import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  function handleCartNav() {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    products.map((pro) => {
      const { title, image, price, quantity, id } = pro;
      console.log(id);
    });
  }
  return (
    <>
      <div className="w-full h-[3.5rem] flex justify-between items-center p-[1rem]">
        <IconButton onClick={handleCartNav}>
          <ShoppingCartIcon fontSize="large" className="text-cyan-800" />
        </IconButton>
        <AccountCircleIcon fontSize="large" className="text-cyan-800" />
      </div>
    </>
  );
}
