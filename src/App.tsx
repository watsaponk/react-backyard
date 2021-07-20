import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AppNavigation from './shared/AppNavigation'
import store from './shared/redux/Store'

export default function App(): React.ReactElement {
	return (
		<Provider store={store()}>
			<SafeAreaView>
				<View style={{ width: '100%', height: '100%' }}>
					<AppNavigation />
				</View>
			</SafeAreaView>
		</Provider>
	)
}
