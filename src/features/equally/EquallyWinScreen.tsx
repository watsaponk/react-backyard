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
			<Button testID='button_equally_win_play_again' title='PLAY AGAIN' onPress={() => resetBeforeBack()} />
			<Button testID='button_equally_win_menu' title='MENU' onPress={() => popToTop()} />
		</View>
	)
}
