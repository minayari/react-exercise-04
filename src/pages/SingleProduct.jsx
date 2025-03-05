import { useLocation } from "react-router-dom";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useEffect } from "react";

export default function SingleProduct() {
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  const location = useLocation();
  const { image, title, price, id } = location.state || {};
  const [cartProducts, setCartProducst] = useState(() => {
    const savedProducts = localStorage.getItem("cartProducts");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  function handleAddToCart() {
    setCartProducst((prevProduct) => {
      const existingProduct = prevProduct.find((item) => item.id === id);

      if (existingProduct) {
        return prevProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevProduct, { image, title, price, id, quantity: 1 }];
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    console.log(cartProducts);
  }, [cartProducts]);

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
          {cartProducts.length === 0 ? (
            <IconButton
              onClick={handleAddToCart}
              color="primary"
              aria-label="add to shopping cart"
            >
              <AddShoppingCartIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleAddToCart}>
              <ShoppingCartIcon fontSize="small" />
              <CartBadge
                badgeContent={
                  cartProducts.find((item) => item.id === id)?.quantity
                }
                color="primary"
                overlap="circular"
              />
            </IconButton>
          )}
        </div>
      </div>
    </>
  );
}
