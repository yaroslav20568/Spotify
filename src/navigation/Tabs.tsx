import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SearchScreen, MediaLibraryScreen, PremiumScreen } from '../screens';
import { HomeScreenStacks } from './Stacks';

interface Tab {
	name: string,
	title: string,
	component: any,
	nameIcon: string
}

const Tab = createBottomTabNavigator();

const TabElements: Array<Tab> = [
	{name: 'Home', title: 'Главная', component: HomeScreenStacks, nameIcon: 'home'},
	{name: 'Search', title: 'Поиск', component: SearchScreen, nameIcon: 'search'},
	{name: 'MediaLibrary', title: 'Mоя медиатека', component: MediaLibraryScreen, nameIcon: 'music'},
	{name: 'Premium', title: 'Premium', component: PremiumScreen, nameIcon: 'spotify'},
];

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
								<Text style={{color: focused ? 'white' : '#B1B7B2', marginBottom: 5}}>{tabElement.title}</Text>
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