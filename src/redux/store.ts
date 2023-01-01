import { configureStore } from '@reduxjs/toolkit';
import { mainData } from './query/mainData';

const store = configureStore({
	reducer: {
    [mainData.reducerPath]: mainData.reducer,
  },
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(mainData.middleware),
});

export default store;