import React from 'react'
import { Provider } from 'react-redux'
import CounterScreen from './features/counter/CounterScreen'
import store from './shared/redux/Store'

export default function App(): React.ReactElement {
	return (
		<Provider store={store()}>
			<CounterScreen />
		</Provider>
	)
}
