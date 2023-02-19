// Need to use the React-specific entry point to import createApi
import { NowPlayingParams, NowPlaying, Movie } from "@/types/movie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/movie`,
  }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query<NowPlaying, NowPlayingParams>({
      query: (params) =>
        `/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${params.page}`,
    }),
    getTopRated: builder.query<NowPlaying, NowPlayingParams>({
      query: (params) =>
        `/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${params.page}`,
    }),
    getMovieById: builder.query<Movie, number>({
      query: (id) =>
        `/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetNowPlayingQuery,
  useGetMovieByIdQuery,
  useGetTopRatedQuery,
} = movieApi;
