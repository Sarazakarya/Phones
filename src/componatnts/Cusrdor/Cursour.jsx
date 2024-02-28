import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Cursot.css";

// Import Swiper styles
import "swiper/css";

export default function Cursor() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".cusor-Next",
          prevEl: ".cusor-pre",
        }}
      >
        <SwiperSlide>
          <img src="assets/images/2زwebp.webp" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/10.webp" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/5webp.webp" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/9.webp" className="w-100" />
        </SwiperSlide>
      </Swiper>

      <div className=" cusor-pre">{"<"}</div>
      <div className="cusor-Next">{">"}</div>
    </div>
  );
}
