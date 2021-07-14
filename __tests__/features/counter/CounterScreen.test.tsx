import React from 'react'
import { render, RenderAPI, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import CounterScreen from '../../../src/features/counter/CounterScreen'
import { increase, decrease } from '../../../src/features/counter/redux/CounterReducer'
import { store } from '../../../src/shared/redux/Store'

const renderScreen = (): RenderAPI => {
	store.dispatch = jest.fn()

	return render(
		<Provider store={store}>
			<CounterScreen />
		</Provider>
	)
}

describe('CounterScreen', () => {
	test('When render on start', () => {
		const component = renderScreen()
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('When press PLUS button should dispatch increase action', () => {
		const { getByTestId } = renderScreen()
		const buttonPlus = getByTestId('button_plus')

		fireEvent.press(buttonPlus)

		expect(store.dispatch).toHaveBeenCalledTimes(1)
		expect(store.dispatch).toHaveBeenCalledWith(increase())
	})

	test('When press MINUS button should dispatch decrease action', () => {
		const { getByTestId } = renderScreen()
		const buttonMinus = getByTestId('button_minus')

		fireEvent.press(buttonMinus)

		expect(store.dispatch).toHaveBeenCalledTimes(1)
		expect(store.dispatch).toHaveBeenCalledWith(decrease())
	})
})
