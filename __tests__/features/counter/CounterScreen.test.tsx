import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import CounterScreen from '../../../src/features/counter/CounterScreen'
import { increase, decrease } from '../../../src/features/counter/CounterRedux'
import buildStore from '../../../src/shared/redux/Store'
import { renderScreenWithStore } from '../../TestUtil'

test('When press PLUS button should dispatch increase action', () => {
	const store = buildStore()
	const spyDispatch = jest.spyOn(store, 'dispatch')
	const { getByTestId } = renderScreenWithStore(store, <CounterScreen />)
	const buttonPlus = getByTestId('button_plus')
	const textCount = getByTestId('text_count')

	fireEvent.press(buttonPlus)

	expect(spyDispatch).toHaveBeenCalledWith(increase())
	expect(textCount).toHaveTextContent(/^1$/)
	expect(store.getState().counter.value).toEqual(1)
	spyDispatch.mockClear()
})

test('When press MINUS button should dispatch decrease action', () => {
	const store = buildStore()
	const spyDispatch = jest.spyOn(store, 'dispatch')
	const { getByTestId } = renderScreenWithStore(store, <CounterScreen />)
	const buttonMinus = getByTestId('button_minus')
	const textCount = getByTestId('text_count')

	fireEvent.press(buttonMinus)

	expect(spyDispatch).toHaveBeenCalledWith(decrease())
	expect(textCount).toHaveTextContent(/^-1$/)
	expect(store.getState().counter.value).toEqual(-1)
	spyDispatch.mockClear()
})
