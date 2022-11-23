import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeScreen, SearchScreen, MediaLibraryScreen, PremiumScreen } from '../screens';

interface Tab {
	name: string,
	component: any,
	nameIcon: string
}

const TabElements: Array<Tab> = [
	{name: 'Главная', component: HomeScreen, nameIcon: 'home'},
	{name: 'Поиск', component: SearchScreen, nameIcon: 'search'},
	{name: 'Mоя медиатека', component: MediaLibraryScreen, nameIcon: 'music'},
	{name: 'Premium', component: PremiumScreen, nameIcon: 'spotify'},
];

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					unmountOnBlur: true,
					tabBarStyle: {backgroundColor: '#131313', height: 63, paddingVertical: 5},
				}}
			>
				{TabElements.map(tabElement => 
					<Tab.Screen 
						name={tabElement.name} 
						component={tabElement.component} 
						options={{
							tabBarLabel: ({ focused }) => (
								<Text style={{color: focused ? 'white' : '#B1B7B2', marginBottom: 5}}>{tabElement.name}</Text>
							),
							tabBarIcon: ({ focused }) => (
								<View style={{marginBottom: 0}}>
									<FontAwesome
										name={tabElement.nameIcon}
										color={focused ? 'white' : '#B1B7B2'}
										size={30}
									/>
								</View>
							),
						}}
						key={tabElement.name}
					/>
				)}
			</Tab.Navigator>
		</NavigationContainer>
  );
};

export default Tabs;