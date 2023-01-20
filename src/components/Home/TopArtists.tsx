import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { s } from "react-native-wind";
import { IArtist } from '../../types';
import { ArtistLoader } from '../index';

type IProps =	{
	topArtistItems: Array<IArtist> | undefined;
	isLoading: boolean;
};

const TopArtists = ({ topArtistItems, isLoading }: IProps) => {
	return (
		<View>
			<Text style={s`text-3xl font-bold text-white mx-4 mb-3`}>Top Artists</Text>

			{isLoading ? 
				<FlatList
					data={Array(8)}
					renderItem={({ item }) => <ArtistLoader />}
					horizontal
					showsHorizontalScrollIndicator={false}
				/> : 
				<FlatList
					data={topArtistItems}
					renderItem={({ item }) => <Artist {...item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			}
		</View>
	)
}

const Artist = ({ name, images }: IArtist) => {
	return (
		<TouchableOpacity style={[s`items-center mx-4`, {width: 140}]}>
			<Image
				source={{uri: images[2].url}}
				style={[s`rounded-full mb-2`, {width: 140, height: 140}]}
				resizeMode='cover'
			/>
			<Text style={[s`text-lg text-white`, {lineHeight: 20}]}>{name}</Text>
		</TouchableOpacity>
	)
}

export default TopArtists;