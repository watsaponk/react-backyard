import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../counter/Counter'
import { goalSelector, initialize, isLoadingSelector, startValueSelector, updateValue } from './EquallyRedux'

export default function EquallyScreen(): React.ReactElement {
	const [isReady, setIsReady] = useState(false)
	const goal = useSelector(goalSelector)
	const startValue = useSelector(startValueSelector)
	const isLoading = useSelector(isLoadingSelector)
	const dispatch = useDispatch()

	const onValueChange = (value: number) => {
		if (isReady) {
			dispatch(updateValue(value))
		}
	}

	useEffect(() => {
		dispatch(initialize())
		setIsReady(true)
	}, [])

	if (isLoading) {
		return <Text testID='text_equally_loading_indicator'>Loading..</Text>
	}

	return (
		<View style={{ flexDirection: 'column', padding: 16 }}>
			<Text style={styles.bodyText}>make</Text>
			<Text style={styles.bodyText}>me</Text>
			<View style={{ flexDirection: 'row', alignItems: 'stretch', marginBottom: 24 }}>
				<Text style={[styles.bodyText, { flex: 1 }]}>equal</Text>
				<Text testID='text_equally_goal' style={styles.bodyText}>
					{goal}
				</Text>
			</View>
			<Counter initialValue={startValue} onChange={value => onValueChange(value)} />
		</View>
	)
}

const styles = StyleSheet.create({
	bodyText: {
		fontSize: 48,
	},
})
