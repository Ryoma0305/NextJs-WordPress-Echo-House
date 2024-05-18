import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import React from "react";

type Slides = {
  slides: {
    images: {
      image: string;
      alt: string;
    }[];
  };
  openModal: (image: string) => void;
};

const FacilitySlider = ({ slides, openModal }: Slides) => {
  return (
    <div className="pb-8">
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 8
          }
        }}
        slidesPerView={1}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="md:h-[13rem]"
      >
        {slides.images.map((item, index) => (
          <SwiperSlide key={index} onClick={() => openModal(item.image)}>
            <img src={item.image} width="282" height="202" alt={item.alt} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FacilitySlider;
