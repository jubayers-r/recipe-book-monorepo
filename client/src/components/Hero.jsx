import React, { useState } from "react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

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

// CTA content
const ctaData = [
  {
    title: "Delicious Breakfast Ideas",
    description: "Start your day with our easy and healthy breakfast recipes.",
  },
  {
    title: "Quick Lunch Recipes",
    description: "Tasty meals ready in under 30 minutes.",
  },
  {
    title: "Dinner You’ll Love",
    description: "Hearty dinners for the whole family to enjoy.",
  },
  {
    title: "Fresh Salads & Sides",
    description: "Brighten your table with vibrant side dishes.",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    className: "mySwiper",
  };

  const getCTA = (index) => ctaData[index % ctaData.length];

  const renderCTA = () => {
    const { title, description } = getCTA(activeIndex);
    return (
      <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
      <div className="bg-black/40 text-white p-8 rounded-xl mb-10 mx-4 max-w-2xl text-center shadow-lg pointer-events-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-md md:text-lg mb-6 text-gray-200">
          {description}
        </p>
         <Link to={"/recipes"}>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold  transition duration-300 hover:bg-[#00ed64]">
          See All Recipes
        </button>
        </Link>
      </div>
    </div>
  );
};

  const renderSwiper = (images, isDesktop = false) => (
    <div className={`relative w-full ${isDesktop ? "hidden md:block" : "block md:hidden"}`}>
      <Swiper {...swiperProps}>
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className={`w-full ${isDesktop ? "h-[700px]" : "h-[600px]"} object-cover rounded-2xl md:rounded-3xl`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {renderCTA()}
    </div>
  );

  return (
    <div className="relative my-15">
      {renderSwiper(imageListT)} {/* Tablet / Mobile */}
      {renderSwiper(imageListD, true)} {/* Desktop */}
    </div>
  );
};

export default Hero;
