// MainLayout.js
import React, { useState } from "react";
import NavBar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../Store/cartAtom";
import { $user } from "../Store/Store";
import UpdateCardData from "./../Use/UpdateCardData";
import axios from "axios";
export default function MainLayout() {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [Loading, setIsLoading] = useState(true);
  const [user] = useRecoilState($user);

  useEffect(() => {
    if (!user.isAuth) return;

    axios(`http://localhost:3000/users/${user.user.id}`).then((data) => {
      setCartData(data.data.cart);
      setIsLoading(false);
    });
  }, [user.user?.id]);

  useEffect(() => {
    if (!user.isAuth || Loading) return;
    localStorage.setItem("cart", JSON.stringify(cartData));
    UpdateCardData(cartData, user.user.id);
  }, [cartData]);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
