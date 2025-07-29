import { Result } from '@/types';
import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

type Type =  "movie" | "tv"

const Card = ({ item, type, loading, genre }: { item: Result, genre: number, type: Type, loading: boolean }) => {
  function refresh(type: string, genre: number, item: Result){
    if(type === 'movie'){
       window.location.href = `/genre/${genre}/movie/${item.id}`;
    }else{
      window.location.href = `/genre/${genre}/series/${item.id}`;
    }
  }

  console.log(item)

  return (
    <div onClick={() => refresh(type, genre, item)}
      className="relative flex flex-col gap-2 cursor-pointer group"
    >
      <div className="text-white text-[1.2rem] bg-red-500 absolute top-2 right-2 rounded-md py-1 px-2 z-10">
        {item.vote_average.toFixed(1)}
      </div>

      <div className="relative">
        {loading ? <Skeleton className='h-[20rem] w-full' /> : <Image
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={type === 'movie' ? item.title : item.name}
          width={500}
          height={500}
          quality={100}
          className="rounded-xl w-full lg:h-auto h-[25rem] object-cover"
        />}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-xl" />
      </div>

        <h2 className='text-[1.2rem]'>{type === 'movie' ? item.title : item.name}</h2>
    </div>
  )
}

export default Card
