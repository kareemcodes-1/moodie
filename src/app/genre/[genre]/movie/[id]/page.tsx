

import { getGenre, getMovie } from '@/app/actions';
import React from 'react';
import { Cast, Result, VideosResponse } from '@/types';
import MoviesHero from './components/movie-hero';
import MoviesCasts from './components/movie-casts';
import RecommendedMovies from './components/movie-recommended';

const MoviePage = async ({params}: {params: {id: string, genre: number}}) => {
  // const params = useParams();
  const { result, casts, videos }: { result: Result; casts: Cast[], videos: VideosResponse } = await getMovie(Number(params.id));
  const recommendedMovies: Result[] = await getGenre(result.genres[0].id, 'movie');

  return (
    <>
      {/* Backdrop image */}
      <MoviesHero result={result} videos={videos.results}/>

      {/* Casts */}
      <div className="lg:mx-[2rem] mx-[1.5rem] mb-[2rem] mt-8">
        <MoviesCasts casts={casts}/>

        {/* Recommended Movies */}
        <RecommendedMovies recommendedMovies={recommendedMovies} params={params} />
      </div>
    </>
  );
};

export default MoviePage;
