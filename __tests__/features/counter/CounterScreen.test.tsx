import React from 'react'
import { render, RenderAPI, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { configureStore, Store } from '@reduxjs/toolkit'
import CounterScreen from '../../../src/features/counter/CounterScreen'
import CounterReducer, { increase, decrease } from '../../../src/features/counter/redux/CounterReducer'

const renderScreen = (store: Store): RenderAPI => {
	return render(
		<Provider store={store}>
			<CounterScreen />
		</Provider>
	)
}

const createStore = (): Store => {
	return configureStore({
		reducer: {
			counter: CounterReducer,
		},
	})
}

describe('CounterScreen', () => {
	test('When render on start', () => {
		const component = renderScreen(createStore())
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('When press PLUS button should dispatch increase action', () => {
		const store = createStore()
		const spyDispatch = jest.spyOn(store, 'dispatch')
		const { getByTestId } = renderScreen(store)
		const buttonPlus = getByTestId('button_plus')
		const textCount = getByTestId('text_count')

		fireEvent.press(buttonPlus)

		expect(spyDispatch).toHaveBeenCalledWith(increase())
		expect(textCount).toHaveTextContent(/^1$/)
		expect(store.getState().counter.value).toEqual(1)
		spyDispatch.mockClear()
	})

	test('When press MINUS button should dispatch decrease action', () => {
		const store = createStore()
		const spyDispatch = jest.spyOn(store, 'dispatch')
		const { getByTestId } = renderScreen(store)
		const buttonMinus = getByTestId('button_minus')
		const textCount = getByTestId('text_count')

		fireEvent.press(buttonMinus)

		expect(spyDispatch).toHaveBeenCalledWith(decrease())
		expect(textCount).toHaveTextContent(/^-1$/)
		expect(store.getState().counter.value).toEqual(-1)
		spyDispatch.mockClear()
	})
})
