import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const ReviewSlider = ({ reviews }: { reviews: Array<any> }) => {
  return (
    <div className="mt-8">
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 8
          }
        }}
        modules={[Autoplay]}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        className="md:h-[13rem]"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id} className="px-4">
            <Link href={`/reviews/${item.slug}`} className="flex flex-col">
              <div className="order-2 mt-2 flex flex-col items-center gap-2">
                <p className="text-xl">{item.reviews.name}</p>
                <p className="text-center text-sm">{item.reviews.reviewTitle}</p>
              </div>
              <p className="order-1 flex justify-center">
                <Image src={item.reviews.reviewerImg?.sourceUrl} width="72" height="72" alt="" />
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
