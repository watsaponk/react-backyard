import { CounterState, decrease, increase, initValue, reducer } from '../../../src/features/counter/CounterRedux'

describe('Reducer', () => {
	test('When dispatch initValue value should equal payload', () => {
		const initialState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: 2,
		}

		const newState = reducer(initialState, initValue(2))

		expect(newState).toEqual(expectedState)
	})

	test('When dispatch increase value should add by 1', () => {
		const initialState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: 1,
		}

		const newState = reducer(initialState, increase())

		expect(newState).toEqual(expectedState)
	})

	test('When dispatch decrease value should reduce by 1', () => {
		const initialState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: -1,
		}

		const newState = reducer(initialState, decrease())

		expect(newState).toEqual(expectedState)
	})
})
