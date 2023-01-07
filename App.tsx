import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Tabs from './src/navigation/Tabs';
import { getAccessTokenFromAS, getAuthAccessToken } from './src/helpers';
import { useActions } from './src/redux/hooks';

const App = () => {
	const { setToken } = useActions();

	useEffect(() => {
		SplashScreen.hide();

		getAccessTokenFromAS().then(token => {
			if(!token) {
				getAuthAccessToken();
			}
		});
	}, []);

  return (
		<Tabs/>
  );
};

export default App;
