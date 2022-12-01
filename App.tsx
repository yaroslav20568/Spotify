import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'
import Tabs from './src/navigation/Tabs';
import { authorize } from 'react-native-app-auth';

const App = () => {
	useEffect(() => {
		SplashScreen.hide();

		getAccessToken();
	}, []);

	const getAccessToken = async () => {
		const config = {
			clientId: '83abeb6d2a8d4a49ae3c509934b502dd',
			clientSecret: '4136aadbc6594f1b8e867801c1022ccb',
			redirectUrl: 'com.myapp:/oauth',
			scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'],
			serviceConfiguration: {
				authorizationEndpoint: 'https://accounts.spotify.com/authorize',
				tokenEndpoint: 'https://accounts.spotify.com/api/token'
			},
		};
		
		const authState = await authorize(config);
		await AsyncStorage.setItem('@spotify_token', authState.accessToken);

		fetch(`https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type' : 'application/json',
				'Authorization': `Bearer ${authState.accessToken}`
			},
		})
		.then(response => response.json())
		.then(data => console.log(data))
	};

  return (
    <Tabs/>
  );
};

export default App;
