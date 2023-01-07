import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize } from 'react-native-app-auth';

const getAuthAccessToken = async () => {
	const config = {
		clientId: '83abeb6d2a8d4a49ae3c509934b502dd',
		clientSecret: '4136aadbc6594f1b8e867801c1022ccb',
		redirectUrl: 'com.myapp:/oauth',
		scopes: ['user-read-email', 'playlist-read-private', 'user-library-read', 'playlist-modify-public', 'user-read-private'],
		serviceConfiguration: {
			authorizationEndpoint: 'https://accounts.spotify.com/authorize',
			tokenEndpoint: 'https://accounts.spotify.com/api/token'
		},
	};
	
	const authState = await authorize(config);
	await AsyncStorage.setItem('@spotify_token', authState.accessToken);
};

export default getAuthAccessToken;