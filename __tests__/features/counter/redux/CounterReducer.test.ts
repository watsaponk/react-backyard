import CounterReducer, { increase, decrease } from '../../../../src/features/counter/redux/CounterReducer'

describe('CounterReducer', () => {
	test('Receive increase action then value should increase by one', () => {
		// GIVEN
		const previouseState = {
			value: 0,
		}
		const expectedState = {
			value: 1,
		}

		// WHEN
		const newState = CounterReducer(previouseState, increase())

		// THEN
		expect(newState).toEqual(expectedState)
	})

	test('Receive decrease action then value should decrease by one', () => {
		// GIVEN
		const previouseState = {
			value: 0,
		}
		const expectedState = {
			value: -1,
		}

		// WHEN
		const newState = CounterReducer(previouseState, decrease())

		// THEN
		expect(newState).toEqual(expectedState)
	})
})
