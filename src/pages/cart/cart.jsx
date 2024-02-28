import React, { Fragment } from "react";
import CartHeader from "./../../componatnts/Cart/CartHeader/CartHeader";
import CartList from "./../../componatnts/Cart/CartList/CartList";
import CartFooter from "./../../componatnts/Cart/CartFooter/CartFooter";
import "./Cart.css";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../componatnts/Store/cartAtom";

export default function Cart() {
  const [cartData] = useRecoilState($cartAtom);
  let content;
  if (!cartData)
    content = <h3 className="text-center fw-bold my-5">An Error Occured</h3>;
  else if (!cartData.length)
    content = <h3 className="text-center my-5 fw-bold">Cart is Empty</h3>;
  else {
    content = (
      <Fragment>
        <CartHeader />
        <CartList />
        <CartFooter />
      </Fragment>
    );
  }
  return <div className="cart-cont container mt-5">{content}</div>;
}
