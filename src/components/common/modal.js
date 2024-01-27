import Image from "next/image";

const Modal = ({ modalImage, closeModal }) => {
  return (
    modalImage && (
      <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-50/75" onClick={closeModal}>
        <Image src={modalImage} width="640" height="427" alt="" />
      </div>
    )
  );
};

export default Modal;
