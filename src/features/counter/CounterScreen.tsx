import React, { useEffect } from 'react'
import { Text, SafeAreaView, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, initialize } from './redux/CounterReducer'
import { magicNumberSelector, valueSelector } from './redux/CounterSelector'

export default function CounterScreen(): React.ReactElement {
	const count = useSelector(valueSelector)
	const magicNumber = useSelector(magicNumberSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initialize())
	}, [])

	return (
		<SafeAreaView>
			<View style={{ flexDirection: 'column', padding: 16 }}>
				<Text testID='text_magic_number' style={{ alignSelf: 'center' }}>
					Magic Number {magicNumber}
				</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
					<Button testID='button_minus' title='MINUS' onPress={() => dispatch(decrease())} />
					<Text testID='text_count'>{count}</Text>
					<Button testID='button_plus' title='PLUS' onPress={() => dispatch(increase())} />
				</View>
			</View>
		</SafeAreaView>
	)
}
