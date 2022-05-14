import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../services/PostsService'

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
  })
}

export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
