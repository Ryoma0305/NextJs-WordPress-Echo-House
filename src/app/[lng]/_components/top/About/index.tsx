"use client";

import { usePathname } from "next/navigation";
import en from "../../../../../locals/top/about/en";
import ja from "../../../../../locals/top/about/ja";
import React from "react";
import { FadeInBottom } from "../../../_components/common/FadeInBottom";
import SectionHeading from "../../../_components/common/SectionHeading";
import Image from "next/image";
import bgImg from "../../../../../../public/images/1floor-6.jpg";

const About = () => {
  const pathname = usePathname();
  const t = pathname.includes("en") ? en : ja;

  return (
    <FadeInBottom>
      <section className="relative bg-cover bg-center bg-no-repeat px-4 py-16" id="about">
        <p className="absolute inset-0 before:absolute before:inset-0 before:bg-about">
          <Image src={bgImg} alt="" width="400" height="600" className="h-full w-full object-cover" />
        </p>
        <div className="relative">
          {/* <img src={img} alt="" width="686" height="508" /> */}
          <SectionHeading titleJp={t.title} titleEn={t.titleSub} />
          <p className="text-center leading-loose" dangerouslySetInnerHTML={{ __html: t.text }} />
        </div>
      </section>
    </FadeInBottom>
  );
};

export default About;
