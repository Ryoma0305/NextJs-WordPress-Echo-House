import { useState } from "react";
import Image from "next/image";
// import Modal from "../common/modal";

const ReviewImages = ({ image1, image2, image3 }) => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-between">
        {image1 && (
          <p className="w-full md:w-[30%]" onClick={() => openModal(image1)}>
            <Image src={image1} width="236" height="236" alt="" className="h-full w-full object-cover" />
          </p>
        )}

        {image2 && (
          <p className="w-full md:w-[30%]" onClick={() => openModal(image2)}>
            <Image src={image2} width="236" height="236" alt="" className="h-full w-full object-cover" />
          </p>
        )}

        {image3 && (
          <p className="w-full md:w-[30%]" onClick={() => openModal(image3)}>
            <Image src={image3} width="236" height="236" alt="" className="h-full w-full object-cover" />
          </p>
        )}
      </div>
      {/* <Modal modalImage={modalImage} closeModal={closeModal} /> */}
    </div>
  );
};

export default ReviewImages;
