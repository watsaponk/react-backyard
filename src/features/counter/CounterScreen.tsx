import React from 'react'
import { View } from 'react-native'
import Counter from './Counter'

export default function CounterScreen(): React.ReactElement {
	return (
		<View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
			<Counter />
		</View>
	)
}
