import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { s } from 'react-native-wind';
import { IAlbum } from '../../types';

interface IProps {
	topAlbumsItems: Array<IAlbum> | undefined;
}

const TopAlbums = ({ topAlbumsItems }: IProps) => {
	return (
		<View>
			<Text style={s`text-3xl font-bold text-white mx-4 mb-3`}>Top Albums</Text>

			<FlatList
				data={topAlbumsItems}
				renderItem={({ item }) => <Album {...item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
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