"use client";

import { usePathname } from "next/navigation";
import en from "../../../../locals/top/feature/en";
import ja from "../../../../locals/top/feature/ja";
import React from "react";
import { FadeInBottom } from "../../common/FadeInBottom";
import SectionHeading from "../../common/SectionHeading";
import Image from "next/image";

const listsJa = [
  { title: "女性専用", titleSub: "FEMALE ONLY", image: "/images/feature-icon-women.png", alt: "", text: "入居者は女性の方のみですので、安心して生活して頂けます。" },
  { title: "すぐに生活が始められる", titleSub: "WELL-EQUIPPED", image: "/images/stay.png", alt: "", text: "ベッド、寝具、家電等が充実しているので入居後即、快適な生活が始められます。" },
  {
    title: "コストパフォーマンス",
    titleSub: "GOOD PRICE",
    image: "/images/price.png",
    alt: "",
    text: "初期費用、敷金、礼金は不要です。家賃は電気代、水道代等の共益費、Wi-Fi等すべて込みで￥4,5000～から入居可能です。"
  },
  {
    title: "安心のサポート体制",
    titleSub: "SUPPORT",
    image: "/images/support.png",
    alt: "",
    text: "シェアハウスでの生活や知らない土地での暮らしに不安な方でも在駐スタッフが生活をサポートします。"
  },
  {
    title: "好立地",
    titleSub: "GOOD LOCATION",
    image: "/images/location.png",
    alt: "",
    text: "JR新今宮駅、南海新今宮駅、大阪メトロ動物園前（御堂筋線、堺筋線）まで徒歩５分、新世界、通天閣まで徒歩７分 、スーパーマーケット、コンビニまで徒歩３分と好立地にあります。"
  }
];

const listsEn = [
  {
    title: "FEMALE ONLY",
    titleSub: "",
    image: "/images/feature-icon-women.png",
    alt: "",
    text: "ECHO HOUSE is set out to ensure the safety of our solo female occupants. CCTV surveillance cameras are installed in the key areas and an automated door lock system at the front door is fully functional."
  },
  {
    title: "WELL-EQUIPPED",
    titleSub: "",
    image: "/images/stay.png",
    alt: "",
    text: "You can start your new life as early as your move-in day. ECHO HOUSE is equipped with common amenities – kitchen, laundry, TV, Wi-Fi, air conditioner, etc. The cleaning services in the communal areas is done twice a week and free of charge."
  },
  {
    title: "ACCESSIBLE LOCATION",
    titleSub: "",
    image: "/images/price.png",
    alt: "",
    text: "Within walking distance of the train station, supermarket, convenience store, and tourist destinations in the Kansai Region. ECHO HOUSE is a convenient choice for those who want quick access to the retro areas of Shinsekai and Dotonbori."
  },
  {
    title: "GOOD PRICE",
    titleSub: "",
    image: "/images/support.png",
    alt: "",
    text: "Rental fee includes all the chargeable payments for all amenities – heating, cable TV, water, electricity, internet, etc."
  },
  {
    title: "SUPPORT SYSTEM",
    titleSub: "",
    image: "/images/location.png",
    alt: "",
    text: "We help in the challenges that you may face during your travel or upon your relocation such as processing your registration at the municipal offices, opening a bank account, getting a cellphone contract, etc."
  },
  {
    title: "CULTURE DIVERSITY",
    titleSub: "",
    image: "/images/location.png",
    alt: "",
    text: "As our society becomes more diverse, we welcome and support all cultural diffusions and all religious backgrounds. ECHO HOUSE have arranged two separate halal-certified and non halal kitchens."
  }
];

const Feature = () => {
  const pathname = usePathname();
  const lists = pathname.includes("eng") ? en : ja;

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
                    {!pathname.includes("eng") && <span className="font-accent text-xs">{item.titleSub}</span>}
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
