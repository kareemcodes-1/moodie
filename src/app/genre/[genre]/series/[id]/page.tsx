
import { getGenre, getTV } from '@/app/actions';
import React from 'react';
import { Cast, Result, Video, VideosResponse } from '@/types';
import SeriesHero from './components/series-hero';
import SeriesCasts from './components/series-casts';
import RecommendedSeries from './components/recommended-series';
import SeriesEpisodes from './components/series-episodes';

const SeriesPage = async ({params}: {params: {id: string, genre: number}}) => {
  const { result, casts, videos}: { result: Result; casts: Cast[], videos: VideosResponse}  = await getTV(Number(params.id));
  const recommendedSeries: Result[] = await getGenre(result.genres[0].id, "tv");

  console.log(result)

  return (
    <>
     <SeriesHero result={result} videos={videos.results}/>

      {/* Casts */}
      <div className="lg:mx-[2rem] mx-[1.5rem] mt-8 ">
        <SeriesCasts casts={casts}/>

      <SeriesEpisodes tvId={Number(params.id)} seasons={result.seasons} />

        {/* Recommended Movies */}
        <RecommendedSeries recommendedSeries={recommendedSeries} params={params} />
      </div>
    </>
  );
};

export default SeriesPage;
