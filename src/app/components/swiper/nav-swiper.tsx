'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function NavSwiper({ casts }: { casts: any[] }) {
  // If cast list is shorter than the number of slides, avoid looping
  const shouldLoop = casts.length > 8;

  return (
    <div className="w-full cursor-grab">
      {/* Large Screen Swiper */}
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
        }}
        spaceBetween={10}
        loop={shouldLoop}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper swiper-lg"
      >
        {casts.map((cast) => (
          <SwiperSlide key={cast.id}>
            <div className="flex flex-col items-start gap-[.5rem]">
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : 'https://via.placeholder.com/150'
                }
                alt={cast.name}
                className="rounded-[.5rem] h-[10rem] w-[10rem] object-cover"
              />
              <h1 className="text-[1rem] text-black text-start">{cast.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Small Screen Swiper (if needed separately) */}
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        spaceBetween={10}
        loop={casts.length > 3}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper swiper-sm mt-4"
      >
        {casts.map((cast) => (
          <SwiperSlide key={cast.id}>
            <div className="flex flex-col items-start gap-[.5rem]">
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : 'https://via.placeholder.com/150'
                }
                alt={cast.name}
                className="rounded-[.5rem] h-[10rem] w-[10rem] object-cover"
              />
              <h1 className="text-[1rem] text-black text-start">{cast.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
