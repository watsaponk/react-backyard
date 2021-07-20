import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../features/home/HomeScreen'
import CounterScreen from '../features/counter/CounterScreen'
import EquallyScreen from '../features/equally/EquallyScreen'
import EquallyWinScreen from '../features/equally/EquallyWinScreen'
import { navigationRef } from './AppNavigator'

const RootStack = createStackNavigator()

export default function AppNavigation(): React.ReactElement {
	return (
		<NavigationContainer ref={navigationRef}>
			<RootStack.Navigator initialRouteName='Home'>
				<RootStack.Screen name='Home' component={HomeScreen} />
				<RootStack.Screen name='Counter' component={CounterScreen} />
				<RootStack.Screen name='Equally' component={EquallyScreen} />
				<RootStack.Screen
					name='EquallyWin'
					component={EquallyWinScreen}
					options={{ headerShown: false, gestureEnabled: false }}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	)
}
