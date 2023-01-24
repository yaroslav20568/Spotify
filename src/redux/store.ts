import { configureStore } from '@reduxjs/toolkit';
import { mainDataApi } from './query/mainDataApi';
import { playlistApi } from './query/playlistApi';
// import { mainReducer } from './slices';

const store = configureStore({
	reducer: {
		// main: mainReducer,
    [mainDataApi.reducerPath]: mainDataApi.reducer,
		[playlistApi.reducerPath]: playlistApi.reducer
  },
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false})
			.concat(mainDataApi.middleware, playlistApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;