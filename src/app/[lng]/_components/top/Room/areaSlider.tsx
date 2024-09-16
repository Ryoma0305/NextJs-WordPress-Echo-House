import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import React from "react";

type AreaSliderProps = {
  slides: {
    images: { image: string | StaticImageData; alt: string; }[];
  };
  openModal: (image: string | StaticImageData) => void;
};

const AreaSlider: React.FC<AreaSliderProps> = ({ slides, openModal }) => {
  return (
    <div className="pb-8">
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        slidesPerView={1}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
      >
        {slides.images.map((item, index) => (
          <SwiperSlide key={index} onClick={() => openModal(item.image)}>
            <Image src={item.image} width="202" height="91" alt={item.alt} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AreaSlider;
