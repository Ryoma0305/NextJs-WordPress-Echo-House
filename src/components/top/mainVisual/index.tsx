import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const slides = [
  { image: "/images/main-bg1.jpg", alt: "" },
  { image: "/images/main-bg2.jpg", alt: "" },
  { image: "/images/main-bg3.jpg", alt: "" }
];

const MainVisual = () => {
  return (
    <div className="relative h-[calc(100vh_-_8rem)] w-full">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        className="absolute inset-0 h-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <div
              className="h-full w-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${item.image}')`
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-1/2 top-56 z-[1] flex w-[70%] -translate-x-1/2 flex-col items-center gap-4">
        <h1>
          <Image src="/images/main-logo.png" width="368" height="103" alt="女性専用シェアハウス Echo House" className="" />
        </h1>
        {/* <ul className="flex justify-center gap-3">
          <li>
            <Link href="/" className="flex h-8 w-24 items-center justify-center rounded-full bg-gradient-green text-sm font-bold text-white-100">
              日本語
            </Link>
          </li>
          <li>
            <Link href="/en/" className="flex h-8 w-24 items-center justify-center rounded-full bg-white-100 text-sm font-bold">
              English
            </Link>
          </li>
        </ul> */}
      </div>
      <div className="absolute bottom-8 left-[45%] md:left-[49%]">
        <Link href="#about">
          <span className="relative z-10 inline-block h-8 w-8 -rotate-45 animate-jump border-b border-l border-solid border-white-100"></span>
        </Link>
      </div>
    </div>
  );
};

export default MainVisual;
