"use client";

import { usePathname } from "next/navigation";
import en from "../../../../../locals/top/about/en";
import ja from "../../../../../locals/top/about/ja";
import React from "react";
import { FadeInBottom } from "../../../_components/common/FadeInBottom";
import SectionHeading from "../../../_components/common/SectionHeading";

const About = () => {
  const pathname = usePathname();
  const t = pathname.includes("eng") ? en : ja;

  return (
    <FadeInBottom>
      <section className="relative bg-[url('/images/1floor-6.jpg')] bg-cover bg-center bg-no-repeat px-4 py-16 before:absolute before:inset-0 before:bg-about" id="about">
        <div className="relative">
          <SectionHeading titleJp={t.title} titleEn={t.titleSub} />
          <p className="text-center leading-loose" dangerouslySetInnerHTML={{ __html: t.text }} />
        </div>
      </section>
    </FadeInBottom>
  );
};

export default About;
