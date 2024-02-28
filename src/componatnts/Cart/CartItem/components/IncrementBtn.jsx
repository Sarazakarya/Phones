import React from "react";
import { $cartAtom } from "../../../Store/cartAtom";
import { noWait, useRecoilState } from "recoil";

export default function IncrementBtn({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function increaseQuntity() {
    // let Obj = cartData.find((item) => item.id === id);
    // const newOb = { ...Obj, quantity: Obj.quantity + 1 };
    // const newCard = [...cartData];
    // newCard.splice(newCard.indexOf(Obj), 1, newOb);
    // setCartData(newCard);
    let UpdateCardData = cartData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartData(UpdateCardData);
  }
  return (
    <span className="change-amount change-amount-inc" onClick={increaseQuntity}>
      +
    </span>
  );
}
