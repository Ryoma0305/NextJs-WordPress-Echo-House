import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import roomsEn from "../../../locals/top/room/rooms/en";
import roomsJa from "../../../locals/top/room/rooms/ja";
import facilitiesEN from "../../../locals/top/room/facilities/en";
import facilitiesJa from "../../../locals/top/room/facilities/ja";
import viewsEN from "../../../locals/top/room/views/en";
import viewsJa from "../../../locals/top/room/views/ja";
import clsx from "clsx";
import RoomSlider from "./roomSlider";
import SectionHeading from "../../common/SectionHeading";
import FacilitySlider from "./facilitySlider";
import AreaSlider from "./areaSlider";
import Button from "../../common/Button";
import Modal from "../../common/modal";
import { FadeInBottom } from "../../common/FadeInBottom";

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

const Room = () => {
  const { locale } = useRouter();
  const facilities = locale === "en" ? facilitiesEN : facilitiesJa;
  const rooms = locale === "en" ? roomsEn : roomsJa;
  const views = locale === "en" ? viewsEN : viewsJa;

  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <FadeInBottom>
      <section id="room">
        <SectionHeading titleJp="お部屋案内" titleEn="Room" />
        <div className="mx-auto max-w-[1200px]">
          {rooms.map((item, index) => (
            <div className="md:grid md:grid-cols-2" key={index}>
              <div className="pb-8">
                <RoomSlider slides={item.slides} openModal={openModal} />
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
                <ul className="mt-4 flex justify-evenly gap-4 rounded-lg bg-gray-200 p-8 px-4 md:gap-2 md:px-8">
                  {item.facilities.items.map((item) => (
                    <li className="flex flex-col items-center justify-center" key={item.title}>
                      <p className="w-8">
                        <Image src={item.image} alt={item.alt} width="22" height="22" className="w-full" />
                      </p>
                      <p
                        className={clsx("text-xs", {
                          "md:text-lg": locale === "ja",
                          "md:text-base": locale === "en"
                        })}
                      >
                        {item.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {facilities.map((item, index) => (
            <div key={index}>
              <FacilitySlider slides={item.slides} openModal={openModal} />
              <div className="px-4 pb-16 md:mx-auto md:max-w-[80%]">
                <p>{item.facilities.heading}</p>
                <ul className="mt-4 flex justify-evenly gap-4 rounded-lg bg-gray-200 p-8 px-4 md:gap-2 md:px-16">
                  {item.facilities.items.map((item) => (
                    <li className="flex flex-col items-center justify-center" key={item.title}>
                      <p className="w-8">
                        <Image src={item.image} alt={item.alt} width="22" height="22" className="w-full" />
                      </p>
                      <p className="text-xs md:text-lg">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div>
            {areas.map((item, index) => (
              <AreaSlider slides={item.slides} key={index} openModal={openModal} />
            ))}

            <p className="mt-8 inline-block bg-gradient-green px-4 py-3 text-white-100">{locale === "ja" ? "3Dビュー探索" : "3D View"}</p>
            <ul className="mt-8 flex flex-col items-center px-4 md:flex-row md:flex-wrap md:items-start md:gap-4 md:px-0">
              {views.map((item, index) => (
                <li className="relative mt-4 w-full rounded-md border border-gray-300 md:mt-0 md:w-[48%]" key={index}>
                  <iframe className="w-full" src={item.iframe} width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>
                  <p className="border-t border-gray-300 p-2 md:mt-4">{item.text}</p>
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
      {modalImage && <Modal modalImage={modalImage} closeModal={closeModal} />}
    </FadeInBottom>
  );
};

export default Room;
