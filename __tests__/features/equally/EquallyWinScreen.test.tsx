import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import EquallyWinScreen from '../../../src/features/equally/EquallyWinScreen'
import { goBack, popToTop } from '../../../src/shared/AppNavigator'
import buildStore from '../../../src/shared/redux/Store'
import { renderScreenWithStore } from '../../TestUtil'
import { initialize } from '../../../src/features/equally/EquallyRedux'

jest.mock('../../../src/shared/AppNavigator')

test('When press PLAY AGAIN should reset state and navigate back', () => {
	const store = buildStore()
	const spyDispatch = jest.spyOn(store, 'dispatch')
	const { getByTestId } = renderScreenWithStore(store, <EquallyWinScreen />)

	fireEvent.press(getByTestId('button_equally_win_play_again'))

	expect(spyDispatch).toHaveBeenCalledWith(initialize())
	expect(goBack).toHaveBeenCalledTimes(1)
	spyDispatch.mockClear()
})

test('When press MENU should reset state and navigate back', () => {
	const { getByTestId } = renderScreenWithStore(buildStore(), <EquallyWinScreen />)

	fireEvent.press(getByTestId('button_equally_win_menu'))

	expect(popToTop).toHaveBeenCalledTimes(1)
})
