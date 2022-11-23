import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';

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
		<Animated.View
      style={{opacity: fadeAnim}}
    >
			<Text>Search</Text>
		</Animated.View>
	)
}

export default Search;