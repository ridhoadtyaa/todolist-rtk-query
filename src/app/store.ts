import { todoApi } from '../services/todos'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware)
})

setupListeners(store.dispatch)
