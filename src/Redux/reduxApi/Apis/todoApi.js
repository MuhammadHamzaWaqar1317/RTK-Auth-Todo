import { baseUrl } from "../baseUrl/baseUrl";
import { todoEndpoint } from "../endpoints/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",

  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => todoEndpoint,
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: todoEndpoint,
        method: "POST",
        body,
      }),

      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (body) => ({
        url: `${todoEndpoint}/${body.id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        url: `${todoEndpoint}/${body.id}`,
        method: "PATCH",
        body,
      }),
      // transformResponse: (response, meta, arg) => !!response.data,
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
