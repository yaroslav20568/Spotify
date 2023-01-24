import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { isSpotifyTokenValid } from 'is-spotify-token-valid';
import Tabs from './src/navigation/Tabs';
import { getAccessTokenFromAS, getAuthAccessToken, proceedWithVerdict } from './src/helpers';

const App = () => {
	useEffect(() => {
		SplashScreen.hide();

		getAccessTokenFromAS().then(token => {
			if(!token) {
				getAuthAccessToken();
			} else {
				isSpotifyTokenValid(token, proceedWithVerdict);
			}
		});
	}, []);

  return (
		<Tabs />
  );
};

export default App;
