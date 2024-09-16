import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { Swiper as SwiperClass } from "swiper";

type Slides = {
  slides: {
    images: {
      image: string | StaticImageData;
      alt: string;
    }[];
  };
  openModal: (image: string) => void;
};

const RoomSlider = ({ slides, openModal }: Slides) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="pb-8">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && "destroyed" in thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {slides.images.map((item, index) => (
          <SwiperSlide key={index} onClick={() => openModal(typeof item.image === 'string' ? item.image : item.image.src)}>
            <Image src={item.image} width="431" height="324" alt={item.alt} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper onSwiper={setThumbsSwiper} spaceBetween={2} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}>
        {slides.images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.image} width="108" height="81" alt={item.alt} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default RoomSlider;
