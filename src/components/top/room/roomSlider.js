import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function RoomSlider({ props }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="room-images-wrap pb-8">
      <Swiper spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[FreeMode, Navigation, Thumbs]}>
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.image} width="431" height="324" alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      {props.thumbs && (
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}>
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.image} width="108" height="81" alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import Image from "next/image";
// import { Navigation, Pagination, Thumbs, Scrollbar, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const images = [
//   { href: "/images/ps1.jpg", alt: "スタンダードタイプルームの画像" },
//   { href: "/images/ps2.jpg", alt: "スタンダードタイプルームの画像" },
//   { href: "/images/as2.png", alt: "スタンダードタイプルームの画像" },
//   { href: "/images/as2.png", alt: "スタンダードタイプルームの画像" }
// ];

// const RoomSlider = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="room-images-wrap">
//       <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} spaceBetween={50} slidesPerView={3}>
//         {images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Image src={item.href} alt={item.alt} width="430" height="324" />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Swiper modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper} spaceBetween={50} slidesPerView={3}>
//         {images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Image src={item.href} alt={item.alt} width="430" height="324" />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <ul className="room-img-wrap">
//         {/* <li className="room-img">
//           <a href="<?php echo get_template_directory_uri() ?>/images/ps1.jpg" data-rel="lightcase:room-s">
//             <Image src="/images/ps1.jpg" alt="スタンダードタイプルームの画像" />
//           </a>
//         </li> */}
//         {/* <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/ps1.jpg" data-rel="lightcase:room-s">
//                   <img src="<?php echo get_template_directory_uri() ?>/images/ps1.jpg" alt="スタンダードタイプルームの画像">
//                 </a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/ps2.jpg" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/ps2.jpg" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as1.png" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as1.png" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as2.png" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as2.png" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as3.png" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as3.png" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as5.jpg" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as5.jpg" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as6.jpg" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as6.jpg" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as7.jpg" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as7.jpg" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as8.jpg" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as8.jpg" alt="スタンダードタイプルームの画像"></a>
//               </li>
//               <li className="room-img">
//                 <a href="<?php echo get_template_directory_uri() ?>/images/as9.jpg" data-rel="lightcase:room-s"><img src="<?php echo get_template_directory_uri() ?>/images/as9.jpg" alt="スタンダードタイプルームの画像"></a>
//               </li> */}
//       </ul>
//       <ul className="room-thumnail">
//         {/* <li className="room-thumnail-img">
//           <Image src="/images/ps1.jpg" alt="スタンダードタイプルームの画像" />
//         </li> */}
//         {/* <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/ps1.jpg" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/ps2.jpg" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as1.png" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as2.png" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as3.png" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as5.jpg" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as6.jpg" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as7.jpg" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as8.jpg" alt="スタンダードタイプルームの画像">
//               </li>
//               <li className="room-thumnail-img">
//                 <img src="<?php echo get_template_directory_uri() ?>/images/as9.jpg" alt="スタンダードタイプルームの画像">
//               </li> */}
//       </ul>
//     </div>
//   );
// };

// export default RoomSlider;
