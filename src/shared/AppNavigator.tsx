import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../features/home/HomeScreen'
import CounterScreen from '../features/counter/CounterScreen'
import EquallyScreen from '../features/equally/EquallyScreen'

const Stack = createStackNavigator()

export default function AppNavigator(): React.ReactElement {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Counter' component={CounterScreen} />
				<Stack.Screen name='Equally' component={EquallyScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
