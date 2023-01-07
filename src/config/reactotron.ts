import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native'

let hostName = "localhost";
if (__DEV__) {
	const scriptURL = NativeModules.SourceCode.scriptURL;
	hostName = scriptURL.split("://")[1].split(":")[0];
}

Reactotron
	.setAsyncStorageHandler!(AsyncStorage)
	.configure({
		name: "myApp",
		host: hostName
	})
	.useReactNative({
		asyncStorage: true
	})
	.connect();

export default Reactotron;

