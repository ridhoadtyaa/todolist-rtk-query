import type { TodoType } from '../types'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodo: builder.query<TodoType[], void>({
      query: () => 'todos',
      transformResponse: (result: TodoType[]) => result.sort((a, b) => b.id - a.id),
      providesTags: ['Todo']
    }),
    addTodo: builder.mutation<TodoType, TodoType>({
      query: (payload: TodoType) => ({
        url: 'todos',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }),
      invalidatesTags: ['Todo']
    }),
    deleteTodo: builder.mutation<TodoType, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todo']
    }),
    changeStatusTodo: builder.mutation<TodoType, Partial<TodoType> & Pick<TodoType, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: {
          ...patch,
          completed: !patch.completed
        }
      }),
      invalidatesTags: ['Todo']
    })
  })
})

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useChangeStatusTodoMutation
} = todoApi
