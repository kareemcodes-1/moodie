import Card from '@/app/components/card'
import { Result } from '@/types'
import React from 'react'

const RecommendedMovies = ({recommendedMovies, params}: {recommendedMovies: Result[], params: {id: string, genre: number}}) => {
  return (
    <div className="flex flex-col gap-4">
          <h2 className="lg:text-[1.7rem] text-[1.5rem] font-bold">Recommended Movies</h2>
          <div className="flex flex-col sm:grid-cols-3 md:grid-cols-4 lg:grid grid-cols-4 gap-4">
            {recommendedMovies.map((item, index: number) => (
              <Card type="movie" loading={false} genre={Number(params.genre)} key={index} item={item} />
            ))}
          </div>
        </div>
  )
}

export default RecommendedMovies