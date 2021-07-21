import { CounterState, decrease, increase, initValue, reducer } from '../../../src/features/counter/CounterRedux'

describe('Reducer', () => {
	test('When dispatch initValue value should equal payload', () => {
		const initialState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: 2,
		}

		const result = reducer(initialState, initValue(2))

		expect(result).toEqual(expectedState)
	})

	test('When dispatch increase value should add by 1', () => {
		const initialState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: 1,
		}

		const result = reducer(initialState, increase())

		expect(result).toEqual(expectedState)
	})

	test('When dispatch decrease value should reduce by 1', () => {
		const initialState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: -1,
		}

		const result = reducer(initialState, decrease())

		expect(result).toEqual(expectedState)
	})
})
