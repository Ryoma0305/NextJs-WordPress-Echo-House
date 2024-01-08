import { FadeInBottom } from "@/components/common/FadeInBottom";
import SectionHeading from "@/components/common/sectionHeading";
import Image from "next/image";

const lists = [
  { titleJp: "女性専用", titleEn: "FEMALE ONLY", image: "/images/feature-icon-women.png", alt: "", text: "入居者は女性の方のみですので、安心して生活して頂けます。" },
  { titleJp: "すぐに生活が始められる", titleEn: "WELL-EQUIPPED", image: "/images/stay.png", alt: "", text: "ベッド、寝具、家電等が充実しているので入居後即、快適な生活が始められます。" },
  {
    titleJp: "コストパフォーマンス",
    titleEn: "GOOD PRICE",
    image: "/images/price.png",
    alt: "",
    text: "初期費用、敷金、礼金は不要です。家賃は電気代、水道代等の共益費、Wi-Fi等すべて込みで￥4,5000～から入居可能です。"
  },
  {
    titleJp: "安心のサポート体制",
    titleEn: "SUPPORT",
    image: "/images/support.png",
    alt: "",
    text: "シェアハウスでの生活や知らない土地での暮らしに不安な方でも在駐スタッフが生活をサポートします。"
  },
  {
    titleJp: "好立地",
    titleEn: "GOOD LOCATION",
    image: "/images/location.png",
    alt: "",
    text: "JR新今宮駅、南海新今宮駅、大阪メトロ動物園前（御堂筋線、堺筋線）まで徒歩５分、新世界、通天閣まで徒歩７分 、スーパーマーケット、コンビニまで徒歩３分と好立地にあります。"
  }
];

const Feature = () => {
  return (
    <FadeInBottom>
      <section className="feature section-padding bg-white-200 px-4 py-16" id="features">
        <div className="mx-auto max-w-[1284px]">
          <SectionHeading titleJp="エコーハウスの特徴" titleEn="Feature" />
          <ul className="feature-listwrap flex flex-col gap-16 md:flex-row md:flex-wrap md:justify-center md:gap-x-4">
            {lists.map((item) => (
              <li className="feature-list flex flex-col items-center md:w-[30%] md:px-10" key={item.titleEn}>
                <p className="feature-list-icon">
                  <Image src={item.image} alt={item.alt} width="60" height="60" />
                </p>
                <div className="feature-list-titlewrap mt-2 flex justify-center text-center md:items-center">
                  <p className="feature-list-title-text mt-3 flex flex-col items-center text-center">
                    <span className="text-xl font-bold">{item.titleJp}</span>
                    <span className="feature-list-title-sub font-accent text-xs">{item.titleEn}</span>
                  </p>
                </div>
                <p className="feature-list-text mt-4 text-center">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </FadeInBottom>
  );
};

export default Feature;
