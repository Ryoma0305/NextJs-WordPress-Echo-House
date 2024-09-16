"use client";

import { usePathname } from "next/navigation";
import en from "../../../../../locals/top/feature/en";
import ja from "../../../../../locals/top/feature/ja";
import React from "react";
import { FadeInBottom } from "../../common/FadeInBottom";
import SectionHeading from "../../common/SectionHeading";
import Image from "next/image";
import { montserrat } from "../../../fonts/fonts";

const Feature = () => {
  const pathname = usePathname();
  const lists = pathname.includes("en") ? en : ja;

  return (
    <FadeInBottom>
      <section className="bg-white-200 px-4 py-16" id="feature">
        <div className="mx-auto max-w-[1284px]">
          <SectionHeading titleJp="エコーハウスの特徴" titleEn="Feature" />
          <ul className="flex flex-col gap-16 md:flex-row md:flex-wrap md:justify-center md:gap-x-4">
            {lists.map((item, index) => (
              <li className="flex flex-col items-center md:w-[30%] md:px-10" key={index}>
                <p>
                  <Image src={item.image} alt={item.alt} width="60" height="60" />
                </p>
                <div className="mt-2 flex justify-center text-center md:items-center">
                  <p className="mt-3 flex flex-col items-center text-center">
                    <span className="text-xl font-bold">{item.title}</span>
                    {!pathname.includes("en") && <span className={`${montserrat.className} text-xs`}>{item.titleSub}</span>}
                  </p>
                </div>
                <p className="mt-4 text-center">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </FadeInBottom>
  );
};

export default Feature;
