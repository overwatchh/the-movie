export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type NowPlayingParams = {
  page: number;
};
export type NowPlaying = {
  date: {
    maximum: string;
    minimum: string;
  };
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};

export type SearchMovieParams = {
  page: number;
  query: string;
};
