//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//imgs
import queijodeCoalho1 from "../assets/assetsQueijos/coalho1.png";
import queijodeCoalho2 from "../assets/assetsQueijos/coalho2.png";
import queijodeCoalho3 from "../assets/assetsQueijos/coalho3.png";

export function SliderQueijoCoalho() {
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
              className="flex  items-center justify-center ml-8 drop-shadow-2xl"
              src={queijodeCoalho1}
              alt="queijo mussarela"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={queijodeCoalho2}
              alt="queijo mussarela"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={queijodeCoalho3}
              alt="queijo mussarela"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
