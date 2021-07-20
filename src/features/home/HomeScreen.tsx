import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { navigate } from '../../shared/AppNavigator'

export default function HomeScreen(): React.ReactElement {
	return (
		<ScrollView>
			<TouchableOpacity onPress={() => navigate('Counter')}>
				<View style={{ padding: 8 }}>
					<Text>Counter</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate('Equally')}>
				<View style={{ padding: 8 }}>
					<Text>Equally</Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
	)
}
