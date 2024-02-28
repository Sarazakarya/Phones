import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardProduct from "./../../componatnts/Card/Card";

export default function ItemProduct({ title, products }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <Swiper slidesPerView={4} spaceBetween={20}>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <CardProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
