import React from "react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const desktopImages = import.meta.glob(
  "/src/assets/carousel/desktop/*.{jpg,jpeg,png,svg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const tabImages = import.meta.glob(
  "/src/assets/carousel/tab/*.{jpg,jpeg,png,svg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const imageListD = Object.values(desktopImages);
const imageListT = Object.values(tabImages);

const Hero = () => {
  const swiperProps = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Autoplay, EffectFade, Pagination, Navigation],
    className: "mySwiper",
  };

  return (
    <div>
      {/* Tablet/Mobile Swiper */}
      <div className="block md:hidden">
        <Swiper {...swiperProps}>
          {imageListT.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Tab ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Swiper */}
      <div className="hidden md:block w-full">
        <Swiper {...swiperProps}>
          {imageListD.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Desktop ${idx + 1}`}
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;