import Image from "next/image";
import RoomSlider from "./roomSlider";
import SectionHeading from "@/components/common/sectionHeading";
import FacilitySlider from "./facilitySlider";
import AreaSlider from "./areaSlider";
import Button from "@/components/common/button";
import { FadeInBottom } from "@/components/common/FadeInBottom";

const rooms = [
  {
    name: "スタンダードタイプ",
    area: "専有面積 / 7.5㎡",
    text: "賃料（共益費等込み）",
    slides: {
      thumbs: "true",
      images: [
        { image: "/images/ps1.jpg", alt: "" },
        { image: "/images/ps2.jpg", alt: "" },
        { image: "/images/as1.png", alt: "" },
        { image: "/images/as2.png", alt: "" },
        { image: "/images/as3.png", alt: "" },
        { image: "/images/as5.jpg", alt: "" },
        { image: "/images/as6.jpg", alt: "" },
        { image: "/images/as7.jpg", alt: "" },
        { image: "/images/as8.jpg", alt: "" },
        { image: "/images/as9.jpg", alt: "" }
      ]
    },
    price: [
      { th: "１名", td: "￥45,000" },
      { th: "２名", td: "￥50,000" }
    ],
    facilities: {
      heading: "付属設備",
      items: [
        { title: "WiFi", image: "/images/wifi.png", alt: "" },
        { title: "エアコン", image: "/images/aircon.png", alt: "" },
        { title: "冷蔵庫", image: "/images/fridge.png", alt: "" },
        { title: "寝具", image: "/images/bedseet.png", alt: "" }
      ]
    }
  },
  {
    name: "デラックスタイプ",
    area: "専有面積 / 14.4㎡",
    text: "賃料（共益費等込み）",
    slides: {
      thumbs: "true",
      images: [
        { image: "/images/ad1.jpg", alt: "" },
        { image: "/images/ad2.jpg", alt: "" },
        { image: "/images/ad3.jpg", alt: "" },
        { image: "/images/ad4.jpg", alt: "" },
        { image: "/images/ad5.jpg", alt: "" }
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
        { title: "WiFi", image: "/images/wifi.png", alt: "" },
        { title: "エアコン", image: "/images/aircon.png", alt: "" },
        { title: "冷蔵庫", image: "/images/fridge.png", alt: "" },
        { title: "寝具", image: "/images/bedseet.png", alt: "" },
        { title: "二段ベッド", image: "/images/bed.png", alt: "" }
      ]
    }
  }
];

const facilities = [
  {
    slides: {
      images: [
        { image: "/images/f1.jpg", alt: "" },
        { image: "/images/f2.jpg", alt: "" },
        { image: "/images/f3.jpg", alt: "" },
        { image: "/images/f4.jpg", alt: "" },
        { image: "/images/f5.jpg", alt: "" },
        { image: "/images/f6.jpg", alt: "" },
        { image: "/images/f7.jpg", alt: "" },
        { image: "/images/af2.png", alt: "" },
        { image: "/images/af2.png", alt: "" }
      ]
    },
    facilities: {
      heading: "共有スペース付属設備",
      items: [
        { title: "テレビ", image: "/images/television.png", alt: "" },
        { title: "洗濯機", image: "/images/laundry.png", alt: "" },
        { title: "キッチン", image: "/images/kitchen.png", alt: "" },
        { title: "トイレ", image: "/images/toilet.png", alt: "" },
        { title: "シャワー", image: "/images/shower.png", alt: "" }
      ]
    }
  }
];

const areas = [
  {
    slides: {
      images: [
        { image: "/images/drawing1.png", alt: "" },
        { image: "/images/drawing2.png", alt: "" },
        { image: "/images/drawing3.png", alt: "" }
      ]
    }
  }
];

