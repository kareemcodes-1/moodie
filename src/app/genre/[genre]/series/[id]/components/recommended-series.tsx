import Card from '@/app/components/card'
import { Result } from '@/types'
import React from 'react'

const RecommendedSeries = ({recommendedSeries, params}: {recommendedSeries: Result[], params: {id: string, genre: number}}) => {
  return (
    <div className="flex flex-col gap-4 mt-[4rem]">
          <h2 className="lg:text-[1.7rem] text-[1.5rem] font-bold">Recommended Series</h2>
          <div className="flex flex-col sm:grid-cols-3 md:grid-cols-4 lg:grid grid-cols-4 gap-4">
            {recommendedSeries.map((item, index: number) => (
              <Card genre={Number(params.genre)} loading={false} type={"tv"} key={index} item={item} />
            ))}
          </div>
        </div>
  )
}

export default RecommendedSeries