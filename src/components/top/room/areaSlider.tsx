import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
// import Modal from "../../../components/common/modal";

const AreaSlider = ({ props }: { props: { images: Array<{ image: string, alt: string }> } }) => {
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
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.image} width="202" height="91" alt={item.alt} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AreaSlider;
