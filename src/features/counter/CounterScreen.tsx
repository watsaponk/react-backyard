import React from 'react'
import { Text, SafeAreaView, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../shared/Store'
import { decrease, increase } from './redux/CounterReducer'

export default function CounterScreen(): React.ReactElement {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<SafeAreaView style={{ padding: 16, flex: 1 }}>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<Button testID='button_minus' title='MINUS' onPress={() => dispatch(decrease())} />
				<Text testID='text_count'>{count}</Text>
				<Button testID='button_plus' title='PLUS' onPress={() => dispatch(increase())} />
			</View>
		</SafeAreaView>
	)
}
