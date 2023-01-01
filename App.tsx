import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Tabs from './src/navigation/Tabs';
import { getAccessTokenFromAS, getAuthAccessToken } from './src/helpers';

const App = () => {
	useEffect(() => {
		SplashScreen.hide();

		getAccessTokenFromAS().then(token => {
			if(token) {
				console.log(token);
			} else {
				getAuthAccessToken();
			}
		});
	}, []);

  return (
		<Provider store={store}>
			<Tabs/>
		</Provider>
  );
};

export default App;
