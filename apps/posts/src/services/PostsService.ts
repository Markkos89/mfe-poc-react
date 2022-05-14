import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../models/IUser'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    // Get allPosts data with pagination
    fetchAllPosts: build.query<IUser[], number>({
      query: (limit = 5) => ({
        url: '/posts',
        method: 'GET',
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ['Posts'],
    }),

    // create a new post
    createUser: build.mutation<IUser, IUser>({
      query: (user: IUser) => ({
        url: '/posts',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Posts'],
    }),

    // update a post
    updateUser: build.mutation<IUser, IUser>({
      query: (user: IUser) => ({
        url: `/posts/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['Posts'],
    }),

    // delete a post
    deleteUser: build.mutation<IUser, IUser>({
      query: (user: IUser) => ({
        url: `/posts/${user.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})
