import { reducer, increase, decrease, CounterState } from '../../../src/features/counter/CounterRedux'

describe('CounterReducer', () => {
	test('Receive increase action then value should increase by one', () => {
		// GIVEN
		const previouseState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: 1,
		}

		// WHEN
		const newState = reducer(previouseState, increase())

		// THEN
		expect(newState).toEqual(expectedState)
	})

	test('Receive decrease action then value should decrease by one', () => {
		// GIVEN
		const previouseState: CounterState = {
			value: 0,
		}
		const expectedState: CounterState = {
			value: -1,
		}

		// WHEN
		const newState = reducer(previouseState, decrease())

		// THEN
		expect(newState).toEqual(expectedState)
	})
})
