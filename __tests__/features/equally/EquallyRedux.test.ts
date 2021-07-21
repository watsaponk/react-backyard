import {
	EquallyState,
	initialize,
	initSuccess,
	reducer,
	updateValueSuccess,
} from '../../../src/features/equally/EquallyRedux'
import { MagicNumber } from '../../../src/features/equally/sideeffects/GetMagicNumber'

describe('Reducer', () => {
	test('When dispatch initialize, isLoading should equal true', () => {
		const initialState: EquallyState = {
			startValue: 0,
			goal: 0,
			currentValue: 0,
			isLoading: false,
		}
		const expectedState: EquallyState = {
			...initialState,
			isLoading: true,
		}

		const newState = reducer(initialState, initialize())

		expect(newState).toEqual(expectedState)
	})

	test(`When dispatch initSuccess should update state with payload`, () => {
		const initialState: EquallyState = {
			startValue: 0,
			goal: 0,
			currentValue: 0,
			isLoading: true,
		}
		const magicNumber: MagicNumber = {
			goal: 1,
			value: 2,
		}
		const expectedState: EquallyState = {
			...initialState,
			isLoading: false,
			goal: magicNumber.goal,
			startValue: magicNumber.value,
		}

		const newState = reducer(initialState, initSuccess(magicNumber))

		expect(newState).toEqual(expectedState)
	})

	test('When dispatch updateValueSuccess should update currentValue', () => {
		const initialState: EquallyState = {
			startValue: 0,
			goal: 0,
			currentValue: 0,
			isLoading: false,
		}
		const payload = 3
		const expectedState: EquallyState = {
			...initialState,
			currentValue: payload,
		}

		const newState = reducer(initialState, updateValueSuccess(payload))

		expect(newState).toEqual(expectedState)
	})
})
