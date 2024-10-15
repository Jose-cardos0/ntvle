//sliders
import logoHeader from "../assets/logoHeader.svg";
import leitesPropaganda from "../assets/leitesPropaganda.svg";
import slidernossosprodutos from "../assets/slidernossosprodutos.png";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

export function Slider() {
  return (
    <div className="flex h-full w-full px-8 items-center justify-center">
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="">
          <img src={logoHeader} alt="Imagem 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={leitesPropaganda} alt="Imagem 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-2/3 mx-auto"
            src={slidernossosprodutos}
            alt="Imagem 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
