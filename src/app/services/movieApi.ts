import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MovieList, MovieType } from '../../types/movieTypes';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_MOVIE_URL}`
  }),
  tagTypes: [],
  endpoints: (build) => ({
    movieList: build.query<MovieList, string>({
      query: (searchTerm) =>
        `search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`
    }),
    movieDetail: build.query<MovieType, string>({
      query: (id) => `movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
    })
  })
});

export const { useMovieListQuery, useMovieDetailQuery } = movieApi;
