// Need to use the React-specific entry point to import createApi
import { SearchMovieParams, NowPlaying } from "@/types/movie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/search`,
  }),
  endpoints: (builder) => ({
    searchMovie: builder.query<NowPlaying, SearchMovieParams>({
      query: (params) =>
        `/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${encodeURIComponent(params.query)}&page=${
          params.page
        }&include_adult=true`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchMovieQuery } = searchApi;
