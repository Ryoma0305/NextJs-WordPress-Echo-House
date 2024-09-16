import slideImg1 from "../../../../../public/images/ps1.webp";
import slideImg2 from "../../../../../public/images/ps2.webp";
import slideImg3 from "../../../../../public/images/as1.png";
import slideImg4 from "../../../../../public/images/as2.png";
import slideImg5 from "../../../../../public/images/as3.png";
import slideImg6 from "../../../../../public/images/as5.webp";
import slideImg7 from "../../../../../public/images/as6.webp";
import slideImg8 from "../../../../../public/images/as7.webp";
import slideImg9 from "../../../../../public/images/as8.webp";
import slideImg10 from "../../../../../public/images/as9.webp";
import slideImg11 from "../../../../../public/images/ad1.webp";
import slideImg12 from "../../../../../public/images/ad2.webp";
import slideImg13 from "../../../../../public/images/ad3.webp";
import slideImg14 from "../../../../../public/images/ad4.webp";
import slideImg15 from "../../../../../public/images/ad5.webp";
import facilityImg1 from "../../../../../public/images/wifi.png";
import facilityImg2 from "../../../../../public/images/aircon.png";
import facilityImg3 from "../../../../../public/images/fridge.png";
import facilityImg4 from "../../../../../public/images/bedseet.png";
import facilityImg5 from "../../../../../public/images/bed.png";

const roomsJa = [
  {
    name: "スタンダードタイプ",
    area: "専有面積 / 7.5㎡",
    text: "賃料（共益費等込み）",
    slides: {
      images: [
        { image: slideImg1, alt: "" },
        { image: slideImg2, alt: "" },
        { image: slideImg3, alt: "" },
        { image: slideImg4, alt: "" },
        { image: slideImg5, alt: "" },
        { image: slideImg6, alt: "" },
        { image: slideImg7, alt: "" },
        { image: slideImg8, alt: "" },
        { image: slideImg8, alt: "" },
        { image: slideImg9, alt: "" },
        { image: slideImg10, alt: "" }
      ]
    },
    price: [
      { th: "１名", td: "￥45,000" },
      { th: "２名", td: "￥50,000" }
    ],
    facilities: {
      heading: "付属設備",
      items: [
        { title: "WiFi", image: facilityImg1, alt: "" },
        { title: "エアコン", image: facilityImg2, alt: "" },
        { title: "冷蔵庫", image: facilityImg3, alt: "" },
        { title: "寝具", image: facilityImg4, alt: "" }
      ]
    }
  },
  {
    name: "デラックスタイプ",
    area: "専有面積 / 14.4㎡",
    text: "賃料（共益費等込み）",
    slides: {
      images: [
        { image: slideImg11, alt: "" },
        { image: slideImg12, alt: "" },
        { image: slideImg13, alt: "" },
        { image: slideImg14, alt: "" },
        { image: slideImg15, alt: "" }
      ]
    },
    price: [
      { th: "１名", td: "￥55,000" },
      { th: "２名", td: "￥60,000" },
      { th: "３名", td: "￥66,000" },
      { th: "４名", td: "￥70,000" }
    ],
    facilities: {
      heading: "付属設備",
      items: [
        { title: "WiFi", image: facilityImg1, alt: "" },
        { title: "エアコン", image: facilityImg2, alt: "" },
        { title: "冷蔵庫", image: facilityImg3, alt: "" },
        { title: "寝具", image: facilityImg4, alt: "" },
        { title: "二段ベッド", image: facilityImg5, alt: "" }
      ]
    }
  }
];

export default roomsJa;
