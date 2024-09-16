"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import mvImg1 from "../../../../../../public/images/main-bg1.webp";
import mvImg2 from "../../../../../../public/images/main-bg2.webp";
import mvImg3 from "../../../../../../public/images/main-bg3.webp";

const MainVisual = () => {
  const slides = [
    { image: mvImg1, alt: "" },
    { image: mvImg2, alt: "" },
    { image: mvImg3, alt: "" }
  ];

  const pathname = usePathname();

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
          <SwiperSlide key={index} className="h-full w-full">
            <p className="h-full w-full">
              <Image priority src={item.image} alt={item.alt} width="1280" height="658" className="h-full w-full object-cover" />
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-1/2 top-56 z-[1] flex w-[70%] -translate-x-1/2 flex-col items-center gap-4">
        <h1>
          <Image priority src="/images/main-logo.png" width="368" height="103" alt="女性専用シェアハウス Echo House" className="" />
        </h1>
        <ul className="flex justify-center gap-3">
          <li>
            <Link
              href="/ja/"
              className={clsx("flex h-8 w-24 items-center justify-center rounded-full text-sm font-bold transition-opacity duration-700 ease-out-expo hover:opacity-50", {
                "bg-white-100": pathname.includes("en"),
                "bg-gradient-green text-white-100 pointer-events-none": !pathname.includes("en")
              })}
            >
              日本語
            </Link>
          </li>
          <li>
            <Link
              href="/en/"
              className={clsx("flex h-8 w-24 items-center justify-center rounded-full bg-white-100 text-sm font-bold transition-opacity duration-700 ease-out-expo hover:opacity-50", {
                "bg-white-100": !pathname.includes("en"),
                "bg-gradient-green text-white-100 pointer-events-none": pathname.includes("en")
              })}
            >
              English
            </Link>
          </li>
        </ul>
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
