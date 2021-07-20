import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { goBack, popToTop } from '../../shared/AppNavigator'
import { initialize } from './EquallyRedux'

export default function EquallyWinScreen(): React.ReactElement {
	const dispatch = useDispatch()
	const resetBeforeBack = () => {
		dispatch(initialize())
		goBack()
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center', padding: 24, flexDirection: 'column' }}>
			<Text style={{ fontSize: 32, alignSelf: 'center', margin: 16 }}>WIN</Text>
			<Button title='PLAY AGAIN' onPress={() => resetBeforeBack()} />
			<Button title='MENU' onPress={() => popToTop()} />
		</View>
	)
}
