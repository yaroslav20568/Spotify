import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useGetPlaylistQuery } from '../redux/query/playlistApi';

interface IProps {
	route: RouteProp<{ params: { id: string; } }, 'params'>;
}

const Playlist = ({ route }: IProps) => {
	const { data } = useGetPlaylistQuery(route.params.id);
	console.log(data?.artistAlbums);
	return (
		<LinearGradient colors={['#484C4D', '#121212']} style={{flex: 1}}>
			<View>
				<Text>Playlist</Text>
				<Text>{route.params.id}</Text>
			</View>
		</LinearGradient>
	)
}

export default Playlist;