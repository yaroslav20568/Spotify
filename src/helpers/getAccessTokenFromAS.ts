import AsyncStorage from "@react-native-async-storage/async-storage";

const getAccessTokenFromAS = async () => {
	try {
		// await AsyncStorage.removeItem('@spotify_token');
		const token = await AsyncStorage.getItem('@spotify_token');
		if (token !== null) return token;
	} catch (error) {
		return null;
	}
}

export default getAccessTokenFromAS;

