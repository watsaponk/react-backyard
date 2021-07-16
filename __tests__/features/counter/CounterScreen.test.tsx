import React from 'react'
import { render, RenderAPI, fireEvent, waitFor } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import CounterScreen from '../../../src/features/counter/CounterScreen'
import { increase, decrease, initialize } from '../../../src/features/counter/redux/CounterReducer'
import GetMagicNumber from '../../../src/features/service/GetMagicNumber'
import buildStore from '../../../src/shared/redux/Store'

jest.mock('../../../src/features/service/GetMagicNumber', () =>
	jest.fn().mockImplementation(() => {
		return Promise.resolve(2)
	})
)

const renderScreen = (store: Store): RenderAPI => {
	return render(
		<Provider store={store}>
			<CounterScreen />
		</Provider>
	)
}

describe('CounterScreen', () => {
	test('When component is mount should get magic number', async () => {
		const store = buildStore()
		const spyDispatch = jest.spyOn(store, 'dispatch')
		const { getByTestId } = renderScreen(store)
		const textMagicNumber = getByTestId('text_magic_number')

		await waitFor(() => {
			expect(GetMagicNumber).toHaveBeenCalledTimes(1)
			expect(spyDispatch).toHaveBeenLastCalledWith(initialize())
			expect(textMagicNumber).toHaveTextContent(/^Magic Number 2$/)
			expect(store.getState().counter.magicNumber).toEqual(2)
			spyDispatch.mockClear()
		})
	})

	test('When press PLUS button should dispatch increase action', async () => {
		const store = buildStore()
		const spyDispatch = jest.spyOn(store, 'dispatch')
		const { getByTestId } = renderScreen(store)
		const buttonPlus = getByTestId('button_plus')
		const textCount = getByTestId('text_count')

		fireEvent.press(buttonPlus)

		await waitFor(() => {
			expect(spyDispatch).toHaveBeenCalledWith(increase())
			expect(textCount).toHaveTextContent(/^1$/)
			expect(store.getState().counter.value).toEqual(1)
			spyDispatch.mockClear()
		})
	})

	test('When press MINUS button should dispatch decrease action', async () => {
		const store = buildStore()
		const spyDispatch = jest.spyOn(store, 'dispatch')
		const { getByTestId } = renderScreen(store)
		const buttonMinus = getByTestId('button_minus')
		const textCount = getByTestId('text_count')

		fireEvent.press(buttonMinus)

		await waitFor(() => {
			expect(spyDispatch).toHaveBeenCalledWith(decrease())
			expect(textCount).toHaveTextContent(/^-1$/)
			expect(store.getState().counter.value).toEqual(-1)
			spyDispatch.mockClear()
		})
	})
})
