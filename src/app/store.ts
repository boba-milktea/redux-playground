import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { movieApi } from './services/movieApi';
import { bookApi } from './services/bookApi';
import { productApi } from './services/productApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      bookApi.middleware,
      productApi.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
