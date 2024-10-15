//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//imgs
import queijoMussarela1 from "../assets/assetsQueijos/mussarela1.png";
import queijoMussarela2 from "../assets/assetsQueijos/mussarela2.png";
import queijoMussarela3 from "../assets/assetsQueijos/mussarela3.png";

export function SliderQueijoMussarela() {
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
              src={queijoMussarela1}
              alt="queijo mussarela"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={queijoMussarela2}
              alt="queijo mussarela"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={queijoMussarela3}
              alt="queijo mussarela"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
