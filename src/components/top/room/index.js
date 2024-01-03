import Link from "next/link";
import Image from "next/image";
import RoomSlider from "./roomSlider";
import SectionHeading from "@/components/common/sectionHeading";

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
        { image: "/images/as2.png", alt: "" }
      ]
    },
    price: [
      { th: "１名", td: "￥45,000" },
      { th: "２名", td: "￥50,000" }
    ],
    facilities: [
      { title: "WiFi", image: "/images/wifi.png", alt: "" },
      { title: "エアコン", image: "/images/aircon.png", alt: "" },
      { title: "冷蔵庫", image: "/images/fridge.png", alt: "" },
      { title: "寝具", image: "/images/bedseet.png", alt: "" }
    ]
  }
];

const Room = () => {
  return (
    <section className="room section-padding">
      <SectionHeading titleJp="お部屋案内" titleEn="Room" />
      <div className="room-imageswrap">
        {rooms.map((item, index) => (
          <div className="room-flexwrap room-flexwrap1" key={index}>
            <div className="room-images-wrap pb-8">
              <RoomSlider props={item.slides} />
            </div>
            <div className="room-inforwrap inner px-4 pb-16">
              <h3 className="room-type-title text-xl">{item.name}</h3>
              <p className="room-type-area mt-4 border-b border-gray-100 pb-2 text-sm">{item.area}</p>
              <p className="price-title mt-2">{item.text}</p>
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

              <p className="room-facility-title mt-4">付属設備</p>

              <ul className="facility-icon-wrap mt-4 flex justify-between gap-4 rounded-lg bg-gray-200 p-8">
                {item.facilities.map((item) => (
                  <li className="facility-icon-list flex flex-col items-center justify-center" key={item.title}>
                    <p className="facility-icon">
                      <Image src={item.image} alt={item.alt} width="22" height="22" />
                    </p>
                    <p className="facility-icon-text text-xs">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Room;
