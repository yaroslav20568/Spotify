import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, PlaylistScreen } from "../screens";

const PlaylistStack = createStackNavigator();

const HomeScreenStacks = () => {
	return (
		<PlaylistStack.Navigator screenOptions={{headerShown: false}}>
			<PlaylistStack.Screen name="Home" component={HomeScreen} />
			<PlaylistStack.Screen name="Playlist" component={PlaylistScreen} />
		</PlaylistStack.Navigator>
	);
};

export { HomeScreenStacks };