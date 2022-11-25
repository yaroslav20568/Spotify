import { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Tabs from './src/navigation/Tabs';

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

  return (
    <Tabs/>
  );
};

export default App;
