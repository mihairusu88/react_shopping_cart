import { createApi } from '@reduxjs/toolkit/query/react';
import apiConstants from '@utils/constants/api';
import { axiosBaseQuery } from '@utils/api';

const defaultParams = { id: null, limit: 20, skip: 0 };

export const apiServiceProducts = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: apiConstants.BASE_URL,
  }),
  tagTypes: ['Products'],
  endpoints(build) {
    return {
      getProducts: build.query({
        query: ({ id, limit, skip } = defaultParams) => ({
          url: '/products',
          method: 'get',
          params: { id, limit, skip },
        }),
      }),
      getProduct: build.query({
        query: ({ id } = defaultParams) => ({
          url: `/products/${id}`,
          method: 'get',
        }),
      }),
      getProductsCategories: build.query({
        query: () => ({
          url: '/products/categories',
          method: 'get',
        }),
      }),
      getCategoryProducts: build.query({
        query: ({ category } = defaultParams) => ({
          url: `/products/category/${category}`,
          method: 'get',
        }),
        providesTags: () => ['CategoryProducts'],
      }),
    };
  },
});

export const { useGetProductsQuery, useGetProductQuery, useGetProductsCategoriesQuery, useGetCategoryProductsQuery } =
  apiServiceProducts;
