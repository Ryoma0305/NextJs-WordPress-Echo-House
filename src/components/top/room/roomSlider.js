import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import Modal from "@/components/common/modal";

const RoomSlider = ({ props }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const openModal = (image) => {
    setModalImage(image);
  };
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="pb-8">
      <Swiper spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[FreeMode, Navigation, Thumbs]}>
        {props.images.map((item, index) => (
          <SwiperSlide key={index} onClick={() => openModal(item.image)}>
            <Image src={item.image} width="431" height="324" alt={item.alt} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {props.thumbs && (
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={2} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}>
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.image} width="108" height="81" alt={item.alt} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Modal modalImage={modalImage} closeModal={closeModal} />
    </div>
  );
};

export default RoomSlider;
