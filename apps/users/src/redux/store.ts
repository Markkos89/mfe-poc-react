import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { usersApi } from '../services/UsersService'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
  })
}

export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
