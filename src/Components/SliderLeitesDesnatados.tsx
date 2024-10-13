//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//imgs
import leiteUhtDesnatad1 from "../assets/assetsLeite/leiteuhtDesnatado1.png";
import leiteUhtDesnatado2 from "../assets/assetsLeite/leiteuhtDesnatado2.png";
import leiteUhtDesnatado3 from "../assets/assetsLeite/leiteuhtDesnatado3.png";

export function SliderLeitesDesnatado() {
  return (
    <div className=" flex h-full ">
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <div className="flex items-center justify-center">
          <SwiperSlide>
            <img
              className="flex w-10/12 items-center justify-center ml-8 drop-shadow-2xl"
              src={leiteUhtDesnatad1}
              alt="leite uht desnatado"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={leiteUhtDesnatado2}
              alt="leite uht desnatado"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={leiteUhtDesnatado3}
              alt="leite uht desnatado"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
