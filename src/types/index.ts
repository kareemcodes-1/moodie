

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
}

export interface Result {
  id: number;
  title: string;
  first_air_date: Date;
  name: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  episode_run_time: number;
  poster_path: string;
  backdrop_path: string;
  genres: Genre[];
  vote_average: number;
  production_companies: ProductionCompany[];
  videos?: Video;
  seasons: Season[]

}


export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
  iso_639_1: string;
  iso_3166_1: string;
  size: number;
}

export interface VideosResponse {
  id: number;
  results: Video[];
}

export interface Season {
  air_date: string,
  episode_count: number,
  name: string
  overview: string
  poster_path: string
  season_number: number
}

export interface Episode {
  air_date: string,
  episode_number: number,
  name: string
  still_path: string
  runtime: number
}



