import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Cart from "../pages/Cart";

export default function Header() {
  const cartNavigate = useNavigate();
  const homeNavigate = useNavigate();

  const handleCartNav = useCallback(() => {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    cartNavigate("/cart", { state: { products } });
  }, []);

  const handleHomeNav = useCallback(() => {
    homeNavigate("/");
  });

  return (
    <>
      <div className="w-full h-[3.5rem] flex justify-between items-center p-[1rem]">
        <IconButton onClick={handleCartNav}>
          <ShoppingCartIcon fontSize="large" className="text-cyan-800" />
        </IconButton>
        <IconButton onClick={handleHomeNav}>
          <HomeIcon fontSize="large" className="text-cyan-800" />
        </IconButton>
      </div>
    </>
  );
}
