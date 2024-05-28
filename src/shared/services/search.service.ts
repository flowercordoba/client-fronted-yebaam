/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from 'src/store/api';

export const gigApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAuthGigsByCategory: build.query<any, { query: string; from: string; size: string; type: string }>({
      query: ({ query, from, size, type }) => `/search/gig/${from}/${size}/${type}?${query}`
    }),
    getAuthGigById: build.query<any, string>({
      query: (gigId: string) => `/auth/search/gig/${gigId}`
    })
  })
});

export const {
  useGetAuthGigsByCategoryQuery,
  useGetAuthGigByIdQuery
} = gigApi;
