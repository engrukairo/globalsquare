"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Cooking Essentials", icon: "/images/part-1.png" },
  { name: "Biscuits & Cakes", icon: "/images/part-1.png" },
  { name: "Household Tools", icon: "/images/part-1.png" },
  { name: "Pet Care", icon: "/images/part-1.png" },
  { name: "Beauty & Healths", icon: "/images/part-1.png" },
  { name: "Jam & Jelly", icon: "/images/part-1.png" },
  { name: "Milk & Dairy", icon: "/images/part-1.png" },
  { name: "Drinks", icon: "/images/part-1.png" },
  { name: "Breakfast", icon: "/images/part-1.png" },
];

export default function CategorySlider() {
  return (
    <div className="relative w-full px-10">
      {/* Left Arrow */}
      <button className="category-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-green-500 text-white w-9 h-9 rounded-full shadow hover:bg-green-600">
        <i className="fa fa-chevron-left"></i>
      </button>

      {/* Right Arrow */}
      <button className="category-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-green-500 text-white w-9 h-9 rounded-full shadow hover:bg-green-600">
        <i className="fa fa-chevron-right"></i>
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        slidesPerView="auto"
        spaceBetween={16}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".category-prev",
          nextEl: ".category-next",
        }}
        className="!px-2"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index} className="!w-[160px] sm:!w-[176px]">
            <div className="bg-white rounded-xl shadow flex flex-col items-center py-6 transition hover:scale-105 my-2">
              <div className="w-12 h-12 mb-3 relative">
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 text-center px-2">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
