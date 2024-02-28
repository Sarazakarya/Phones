import React from "react";
import { $cartAtom } from "../../../Store/cartAtom";
import { useRecoilState } from "recoil";

export default function DecrementBtn({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  function DecreaseQuntity() {
    let Obj = cartData.find((item) => item.id === id);
    if (Obj.quantity === 1) return;
    const newOb = { ...Obj, quantity: Obj.quantity - 1 };
    const newCard = [...cartData];
    newCard.splice(newCard.indexOf(Obj), 1, newOb);
    setCartData(newCard);
  }
  // function DecreaseQuntity() {
  //   const updatedCartData = cartData.map((item) => {
  //     if (item.id === id && item.quantity > 1) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     }
  //     return item;
  //   });

  //   setCartData(updatedCartData);
  // }
  return (
    <span className="change-amount change-amount-dec" onClick={DecreaseQuntity}>
      -
    </span>
  );
}