const views = [
  {
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1593234125929!6m8!1m7!1sCAoSLEFGMVFpcE9zUjV1aWtfWWVxYU1TVjRqdWJwSWd5UUV6dURDa0d0NElvYjRo!2m2!1d34.649372659362!2d135.49857663737!3f260!4f0!5f0.7820865974627469",
    text: "1階"
  },
  {
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1704460405405!6m8!1m7!1sCAoSLEFGMVFpcE1lM0hqRmY4TkNuUnEtb3ZkY3RINHItdW50NlZwRTEyTkR0Q2s2!2m2!1d34.64938092999!2d135.49857533559!3f6.254375479874511!4f11.427934900820162!5f0.4000000000000002",
    text: "1階"
  },
  {
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1593234166002!6m8!1m7!1sCAoSLEFGMVFpcE90b0hYNDRBSU4xRWZrNVBtY0xvZ2tKMEdOaFdfUGlJeG51ZjFx!2m2!1d34.649380991712!2d135.49856729395!3f20!4f10!5f0.7820865974627469",
    text: "スタンダードタイプルーム"
  },
  {
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1593234196098!6m8!1m7!1sCAoSLEFGMVFpcFBZV0lEWWJDa3UxYUROdGg3bWRaUDc1ck5UejhaZVZMckdjVWc1!2m2!1d34.64935092323!2d135.49856509032!3f300!4f10!5f0.7820865974627469",
    text: "デラックスタイプルーム"
  },
  {
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1593234263397!6m8!1m7!1sCAoSLEFGMVFpcFBpMm9Kb2tiU2owWmY1bE5qbEU5ZWpBZ09yTjNTVlVjQU1ualBk!2m2!1d34.649388822148!2d135.49857077065!3f166.9787903590709!4f-1.2551631472148301!5f0.7820865974627469",
    text: "屋上スペース"
  }
];

const Room = () => {
  return (
    <FadeInBottom>
      <section id="room">
        <SectionHeading titleJp="お部屋案内" titleEn="Room" />
        <div className="mx-auto max-w-[1200px]">
          {rooms.map((item, index) => (
            <div className="md:grid md:grid-cols-2" key={index}>
              <div className="pb-8">
                <RoomSlider props={item.slides} />
              </div>
              <div className="px-4 pb-16">
                {item.name && <h3 className="text-xl font-bold md:text-2xl">{item.name}</h3>}
                {item.area && <p className="mt-4 border-b border-gray-100 pb-2 text-sm">{item.area}</p>}
                {item.text && <p className="mt-2 md:mt-8">{item.text}</p>}
                {item.price && (
                  <table className="mt-8 w-full text-sm">
                    <tbody>
                      {item.price.map((item, index) => (
                        <tr key={index}>
                          <th className="border border-black bg-gray-200 p-4 text-center">{item.th}</th>
                          <td className="border border-black p-4 text-center">{item.td}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <p className="mt-4 md:mt-8">{item.facilities.heading}</p>
                <ul className="mt-4 flex justify-between gap-4 rounded-lg bg-gray-200 p-8 md:gap-2 md:px-16">
                  {item.facilities.items.map((item) => (
                    <li className="flex flex-col items-center justify-center" key={item.title}>
                      <p className="md:w-12">
                        <Image src={item.image} alt={item.alt} width="22" height="22" className="w-full" />
                      </p>
                      <p className="text-xs md:text-xl">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {facilities.map((item, index) => (
            <div key={index}>
              <FacilitySlider props={item.slides} />
              <div className="px-4 pb-16 md:mx-auto md:max-w-[80%]">
                <p>{item.facilities.heading}</p>
                <ul className="mt-4 flex justify-between gap-4 rounded-lg bg-gray-200 p-8 md:gap-2 md:px-16">
                  {item.facilities.items.map((item) => (
                    <li className="flex flex-col items-center justify-center" key={item.title}>
                      <p className="md:w-12">
                        <Image src={item.image} alt={item.alt} width="22" height="22" className="w-full" />
                      </p>
                      <p className="text-xs md:text-xl">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="area">
            {areas.map((item, index) => (
              <AreaSlider props={item.slides} key={index} />
            ))}

            <p className="mt-8 inline-block bg-gradient-green px-4 py-3 text-white-100">3Dビュー探索</p>
            <ul className="mt-8 flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:gap-4">
              {views.map((item, index) => (
                <li className="d-list-img relative rounded-md border border-gray-300 md:w-[48%]" key={index}>
                  <iframe className="w-full" src={item.iframe} width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                  <p className="hover-mask-text mt-4 border-t border-gray-300 p-2">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="my-16">
              <Button
                title="View more"
                href="https://www.google.com/maps/place/ECHO+HOUSE+%E3%81%8A%E3%81%8A%E3%81%95%E3%81%8B/@34.6493192,135.4985942,3a,75y,22.5h,90t/data=!3m7!1e1!3m5!1snZ3ERsOPeVQpVpEbC7kuiA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DnZ3ERsOPeVQpVpEbC7kuiA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D22.499214%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m18!1m8!3m7!1s0x6000e762e33f75d7:0xd4998f0f5640fb6a!2zRUNITyBIT1VTRSDjgYrjgYrjgZXjgYs!8m2!3d34.6493719!4d135.49862!10e5!16s%2Fg%2F1tfk49xr!3m8!1s0x6000e762e33f75d7:0xd4998f0f5640fb6a!8m2!3d34.6493719!4d135.49862!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F1tfk49xr?authuser=0&entry=ttu"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>
    </FadeInBottom>
  );
};

export default Room;
