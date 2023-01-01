import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { s } from "react-native-wind";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Header, Artists } from './../components';
import { useGetMainDataQuery } from './../redux/query/mainData';

interface IProps {
	navigation: NavigationProp<ParamListBase>
}

const Home = ({ navigation }: IProps) => {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	
	const { data } = useGetMainDataQuery();
	console.log(data?.artists);

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
			<Animated.View style={[s`py-7 px-4`, {opacity: fadeAnim}]}>
				<Header navigation={navigation} />
				<Artists artistItems={data?.artists} />
			</Animated.View>
		</LinearGradient>
	)
}

export default Home;