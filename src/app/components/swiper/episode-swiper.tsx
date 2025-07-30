import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Episode } from '@/types';


const EpisodeSwiper = ({episodes}: {episodes: Episode[]}) => {

  return (
    <Swiper
        modules={[Virtual, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
        centeredSlides={false}
        spaceBetween={30}
        navigation={false}
        virtual
      >
        {episodes?.map((episode, index) => (
          <SwiperSlide key={episode.name} virtualIndex={index}>
              {episode.still_path !== null ? <img src={`https://media.themoviedb.org/t/p/w227_and_h127_bestv2${episode.still_path}`} alt={episode.name} className='w-full h-full object-cover rounded-[.5rem]'/> :  <div className="skeleton h-[7.8rem] w-full"></div>}
              <h2 className='font-bold mt-[.3rem]'>Episode {episode.episode_number} - <span className='text-gray-400'>{episode.runtime}m</span></h2>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default EpisodeSwiper