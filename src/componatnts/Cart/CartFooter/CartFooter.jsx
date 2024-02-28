import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../Store/cartAtom";

export default function CartFooter() {
  const [cartData] = useRecoilState($cartAtom);
  const currenTotal = cartData.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="price-cont gap-2 d-flex align-items-end flex-column fw-bolder text-center">
      <div className="w-25">
        <div className="d-flex justify-content-between align-items-center text-start">
          <div>
            <div>Total</div>
            <div>
              <span className="items-num"></span> Items
            </div>
          </div>
          <div className="total-price fs-3">${currenTotal}</div>
        </div>
        <button className="btn btn-primary w-100">Checkout</button>
      </div>
    </div>
  );
}
