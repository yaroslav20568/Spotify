import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { s } from "react-native-wind";
import { IArtist } from '../../types';

type IProps =	{
	artistItems: Array<IArtist> | undefined
};

const Artists = ({ artistItems }: IProps) => {
	return (
		<View>
			<Text style={s`text-3xl font-bold text-white my-5`}>Top Artists</Text>

			<FlatList
				data={artistItems}
				renderItem={({ item }) => <Artist {...item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}

const Artist = ({ name, images }: IArtist) => {
	return (
		<TouchableOpacity style={s`items-center mr-5`}>
			<Image
				source={{uri: images[2].url}}
				style={[s`rounded-full mb-1`, {width: images[2].width * 0.85, height: images[2].height * 0.85}]}
				resizeMode='contain'
			/>
			<Text style={s`text-lg text-white`}>{name}</Text>
		</TouchableOpacity>
	)
}

export default Artists;