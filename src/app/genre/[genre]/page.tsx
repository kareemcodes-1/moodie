'use client';

import React, { useEffect, useState } from 'react';
import { getGenre } from '@/app/actions';
import Card from '@/app/components/card';
import { useParams } from 'next/navigation';
import { Result } from '@/types';

const GenrePage = () => {
  const [mediaType, setMediaType] = useState<"movie" | "tv">("movie");
  const [language, setLanguage] = useState<string | undefined>();
  const [items, setItems] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const genre = params.genre



  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const results = await getGenre(Number(genre), mediaType, language);
        setItems(results);
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    }

    fetchData();
  }, [params.genre, mediaType, language]);

  const setFilter = ({
    type,
    lang,
  }: {
    type: "movie" | "tv";
    lang?: string;
  }) => {
    setMediaType(type);
    setLanguage(lang);
  };

  return (
    <section className="mx-[2rem] mt-[6rem] mb-[2rem]">
      {/* Filter Buttons */}
      <nav className="flex items-center gap-[.5rem] border justify-center w-fit mx-auto my-[2rem] h-[3rem] rounded-lg">
        <button
          onClick={() => setFilter({ type: "movie" })}
          className={`p-[.7rem] text-[1rem] rounded-[.5rem] cursor-pointer ${
            mediaType === "movie" && !language
              ? "bg-red-500 text-white"
              : "hover:bg-red-500 hover:text-white text-black"
          }`}
        >
          Movies
        </button>
        <button
          onClick={() => setFilter({ type: "tv" })}
          className={`p-[.7rem] text-[1rem] rounded-[.5rem] cursor-pointer ${
            mediaType === "tv" && !language
              ? "bg-red-500 text-white"
              : "hover:bg-red-500 hover:text-white text-black"
          }`}
        >
          TV Series
        </button>
        <button
          onClick={() => setFilter({ type: "tv", lang: "ja" })}
          className={`p-[.7rem] text-[1rem] rounded-[.5rem] cursor-pointer ${
            language === "ja"
              ? "bg-red-500 text-white"
              : "hover:bg-red-500 hover:text-white text-black"
          }`}
        >
          Anime
        </button>
        <button
          onClick={() => setFilter({ type: "tv", lang: "ko" })}
          className={`p-[.7rem] text-[1rem] rounded-[.5rem] cursor-pointer ${
            language === "ko"
              ? "bg-red-500 text-white"
              : "hover:bg-red-500 hover:text-white text-black"
          }`}
        >
          K-Drama
        </button>
      </nav>

      {/* Items Grid */}
      <div className="grid md:grid-cols-5 gap-[1.5rem] mt-[2rem]">
        {items && items.length > 0 && (
          items.map((item) => (
            <Card loading={loading} genre={Number(genre)} type={mediaType} item={item} key={item.id} />
          ))
        )}
      </div>
    </section>
  );
};

export default GenrePage;
