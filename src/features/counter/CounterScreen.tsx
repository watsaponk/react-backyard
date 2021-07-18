import React from 'react'
import { SafeAreaView } from 'react-native'
import Counter from './Counter'

export default function CounterScreen(): React.ReactElement {
	return (
		<SafeAreaView>
			<Counter />
		</SafeAreaView>
	)
}
