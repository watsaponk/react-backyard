import CounterReducer, { increase, decrease } from '../../../../src/features/counter/redux/CounterReducer'
import CounterState from '../../../../src/features/counter/redux/CounterState'

describe('CounterReducer', () => {
	test('Receive increase action then value should increase by one', () => {
		// GIVEN
		const previouseState: CounterState = {
			value: 0,
			magicNumber: 0,
		}
		const expectedState: CounterState = {
			value: 1,
			magicNumber: 0,
		}

		// WHEN
		const newState = CounterReducer(previouseState, increase())

		// THEN
		expect(newState).toEqual(expectedState)
	})

	test('Receive decrease action then value should decrease by one', () => {
		// GIVEN
		const previouseState: CounterState = {
			value: 0,
			magicNumber: 0,
		}
		const expectedState: CounterState = {
			value: -1,
			magicNumber: 0,
		}

		// WHEN
		const newState = CounterReducer(previouseState, decrease())

		// THEN
		expect(newState).toEqual(expectedState)
	})
})
