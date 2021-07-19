import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../counter/Counter'
import {
	goalSelector,
	initialize,
	isLoadingSelector,
	isWinSelector,
	startValueSelector,
	updateValue,
} from './EquallyRedux'

export default function EquallyScreen(): React.ReactElement {
	const goal = useSelector(goalSelector)
	const isWin = useSelector(isWinSelector)
	const startValue = useSelector(startValueSelector)
	const isLoading = useSelector(isLoadingSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initialize())
	}, [])

	return (
		<SafeAreaView>
			{isLoading ? (
				<Text>Loading..</Text>
			) : (
				<View style={{ flexDirection: 'column', padding: 16 }}>
					<Text style={styles.bodyText}>make</Text>
					<Text style={styles.bodyText}>me</Text>
					<View style={{ flexDirection: 'row', alignItems: 'stretch', marginBottom: 24 }}>
						<Text style={[styles.bodyText, { flex: 1 }]}>equal</Text>
						<Text style={styles.bodyText}>{goal}</Text>
					</View>
					<Counter
						initialValue={startValue}
						onChange={value => {
							dispatch(updateValue(value))
						}}
					/>
					{isWin ? <Text>Win Ja</Text> : null}
				</View>
			)}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	bodyText: {
		fontSize: 48,
	},
})
