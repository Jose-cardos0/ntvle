//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//imgs
import queijoPrato1 from "../assets/assetsQueijos/prato1.png";
import queijoPrato2 from "../assets/assetsQueijos/prato2.png";
import queijoPrato3 from "../assets/assetsQueijos/prato3.png";

export function SliderQueijoPrato() {
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
              className="flex items-center justify-center ml-8 drop-shadow-2xl "
              src={queijoPrato1}
              alt="queijo prato"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={queijoPrato2}
              alt="queijo prato"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md"
              src={queijoPrato3}
              alt="queijo prato"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
