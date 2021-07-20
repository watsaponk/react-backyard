import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { navigate } from '../../shared/AppNavigator'

export default function HomeScreen(): React.ReactElement {
	return (
		<ScrollView>
			<TouchableOpacity testID='menu_counter' onPress={() => navigate('Counter')}>
				<View style={{ padding: 8 }}>
					<Text>Counter</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity testID='menu_equally' onPress={() => navigate('Equally')}>
				<View style={{ padding: 8 }}>
					<Text>Equally</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity testID='menu_user_list' onPress={() => navigate('UserList')}>
				<View style={{ padding: 8 }}>
					<Text>User List</Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
	)
}
