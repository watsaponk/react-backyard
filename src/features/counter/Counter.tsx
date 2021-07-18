import React from 'react'
import { Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, valueSelector } from './CounterRedux'

export default function Counter(): React.ReactElement {
	const count = useSelector(valueSelector)
	const dispatch = useDispatch()

	return (
		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
			<Button testID='button_minus' title='MINUS' onPress={() => dispatch(decrease())} />
			<Text testID='text_count'>{count}</Text>
			<Button testID='button_plus' title='PLUS' onPress={() => dispatch(increase())} />
		</View>
	)
}
