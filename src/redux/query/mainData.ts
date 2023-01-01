import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArtists } from '../../types';

const mainData = createApi({
	reducerPath: 'mainDataApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spotify.com/v1/' }),
  endpoints: (build) => ({
    getMainData: build.query<IArtists, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const artists = await fetchWithBQ('artists?ids=5VKufGMVAZ6fs111xYNKnU,46rVVJwHWNS7C7MaWXd842,0oHyOQzDKjW5JVf347hue4,6HZrWacYa92nQo5zD2mjHk,6wbEgVlGqWb4I9tbMluu5Q,4ENNw1y7XuWPt7tvzoQ8Pz,1Uf3QoT2BwTN9ZW71cIiAo');

				return {
					data: artists.data
				};
      },
    }),
  }),
})

export { mainData };
export const { useGetMainDataQuery } = mainData;