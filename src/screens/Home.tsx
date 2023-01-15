import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { s } from "react-native-wind";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Header, TopArtists, MyTracks, TopAlbums } from './../components';
import { useGetMainDataQuery } from './../redux/query/mainData';
import { ScrollView } from 'react-native-gesture-handler';

interface IProps {
	navigation: NavigationProp<ParamListBase>
}

const Home = ({ navigation }: IProps) => {
	const { data } = useGetMainDataQuery('');

	const fadeAnim = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
			useNativeDriver: true
    }).start();
  };

	useEffect(() => {
		fadeIn();
	}, []);

	return (
		<LinearGradient colors={['#484C4D', '#121212']} style={{flex: 1}}>
			<ScrollView>
				<Animated.View style={[s`py-7 /*px-4*/`, {opacity: fadeAnim}]}>
					<Header navigation={navigation} />
					<TopArtists topArtistItems={data?.topArtists} />
					<MyTracks myTracksItems={data?.myTracks} />
					<TopAlbums topAlbumsItems={data?.topAlbums} />
				</Animated.View>
			</ScrollView>
		</LinearGradient>
	)
}

export default Home;