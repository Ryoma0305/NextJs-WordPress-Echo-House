import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const slides = [
  { image: "/images/main-bg1.jpg", alt: "" },
  { image: "/images/main-bg2.jpg", alt: "" },
  { image: "/images/main-bg3.jpg", alt: "" }
];

const MainVisual = () => {
  return (
    <div className="relative h-[10rem] w-full">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        // loop={true}
        // speed={3000}
        // autoplay={{
        //   delay: 0,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false
        // }}
        className=""
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="absolute inset-0 h-full w-full">
            <div
              className="h-full w-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${item.image}')`
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainVisual;
