import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { s } from 'react-native-wind';
import { ITrack } from '../../types';
import { TrackLoader } from '../index';

interface IProps {
	myTracksItems: Array<ITrack> | undefined;
	isLoading: boolean;
}

const MyTracks = ({ myTracksItems, isLoading }: IProps) => {
	return (
		<View style={s`my-5`}>
			<Text style={s`text-3xl font-bold text-white mx-4 mb-3`}>My Tracks</Text>
			
			{isLoading ?
				<FlatList
					data={Array(8)}
					renderItem={({ item }) => <TrackLoader />}
					horizontal
					showsHorizontalScrollIndicator={false}
				/> :
				<FlatList
					data={myTracksItems}
					renderItem={({ item }) => <MyTrack {...item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			}
		</View>
	)
}

const MyTrack = ({ track }: ITrack) => {
	return (
		<TouchableOpacity style={[s`mx-4`, {width: 140}]}>
			<Image
				source={{uri: track.album.images[1].url}}
				style={[s`mb-2`, {width: 140, height: 140}]}
				resizeMode='cover'
			/>
			<View>
				<Text style={[s`text-lg text-white`, {lineHeight: 20}]}>
					{track.artists.map((artist, index) => track.artists.length !== index + 1 ? artist.name + ', ' : artist.name + '.')}
				</Text>
				<Text style={[s`text-base text-trueGray-400`, {lineHeight: 18}]}>
					{track.name}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default MyTracks;