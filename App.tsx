import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import { authorize } from 'react-native-app-auth';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Tabs from './src/navigation/Tabs';

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

		// fetch(`https://api.spotify.com/v1/artists?ids=5VKufGMVAZ6fs111xYNKnU,46rVVJwHWNS7C7MaWXd842,0oHyOQzDKjW5JVf347hue4,6HZrWacYa92nQo5zD2mjHk,6wbEgVlGqWb4I9tbMluu5Q,4ENNw1y7XuWPt7tvzoQ8Pz,1Uf3QoT2BwTN9ZW71cIiAo`, {
		// 	method: 'GET',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type' : 'application/json',
		// 		'Authorization': `Bearer ${authState.accessToken}`
		// 	},
		// })
		// .then(response => response.json())
		// .then(data => console.log(data.artists))
	};

  return (
		<Provider store={store}>
			<Tabs/>
		</Provider>
  );
};

export default App;
