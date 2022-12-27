import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';
import { s } from 'react-native-wind';
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
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
				<Text>Search</Text>
			</Animated.View>
		</LinearGradient>
	)
}

export default Search;