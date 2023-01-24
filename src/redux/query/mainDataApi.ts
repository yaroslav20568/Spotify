import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IArtist, ITrack, IAlbum } from '../../types';
import { topArtistsIds, topAlbumsIds } from '../../constants';
import { shuffle } from './../../helpers';

interface IArtists {
	artists: Array<IArtist>;
}

interface ITracks {
	items: Array<ITrack>;
}

interface IAlbums {
	albums: Array<IAlbum>;
}

interface IData {
	topArtists: Array<IArtist>;
	myTracks: Array<ITrack>;
	topAlbums: Array<IAlbum>;
}

const mainDataApi = createApi({
	reducerPath: 'mainDataApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spotify.com/v1/' }),
  endpoints: (build) => ({
    getMainData: build.query<IData, string>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
				const token = await AsyncStorage.getItem('@spotify_token');

				const topArtistsResp = await fetchWithBQ({
					url: `artists?ids=${shuffle(topArtistsIds)}`, 
					method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Content-Type' : 'application/json',
						'Authorization': `Bearer ${token}`
					},
				})

				const myTracksResp = await fetchWithBQ({
          url: 'me/tracks?limit=10', 
          method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Content-Type' : 'application/json',
						'Authorization': `Bearer ${token}`
					},
        })

				const topAlbumsResp = await fetchWithBQ({
          url: `albums?ids=${shuffle(topAlbumsIds)}`, 
          method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Content-Type' : 'application/json',
						'Authorization': `Bearer ${token}`
					},
        })

				const topArtistsData = topArtistsResp.data as IArtists;
				const myTracksData = myTracksResp.data as ITracks;
				const topAlbumsData = topAlbumsResp.data as IAlbums;

				return {
					data: {
						topArtists: topArtistsData.artists,
						myTracks: myTracksData.items,
						topAlbums: topAlbumsData.albums
					}
				};
      },
    }),
  }),
})

export { mainDataApi };
export const { useGetMainDataQuery } = mainDataApi;