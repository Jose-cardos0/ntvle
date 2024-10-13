//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//imgs
import leiteUhtZero1 from "../assets/assetsLeite/leiteuhtZero1.png";
import leiteUhtZero2 from "../assets/assetsLeite/leiteuhtZero2.png";
import leiteUhtZero3 from "../assets/assetsLeite/leiteuhtZero3.png";

export function SliderLeitesZero() {
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
              src={leiteUhtZero1}
              alt="leite uht zero lactose"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full"
              src={leiteUhtZero2}
              alt="leite uht zero lactose"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full"
              src={leiteUhtZero3}
              alt="leite uht zero lactose"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
