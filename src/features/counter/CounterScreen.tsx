import React, { useState } from 'react'
import { Text, SafeAreaView, View, Button } from 'react-native'

export default function CounterScreen(): React.ReactElement {
	const [count, setCount] = useState(0)

	const onMinusButtonPress = () => {
		setCount(count - 1)
	}

	const onPlusButtonPress = () => {
		setCount(count + 1)
	}

	return (
		<SafeAreaView style={{ padding: 16, flex: 1 }}>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<Button title='MINUS' onPress={onMinusButtonPress} />
				<Text>{count}</Text>
				<Button title='PLUS' onPress={onPlusButtonPress} />
			</View>
		</SafeAreaView>
	)
}
