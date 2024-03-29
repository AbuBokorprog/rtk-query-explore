import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "/posts",
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});
export const { useGetPostQuery, useGetPostByIdQuery } = baseAPI;
export default baseAPI;
