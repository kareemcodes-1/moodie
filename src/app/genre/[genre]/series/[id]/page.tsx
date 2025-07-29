'use client';

import { getGenre, getMovie, getTV } from '@/app/actions';
import { FaDownload, FaPlay, FaShare } from "react-icons/fa";
import React, { use } from 'react';
import NavSwiper from '@/app/components/swiper/nav-swiper';
import Card from '@/app/components/card';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Cast, Result } from '@/types';

const SeriesPage = () => {
  const params = useParams();
  const { result, casts }: { result: Result; casts: Cast[] }  = use(getTV(Number(params.id)));
  const recommendedSeries: Result[] = use(getGenre(result.genres[0].id, "tv"));

  return (
    <>
      {/* Backdrop image */}
      <div className="relative">
        <Image
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${result.backdrop_path}`}
          alt={result.original_title}
          className="w-full object-cover h-[25rem] md:h-[30rem] lg:h-auto"
          width={500}
          height={500}
          quality={100}
        />
        <div className="bg-black absolute bottom-0 w-full h-[20rem] blur-[30rem]" />

        {/* Movie info section */}
        <div className="absolute bottom-4 left-4 w-[90%]">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
            {/* Poster */}
            <Image
              src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              alt={result.title}
              className="lg:block hidden w-[8rem] md:w-[10rem] rounded-lg object-cover"
              width={500}
              quality={100}
              height={500}
            />

            {/* Movie content */}
            <div className="text-white max-w-full md:max-w-[60%] flex flex-col gap-3">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">{result.name}</h2>
              <p className="text-sm md:text-base text-gray-200">
                {new Date(result.first_air_date).getFullYear()} • {result.episode_run_time} mins
              </p>
              <p className="text-sm md:text-base">{result.overview}</p>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mt-2">
                {result.genres?.map((genre: any, index: number) => (
                  <span key={index} className="bg-black/40 px-3 py-[.7rem] rounded-md text-sm backdrop-blur-sm">
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Production companies */}
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {result.production_companies?.map((company: any, index: number) =>
                  company.logo_path ? (
                    <img
                      key={index}
                      src={`https://media.themoviedb.org/t/p/h30/${company.logo_path}`}
                      alt={company.name}
                      className="h-6"
                    />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Casts */}
      <div className="mx-4 mt-8 z-10">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold">Top Casts ({casts.length})</h2>
          <NavSwiper casts={casts} />
        </div>

        {/* Recommended Movies */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold">Recommended</h2>
          <div className="flex flex-col sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recommendedSeries.map((item: any, index: number) => (
              <Card genre={Number(params.genre)} loading={false} type={"tv"} key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SeriesPage;
