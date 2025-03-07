import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Cart from "../pages/Cart";

export default function Header() {
  const cartNavigate = useNavigate();

  function handleCartNav() {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    cartNavigate("/cart", { state: { products } });
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
