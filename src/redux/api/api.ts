import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * The base API configuration.
 */
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    /**
     * Retrieves the list of todos.
     * @returns A promise that resolves to the list of todos.
     */
    getTodos: builder.query({
      query: (priority) => ({
        url: `/tasks/`,
        method: "GET",
        params: { priority: priority },
      }),
      providesTags: ["todo"],
    }),

    /**
     * Adds a new todo.
     * @param data - The data for the new todo.
     * @returns A promise that resolves to the added todo.
     */
    addTodo: builder.mutation({
      query: (data) => {
        console.log("inside abase", data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (data) => {
        return {
          url: `/task/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = baseApi;
