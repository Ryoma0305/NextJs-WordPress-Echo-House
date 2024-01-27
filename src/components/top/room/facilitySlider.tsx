import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
// import Modal from "../../../components/common/modal";

const FacilitySlider = ({ props }: { props: { images: Array<{ image: string, alt: string }> } }) => {
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
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.image} width="282" height="202" alt={item.alt} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FacilitySlider;
