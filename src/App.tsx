import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './shared/AppNavigator'
import store from './shared/redux/Store'

export default function App(): React.ReactElement {
	return (
		<Provider store={store()}>
			<AppNavigator />
		</Provider>
	)
}
