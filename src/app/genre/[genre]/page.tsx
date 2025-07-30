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
  const [page, setPage] = useState(1);
  const genre = params.genre



  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const results = await getGenre(Number(genre), mediaType, language, 1);
        setItems(results);
        setPage(1);
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

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const moreResults = await getGenre(Number(genre), mediaType, language, nextPage);
      setItems((prevItems) => [...prevItems, ...moreResults]);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lg:mx-[2rem] mx-[1rem] mt-[6rem] mb-[2rem]">
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
            Series
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
          <span className='lg:hidden block'>Korean</span> <span className='lg:block hidden'>K-Drama</span>
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

      {items.length > 0 && (
        <div className="flex justify-center mt-[2rem]">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default GenrePage;
