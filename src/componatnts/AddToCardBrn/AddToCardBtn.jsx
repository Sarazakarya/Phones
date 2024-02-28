import React from "react";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../Store/cartAtom";

export default function AddToCardBtn({ product }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function addToCart() {
    setCartData([...cartData, { ...product, quantity: 1 }]);
    console.log(cartData);
  }

  return (
    <div>
      <Button variant="primary" className="w-100" onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  );
}
