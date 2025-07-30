import NavSwiper from '@/app/components/swiper/nav-swiper'
import { Cast } from '@/types'
import React from 'react'

const MoviesCasts = ({casts}: {casts: Cast[]}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold">Top Casts ({casts.length})</h2>
          <NavSwiper casts={casts} />
        </div>
  )
}

export default MoviesCasts