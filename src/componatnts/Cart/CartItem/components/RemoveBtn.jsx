import React from "react";
import { $cartAtom } from "../../../Store/cartAtom";
import { useRecoilState } from "recoil";
export default function RemoveBtn({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  function removeProduct() {
    setCartData(cartData.filter((item) => item.id !== id));
  }
  return (
    <span className="remove-product" onClick={removeProduct}>
      {" "}
      Remove{" "}
    </span>
  );
}
