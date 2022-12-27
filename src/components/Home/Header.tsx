import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { s } from "react-native-wind";
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface IProps {
	navigation: NavigationProp<ParamListBase>
}

const Header = ({ navigation }: IProps) => {
	return (
		<View style={s`flex-row items-center justify-between`}>
			<Text style={s`text-3xl font-bold text-white`}>Good evening</Text>
			
			<View style={s`flex-row`}>
				<TouchableOpacity style={s`mr-5`} onPress={() => navigation.navigate('Premium')}>
					<Fontisto name="bell" size={30} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={s`mr-5`} onPress={() => navigation.navigate('Premium')}>
					<Entypo name="back-in-time" size={30} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Premium')}>
					<Ionicons name="settings-outline" size={30} color="#fff" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Header;