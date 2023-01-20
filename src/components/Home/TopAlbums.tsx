import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { s } from 'react-native-wind';
import { IAlbum } from '../../types';
import { AlbumLoader } from '../index';

interface IProps {
	topAlbumsItems: Array<IAlbum> | undefined;
	isLoading: boolean;
}

const TopAlbums = ({ topAlbumsItems, isLoading }: IProps) => {
	return (
		<View>
			<Text style={s`text-3xl font-bold text-white mx-4 mb-3`}>Top Albums</Text>

			{isLoading ? 
				<FlatList
					data={Array(8)}
					renderItem={({ item }) => <AlbumLoader />}
					horizontal
					showsHorizontalScrollIndicator={false}
				/> : 
				<FlatList
					data={topAlbumsItems}
					renderItem={({ item }) => <Album {...item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			}
		</View>
	)
}

const Album = ({ name, images }: IAlbum) => {
	return (
		<TouchableOpacity style={[s`mx-4`, {width: 140}]}>
			<Image
				source={{uri: images[0].url}}
				style={[s`mb-2`, {width: 140, height: 140}]}
				resizeMode='cover'
			/>
			<Text style={[s`text-lg text-white`, {lineHeight: 20}]}>{name}</Text>
		</TouchableOpacity>
	)
}

export default TopAlbums;