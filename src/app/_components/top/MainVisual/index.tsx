"use client";

import React from "react";
// import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
// import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { image: "/images/main-bg1.jpg", alt: "" },
  { image: "/images/main-bg2.jpg", alt: "" },
  { image: "/images/main-bg3.jpg", alt: "" }
];

const MainVisual = () => {
  // const { locale } = useRouter();

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
            <Link
              href="/"
              locale="ja"
              className={clsx("flex h-8 w-24 items-center justify-center rounded-full text-sm font-bold transition-opacity duration-700 ease-out-expo hover:opacity-50", {
                "bg-white-100": locale === "en",
                "bg-gradient-green text-white-100 pointer-events-none": locale !== "en"
              })}
            >
              日本語
            </Link>
          </li>
          <li>
            <Link
              href="/"
              locale="en"
              className={clsx("flex h-8 w-24 items-center justify-center rounded-full bg-white-100 text-sm font-bold transition-opacity duration-700 ease-out-expo hover:opacity-50", {
                "bg-white-100": locale !== "en",
                "bg-gradient-green text-white-100 pointer-events-none": locale === "en"
              })}
            >
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
