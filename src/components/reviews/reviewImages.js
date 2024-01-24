import Image from "next/image";

const ReviewImages = ({ image1, image2, image3 }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:flex-wrap">
        {image1 && (
          <p className="w-full">
            <Image src={image1} width="236" height="236" alt="" className="h-full w-full object-cover" />
          </p>
        )}

        {image2 && (
          <p className="w-full">
            <Image src={image2} width="236" height="236" alt="" className="h-full w-full object-cover" />
          </p>
        )}

        {image3 && (
          <p className="w-full">
            <Image src={image3} width="236" height="236" alt="" className="h-full w-full object-cover" />
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewImages;
