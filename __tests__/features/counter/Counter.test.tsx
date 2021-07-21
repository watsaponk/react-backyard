import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { increase, decrease, reducer, CounterState, initValue } from '../../../src/features/counter/CounterRedux'
import { renderScreenWithStore, createSpyUseDispatch } from '../../TestUtil'
import Counter from '../../../src/features/counter/Counter'

const buildStore = (initialState?: CounterState) => {
	const counterReducer = combineReducers({ counter: reducer })
	return createStore(counterReducer, { counter: initialState })
}

describe('Render', () => {
	test('should display count text with state value', () => {
		const initialState: CounterState = {
			value: 1,
		}
		const store = buildStore(initialState)
		const mockOnChange = jest.fn()
		const mockDispatch = jest.fn()
		const spyUseDispatch = createSpyUseDispatch(mockDispatch)
		spyUseDispatch.mockReturnValue(mockDispatch)

		const { getByTestId } = renderScreenWithStore(store, <Counter onChange={mockOnChange} />)
		const textCount = getByTestId('text_count')

		expect(textCount).toHaveTextContent(initialState.value.toString())
		expect(mockDispatch).not.toHaveBeenCalledWith(initValue)
		expect(mockOnChange).toHaveBeenCalledWith(initialState.value)
		spyUseDispatch.mockClear()
	})
})

describe('Dispatch', () => {
	test('When set initialValue should dispatch initValue action', () => {
		const store = buildStore()
		const mockDispatch = jest.fn()
		const spyUseDispatch = createSpyUseDispatch(mockDispatch)
		spyUseDispatch.mockReturnValue(mockDispatch)

		renderScreenWithStore(store, <Counter initialValue={1} />)

		expect(mockDispatch).toHaveBeenCalledWith(initValue(1))
		spyUseDispatch.mockClear()
	})

	test('When press PLUS button should dispatch increase action', () => {
		const store = buildStore()
		const mockDispatch = jest.fn()
		const spyUseDispatch = createSpyUseDispatch(mockDispatch)
		spyUseDispatch.mockReturnValue(mockDispatch)
		const { getByTestId } = renderScreenWithStore(store, <Counter />)

		fireEvent.press(getByTestId('button_plus'))

		expect(mockDispatch).toHaveBeenCalledWith(increase())
		spyUseDispatch.mockClear()
	})

	test('When press MINUS button should dispatch decrease action', () => {
		const store = buildStore()
		const mockDispatch = jest.fn()
		const spyUseDispatch = createSpyUseDispatch(mockDispatch)
		spyUseDispatch.mockReturnValue(mockDispatch)
		const { getByTestId } = renderScreenWithStore(store, <Counter />)

		fireEvent.press(getByTestId('button_minus'))

		expect(mockDispatch).toHaveBeenCalledWith(decrease())
		spyUseDispatch.mockClear()
	})
})
