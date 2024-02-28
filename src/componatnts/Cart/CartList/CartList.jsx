import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../Store/cartAtom";
import CartItem from "../CartItem/CartItem";

export default function CartList() {
  const [cartData] = useRecoilState($cartAtom);
  if (!cartData) return <h3>An Error Occured</h3>;
  if (!cartData.length) return <h3>Cart is Empty</h3>;

  return (
    <table className="cart w-100">
      <tbody>
        {cartData.map((item) => {
          return <CartItem product={item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
}
