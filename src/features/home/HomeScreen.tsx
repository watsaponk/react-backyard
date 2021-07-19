import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen(): React.ReactElement {
	const navigation = useNavigation()
	return (
		<SafeAreaView>
			<ScrollView>
				<TouchableOpacity onPress={() => navigation.navigate('Counter')}>
					<View style={{ padding: 8 }}>
						<Text>Counter</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Equally')}>
					<View style={{ padding: 8 }}>
						<Text>Equally</Text>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	)
}
