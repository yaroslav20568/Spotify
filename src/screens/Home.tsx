import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { s } from "react-native-wind";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Header } from './../components';

interface IProps {
	navigation: NavigationProp<ParamListBase>
}

const Home = ({ navigation }: IProps) => {
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
			<Animated.View style={[s`py-7 px-4`, {opacity: fadeAnim}]}>
				<Header navigation={navigation} />
			</Animated.View>
		</LinearGradient>
	)
}

export default Home;