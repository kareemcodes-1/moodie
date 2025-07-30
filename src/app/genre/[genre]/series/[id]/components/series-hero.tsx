"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Result, Video } from "@/types";
import PlayButton from "../../../../../components/play-button";

type Props = {
  result: Result;
  videos: Video[];
};

const SeriesHero = ({ result, videos }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const trailer = videos.find(
  (v) => v.type === "Trailer" && v.site === "YouTube"
);


  if (isPlaying && trailer) {
    return (
      <div className="relative w-full h-[40rem] md:h-[30rem] lg:h-[100vh]">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
          title={result.name}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <img
        src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${result.backdrop_path}`}
        alt={result.name}
        className="w-full object-cover h-[40rem] md:h-[30rem] lg:h-[100vh]"
      />
     <div className=" bg-[#0000005c] absolute lg:top-[0rem] bottom-[0rem] w-full lg:h-[100vh] h-[40rem]" />



      <div className="absolute lg:bottom-[4.5rem] bottom-0 left-4 w-[90%] pb-[1rem]">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            alt={result.name}
            className="lg:block hidden w-[8rem] md:w-[10rem] rounded-lg object-cover"
            width={500}
            quality={100}
            height={500}
          />

          <div className="text-white max-w-full md:max-w-[60%] flex flex-col gap-3">
            <h2 className="text-[2.5rem] md:text-3xl lg:text-5xl font-extrabold">
              {result.name}
            </h2>
            <p className="text-sm md:text-base text-gray-200">
              {new Date(result.first_air_date).getFullYear()} •{" "}
              {result.episode_run_time} mins
            </p>
            <p className="text-sm md:text-base">{result.overview}</p>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mt-2">
              {result.genres.slice(0, 3)?.map((genre, index: number) => (
                <span
                  key={index}
                  className="bg-black/40 px-3 py-[.7rem] rounded-md text-sm backdrop-blur-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

                   <div className="lg:absolute bottom-[2rem] right-[-5rem] cursor-pointer">
        <PlayButton onClick={() => setIsPlaying(true)} />
      </div>

            {/* Production companies */}
            <div className="lg:flex hidden flex-wrap items-center gap-3 mt-2">
              {result.production_companies?.map((company, index: number) =>
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
  );
};

export default SeriesHero;
