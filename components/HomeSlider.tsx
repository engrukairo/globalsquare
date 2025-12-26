"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HomeSlider() {
  const images = [
    "/images/home-slider-1.jpg",
    // '/images/home-slider-2.jpg',
    "/images/home-slider-3.jpg",
    // '/images/home-slider-4.jpg',
    "/images/home-slider-5.jpg",
    "/images/home-slider-6.jpg",
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      style={{ width: "100%", maxWidth: "100%" }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      // loopedSlides={images.length}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div style={{ position: "relative" }}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              // fill
              width={1920}
              height={600}
              style={{
                objectFit: "cover",
                borderRadius: "15px",
                width: "100%",
                height: "auto",
              }}
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
