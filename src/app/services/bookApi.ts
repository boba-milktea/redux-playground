import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BookType, BookList } from '../../types/bookTypes';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BOOK_URL}`
  }),
  tagTypes: [],
  endpoints: (build) => ({
    bookList: build.query<BookList, string>({
      query: (searchTerm) => `search.json?title=${searchTerm}&limit=20`
    }),
    bookDetail: build.query<BookType, string>({
      query: (id) => `/works/${id}.json`
    })
  })
});

export const { useBookListQuery, useBookDetailQuery } = bookApi;
