import { configureStore } from '@reduxjs/toolkit';
import { mainData } from './query/mainData';
import { mainReducer } from './slices';

const store = configureStore({
	reducer: {
		// main: mainReducer,
    [mainData.reducerPath]: mainData.reducer,
  },
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(mainData.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;