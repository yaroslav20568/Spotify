import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAlbum } from '../../types';

interface IAlbums {
	items: Array<IAlbum>;
}

interface IData {
	artistAlbums: Array<IAlbum>;
}

const playlistApi = createApi({
  reducerPath: 'PlaylistApi',
  baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://api.spotify.com/v1/',
		method: 'post',
		prepareHeaders: async (headers) => {
			const token = await AsyncStorage.getItem('@spotify_token');

			headers.set('Accept', 'application/json')
			headers.set('Content-Type', 'application/json')
			headers.set('Authorization', `Bearer ${token}`)
			return headers;
		},
	}),
  endpoints: (build) => ({
    getPlaylist: build.query<IData, string>({
			async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
				const token = await AsyncStorage.getItem('@spotify_token');

				const artistAlbums = await fetchWithBQ({
					url: `artists/${id}/albums`, 
					method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Content-Type' : 'application/json',
						'Authorization': `Bearer ${token}`
					},
				})

				const artistAlbumsData = artistAlbums.data as IAlbums;

				return {
					data: {
						artistAlbums: artistAlbumsData.items
					}
				};
      },
    }),
  }),
})

export { playlistApi };
export const { useGetPlaylistQuery } = playlistApi;