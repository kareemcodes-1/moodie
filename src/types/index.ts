

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
  episode_run_time: number
  poster_path: string;
  backdrop_path: string;
  genres: Genre[];
  vote_average: number;
  production_companies: ProductionCompany[];
}
