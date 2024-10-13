//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//imgs
import leiteUhtIntegral1 from "../assets/assetsLeite/leiteUhtIntegral1.png";
import leiteUhtIntegral2 from "../assets/assetsLeite/leiteUhtIntegral2.png";
import leiteUhtIntegral3 from "../assets/assetsLeite/leiteUhtIntegral3.png";

export function SliderLeitesIntegral() {
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
              src={leiteUhtIntegral1}
              alt="leiteUhtIntegral1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={leiteUhtIntegral2}
              alt="leiteUhtIntegral2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={leiteUhtIntegral3}
              alt="leiteUhtIntegral3"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
