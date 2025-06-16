import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductType } from '../../types/productTypes';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_PRODUCT_URL}`
  }),
  tagTypes: [],
  endpoints: (build) => ({
    productList: build.query<ProductType[], void>({
      query: () => `/products/`
    }),
    productDetail: build.query<ProductType, string>({
      query: (id) => `/products/${id}`
    })
  })
});

export const { useProductListQuery, useProductDetailQuery } = productApi;
