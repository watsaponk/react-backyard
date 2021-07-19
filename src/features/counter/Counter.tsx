import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, initValue, valueSelector } from './CounterRedux'

type CounterProps = {
	initialValue?: number
	onChange?: (value: number) => void
}

const defaultProps: CounterProps = {
	initialValue: undefined,
	onChange: undefined,
}

export default function Counter(props: CounterProps): React.ReactElement {
	const { onChange, initialValue } = props
	const count = useSelector(valueSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initValue(initialValue || 0))
	}, [initialValue])

	useEffect(() => {
		onChange?.(count)
	}, [count])

	return (
		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
			<Button testID='button_minus' title='MINUS' onPress={() => dispatch(decrease())} />
			<Text testID='text_count'>{count}</Text>
			<Button testID='button_plus' title='PLUS' onPress={() => dispatch(increase())} />
		</View>
	)
}

Counter.defaultProps = defaultProps
