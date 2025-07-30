import NavSwiper from '@/app/components/swiper/nav-swiper'
import { Cast } from '@/types'
import React from 'react'

const SeriesCasts = ({casts}: {casts: Cast[]}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
          <h2 className="lg:text-[1.7rem] text-[1.5rem] font-bold">Top Casts ({casts.length})</h2>
          <NavSwiper casts={casts} />
    </div>
  )
}

export default SeriesCasts